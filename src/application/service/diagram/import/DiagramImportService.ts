import { DiagramImportProgressStep } from "@/domain/diagram/import/progress/DiagramImportProgressStep";
import { DiagramImportError } from "~/domain/diagram/import/progress/DiagramImportError";
import DiagramImportProgressEvent from "@/domain/diagram/import/progress/DiagramImportProgressEvent";
import StorageRepository from "@/domain/storage/StorageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import RdramDiagramExportFileName from "@/domain/diagram/export/RdramDiagramExportFileName";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import UserArrangeOfImportDiagramSetting from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagramSetting";
import NameOfColided from "@/domain/diagram/import/userarrange/NameOfColided";
import { BehaviorWhenNameColide } from "@/domain/diagram/import/userarrange/BehavioWhenNameColide";
import Resource from "~/domain/resource/Resource";
import MaybeImportDiagram from "~/domain/diagram/import/MaybeImportDiagram";
import ImportDiagramCandidate from "~/domain/diagram/import/ImportDiagramCandidate";

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
        const exported = this.storageRepository.createDiagramByJsonOf(jsonText);

        notifyProgress(this.raise(DiagramImportProgressStep.形式チェック));

        const maybeImport = MaybeImportDiagram.of(exported);
        if (!maybeImport || !maybeImport.checkOfLogicalStructure()) {
            notifyProgress(this.raiseError(DiagramImportError.形式or構造が不正));
            return null;
        }

        notifyProgress(this.raise(DiagramImportProgressStep.ユーザーアレンジ));

        const product = this.storageRepository.getCurrentProduct() as Product;
        const importCandidate = maybeImport.toCandidate();

        const arrangedImport = this.reflectUserArrangeOf(importCandidate, confirmeUserArrange, product);
        if (!arrangedImport) {
            notifyProgress(this.raise(DiagramImportProgressStep.キャンセル));
            return null;
        }

        notifyProgress(this.raise(DiagramImportProgressStep.追加));

        const updatedProduct = this.mergeOf(arrangedImport, product);

        notifyProgress(this.raise(DiagramImportProgressStep.保存));

        this.storageRepository.registerCurrentProduct(updatedProduct);

        notifyProgress(this.raise(DiagramImportProgressStep.完了, `Diagram name: "${arrangedImport.diagram.name}"`));

        return arrangedImport.diagram;
    }

    private reflectUserArrangeOf(
        candidate: ImportDiagramCandidate,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagramSetting) => UserArrangeOfImportDiagramSetting,
        product: Product
    ): ImportDiagramCandidate | null {
        const colidedNames = this.analyzeColideNameOf(candidate, product);

        let userArrange = colidedNames;
        if (!colidedNames.isEmpty()) {
            userArrange = confirmeUserArrange(colidedNames);
            if (userArrange.isEmpty()) return null;
        }

        return this.arrangeImportDiagram(userArrange, candidate, product);
    }

    private analyzeColideNameOf(candidate: ImportDiagramCandidate, product: Product): UserArrangeOfImportDiagramSetting {
        const diagram = candidate.diagram;

        const existsDiagram = product.diagrams
            .existsSameOf(diagram);
        const colidedName = existsDiagram
            ? NameOfColided.prototypeDiagramOf(diagram)
            : null;

        const allResources = product.resources;
        const sameResources = candidate.useResources
            .filter(r => allResources.existsSameOf(r))
            .map(r => NameOfColided.prototypeResourceOf(r));

        return new UserArrangeOfImportDiagramSetting(diagram.name, colidedName, sameResources);
    }

    private arrangeImportDiagram(
        userArrange: UserArrangeOfImportDiagramSetting,
        candidate: ImportDiagramCandidate,
        product: Product
    ): ImportDiagramCandidate | null {
        let modified = candidate;

        for (const colidedResourceName of userArrange.resourceNamesOfColided) {
            const targetResouce = modified.useResources
                .find(r => r.resourceId === colidedResourceName.sourceId) as Resource;
            const sameResource = product.resources.getSameOf(targetResouce) as Resource;

            const behavior = colidedResourceName.behavior;
            if (behavior === BehaviorWhenNameColide.既存) {
                const replacedDiagram = modified.diagram.replaceOf(targetResouce, sameResource);
                const removedResources = modified.useResources
                    .filter(r => r.resourceId !== targetResouce.resourceId);
                modified = new ImportDiagramCandidate(replacedDiagram, removedResources);
            }
            if (behavior === BehaviorWhenNameColide.置換) {
                const replacedIdResource = targetResouce.renewId(sameResource.resourceId);
                let replacedExportedResources = modified.useResources
                    .filter(r => r.resourceId !== targetResouce.resourceId);
                replacedExportedResources.push(replacedIdResource);
                const replacedDiagram = modified.diagram
                    .replaceOf(targetResouce, replacedIdResource);
                modified = new ImportDiagramCandidate(replacedDiagram, replacedExportedResources);
            }
            if (behavior === BehaviorWhenNameColide.別名) {
                const renamedResource = targetResouce
                    .withName(colidedResourceName.destinationName);
                let replacedExportedResources = modified.useResources
                    .filter(r => r.resourceId !== targetResouce.resourceId);
                replacedExportedResources.push(renamedResource);
                modified = new ImportDiagramCandidate(modified.diagram, replacedExportedResources);
            }
        }

        if (userArrange.isColidedDiagramName()) {
            const colidedDiagramName = userArrange.diagramNamesOfColided as NameOfColided;
            if (colidedDiagramName.behavior === BehaviorWhenNameColide.既存) return null; // 入力からは入ってこない前提。「既存」というなら「Importしない」と同義。
            if (colidedDiagramName.behavior === BehaviorWhenNameColide.別名) {
                const renamedDiagram = modified.diagram
                    .renameOf(colidedDiagramName.destinationName)
                modified = new ImportDiagramCandidate(renamedDiagram, modified.useResources);
            }
        }

        return modified;
    }

    private mergeOf(candidate: ImportDiagramCandidate, product: Product): Product {
        let modifiedProduct = product;
        let fixedDiagram = candidate.diagram;
        // TODO めちゃくちゃ煩雑なので「Resoucesへマージする」ロジックは整理する。

        const fixedResources = candidate.useResources
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
