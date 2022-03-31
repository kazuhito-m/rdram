import { TangoRdra, Overview } from '@/domain/tangordra/export/structure/TangoRdra';
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";

export default class ProductToTangoRdraConverter {
    public convert(product: Product): TangoRdra {
        const tangoRdra = {} as TangoRdra;
        tangoRdra.overview = this.makeOverviewPart(product);
        return tangoRdra;
    }

    private makeOverviewPart(product: Product): Overview {
        const overview = {} as Overview;
        overview.bussiness = product.name;

        const systems = product.resources.typeOf(ResourceType.システム);
        if (systems.isEmpty()) return overview;
        const primarySystem = systems.first();

        overview.system = primarySystem.name;

        return overview;
    }
}