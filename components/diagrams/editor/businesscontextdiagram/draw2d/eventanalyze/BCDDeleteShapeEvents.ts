import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Diagram from "~/domain/diagram/Diagram";
import Product from "~/domain/product/Product";

export default class BCDDeleteShapeEvents implements EventsOfType {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Delete Shape";
    }

    public validate(daiagram: Diagram, product: Product): boolean {
        return true;
    }
    public apply(daiagram: Diagram, product: Product): boolean {
        console.log("要素を削除した時にココに来るはず。");
        return true;
    }

    public prototype(): BCDDeleteShapeEvents {
        return new BCDDeleteShapeEvents();
    }
}