import { Figure } from "draw2d";
import EventsOfType from "@/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "@/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "@/domain/product/Product";
import Relation from "@/domain/relation/Relation";
import Diagram from "@/domain/diagram/Diagram";

export default class GenericConnectPortsEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Connect Ports";
    }

    public prototype(): GenericConnectPortsEvents {
        return new GenericConnectPortsEvents();
    }

    public validate(diagram: Diagram, product: Product, view: DiagramCanvas): boolean {
        for (const eventGist of this.eventGists) {
            if (!eventGist.existsIdWhenConnectPorts()) continue;

            const relation = Relation.prototypeOf("", eventGist.sourceResouceId(), eventGist.targetResouceId());
            if (this.validateRelationBetweenResource(relation, diagram, product, view)) continue;

            eventGist.rootCommand.undo();
            return false;
        }
        return true;
    }

    private validateRelationBetweenResource(relation: Relation, diagram: Diagram, product: Product, view: DiagramCanvas): boolean {
        const message = product.relationable(relation, diagram.id);
        if (message.length === 0) return true;
        view.showWarnBar(message);
        return false;
    }

    public apply(diagram: Diagram, product: Product, view: DiagramCanvas): Diagram {
        let modifiedDiagram = diagram;
        for (const eventGist of this.eventGists) {
            if (!eventGist.existsIdWhenConnectPorts()) continue;

            const connection = eventGist.connection;
            connection.onContextMenu = view.onClickConnectorOnCanvas;

            const original = Relation.prototypeOf(connection.id, eventGist.sourceResouceId(), eventGist.targetResouceId());
            const relation = this.customizeRelation(original, product);

            modifiedDiagram = modifiedDiagram.addRelation(relation);

            view.decorateConnection(connection, relation);
        }
        return modifiedDiagram;
    }

    protected customizeRelation(original: Relation, _product: Product): Relation {
        return original;
    }
}
