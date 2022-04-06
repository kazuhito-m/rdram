import { ContextOfInfomation, Infomation } from "../structure/TangoRdra";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import ResourceType from "@/domain/resource/ResourceType";

export default class InfomationsPartMaker {
    public make(product: Product): ContextOfInfomation[] {
        const infomations = product.resources.typesOf(ResourceType.情報);
        const variations = product.resources.typeOf(ResourceType.バリエーション);

        return product.diagrams
            .map(diagram => this.makeInfomationsOf(diagram, infomations, variations))
            .filter(context => context.value.length > 0);
    }

    private makeInfomationsOf(diagram: Diagram, allInfomations: Resources, allVariations: Resources): ContextOfInfomation {
        const resourceIds = diagram.placements
            .map(placement => placement.resourceId);
        const foundInfomations = allInfomations
            .filter(resource => resourceIds.includes(resource.resourceId));

        const values = foundInfomations
            .map(infomation => this.makeInfomationOf(infomation, diagram, allInfomations, allVariations));

        return {
            context: diagram.name,
            value: values
        };
    }

    private makeInfomationOf(infomation: Resource, diagram: Diagram, allInformations: Resources, allVariations: Resources): Infomation {
        const result = {
            name: infomation.name,
        } as Infomation;

        const relateds = this.makeRelatedsOf(infomation, diagram, allInformations);
        if (relateds.length > 0) result.related = relateds;

        const variation = this.makeVariationOf(infomation, diagram, allVariations);
        if (variation) result.variation = variation;

        return result;
    }

    private makeRelatedsOf(infomation: Resource, diagram: Diagram, allInformations: Resources) {
        const relations = diagram.allRelations()
            .onlyFromRelatedOf(infomation);
        return relations.map(relation => allInformations.of(relation.toResourceId))
            .filter(toInfomation => toInfomation)
            .map(toInfomation => toInfomation?.name) as string[];
    }

    private makeVariationOf(infomation: Resource, diagram: Diagram, allVariations: Resources): string {
        const relationVariationNames = diagram.allRelations()
            .onlyRelatedOf(infomation)
            .map(relation => relation.otherSideOf(infomation.resourceId))
            .map(pairResouceId => allVariations.of(pairResouceId))
            .filter(foundVariation => foundVariation)
            .map(foundVariation => foundVariation?.name as string);
        if (relationVariationNames.length === 0) return "";
        return relationVariationNames[0];
    }

}