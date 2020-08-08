import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";

export default class BCDResizeShapeEvents implements EventsOfType<BusinessContextDiagram> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Resize Shape";
    }

    public prototype(): BCDResizeShapeEvents {
        return new BCDResizeShapeEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product): boolean {
        return true;
    }
    public apply(diagram: BusinessContextDiagram, product: Product): boolean {
        const placements = diagram.placementObjects;
        for (let figure of this.validTargetFigures()) {
            const resourceId = parseInt(figure.getId(), 10);
            const placement = placements
                .find(placement => placement.resourceId === resourceId);
            if (!placement) continue;

            placement.width = figure.getWidth();
            placement.height = figure.getHeight();
        }
        return true;
    }

    private validTargetFigures(): Figure[] {
        return this.eventGists
            .map(eventGist => eventGist.figure)
            .filter(figure => typeof figure !== 'undefined')
            .map(figure => figure as Figure);
    }
}