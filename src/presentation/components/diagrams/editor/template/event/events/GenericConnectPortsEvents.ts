import EventsOfType from "~/presentation/components/diagrams/editor/template/event/EventsOfType";
import EventGist from "~/presentation/components/diagrams/editor/template/event/EventGist";
import DiagramCanvas from "@/presentation/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "~/domain/product/Product";
import RouterType from "~/domain/diagram/relation/RouterType";
import Relation from "~/domain/diagram/relation/Relation";
import FigureAnalyzer from "./FigureAnalyzer";
import Diagram from "~/domain/diagram/Diagram";

export default class GenericConnectPortsEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    private readonly figureAnalyzer = new FigureAnalyzer();

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

            const relation = new Relation("", srcResourceId, distResourceId, RouterType.DIRECT.id, []);
            const exists = diagram.existsSomeRelation(relation);
            if (exists) {
                view.showWarnBar('すでに関連が存在します。');
                eventGist.rootCommand.undo();
                return false;
            }
        }
        return true;
    }
    public apply(diagram: Diagram, product: Product, view: DiagramCanvas): Diagram {
        let modifiedDiagram = diagram;
        for (let eventGist of this.eventGists) {
            const srcResourceId = parseInt(eventGist.source?.getParent().id, 10);
            const distResourceId = parseInt(eventGist.target?.getParent().id, 10);
            if (!srcResourceId || !distResourceId) continue;

            const connection = eventGist.connection;
            connection.onContextMenu = view.onClickConnectorOnCanvas;

            const routerType = view.analyzeRouterType(connection.router);

            const relation = new Relation(
                connection.id,
                srcResourceId,
                distResourceId,
                routerType.id,
                [],
            );
            modifiedDiagram = modifiedDiagram.addRelation(relation);
        }
        return modifiedDiagram;
    }
}