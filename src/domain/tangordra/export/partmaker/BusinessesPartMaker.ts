import { Activity, BUC, Business } from "../structure/TangoRdra";
import Product from "@/domain/product/Product";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagram from "@/domain/diagram/Diagram";
import Resources from "@/domain/resource/Resources";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";

export default class BusinessesPartMaker {
    public make(product: Product): Business[] {
        return product.diagrams
            .typeOf(DiagramType.ビジネスユースケース図)
            .map(diagram => this.makeBusiness(diagram, product));
    }

    private makeBusiness(diagram: Diagram, product: Product): Business {
        const useResources = this.useResourcesOf(diagram, product);

        const result = {
            name: diagram.name,
        } as Business;

        const actorNames = useResources.typesOf(ResourceType.アクター, ResourceType.自社システム, ResourceType.外部システム)
            .map(actor => actor.name);
        if (actorNames.length > 0) result.main_actor = actorNames;

        const bucs = useResources.typeOf(ResourceType.ビジネスユースケース)
            .map(bucResource => this.makeBucs(bucResource, product));
        if (bucs.length > 0) result.buc = bucs;

        return result;
    }

    private makeBucs(buc: Resource, product: Product): BUC {
        const result = {
            name: buc.name
        } as BUC;

        const ucDiagram = product.diagrams
            .typeOf(DiagramType.ユースケース複合図)
            .nameOf(buc.name);
        if (!ucDiagram) return result;

        const activities = this.makeActivties(ucDiagram, product);
        if (activities.length > 0) result.activity = activities;

        return result;
    }

    private makeActivties(ucDiagram: Diagram, product: Product): Activity[] {
        const useResources = this.useResourcesOf(ucDiagram, product);
        return useResources.typeOf(ResourceType.アクティビティ)
            .map(activity => this.makeActivity(activity, useResources, ucDiagram));
    }

    private makeActivity(activity: Resource, useResources: Resources, ucDiagram: Diagram): Activity {
        const result = {
            name: activity.name
        } as Activity;

        const maybeRelatedResouces = ucDiagram.allRelations()
            .filter(lelation => lelation.isRelatedTo(activity.resourceId))
            .map(lelation => lelation.otherSideOf(activity.resourceId))
            .map(relatedResouceId => useResources.of(relatedResouceId)) as Resource[];
        const relatedResouces = new Resources(maybeRelatedResouces);

        const actorNames = relatedResouces.typesOf(ResourceType.アクター, ResourceType.自社システム, ResourceType.外部システム)
            .map(actor => actor.name);
        if (actorNames.length > 0) result.used_by = actorNames;

        const usecaseNames = relatedResouces.typeOf(ResourceType.ユースケース)
            .map(usecase => usecase.name);
        if (usecaseNames.length > 0) result.usecase = usecaseNames;

        return result;
    }

    private useResourcesOf(diagram: Diagram, product: Product): Resources {
        const allResouses = product.resources;
        const maybeUse = diagram.placements
            .map(placement => allResouses.of(placement.resourceId))
            .filter(resource => resource !== undefined) as Resource[];
        return new Resources(maybeUse);
    }
}
