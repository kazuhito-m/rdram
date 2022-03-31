import { TangoRdra, Overview, Actor } from '@/domain/tangordra/export/structure/TangoRdra';
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";

export default class ProductToTangoRdraConverter {
    public convert(product: Product): TangoRdra {
        const tangoRdra = {} as TangoRdra;

        tangoRdra.overview = this.makeOverviewPart(product);

        const actors = this.makeActorsPart(product);
        if (actors.length > 0) tangoRdra.actor = actors;

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

    private makeActorsPart(product: Product): any[] {
        const actors = product.resources.typeOf(ResourceType.アクター);
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