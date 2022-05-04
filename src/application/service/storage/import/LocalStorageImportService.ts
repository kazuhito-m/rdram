import { LocalStorageImportProgressStep } from "@/domain/storage/import/LocalStorageImportProgressStep";
import { LocalStorageImportError } from "@/domain/storage/import/LocalStorageImportError";
import LocalStorageImportProgressEvent from "@/domain/storage/import/LocalStorageImportProgressEvent";
import LocalStorage from "@/domain/storage/LocalStorage";
import StorageRepository from "@/domain/storage/StorageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import RdramLocalStorageExportFileName from "@/domain/storage/export/RdramLocalStorageExportFileName";

export default class LocalStorageImportService {
    constructor(
        private readonly storageRepository: StorageRepository,
        private readonly fileSystemRepository: FileSystemRepository
    ) { }

    public async importOf(
        file: File,
        notifyProgress: (event: LocalStorageImportProgressEvent) => void
    ): Promise<LocalStorage | null> {
        notifyProgress(this.raise(LocalStorageImportProgressStep.開始, "", file));
        try {
            const result = await this.doImport(file, notifyProgress);
            if (result) {
                notifyProgress(this.raise(LocalStorageImportProgressStep.成功, "", file));
                return result;
            }
        } catch (e) {
            notifyProgress(this.raiseError(LocalStorageImportError.予期せぬエラー, `\n  ${e}`));
        }
        notifyProgress(this.raise(LocalStorageImportProgressStep.失敗, "", file));
        return null;
    }

    private async doImport(
        file: File,
        notifyProgress: (event: LocalStorageImportProgressEvent) => void
    ): Promise<LocalStorage | null> {
        notifyProgress(this.raise(LocalStorageImportProgressStep.ファイル読み込み));

        const result = await this.validateOf(file);
        if (result !== LocalStorageImportError.なし) {
            notifyProgress(this.raiseError(result));
            return null;
        }

        const jsonText = await this.fileSystemRepository.readFile(file) as string;
        const strage = this.storageRepository.createLocalStorageByJsonOf(jsonText) as LocalStorage;

        notifyProgress(this.raise(LocalStorageImportProgressStep.形式チェック));

        if (!this.checkLogicalStructure(strage)) {
            notifyProgress(this.raiseError(LocalStorageImportError.形式or構造が不正));
            return null;
        }

        notifyProgress(this.raise(LocalStorageImportProgressStep.保存));

        this.storageRepository.register(strage);

        notifyProgress(this.raise(LocalStorageImportProgressStep.完了,
            `置き換えたLocalStrageは "${strage.updateAt}" 当時に出力されたものです。`));

        return strage;
    }

    private checkLogicalStructure(strage: LocalStorage): boolean {
        return !(
            !strage.updateAt
            || !strage.status
            || !strage.status["currentProductId"]
            || !strage.products
            || !strage.products["values"]
        );
    }

    private raise(step: LocalStorageImportProgressStep, message: string = "", file?: File): LocalStorageImportProgressEvent {
        const fileCaption = file ? `file: "${file.name}"` : "";
        return new LocalStorageImportProgressEvent(
            step,
            LocalStorageImportError.なし,
            message + fileCaption
        );
    }

    private raiseError(error: LocalStorageImportError, message: string = ""): LocalStorageImportProgressEvent {
        return new LocalStorageImportProgressEvent(
            LocalStorageImportProgressStep.エラー,
            error,
            message
        );
    }

    public async validateOf(file: File): Promise<LocalStorageImportError> {
        const MAX_MB = 100 * 1024 * 1024;

        if (!file) return LocalStorageImportError.なし;
        if (!RdramLocalStorageExportFileName.isApplicableOf(file.name)) return LocalStorageImportError.ファイル名不正;
        if (file.size > MAX_MB) return LocalStorageImportError.サイズ超過;
        const text = await this.fileSystemRepository.readFile(file);
        if (text === null) return LocalStorageImportError.読込失敗;
        const isJson = await this.fileSystemRepository.isJsonFile(file);
        if (!isJson) return LocalStorageImportError.非JSON形式;

        return LocalStorageImportError.なし;
    }
}
