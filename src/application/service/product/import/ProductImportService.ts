import { ProductImportProgressStep } from "@/domain/product/import/ProductImportProgressStep";
import { ProductImportError } from "@/domain/product/import/ProductImportError";
import ProductImportProgressEvent from "@/domain/product/import/ProductImportProgressEvent";
import LocalStorage from "@/domain/storage/LocalStorage";
import StorageRepository from "@/domain/storage/StorageRepository";
import FileSystemRepository from "@/domain/filesystem/FileSystemRepository";
import Product from "@/domain/product/Product";
import RdramProductExportFileName from "@/domain/product/export/RdramProductExportFileName";
import ImportedProduct from "@/domain/product/import/ImportedProduct";

export default class ProductImportService {
    constructor(
        private readonly storageRepository: StorageRepository,
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
            notifyProgress(this.raiseError(ProductImportError.予期せぬエラー, `\n  ${e}`));
        }
        notifyProgress(this.raise(ProductImportProgressStep.失敗, "", file));
        return null;
    }

    private async doImport(
        file: File,
        notifyProgress: (event: ProductImportProgressEvent) => void,
        confirmeProductName: (originalProductName: string) => string
    ): Promise<Product | null> {
        notifyProgress(this.raise(ProductImportProgressStep.ファイル読み込み));

        const result = await this.validateOf(file);
        if (result !== ProductImportError.なし) {
            notifyProgress(this.raiseError(result));
            return null;
        }

        const jsonText = await this.fileSystemRepository.readFile(file) as string;
        const maybeProduct = this.storageRepository.createProductByJsonOf(jsonText);

        notifyProgress(this.raise(ProductImportProgressStep.形式チェック));

        if (!maybeProduct.checkOfLogicalStructure()) {
            notifyProgress(this.raiseError(ProductImportError.形式or構造が不正));
            return null;
        }

        const storage = this.storageRepository.get() as LocalStorage;

        const fixedProduct = this.fixDuplicateNameOf(maybeProduct, confirmeProductName, storage) as Product;
        if (fixedProduct === null) {
            notifyProgress(this.raise(ProductImportProgressStep.キャンセル));
            return null;
        }

        notifyProgress(this.raise(ProductImportProgressStep.追加));

        const updatedStorage = storage.mergeByProductName(fixedProduct);

        notifyProgress(this.raise(ProductImportProgressStep.保存));

        this.storageRepository.register(updatedStorage);

        notifyProgress(this.raise(ProductImportProgressStep.完了, `product name: "${fixedProduct.name}"`));

        return fixedProduct;
    }

    private fixDuplicateNameOf(maybeProduct: ImportedProduct,
        confirmeProductName: (originalProductName: string) => string,
        storage: LocalStorage
    ): Product | null {
        const product = maybeProduct.value;
        if (!storage.existsProductNameOf(product.name)) return product;

        const newName = confirmeProductName(product.name).trim();
        if (newName === "") return null;

        return product.renameOf(newName);
    }

    private raise(step: ProductImportProgressStep, message: string = "", file?: File): ProductImportProgressEvent {
        const fileCaption = file ? `file: "${file.name}"` : "";
        return new ProductImportProgressEvent(
            step,
            ProductImportError.なし,
            message + fileCaption
        );
    }

    private raiseError(error: ProductImportError, message: string = ""): ProductImportProgressEvent {
        return new ProductImportProgressEvent(
            ProductImportProgressStep.エラー,
            error,
            message
        );
    }

    public async validateOf(file: File): Promise<ProductImportError> {
        const MAX_MB = 100 * 1024 * 1024;

        if (!file) return ProductImportError.なし;
        if (!RdramProductExportFileName.isApplicableOf(file.name)) return ProductImportError.ファイル名不正;
        if (file.size > MAX_MB) return ProductImportError.サイズ超過;
        const text = await this.fileSystemRepository.readFile(file);
        if (text === null) return ProductImportError.読込失敗;
        const isJson = await this.fileSystemRepository.isJsonFile(file);
        if (!isJson) return ProductImportError.非JSON形式;

        return ProductImportError.なし;
    }

    public hitCurrentProductOf(productIds: string[]): boolean {
        const currentProduct = this.storageRepository.getCurrentProduct();
        if (!currentProduct) return false;
        return productIds.includes(currentProduct.id);
    }
}