import EventsOfType from "~/presentation/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "~/presentation/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/presentation/components/diagrams/editor/businesscontextdiagram/canvas/DiagramCanvas.vue";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";

export default class BCDResizeShapeEvents implements EventsOfType<BusinessContextDiagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Resize Shape";
    }

    public prototype(): BCDResizeShapeEvents {
        return new BCDResizeShapeEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product, view: DiagramCanvas): boolean {
        return true;
    }
    public apply(diagram: BusinessContextDiagram, product: Product, view: DiagramCanvas): boolean {
        for (let figure of this.validTargetFigures()) {
            const resourceId = parseInt(figure.getId(), 10);

            const placement = diagram.placementOf(resourceId);
            if (!placement) continue;

            const replaced = placement.withSize(figure.getWidth(), figure.getHeight());
            diagram.modifyPlacementOf(placement);
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