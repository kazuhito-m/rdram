import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import DiagramCanvas from "@/presentation/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "~/domain/product/Product";
import { Figure } from "draw2d";
import Diagram from "~/domain/diagram/Diagram";

export default class GenericMoveShapeEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Move Shape";
    }

    public prototype(): GenericMoveShapeEvents {
        return new GenericMoveShapeEvents();
    }

    public validate(diagram: Diagram, product: Product, view: DiagramCanvas): boolean {
        return this.validTargetFigures().length > 0;
    }
    public apply(diagram: Diagram, product: Product, view: DiagramCanvas): Diagram {
        let modifiedDiagram = diagram;
        for (let figure of this.validTargetFigures()) {
            const resouceId = parseInt(figure.getId(), 10);
            const placement = diagram.placementOf(resouceId);
            if (!placement) continue;
            const replaced = placement.withPosition(figure.getX(), figure.getY());
            modifiedDiagram = modifiedDiagram.modifyPlacementOf(replaced);
        }
        return modifiedDiagram;
    }

    private validTargetFigures(): Figure[] {
        return this.eventGists
            .map(eventGist => eventGist.figure)
            .filter(figure => typeof figure !== 'undefined')
            .map(figure => figure as Figure);
    }
}