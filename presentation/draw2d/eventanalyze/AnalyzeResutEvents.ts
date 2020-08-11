import EventsOfType from "./EventsOfType";
import Product from "~/domain/product/Product";
import Diagram from "~/domain/diagram/Diagram";

export default class AnalyzeResutEvents {
    constructor(private eventsOfTypes: EventsOfType<Diagram, Vue>[]) { }

    public static nothing(): AnalyzeResutEvents {
        return new AnalyzeResutEvents([]);
    }

    public validate(daiagram: Diagram, product: Product, view: Vue): boolean {
        return this.eventsOfTypes
            .every(events => events.validate(daiagram, product, view));
    }

    public apply(daiagram: Diagram, product: Product, view: Vue): boolean {
        return this.eventsOfTypes
            .every(events => events.apply(daiagram, product, view));
    }

    public isNothing() {
        return this.eventsOfTypes.length === 0;
    }
}