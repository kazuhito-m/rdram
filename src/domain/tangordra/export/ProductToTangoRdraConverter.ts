import { TangoRdra, Overview, Actor, ContextOfInfomation, Infomation } from '@/domain/tangordra/export/structure/TangoRdra';
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Diagram from '~/domain/diagram/Diagram';
import Resources from '~/domain/resource/Resources';

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
}
