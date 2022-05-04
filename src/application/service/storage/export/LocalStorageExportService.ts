import StorageRepository from "@/domain/storage/StorageRepository";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import RdramLocalStorageExportFileName from "@/domain/storage/export/RdramLocalStorageExportFileName";
import RdramExportFile from "@/domain/client/export/RdramExportFile";

export default class LocalStorageExportService {
    constructor(
        private readonly storageRepository: StorageRepository,
        private readonly clientDownloadRepository: ClientDownloadRepository
    ) { }

    public downloadExportFileOnClient(): boolean {
        const file = this.makeExportFile();
        if (!file) return false;
        this.downloadOnClientOf(file);
        return true;
    }

    public makeExportFile(): RdramExportFile | null {
        const json = this.storageRepository.getJsonText();
        if (!json) return null;
        return new RdramExportFile(json, new RdramLocalStorageExportFileName());
    }

    public downloadOnClientOf(file: RdramExportFile) {
        this.clientDownloadRepository.register(file);
    }

    public destroyLocalStorage(): void {
        this.storageRepository.destroy();
    }
}
