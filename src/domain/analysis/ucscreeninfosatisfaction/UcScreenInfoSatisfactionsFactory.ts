import RelatedResource from "./RelatedResource";
import UcScreenInfoSatisfaction from "./UcScreenInfoSatisfaction";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import ResourceType from "@/domain/resource/ResourceType";

export default class UcScreenInfoSatisfactionsFactory {
    public createOf(product: Product): UcScreenInfoSatisfaction[] {
        const diagrams = product.diagrams;
        const sorted = product.resources.sorted();
        const resourceDic = this.makeResourceDic(sorted);

        const ucIds = sorted.typeOf(ResourceType.ユースケース).map(r => r.resourceId);
        const screenIds = sorted.typeOf(ResourceType.画面).map(r => r.resourceId);
        const infoIds = sorted.typeOf(ResourceType.情報).map(r => r.resourceId);

        const screenSatis = new Map<string, RelatedResource>();
        const infoSatis = new Map<string, RelatedResource>();

        diagrams.forEach(diagram => {
            diagram.allRelations().forEach(relation => {
                let hit = null;
                if (ucIds.includes(relation.fromResourceId)) hit = relation;
                else if (ucIds.includes(relation.toResourceId)) hit = relation.reverse();
                if (!hit) return;

                const ucId = hit.fromResourceId;
                const otherSideId = hit.toResourceId;
                const key = this.makeUcToOtherKey(ucId, otherSideId);
                const otherSide = resourceDic.get(otherSideId);
                if (!otherSide) return;

                if (screenIds.includes(otherSideId)) {
                    let sat = screenSatis.get(key);
                    if (!sat) sat = new RelatedResource(otherSide, []);
                    sat.relateOnDiagrams.push(diagram);
                    screenSatis.set(key, sat);
                }
                if (infoIds.includes(otherSideId)) {
                    let sat = infoSatis.get(key);
                    if (!sat) sat = new RelatedResource(otherSide, []);
                    sat.relateOnDiagrams.push(diagram);
                    infoSatis.set(key, sat);
                }
            });
        });

        return ucIds.map(ucId => {
            const uc = resourceDic.get(ucId) as Resource;
            return new UcScreenInfoSatisfaction(
                uc,
                diagrams.using(uc),
                this.filterAndRemoveRelatedResources(ucId, screenSatis),
                this.filterAndRemoveRelatedResources(ucId, infoSatis)
            );
        });
    }

    private makeUcToOtherKey(ucId: number, otherSideId: number): string {
        return `${ucId}:${otherSideId}`;
    }

    private makeResourceDic(resources: Resources): Map<number, Resource> {
        const dic = new Map<number, Resource>();
        resources.forEach(r => dic.set(r.resourceId, r));
        return dic;
    }

    private filterAndRemoveRelatedResources(ucId: number, dic: Map<string, RelatedResource>): RelatedResource[] {
        const hitKeys = [];
        const keyPrefix = `${ucId}:`;
        for (const key of dic.keys()) {
            if (key.startsWith(keyPrefix)) hitKeys.push(key);
        }
        const results = [];
        for (const key of hitKeys) {
            const hit = dic.get(key);
            if (!hit) continue;
            results.push(hit);
            dic.delete(key);
        }
        return results;
    }

    private static readonly ONE = new UcScreenInfoSatisfactionsFactory();

    public static get(): UcScreenInfoSatisfactionsFactory {
        return UcScreenInfoSatisfactionsFactory.ONE;
    }
}
