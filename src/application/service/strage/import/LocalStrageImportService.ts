import { LocalStrageImportProgressStep } from "@/domain/strage/import/LocalStrageImportProgressStep";
import { LocalStrageImportError } from "@/domain/strage/import/LocalStrageImportError";
import LocalStrageImportProgressEvent from "@/domain/strage/import/LocalStrageImportProgressEvent";
import LocalStrage from "@/domain/strage/LocalStrage";
import StrageRepository from "@/domain/strage/StrageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";

export default class LocalStrageImportService {
    constructor(
        private readonly strageRepository: StrageRepository,
        private readonly fileSystemRepository: FileSystemRepository
    ) { }

    public async importOf(
        file: File,
        notifyProgress: (event: LocalStrageImportProgressEvent) => void,
        confirmeLocalStrageName: (originalLocalStrageName: string) => string
    ): Promise<LocalStrage | null> {
        notifyProgress(this.raise(LocalStrageImportProgressStep.開始, "", file));
        try {
            const result = await this.doImport(file, notifyProgress, confirmeLocalStrageName);
            if (result) {
                notifyProgress(this.raise(LocalStrageImportProgressStep.成功, "", file));
                return result;
            }
        } catch (e) {
            notifyProgress(this.raiseError(LocalStrageImportError.予期せぬエラー, `\n  ${e}`));
        }
        notifyProgress(this.raise(LocalStrageImportProgressStep.失敗, "", file));
        return null;
    }

    private async doImport(
        file: File,
        notifyProgress: (event: LocalStrageImportProgressEvent) => void,
        confirmeLocalStrageName: (originalLocalStrageName: string) => string
    ): Promise<LocalStrage | null> {
        // TODO 本実装
/*
        notifyProgress(this.raise(LocalStrageImportProgressStep.ファイル読み込み));

        const result = this.validateOf(file);
        if (result !== LocalStrageImportError.なし) {
            notifyProgress(this.raiseError(result));
            return null;
        }

        const json = await this.fileSystemRepository.readFile(file);

        if (json === null) {
            notifyProgress(this.raiseError(LocalStrageImportError.読込失敗));
            return null;
        }
        const jsonText = json as string;

        let product = this.strageRepository.createLocalStrageByJsonOf(jsonText);

        notifyProgress(this.raise(LocalStrageImportProgressStep.形式チェック));

        if (product.name.trim().length === 0) {
            notifyProgress(this.raiseError(LocalStrageImportError.プロダクト名不明));
            return null;
        }

        const strage = this.strageRepository.get() as LocalStrage;

        if (strage.existsLocalStrageNameOf(product.name)) {
            const newName = confirmeLocalStrageName(product.name);
            if (newName === "") {
                notifyProgress(this.raise(LocalStrageImportProgressStep.キャンセル));
                return null;
            }

            product = product.renameOf(newName.trim());
        }

        notifyProgress(this.raise(LocalStrageImportProgressStep.追加));

        const updatedStrage = strage.mergeByLocalStrageName(product);

        notifyProgress(this.raise(LocalStrageImportProgressStep.保存));

        this.strageRepository.register(updatedStrage);

        notifyProgress(this.raise(LocalStrageImportProgressStep.完了, `product name: "${product.name}"`));

        return product;
*/
        return null;
    }

    private raise(step: LocalStrageImportProgressStep, message: string = "", file?: File): LocalStrageImportProgressEvent {
        const fileCaption = file ? `file: "${file.name}"` : "";
        return new LocalStrageImportProgressEvent(
            step,
            LocalStrageImportError.なし,
            message + fileCaption
        );
    }

    private raiseError(error: LocalStrageImportError, message: string = ""): LocalStrageImportProgressEvent {
        return new LocalStrageImportProgressEvent(
            LocalStrageImportProgressStep.エラー,
            error,
            message
        );
    }

    public validateOf(file: File): LocalStrageImportError {
        const MAX_MB = 100 * 1024 * 1024;
        const NAME_PATTERN = /^rdram-product-.*\.json$/;

        if (!file) return LocalStrageImportError.なし;
        if (!NAME_PATTERN.test(file.name)) return LocalStrageImportError.ファイル名不正;
        if (file.size > MAX_MB) return LocalStrageImportError.サイズ超過;
        if (!this.fileSystemRepository.isJsonFile(file)) return LocalStrageImportError.非JSON形式;

        return LocalStrageImportError.なし;
    }

    public hitCurrentLocalStrageOf(productIds: string[]): boolean {
        const currentLocalStrage = this.strageRepository.getCurrentLocalStrage();
        if (!currentLocalStrage) return false;
        return productIds.includes(currentLocalStrage.id);
    }
}