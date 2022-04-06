import { Actor } from "../structure/TangoRdra";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";

export default class ActorsPartMaker {
    public make(product: Product, ...targetTypes: ResourceType[]): any[] {
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
}