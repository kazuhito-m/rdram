import StrageRepository from "@/domain/strage/StrageRepository";
import TangoRdraExportFile from "@/domain/tangordra/export/TangoRdraExportFile";
import Product from "@/domain/product/Product";
import { prototypeTangoRdra, TangoRdra, Overview } from '@/domain/tangordra/export/structure/TangoRdra';
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
        const tangoRdra = this.convert(producet);
        return YAML.stringify(tangoRdra);
    }

    private convert(product: Product): TangoRdra {
        const tangoRdra = prototypeTangoRdra();
        this.makeOverviewPart(product, tangoRdra.overview);
        return tangoRdra;
    }

    private makeOverviewPart(product: Product, overview: Overview) {
        overview.bussiness = 'test';
        overview.system = 'systetst';
    }
}
