import EventsOfType from "./EventsOfType";
import Product from "@/domain/product/Product";
import Diagram from "@/domain/diagram/Diagram";

export default class AnalyzeResutEvents {
    constructor(private eventsOfTypes: EventsOfType<Diagram, Vue>[]) { }

    public static nothing(): AnalyzeResutEvents {
        return new AnalyzeResutEvents([]);
    }

    public validate(diagram: Diagram, product: Product, view: Vue): boolean {
        return this.eventsOfTypes
            .every(events => events.validate(diagram, product, view));
    }

    public apply(diagram: Diagram, product: Product, view: Vue): Diagram | null {
        let modifiedDiagram = diagram;
        for (const events of this.eventsOfTypes) {
            const result = events.apply(modifiedDiagram, product, view);
            if (result === null) return null;
            modifiedDiagram = result;
        }
        return modifiedDiagram;
    }

    public isNothing() {
        return this.eventsOfTypes.length === 0;
    }
}