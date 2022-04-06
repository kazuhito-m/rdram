import { ConditionTango } from '../structure/TangoRdra';
import Product from '@/domain/product/Product';
import Resource from '@/domain/resource/Resource';
import Resources from '@/domain/resource/Resources';
import ResourceType from '@/domain/resource/ResourceType';
import Condition from '@/domain/resource/Condition';

export default class ConditionsPartMaker {
    public make(product: Product): ConditionTango[] {
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
}
