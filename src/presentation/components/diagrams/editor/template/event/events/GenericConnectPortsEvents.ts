import EventsOfType from "~/presentation/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "~/presentation/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/presentation/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "~/domain/product/Product";
import RouterType from "~/domain/relation/RouterType";
import Relation from "@/domain/relation/Relation";
import RouterTypeDraw2dConverter from "../../RouterTypeDraw2dConverter";
import Diagram from "~/domain/diagram/Diagram";

export default class GenericConnectPortsEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    private readonly routerConverter = new RouterTypeDraw2dConverter();

    public eventType(): string {
        return "Connect Ports";
    }

    public prototype(): GenericConnectPortsEvents {
        return new GenericConnectPortsEvents();
    }

    public validate(diagram: Diagram, product: Product, view: DiagramCanvas): boolean {
        for (let eventGist of this.eventGists) {
            const srcResourceId = parseInt(eventGist.source?.getParent().id, 10);
            const distResourceId = parseInt(eventGist.target?.getParent().id, 10);
            if (!srcResourceId || !distResourceId) continue;

            const relation = Relation.prototypeOf("", srcResourceId, distResourceId);
            if (!this.validateRelationBetweenResource(relation, diagram, product, view)) {
                eventGist.rootCommand.undo();
                return false;
            }
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
        for (let eventGist of this.eventGists) {
            const srcResourceId = parseInt(eventGist.source?.getParent().id, 10);
            const distResourceId = parseInt(eventGist.target?.getParent().id, 10);
            if (!srcResourceId || !distResourceId) continue;

            const connection = eventGist.connection;
            connection.onContextMenu = view.onClickConnectorOnCanvas;

            let relation = Relation.prototypeOf(connection.id, srcResourceId, distResourceId);

            if (view.isFlowRelation(relation)) {
                const defaultRouterType = RouterType.MANHATTAN;
                relation = relation.changeRouter(defaultRouterType);
                connection.setRouter(this.routerConverter.makeRouterBy(defaultRouterType));
            }

            modifiedDiagram = modifiedDiagram.addRelation(relation);

            view.decorateWhenFlow(relation, connection);
        }
        return modifiedDiagram;
    }
}