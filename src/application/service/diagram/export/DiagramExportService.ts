import StorageRepository from "@/domain/storage/StorageRepository";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import RdramExportFile from "@/domain/client/export/RdramExportFile";
import RdramDiagramExportFileName from "@/domain/diagram/export/RdramDiagramExportFileName";
import ExportedDiagram from "@/domain/diagram/export/ExportedDiagram";
import ExportedResource from "@/domain/resource/export/ExportedResource";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";

export default class DiagramExportService {
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

        const exported = this.makeExportDiagram(diagram, product);

        const diagramJson = this.storageRepository.getDiagramJsonTextOf(exported);
        if (!diagramJson) return null;

        const fileName = RdramDiagramExportFileName.of(diagram);
        return new RdramExportFile(diagramJson, fileName);
    }

    private makeExportDiagram(diagram: Diagram, product: Product): ExportedDiagram {
        const useResourceIds = diagram.placements
            .map(placement => placement.resourceId);
        const useResources = product.resources
            .filter(resource => useResourceIds.includes(resource.resourceId))
            .map(resource => new ExportedResource(resource));
        return new ExportedDiagram(diagram, useResources);
    }
}
