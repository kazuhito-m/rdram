import { ProductImportProgressStep } from "@/domain/product/import/ProductImportProgressStep";
import ProductImportProgressEvent from "@/domain/product/import/ProductImportProgressEvent";
import LocalStrage from "@/domain/strage/LocalStrage";
import StrageRepository from "@/domain/strage/StrageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import Product from "@/domain/product/Product";

export default class ProductImportService {
    constructor(
        private readonly strageRepository: StrageRepository,
        private readonly fileSystemRepository: FileSystemRepository
    ) { }

    public async importOf(
        file: File,
        notifyProgress: (event: ProductImportProgressEvent) => void,
        confirmeProductName: (originalProductName: string) => string
    ): Promise<Product | null> {
        notifyProgress(this.raise(ProductImportProgressStep.開始, "", file));
        try {
            const result = await this.doImport(file, notifyProgress, confirmeProductName);
            if (result) {
                notifyProgress(this.raise(ProductImportProgressStep.成功, "", file));
                return result;
            }
        } catch (e) {
            notifyProgress(this.raiseError(`予期せぬエラーが発生しました。\n  ${e}`));
        }
        notifyProgress(this.raiseError("", file));
        return null;
    }

    private async doImport(
        file: File,
        notifyProgress: (event: ProductImportProgressEvent) => void,
        confirmeProductName: (originalProductName: string) => string
    ): Promise<Product | null> {
        notifyProgress(this.raise(ProductImportProgressStep.ファイル読み込み));

        const result = this.validateOf(file);
        if (result.length > 0) {
            notifyProgress(this.raiseError(result));
            notifyProgress(this.raiseError("", file));
            return null;
        }

        const json = await this.fileSystemRepository.readFile(file);

        if (json === null) {
            notifyProgress(this.raiseError("ローカルファイルの読み込みに失敗しました。"));
            notifyProgress(this.raiseError("", file));
            return null;
        }
        const jsonText = json as string;

        let product = this.strageRepository.createProductByJsonOf(jsonText);

        notifyProgress(this.raise(ProductImportProgressStep.形式チェック));

        if (product.name.trim().length === 0) {
            notifyProgress(this.raiseError("形式が不正です。プロダクト名が設定されていません。"));
            notifyProgress(this.raiseError("", file));
        }

        const strage = this.strageRepository.get() as LocalStrage;

        if (strage.existsProductNameOf(product.name)) {
            const newName = confirmeProductName(product.name);
            if (newName === "") {
                notifyProgress(this.raise(ProductImportProgressStep.キャンセル, "", file));
                return null;
            }

            product = product.renameOf(newName.trim());
        }

        notifyProgress(this.raise(ProductImportProgressStep.追加));

        const updatedStrage = strage.mergeByProductName(product);

        notifyProgress(this.raise(ProductImportProgressStep.保存));

        this.strageRepository.register(updatedStrage);

        notifyProgress(this.raise(ProductImportProgressStep.完了, `product name: "${product.name}"`));

        return product;
    }

    private raise(step: ProductImportProgressStep, message: string = "", file?: File): ProductImportProgressEvent {
        const fileCaption = file ? `file: "${file.name}"` : "";
        return new ProductImportProgressEvent(
            step,
            message + fileCaption
        );
    }

    private raiseError(message: string = "", file?: File): ProductImportProgressEvent {
        return this.raiseError(message, file);
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

    public hitCurrentProductOf(productIds: string[]): boolean {
        const currentProduct = this.strageRepository.getCurrentProduct();
        if (!currentProduct) return false;
        return productIds.includes(currentProduct.id);
    }
}