import StorageRepository from "@/domain/storage/StorageRepository";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import RdramExportFile from "@/domain/client/export/RdramExportFile";
import ExportedDiagram from "@/domain/diagram/export/ExportedDiagram";
import RdramDiagramExportFileName from "~/domain/diagram/export/RdramDiagramExportFileName";

export default class ProductExportService {
    constructor(
        private readonly storageRepository: StorageRepository,
        private readonly clientDownloadRepository: ClientDownloadRepository
    ) { }

    public downloadExportFileOnClient(diagramId: number): boolean {
        const file = this.makeExportFileOf(diagramId);
        if (!file) return false;

        this.clientDownloadRepository.register(file);
        return true;
    }

    private makeExportFileOf(diagramId: number): RdramExportFile | null {
        const storage = this.storageRepository.get();
        const product = storage?.currentProduct();
        if (!product) return null;
        const diagram = product.diagrams.of(diagramId);
        if (!diagram) return null;

        // TODO 中身を作る実装。
        const exported = new ExportedDiagram(diagram, []);

        const diagramJson = this.storageRepository.getDiagramJsonTextOf(exported);
        if (!diagramJson) return null;

        const fileName = RdramDiagramExportFileName.of(diagram);
        return new RdramExportFile(diagramJson, fileName);
    }
}
