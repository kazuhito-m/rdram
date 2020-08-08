import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Diagram from "~/domain/diagram/Diagram";
import Product from "~/domain/product/Product";

export default class BCDConnectPortsEvents implements EventsOfType {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Connect Ports";
    }

    public validate(daiagram: Diagram, product: Product): boolean {
        return true;
    }
    public apply(daiagram: Diagram, product: Product): boolean {
        console.log("線を引いた時はここにくるはず。");
        return true;
    }

    public prototype(): BCDConnectPortsEvents {
        return new BCDConnectPortsEvents();
    }
}