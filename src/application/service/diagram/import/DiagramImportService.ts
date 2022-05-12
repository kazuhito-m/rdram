import { DiagramImportProgressStep } from "@/domain/diagram/import/DiagramImportProgressStep";
import { DiagramImportError } from "@/domain/diagram/import/DiagramImportError";
import DiagramImportProgressEvent from "@/domain/diagram/import/DiagramImportProgressEvent";
import StorageRepository from "@/domain/storage/StorageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import RdramDiagramExportFileName from "@/domain/diagram/export/RdramDiagramExportFileName";
import ExportedDiagram from "@/domain/diagram/export/ExportedDiagram";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import UserArrangeOfImportDiagramSetting from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagramSetting";
import NameOfColided from "@/domain/diagram/import/userarrange/NameOfColided";
import { BehaviorWhenNameColide } from "@/domain/diagram/import/userarrange/BehavioWhenNameColide";
import Resource from "~/domain/resource/Resource";
import ExportedResource from "~/domain/resource/export/ExportedResource";

export default class DiagramImportService {
    constructor(
        private readonly storageRepository: StorageRepository,
        private readonly fileSystemRepository: FileSystemRepository
    ) { }

    public async importOf(
        file: File,
        notifyProgress: (event: DiagramImportProgressEvent) => void,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagramSetting) => UserArrangeOfImportDiagramSetting,
    ): Promise<Diagram | null> {
        notifyProgress(this.raise(DiagramImportProgressStep.開始, "", file));
        try {
            const result = await this.doImport(file, notifyProgress, confirmeUserArrange);
            if (result) {
                notifyProgress(this.raise(DiagramImportProgressStep.成功, "", file));
                return result;
            }
        } catch (e) {
            console.log("予期せぬエラー", e);
            notifyProgress(this.raiseError(DiagramImportError.予期せぬエラー, `\n  ${e}`));
        }
        notifyProgress(this.raise(DiagramImportProgressStep.失敗, "", file));
        return null;
    }

    private async doImport(
        file: File,
        notifyProgress: (event: DiagramImportProgressEvent) => void,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagramSetting) => UserArrangeOfImportDiagramSetting
    ): Promise<Diagram | null> {
        notifyProgress(this.raise(DiagramImportProgressStep.ファイル読み込み));

        const result = await this.validateOf(file);
        if (result !== DiagramImportError.なし) {
            notifyProgress(this.raiseError(result));
            return null;
        }

        const jsonText = await this.fileSystemRepository.readFile(file) as string;
        const maybeDiagram: ExportedDiagram = this.storageRepository.createDiagramByJsonOf(jsonText);

        notifyProgress(this.raise(DiagramImportProgressStep.形式チェック));

        if (!maybeDiagram.checkOfLogicalStructure()) {
            notifyProgress(this.raiseError(DiagramImportError.形式or構造が不正));
            return null;
        }

        const product = this.storageRepository.getCurrentProduct() as Product;

        const updatedProduct = this.fixDiagramAndResourcesOf(maybeDiagram, confirmeUserArrange, product);
        if (updatedProduct === null) {
            notifyProgress(this.raise(DiagramImportProgressStep.キャンセル));
            return null;
        }

        notifyProgress(this.raise(DiagramImportProgressStep.追加));

        // TODO 整理して「Productへの反映」だけをここでやるように。

        notifyProgress(this.raise(DiagramImportProgressStep.保存));

        this.storageRepository.registerCurrentProduct(updatedProduct);

        // TODO Diagram名は、あとで埋める
        // notifyProgress(this.raise(DiagramImportProgressStep.完了, `Diagram name: "${fixDiagram.name}"`));
        notifyProgress(this.raise(DiagramImportProgressStep.完了, `Diagram name: "仮"`));

        // TODO 本当に置き換えたものを返す。
        // return fixDiagram;
        return maybeDiagram.diagram;
    }

    private fixDiagramAndResourcesOf(maybeDiagram: ExportedDiagram,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagramSetting) => UserArrangeOfImportDiagramSetting,
        product: Product
    ): Product | null {
        let modifiedDiagram = maybeDiagram.replaceUniqueResourceIds();
        const diagram = modifiedDiagram.diagram;

        const existsDiagram = product.diagrams
            .existsSameOf(diagram);
        const colidedName = existsDiagram
            ? NameOfColided.prototypeDiagramOf(diagram)
            : null;

        const allResources = product.resources;
        const sameResources = modifiedDiagram.useResources()
            .filter(r => allResources.existsSameOf(r))
            .map(r => NameOfColided.prototypeResourceOf(r));

        const colidedNames = new UserArrangeOfImportDiagramSetting(diagram.name, colidedName, sameResources);
        let userArrange = colidedNames;
        if (!colidedNames.isEmpty()) {
            userArrange = confirmeUserArrange(colidedNames);
            if (userArrange.isEmpty()) return null;
        }

        // TODO ユーザ側に「どういうふうに処理します？」な処理を実装。以下はすべて仮実装。

        for (const colidedResourceName of userArrange.resourceNamesOfColided) {
            const targetResouce = modifiedDiagram.useResources().of(colidedResourceName.sourceId) as Resource;
            const sameResource = product.resources.getSameOf(targetResouce) as Resource;

            const behavior = colidedResourceName.behavior;
            if (behavior === BehaviorWhenNameColide.既存) {
                const replacedDiagram = modifiedDiagram.diagram.replaceOf(targetResouce, sameResource);
                const removedResources = modifiedDiagram.useResources()
                    .filter(r => r.resourceId !== targetResouce.resourceId)
                    .map(r => new ExportedResource(r));
                modifiedDiagram = new ExportedDiagram(replacedDiagram, removedResources);
            }
            if (behavior === BehaviorWhenNameColide.置換) {
                const replacedIdResource = targetResouce.renewId(sameResource.resourceId);
                const replacedExportedResources = modifiedDiagram.useResources()
                    .remove(targetResouce)
                    .add(replacedIdResource)
                    .map(r => new ExportedResource(r));
                const replacedDiagram = modifiedDiagram.diagram
                    .replaceOf(targetResouce, replacedIdResource);
                modifiedDiagram = new ExportedDiagram(replacedDiagram, replacedExportedResources);
            }
            if (behavior === BehaviorWhenNameColide.別名) {
                const renamedResource = targetResouce
                    .withName(colidedResourceName.destinationName);
                const replacedExportedResources = modifiedDiagram.useResources()
                    .remove(targetResouce)
                    .add(renamedResource)
                    .map(r => new ExportedResource(r));
                modifiedDiagram = new ExportedDiagram(modifiedDiagram.diagram, replacedExportedResources);
            }
        }

        if (userArrange.isColidedDiagramName()) {
            const colidedDiagramName = userArrange.diagramNamesOfColided as NameOfColided;
            if (colidedDiagramName.behavior === BehaviorWhenNameColide.既存) return null; // 入力からは入ってこない前提。「既存」というなら「Importしない」と同義。
            if (colidedDiagramName.behavior === BehaviorWhenNameColide.別名) {
                const renamedDiagram = modifiedDiagram.diagram
                    .renameOf(colidedDiagramName.destinationName)
                modifiedDiagram = new ExportedDiagram(renamedDiagram, modifiedDiagram.useResources().map(r => new ExportedResource(r)));
            }
        }

        let modifiedProduct = product;
        let fixedDiagram = modifiedDiagram.diagram;
        // TODO めちゃくちゃ煩雑なので「Resoucesへマージする」ロジックは整理する。

        const fixedResources = modifiedDiagram.useResources()
            .map(r => {
                if (r.resourceId > 0) return r;
                const reIdResource = r.renewId(modifiedProduct.resourceIdSequence);
                modifiedProduct = modifiedProduct.moveNextResourceIdSequence();

                fixedDiagram = fixedDiagram.replaceOf(r, reIdResource);

                return reIdResource;
            })
            .reduce(
                (resources, resouce) => resources.mergeByIdOf(resouce),
                modifiedProduct.resources
            );

        return modifiedProduct.withResources(fixedResources)
            .mergeDiagramWhenSameOf(fixedDiagram);
    }

    // private mergeOf(modifiedDiagram: ExportedDiagram, product: Product): Product {
    // }

    private raise(step: DiagramImportProgressStep, message: string = "", file?: File): DiagramImportProgressEvent {
        const fileCaption = file ? `file: "${file.name}"` : "";
        return new DiagramImportProgressEvent(
            step,
            DiagramImportError.なし,
            message + fileCaption
        );
    }

    private raiseError(error: DiagramImportError, message: string = ""): DiagramImportProgressEvent {
        return new DiagramImportProgressEvent(
            DiagramImportProgressStep.エラー,
            error,
            message
        );
    }

    public async validateOf(file: File): Promise<DiagramImportError> {
        const MAX_MB = 100 * 1024 * 1024;

        if (!file) return DiagramImportError.なし;
        if (!RdramDiagramExportFileName.isApplicableOf(file.name)) return DiagramImportError.ファイル名不正;
        if (file.size > MAX_MB) return DiagramImportError.サイズ超過;
        const text = await this.fileSystemRepository.readFile(file);
        if (text === null) return DiagramImportError.読込失敗;
        const isJson = await this.fileSystemRepository.isJsonFile(file);
        if (!isJson) return DiagramImportError.非JSON形式;

        return DiagramImportError.なし;
    }
}
