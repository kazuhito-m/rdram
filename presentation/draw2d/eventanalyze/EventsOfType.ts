import EventGist from "./EventGist";
import Diagram from "~/domain/diagram/Diagram";
import Product from "~/domain/product/Product";

/**
 * Commandをタイプごとに集めたモノ。
 */
export default interface EventsOfType<D extends Diagram> {
    eventGists: EventGist[];
    eventType(): string;
    validate(diagram: D, product: Product): boolean;
    apply(diagram: D, product: Product): boolean;
    prototype(): EventsOfType<D>;
}