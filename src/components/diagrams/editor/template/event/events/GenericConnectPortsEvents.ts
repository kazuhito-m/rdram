import EventsOfType from "@/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "@/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "@/domain/product/Product";
import RouterType from "@/domain/relation/RouterType";
import Relation from "@/domain/relation/Relation";
import RouterTypeDraw2dConverter from "../../RouterTypeDraw2dConverter";
import Diagram from "@/domain/diagram/Diagram";

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

            console.log("isFlowRelation() 判定前の直前");
            if (view.isFlowRelation(relation)) {
                console.log("isFlowRelation() 判定に入る");
                relation = relation
                    .changeRouter(RouterType.MANHATTAN)
                    .changeTipAllow(true);
                    console.log("isFlowRelation() 判定後のallow:" + relation.tipAllow);
            }

            modifiedDiagram = modifiedDiagram.addRelation(relation);

            view.decorateConnection(connection, relation);
        }
        return modifiedDiagram;
    }
}