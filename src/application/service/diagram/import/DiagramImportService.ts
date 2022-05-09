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

        const arrangedDiagram = this.fixDiagramAndResourcesOf(maybeDiagram, confirmeUserArrange, product);
        if (arrangedDiagram === null) {
            notifyProgress(this.raise(DiagramImportProgressStep.キャンセル));
            return null;
        }

        notifyProgress(this.raise(DiagramImportProgressStep.追加));

        const fixDiagram = arrangedDiagram.diagram;
        // TODO めちゃくちゃ煩雑なので「Resoucesへマージする」ロジックは整理する。
        const fixedResources = arrangedDiagram.useResources
            .map(r => r)
            .reduce(
                (resources, resouce) => resources.add(resouce),
                product.resources
            );
        const updatedProduct = product!.meageDiagramOf(fixDiagram)
            .withResources(fixedResources);

        notifyProgress(this.raise(DiagramImportProgressStep.保存));

        this.storageRepository.registerCurrentProduct(updatedProduct);

        notifyProgress(this.raise(DiagramImportProgressStep.完了, `Diagram name: "${fixDiagram.name}"`));

        return fixDiagram;
    }

    private fixDiagramAndResourcesOf(maybeDiagram: ExportedDiagram,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagramSetting) => UserArrangeOfImportDiagramSetting,
        product: Product
    ): ExportedDiagram | null {
        const diagram = maybeDiagram.diagram;

        const existsDiagram = product.diagrams
            .existsSameOf(diagram);
        const colidedName = existsDiagram
            ? NameOfColided.prototypeDiagramOf(diagram)
            : null;

        const allResources = product.resources;
        const useResources = maybeDiagram.useResources;
        const sameResources = useResources
            .filter(r => allResources.existsSameOf(r))
            .map(r => NameOfColided.prototypeResourceOf(r));

        const colidedNames = new UserArrangeOfImportDiagramSetting(diagram.name, colidedName, sameResources);
        if (colidedNames.isEmpty()) return maybeDiagram;

        const userArrange = confirmeUserArrange(colidedNames);
        if (userArrange.isEmpty()) return null;

        // TODO ユーザ側に「どういうふうに処理します？」な処理を実装。以下はすべて仮実装。

        let modifiedProduct = product;
        let modifiedDiagram = maybeDiagram.replaceUniqueResourceIds();

        for (const colidedResourceName of userArrange.resourceNamesOfColided) {
            const targetResouce = modifiedDiagram.useResources.of(colidedResourceName.sourceId) as Resource;
            const sameResource = product.resources.getSameOf(targetResouce) as Resource;

            const behavior = colidedResourceName.behavior;
            if (behavior === BehaviorWhenNameColide.既存) {
                // TODO インポート側のDiagramの中のPlacementのIDを、同名のResourceのものに置換
                // TODO インポート側のResourcesから、同名のResourceを削除
                modifiedDiagram = modifiedDiagram.replaceAndRemoveSameResouceOF(sameResource);
            }
            if (behavior === BehaviorWhenNameColide.置換) {
                // TODO Product側から、同名のResourceを取得
                // TODO インポート側のResourcesから、同名のResourceを取得、そのIdを既存のものに置換
                // TODO インポート側のDiagramの中のPlacementのIDを、同名のResourceのものに置換
                // TODO Product側の同名のResourceを、インポート側のResourceに置換
            }
            if (behavior === BehaviorWhenNameColide.別名) {
                // TODO インポート側のResourceの名前を置換
                // TODO インポート側のResourceにProduct側から「新しいResourceID」を発行してもらい、置換する
                // TODO インポート側のDiagramの中のPlacementのIDを、新しいResourceIDに置換
                // TODO Product側に、インポート側のResourceを追加
            }
        }

        if (userArrange.isColidedDiagramName()) {
            const colidedDiagramName = userArrange.diagramNamesOfColided as NameOfColided;
            if (colidedDiagramName.behavior === BehaviorWhenNameColide.既存) return null;
            const fixedDiagram = colidedDiagramName.behavior === BehaviorWhenNameColide.別名
                ? diagram.renameOf(colidedDiagramName.destinationName)
                : diagram;
            modifiedProduct = modifiedProduct.addOrReplaceSameDiagramOf(fixedDiagram);
        }

        console.log('debug-productの状況', modifiedProduct);

        return maybeDiagram;
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
