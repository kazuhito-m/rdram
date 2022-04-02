import { TangoRdra, Overview, Actor, ContextOfInfomation, Infomation, VariationTango, Condition } from '@/domain/tangordra/export/structure/TangoRdra';
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Diagram from '@/domain/diagram/Diagram';
import Resources from '@/domain/resource/Resources';
import Variation from '~/domain/resource/Variation';

export default class ProductToTangoRdraConverter {
    public convert(product: Product): TangoRdra {
        const tangoRdra = {} as TangoRdra;

        tangoRdra.overview = this.makeOverviewPart(product);

        const actors = this.makeActorsPart(product, ResourceType.アクター);
        if (actors.length > 0) tangoRdra.actor = actors;

        const externalActor = this.makeActorsPart(product, ResourceType.外部システム, ResourceType.自社システム);
        if (externalActor.length > 0) tangoRdra.external_actor = externalActor;

        const infomations = this.makeInfomationsPart(product);
        if (infomations.length > 0) tangoRdra.information = infomations;

        const variations = this.makeVariationsPart(product);
        if (variations.length > 0) tangoRdra.variation = variations;

        const conditions = this.makeConditionsPart(product);
        if (conditions.length > 0) tangoRdra.conditon = conditions;

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

    private makeActorsPart(product: Product, ...targetTypes: ResourceType[]): any[] {
        const actors = product.resources.typesOf(...targetTypes);
        if (actors.isEmpty()) return [];
        return actors.map(actor => this.convertNameOrActor(actor));
    }

    private convertNameOrActor(actor: Resource): Actor | string {
        if (actor.description.trim().length === 0) return actor.name;
        return {
            name: actor.name,
            description: actor.description
        };
    }

    private makeInfomationsPart(product: Product): ContextOfInfomation[] {
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
        const relations = diagram.relations
            .filter(relation => relation.fromResourceId === infomation.resourceId);
        return relations.map(relation => allInformations.of(relation.toResourceId))
            .filter(toInfomation => toInfomation)
            .map(toInfomation => toInfomation?.name) as string[];
    }

    private makeVariationOf(infomation: Resource, diagram: Diagram, allVariations: Resources): string {
        const relationVariationNames = diagram.relations
            .filter(relation => relation.isRelatedTo(infomation.resourceId))
            .map(relation => relation.otherSideOf(infomation.resourceId))
            .map(pairResouceId => allVariations.of(pairResouceId))
            .filter(foundVariation => foundVariation)
            .map(foundVariation => foundVariation?.name as string);
        if (relationVariationNames.length === 0) return "";
        return relationVariationNames[0];
    }

    private makeVariationsPart(product: Product): VariationTango[] {
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

    private makeConditionsPart(product: Product): Condition[] {
        return [];
    }
}
