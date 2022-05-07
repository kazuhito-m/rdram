import { DiagramImportProgressStep } from "@/domain/diagram/import/DiagramImportProgressStep";
import { DiagramImportError } from "@/domain/diagram/import/DiagramImportError";
import DiagramImportProgressEvent from "@/domain/diagram/import/DiagramImportProgressEvent";
import StorageRepository from "@/domain/storage/StorageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import RdramDiagramExportFileName from "@/domain/diagram/export/RdramDiagramExportFileName";
import ExportedDiagram from "@/domain/diagram/export/ExportedDiagram";
import Diagram from "@/domain/diagram/Diagram";
import Product from "~/domain/product/Product";
import UserArrangeOfImportDiagramSetting from "~/domain/diagram/import/UserArrangeOfImportDiagramSetting";

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

        const fixDiagram = arrangedDiagram.fixedDiagram()
        // TODO めちゃくちゃ煩雑なので「Resoucesへマージする」ロジックは整理する。
        const fixedResources = arrangedDiagram.fixedResources()
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
        // TODO ユーザ側に「どういうふうに処理します？」な処理を実装。以下はすべて仮実装。
        confirmeUserArrange(new UserArrangeOfImportDiagramSetting());
        console.log(`diagrams:${product.diagrams.length}, resources:${product.resources.length}`);
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
