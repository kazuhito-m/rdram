import { BUC, Business } from "../structure/TangoRdra";
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

    private makeBusiness(diagram: Diagram,  product: Product): Business {
        const allResouses = product.resources;
        const maybeUse = diagram.placements
            .map(placement => allResouses.of(placement.resourceId))
            .filter(resource => resource !== undefined) as Resource[];
        const useResources = new Resources(maybeUse);

        const result =  {
            name: diagram.name,
        } as Business;

        const actorNames = useResources.typeOf(ResourceType.アクター)
            .map(actor => actor.name);
        if (actorNames.length > 0) result.main_actor = actorNames;

        const bucs = useResources.typeOf(ResourceType.ビジネスユースケース)
            .map(bucResource => this.makeBucs(bucResource, product));
        if (bucs.length > 0) result.buc = bucs;

        return result;
    }

    private makeBucs(buc: Resource, product: Product): BUC {
        return {
            name: buc.name
        } as BUC;
    }
}