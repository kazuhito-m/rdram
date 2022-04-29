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

        const result = this.validateOf(file);
        if (result !== LocalStorageImportError.なし) {
            notifyProgress(this.raiseError(result));
            return null;
        }

        const json = await this.fileSystemRepository.readFile(file);

        if (json === null) {
            notifyProgress(this.raiseError(LocalStorageImportError.読込失敗));
            return null;
        }
        const jsonText = json as string;

        // TODO 本実装
/*
        let product = this.storageRepository.createLocalStorageByJsonOf(jsonText);

        notifyProgress(this.raise(LocalStorageImportProgressStep.形式チェック));

        if (product.name.trim().length === 0) {
            notifyProgress(this.raiseError(LocalStorageImportError.プロダクト名不明));
            return null;
        }

        const storage = this.storageRepository.get() as LocalStorage;

        if (storage.existsLocalStorageNameOf(product.name)) {
            const newName = confirmeLocalStorageName(product.name);
            if (newName === "") {
                notifyProgress(this.raise(LocalStorageImportProgressStep.キャンセル));
                return null;
            }

            product = product.renameOf(newName.trim());
        }

        notifyProgress(this.raise(LocalStorageImportProgressStep.追加));

        const updatedStorage = storage.mergeByLocalStorageName(product);

        notifyProgress(this.raise(LocalStorageImportProgressStep.保存));

        this.storageRepository.register(updatedStorage);

        notifyProgress(this.raise(LocalStorageImportProgressStep.完了, `product name: "${product.name}"`));

        return product;
*/
        return null;
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

    public validateOf(file: File): LocalStorageImportError {
        const MAX_MB = 100 * 1024 * 1024;

        if (!file) return LocalStorageImportError.なし;
        if (!RdramLocalStorageExportFileName.isApplicableOf(file.name)) return LocalStorageImportError.ファイル名不正;
        if (file.size > MAX_MB) return LocalStorageImportError.サイズ超過;
        if (!this.fileSystemRepository.isJsonFile(file)) return LocalStorageImportError.非JSON形式;

        return LocalStorageImportError.なし;
    }
}
