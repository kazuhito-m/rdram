import EventsOfType from "~/presentation/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "~/presentation/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/presentation/components/diagrams/editor/businesscontextdiagram/canvas/DiagramCanvas.vue";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";

export default class BCDMoveShapeEvents implements EventsOfType<BusinessContextDiagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Move Shape";
    }

    public prototype(): BCDMoveShapeEvents {
        return new BCDMoveShapeEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product, view: DiagramCanvas): boolean {
        return this.validTargetFigures().length > 0;
    }
    public apply(diagram: BusinessContextDiagram, product: Product, view: DiagramCanvas): boolean {
        for (let figure of this.validTargetFigures()) {
            const resouceId = parseInt(figure.getId(), 10);
            const placement = diagram.placementOf(resouceId);
            if (!placement) continue;
            const replaced  = placement.withPosition(figure.getX() ,figure.getY());
            diagram.modifyPlacementOf(replaced);
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