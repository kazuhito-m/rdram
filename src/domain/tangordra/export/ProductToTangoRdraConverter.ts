import { TangoRdra } from '@/domain/tangordra/export/structure/TangoRdra';
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";
import StatusPartMaker from './partmaker/StatusPartMaker';
import ConditionsPartMaker from './partmaker/ConditionsPartMaker';
import VariationsPartMaker from './partmaker/VariationsPartMaker';
import InfomationsPartMaker from './partmaker/InfomationsPartMaker';
import ActorsPartMaker from './partmaker/ActorsPartMaker';
import OverviewPartMaker from './partmaker/OverviewPartMaker';

export default class ProductToTangoRdraConverter {
    private readonly overviewPartMaker = new OverviewPartMaker();
    private readonly actorsPartMaker = new ActorsPartMaker();
    private readonly infomationsPartMaker = new InfomationsPartMaker();
    private readonly variationsPartMaker = new VariationsPartMaker();
    private readonly conditionsPartMaker = new ConditionsPartMaker();
    private readonly statusPartMaker = new StatusPartMaker();

    public convert(product: Product): TangoRdra {
        const tangoRdra = {} as TangoRdra;

        tangoRdra.overview = this.overviewPartMaker.make(product);

        const actors = this.actorsPartMaker.make(product, ResourceType.アクター);
        if (actors.length > 0) tangoRdra.actor = actors;

        const externalActor = this.actorsPartMaker.make(product, ResourceType.外部システム, ResourceType.自社システム);
        if (externalActor.length > 0) tangoRdra.external_actor = externalActor;

        const infomations = this.infomationsPartMaker.make(product);
        if (infomations.length > 0) tangoRdra.information = infomations;

        const variations = this.variationsPartMaker.make(product);
        if (variations.length > 0) tangoRdra.variation = variations;

        const conditions = this.conditionsPartMaker.make(product);
        if (conditions.length > 0) tangoRdra.condition = conditions;

        const states = this.statusPartMaker.make(product);
        if (states.length > 0) tangoRdra.state = states;

        return tangoRdra;
    }
}
