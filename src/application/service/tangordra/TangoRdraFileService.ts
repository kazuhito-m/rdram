import StrageRepository from "@/domain/strage/StrageRepository";
import TangoRdraExportFile from "@/domain/tangordra/export/file/TangoRdraExportFile";
import Product from "@/domain/product/Product";
import ProductToTangoRdraConverter from "@/domain/tangordra/export/ProductToTangoRdraConverter";
import YAML from 'yaml';

export default class TangoRdraFileService {
    constructor(
        private readonly strageRepository: StrageRepository,
    ) { }

    public generateExportFile(): TangoRdraExportFile {
        const currentProduct = this.strageRepository.getCurrentProduct();
        if (!currentProduct) return TangoRdraExportFile.empty();

        const yaml = this.generateTangoRdraOf(currentProduct);

        return new TangoRdraExportFile(yaml, currentProduct.name);
    }

    private generateTangoRdraOf(producet: Product): string {
        const converter = new ProductToTangoRdraConverter();

        const tangoRdra = converter.convert(producet);

        return YAML.stringify(tangoRdra);
    }
}
