import { Figure } from "draw2d";
import EventsOfType from "@/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "@/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "@/domain/product/Product";
import Diagram from "@/domain/diagram/Diagram";

export default class GenericMoveShapeEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Move Shape";
    }

    public prototype(): GenericMoveShapeEvents {
        return new GenericMoveShapeEvents();
    }

    public validate(_diagram: Diagram, _product: Product, _view: DiagramCanvas): boolean {
        return this.validTargetFigures().length > 0;
    }

    public apply(diagram: Diagram, _product: Product, _view: DiagramCanvas): Diagram {
        let modifiedDiagram = diagram;
        for (const figure of this.validTargetFigures()) {
            const resouceId = parseInt(figure.getId(), 10);
            const placement = diagram.placementOf(resouceId);
            if (!placement) continue;
            const replaced = placement.move(figure.getX(), figure.getY());
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