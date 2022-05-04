import YAML from 'yaml';
import StorageRepository from "@/domain/storage/StorageRepository";
import TangoRdraExportFile from "@/domain/tangordra/export/file/TangoRdraExportFile";
import Product from "@/domain/product/Product";
import ProductToTangoRdraConverter from "@/domain/tangordra/export/ProductToTangoRdraConverter";

export default class TangoRdraFileService {
    constructor(
        private readonly storageRepository: StorageRepository,
    ) { }

    public generateExportFile(): TangoRdraExportFile {
        const currentProduct = this.storageRepository.getCurrentProduct();
        if (!currentProduct) return TangoRdraExportFile.empty();

        const yaml = this.generateTangoRdraOf(currentProduct);

        return new TangoRdraExportFile(yaml, currentProduct.name);
    }

    private generateTangoRdraOf(producet: Product): string {
        const converter = new ProductToTangoRdraConverter();

        const tangoRdra = converter.convert(producet);

        return YAML.stringify(tangoRdra);
    }

    public currentProductName(): string {
        const currentProduct = this.storageRepository.getCurrentProduct();
        return currentProduct?.name as string;
    }
}
