import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";

export default class BCDMoveShapeEvents implements EventsOfType<BusinessContextDiagram> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Move Shape";
    }

    public prototype(): BCDMoveShapeEvents {
        return new BCDMoveShapeEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product): boolean {
        return this.validTargetFigures().length > 0;
    }
    public apply(diagram: BusinessContextDiagram, product: Product): boolean {
        const placements = diagram.placementObjects;
        for (let figure of this.validTargetFigures()) {
            const placement = placements
                .find(placement => placement.resourceId === parseInt(figure.getId(), 10));
            if (!placement) continue;
            placement.x = figure.getX();
            placement.y = figure.getY();
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