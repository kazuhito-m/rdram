import { TangoRdra, Overview, Actor, ContextOfInfomation, Infomation, VariationTango, ConditionTango, StateGroup, UseCase, State } from '@/domain/tangordra/export/structure/TangoRdra';
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Diagram from '@/domain/diagram/Diagram';
import Resources from '@/domain/resource/Resources';
import Variation from '@/domain/resource/Variation';
import Condition from '@/domain/resource/Condition';
import Relation from '~/domain/relation/Relation';
import DiagramType from '~/domain/diagram/DiagramType';

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
        if (conditions.length > 0) tangoRdra.condition = conditions;

        const states = this.makeStatesPart(product);
        if (states.length > 0) tangoRdra.state = states;

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

    private makeConditionsPart(product: Product): ConditionTango[] {
        const allVariations = product.resources
            .typesOf(ResourceType.バリエーション);

        return product.resources.typesOf(ResourceType.条件, ResourceType.表形式の条件)
            .map(resource => resource)
            .map(condition => this.makeConditionTango(condition, product, allVariations));
    }

    private makeConditionTango(condition: Resource, product: Product, allVariations: Resources): ConditionTango {
        const result = {
            name: condition.name,
        } as ConditionTango;

        let description = condition.description;
        if (condition.type === ResourceType.条件)
            description = (condition as Condition).value;
        if (description) result.descripion = description;

        const variationNames = this.makeVariationNamesRelationFrom(condition, allVariations, product);
        if (variationNames.length > 0) result.variation = variationNames;

        return result;
    }

    private makeVariationNamesRelationFrom(condition: Resource, allVariations: Resources, product: Product): string[] {
        const otherSideResourceIds = product.diagrams
            .allRelations()
            .uniqueIgnoreDirection()
            .onlyRelatedOf(condition)
            .map(relation => relation.otherSideOf(condition.resourceId));
        return otherSideResourceIds
            .map(otherSideResourceId => allVariations.of(otherSideResourceId))
            .filter(variation => variation)
            .map(foundVariation => foundVariation?.name as string);
    }

    private makeStatesPart(product: Product): StateGroup[] {
        const allResources = product.resources;
        const states = allResources.typeOf(ResourceType.情報);
        const usecases = allResources.typeOf(ResourceType.ユースケース);
        const startOrEndPoints = allResources.typeOf(ResourceType.始点終点);

        return product.diagrams
            .typeOf(DiagramType.状態モデル図)
            .map(diagram => this.makeStateGroup(diagram, states, usecases, startOrEndPoints))
            .filter(stateGroup => stateGroup.value.length > 0);
    }

    private makeStateGroup(
        diagram: Diagram,
        states: Resources,
        usecases: Resources,
        startOrEndPoints: Resources
    ): StateGroup {
        const statesTango: State[] = [];

        const relations = new Map<string, Relation>();
        diagram.allRelations()
            .forEach(relation => relations.set(relation.id, relation));
        while (relations.size > 0) {
            const relation = relations.values().next().value;
            const fromId = relation.fromResourceId;
            if (startOrEndPoints.existsIdOf(fromId)) {
                relations.delete(relation.id);
                continue;
            }
            if (usecases.existsIdOf(fromId)) {
                continue;
            }

            if (!states.existsIdOf(fromId)) {
                relations.delete(relation.id);
                continue;
            }

            const toId = relation.toResourceId;
            if (startOrEndPoints.existsIdOf(toId)) {
                relations.delete(relation.id);
                continue;
            }

            relations.delete(relation.id);

            const state = states.of(fromId);

            const relationsOfConnectUsecase = Array.from(relations.values())
                .filter(r => r.fromResourceId === fromId);
            relationsOfConnectUsecase.forEach(r => relations.delete(r.id));
            relationsOfConnectUsecase.push(relation);

            const useCaseResourceIds = relationsOfConnectUsecase
                .map(r => r.toResourceId);

            const oneState = {
                name: state?.name,
                usecase: useCaseResourceIds.map(resourceId => this.makeUseCase(resourceId, relations, usecases, states))
            } as State;

            statesTango.push(oneState)
        }

        const result = {
            group: diagram.name,
            value: statesTango
        } as StateGroup;
        return result;
    }

    private makeUseCase(
        useCaseResourceId: number,
        relations: Map<string, Relation>,
        usecases: Resources,
        states: Resources
    ): UseCase {
        const result = {
            name: usecases.of(useCaseResourceId)?.name
        } as UseCase;

        const relationsOfConnectState = Array.from(relations.values())
            .filter(r => r.fromResourceId === useCaseResourceId);
        for (const relation of relationsOfConnectState) {
            relations.delete(relation.id);
            if (!states.existsIdOf(relation.toResourceId)) continue;
            const stateName = states.of(relation.toResourceId)?.name;
            if (!stateName) continue;
            result.next_state = stateName;
        }
        
        return result;
    }
}
 