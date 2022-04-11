import { Usecase } from "../structure/TangoRdra";
import Product from "~/domain/product/Product";
import DiagramType from "~/domain/diagram/DiagramType";
import Diagram from "~/domain/diagram/Diagram";
import ResourceType from "~/domain/resource/ResourceType";
import Resources from "~/domain/resource/Resources";

export default class UsecasesPartMaker {
    public make(product: Product): Usecase[] {
        return product.diagrams
            .typeOf(DiagramType.ユースケース複合図)
            .map(diagram => this.makeUsecase(diagram, product));
    }

    private makeUsecase(diagram: Diagram, product: Product): Usecase {
        const result = {
            name: diagram.name
        } as Usecase;

        const useRecources = product.useResourcesOf(diagram);

        const timerNames = this.findNamesOf(useRecources, ResourceType.タイマー);
        if (timerNames.length > 0) result.timer = timerNames;

        const viewNames = this.findNamesOf(useRecources, ResourceType.画面);
        if (viewNames.length > 0) result.view = viewNames;

        const informationNames = this.findNamesOf(useRecources, ResourceType.情報);
        if (informationNames.length > 0) result.information = informationNames;

        const conditionNames = this.findNamesOf(useRecources, ResourceType.条件, ResourceType.表形式の条件);
        if (conditionNames.length > 0) result.condition = conditionNames;

        const eventNames = this.findNamesOf(useRecources, ResourceType.イベント);
        if (eventNames.length > 0) result.event = eventNames;

        return result;
    }

    private findNamesOf(useRecources: Resources, ...resourceTypes: ResourceType[]): string[] {
        return useRecources.typesOf(...resourceTypes)
            .map(resource => resource.name);
    }
}