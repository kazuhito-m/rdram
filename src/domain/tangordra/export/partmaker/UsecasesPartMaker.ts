import { Usecase } from "../structure/TangoRdra";
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";
import Resources from "@/domain/resource/Resources";
import Resource from "@/domain/resource/Resource";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";

export default class UsecasesPartMaker {
    public make(product: Product): Usecase[] {
        const usecases = product.resources
            .typeOf(ResourceType.ユースケース);
        const allTargetResources = product.resources
            .typesOf(ResourceType.タイマー
                , ResourceType.画面
                , ResourceType.情報
                , ResourceType.条件, ResourceType.表形式の条件
                , ResourceType.イベント
            );

        return usecases
            .map(usecase => this.makeUsecase(usecase, allTargetResources, product));
    }

    private makeUsecase(usecase: Resource, allTargetResources: Resources, product: Product): Usecase {
        const result = {
            name: usecase.name
        } as Usecase;

        const maybeRelatedResources = product.diagrams
            .typeOf(Rdra20DiagramType.ユースケース複合図)
            .allRelations()
            .uniqueIgnoreDirection()
            .filter(relation => relation.isRelatedTo(usecase.resourceId))
            .map(relation => relation.otherSideOf(usecase.resourceId))
            .filter(otherSideResourceId => allTargetResources.existsIdOf(otherSideResourceId))
            .map(otherSideResourceId => allTargetResources.of(otherSideResourceId));
        const relatedResources = new Resources(maybeRelatedResources as Resource[]);

        const timerNames = this.findNamesOf(relatedResources, ResourceType.タイマー);
        if (timerNames.length > 0) result.timer = timerNames;

        const viewNames = this.findNamesOf(relatedResources, ResourceType.画面);
        if (viewNames.length > 0) result.view = viewNames;

        const informationNames = this.findNamesOf(relatedResources, ResourceType.情報);
        if (informationNames.length > 0) result.information = informationNames;

        const conditionNames = this.findNamesOf(relatedResources, ResourceType.条件, ResourceType.表形式の条件);
        if (conditionNames.length > 0) result.condition = conditionNames;

        const eventNames = this.findNamesOf(relatedResources, ResourceType.イベント);
        if (eventNames.length > 0) result.event = eventNames;

        return result;
    }

    private findNamesOf(useRecources: Resources, ...resourceTypes: ResourceType[]): string[] {
        return useRecources.typesOf(...resourceTypes)
            .map(resource => resource.name);
    }
}