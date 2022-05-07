import StorageRepository from "@/domain/storage/StorageRepository";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import RdramExportFile from "@/domain/client/export/RdramExportFile";
import RdramProductExportFileName from "@/domain/product/export/RdramProductExportFileName";

export default class ProductExportService {
    constructor(
        private readonly storageRepository: StorageRepository,
        private readonly clientDownloadRepository: ClientDownloadRepository
    ) { }

    public downloadExportFileOnClient(productId: string): boolean {
        const file = this.makeExportFileOf(productId);
        if (!file) return false;

        this.clientDownloadRepository.register(file);
        return true;
    }

    private makeExportFileOf(productId: string): RdramExportFile | null {
        const storage = this.storageRepository.get();
        const product = storage?.products.of(productId);
        if (!product) return null;

        const productJson = this.storageRepository.getProductJsonTextOf(productId);
        if (!productJson) return null;

        const fileName = new RdramProductExportFileName(product.name);
        return new RdramExportFile(productJson, fileName);
    }
}