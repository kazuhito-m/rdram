import { Figure } from "draw2d";
import EventsOfType from "@/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "@/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "@/domain/product/Product";
import Diagram from "@/domain/diagram/Diagram";

export default class GenericResizeShapeEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public readonly eventGists: EventGist[] = [];

    public eventType(): string {
        return "Resize Shape";
    }

    public prototype(): GenericResizeShapeEvents {
        return new GenericResizeShapeEvents();
    }

    public validate(_diagram: Diagram, _product: Product, _view: DiagramCanvas): boolean {
        return true;
    }

    public apply(diagram: Diagram, _product: Product, _view: DiagramCanvas): Diagram {
        let modifiedDiagram = diagram;
        for (const figure of this.validTargetFigures()) {
            const resourceId = parseInt(figure.getId(), 10);

            const placement = diagram.placementOf(resourceId);
            if (!placement) continue;

            const resized = placement.resize(figure.getWidth(), figure.getHeight());
            modifiedDiagram = modifiedDiagram.modifyPlacementOf(resized);
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