import { DiagramImportProgressStep } from "@/domain/diagram/import/progress/DiagramImportProgressStep";
import { DiagramImportError } from "@/domain/diagram/import/progress/DiagramImportError";
import DiagramImportProgressEvent from "@/domain/diagram/import/progress/DiagramImportProgressEvent";
import StorageRepository from "@/domain/storage/StorageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import RdramDiagramExportFileName from "@/domain/diagram/export/RdramDiagramExportFileName";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import UserArrangeOfImportDiagram from "~/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";
import MaybeImportDiagram from "@/domain/diagram/import/MaybeImportDiagram";
import ImportDiagramCandidate from "@/domain/diagram/import/ImportDiagramCandidate";
import NameConflictAnalyzer from "@/domain/diagram/import/conflictname/NameConflictAnalyzer";
import ImportDiagramArranger from "@/domain/diagram/import/userarrange/ImportDiagramArranger";

export default class DiagramImportService {
    constructor(
        private readonly storageRepository: StorageRepository,
        private readonly fileSystemRepository: FileSystemRepository
    ) { }

    public async importOf(
        file: File,
        notifyProgress: (event: DiagramImportProgressEvent) => void,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagram) => Promise<UserArrangeOfImportDiagram>,
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
        confirmeUserArrange: (settings: UserArrangeOfImportDiagram) => Promise<UserArrangeOfImportDiagram>
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

        const arrangedImport = await this.reflectUserArrangeOf(importCandidate, confirmeUserArrange, product);
        if (!arrangedImport) {
            notifyProgress(this.raise(DiagramImportProgressStep.キャンセル));
            return null;
        }

        notifyProgress(this.raise(DiagramImportProgressStep.追加));

        const updatedProduct = arrangedImport.mergeOf(product);

        notifyProgress(this.raise(DiagramImportProgressStep.保存));

        this.storageRepository.registerCurrentProduct(updatedProduct);
        const importedDiagram =  updatedProduct.diagrams.sameOf(arrangedImport.diagram) as Diagram;

        notifyProgress(this.raise(DiagramImportProgressStep.完了, `Diagram name: "${importedDiagram.name}"`));

        return importedDiagram;
    }

    private async reflectUserArrangeOf(
        candidate: ImportDiagramCandidate,
        confirmeUserArrange: (settings: UserArrangeOfImportDiagram) => Promise<UserArrangeOfImportDiagram>,
        product: Product
    ): Promise<ImportDiagramCandidate | null> {
        const analyzer = new NameConflictAnalyzer();
        const confrictNames = analyzer.analyzeOf(candidate, product);
        if (confrictNames.isEmpty()) return candidate;

        const userArrange =  await confirmeUserArrange(confrictNames);
        if (userArrange.isEmpty()) return null;

        const arranger = new ImportDiagramArranger();
        return arranger.arrangeOf(userArrange, candidate, product);
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
