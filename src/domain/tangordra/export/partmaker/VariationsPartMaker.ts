import { VariationTango } from "../structure/TangoRdra";
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";
import Variation from "@/domain/resource/Variation";

export default class VariationsPart {
    public make(product: Product): VariationTango[] {
        return product.resources.typesOf(ResourceType.バリエーション)
            .map(resource => resource as Variation)
            .map(this.makeVariationTango);
    }

    private makeVariationTango(variation: Variation): VariationTango {
        return {
            name: variation.name,
            value: variation.valuesOf()
        };
    }
}