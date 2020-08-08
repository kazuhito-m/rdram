import EventGist from "./EventGist";
import Diagram from "~/domain/diagram/Diagram";
import Product from "~/domain/product/Product";

/**
 * Commandをタイプごとに集めたモノ。
 */
export default interface EventsOfType {
    eventGists: EventGist[];
    eventType(): string;
    validate(daiagram: Diagram, product: Product): boolean;
    apply(daiagram: Diagram, product: Product): boolean;
    prototype(): EventsOfType;
}