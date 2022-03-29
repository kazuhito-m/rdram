import EventGist from "./EventGist";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";

/**
 * draw2dのCommandをタイプごとに集めたモノ。
 */
export default interface EventsOfType<D extends Diagram, V extends Vue> {
    eventGists: EventGist[];
    eventType(): string;
    validate(diagram: D, product: Product, view: V): boolean;
    apply(diagram: D, product: Product, view: V): D;
    prototype(): EventsOfType<D, V>;
}
