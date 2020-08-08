import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Diagram from "~/domain/diagram/Diagram";
import Product from "~/domain/product/Product";

export default class BCDResizeShapeEvents implements EventsOfType {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Resize Shape";
    }

    public validate(daiagram: Diagram, product: Product): boolean {
        return true;
    }
    public apply(daiagram: Diagram, product: Product): boolean {
        console.log("なにかしらをリサイズした時にココに来るはず。");
        return true;
    }

    public prototype(): BCDResizeShapeEvents {
        return new BCDResizeShapeEvents();
    }
}