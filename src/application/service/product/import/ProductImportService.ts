import ImportProgressEvent from "@/domain/product/import/ImportProgressEvent";
import LocalStrage from "@/domain/strage/LocalStrage";
import StrageRepository from "@/domain/strage/StrageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";

export default class ProductImportService {
    constructor(
        private readonly strageRepository: StrageRepository,
        private readonly fileSystemRepository: FileSystemRepository
    ) { }

    private static readonly PROGRESS_END_STEP = 6;

    public async importOf(
        file: File,
        notifyProgress: (event: ImportProgressEvent) => void,
        confirmeProductName: (originalProductName: string) => string
    ): Promise<boolean> {
        notifyProgress(this.raise(1, "インポートを開始します。", file));
        try {
            const result = await this.doImport(file, notifyProgress, confirmeProductName);
            if (result) {
                notifyProgress(this.raise(ProductImportService.PROGRESS_END_STEP, "インポートが成功しました。", file));
                return true;
            }
            return result;
        } catch (e) {
            notifyProgress(this.raise(0, `予期せぬエラーが発生しました。\n  ${e}`));
        }
        notifyProgress(this.raise(0, "インポートが失敗しました。", file));
        return false;
    }

    private async doImport(
        file: File,
        notifyProgress: (event: ImportProgressEvent) => void,
        confirmeProductName: (originalProductName: string) => string
    ): Promise<boolean> {
        let step = 1;

        notifyProgress(this.raise(++step, "ファイルの読み込み。"));

        const result = this.validateOf(file);
        if (result.length > 0) {
            notifyProgress(this.raise(++step, result));
            notifyProgress(this.raise(0, "インポートが失敗しました。", file));
            return false;
        }

        const json = await this.fileSystemRepository.readFile(file);

        if (json === null) {
            notifyProgress(this.raise(++step, "ローカルファイルの読み込みに失敗しました。"));
            notifyProgress(this.raise(0, "インポートが失敗しました。", file));
            return false;
        }
        const jsonText = json as string;

        let product = this.strageRepository.createProductByJsonOf(jsonText);

        notifyProgress(this.raise(++step, "ファイル内容・形式のチェック。"));

        if (product.name.trim().length === 0) {
            notifyProgress(this.raise(++step, "形式が不正です。プロダクト名が設定されていません。"));
            notifyProgress(this.raise(0, "インポートが失敗しました。", file));
        }

        const strage = this.strageRepository.get() as LocalStrage;

        if (strage.existsProductNameOf(product.name)) {
            const newName = confirmeProductName(product.name);
            if (newName === "") {
                notifyProgress(this.raise(0, "インポートがキャンセルされました。", file));
                return false;
            }

            product = product.renameOf(newName.trim());
        }

        notifyProgress(this.raise(++step, "プロダクトの追加・置き換え。"));

        const updatedStrage = strage.mergeByProductName(product);

        notifyProgress(this.raise(++step, "LocalStrageへの保存。"));

        this.strageRepository.register(updatedStrage);

        notifyProgress(this.raise(++step, `完了。プロダクト名: "${product.name}"`));

        return true;
    }

    private raise(step: number, message: string, file?: File): ImportProgressEvent {
        const fileCaption = file ? `ファイル: "${file.name}"` : "";
        return new ImportProgressEvent(
            step / ProductImportService.PROGRESS_END_STEP * 100,
            message + fileCaption
        );
    }

    public validateOf(file: File): string {
        const MAX_MB = 100 * 1024 * 1024;
        const NAME_PATTERN = /^rdram-product-.*\.json$/;

        if (!file) return "";
        if (!NAME_PATTERN.test(file.name)) return "RDRAMシステムからエクスポートされたものではないファイル名です。";
        if (file.size > MAX_MB) return "ファイルが大きすぎます。";
        if (!this.fileSystemRepository.isJsonFile(file)) return "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";

        return "";
    }
}