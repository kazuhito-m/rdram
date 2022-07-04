import Product from "~/domain/product/Product";
import Resource from "~/domain/resource/Resource";
import Resources from "~/domain/resource/Resources";
import ResourceType from "~/domain/resource/ResourceType";
import UcScreenInfoSatisfaction from "./UcScreenInfoSatisfaction";

export default class UcScreenInfoSatisfactionsFactory {
    public createOf(product: Product): UcScreenInfoSatisfaction[] {
        const sorted = product.resources.sorted();
        const resourceDic = this.makeResourceDic(sorted);

        const usecaseResourceIds = sorted.filter(r => r.type.equals(ResourceType.ユースケース))
            .map(r => r.resourceId);


        //  TODO 本実装。以下は仮。
        return [];
    }

    private makeResourceDic(resources: Resources): Map<number, Resource> {
        const dic = new Map<number, Resource>();
        resources.forEach(r => dic.set(r.resourceId, r));
        return dic;
    }

    // private makeRelationDic(relations: Relations): Map<number, RelatedResource[]> {
    // }

    private static readonly ONE = new UcScreenInfoSatisfactionsFactory();

    public static get(): UcScreenInfoSatisfactionsFactory {
        return UcScreenInfoSatisfactionsFactory.ONE;
    }
}
