import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import BusinessContextDiagramEditor from "~/presentation/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";
import RouterType from "~/domain/diagram/relation/RouterType";
import Relation from "~/domain/diagram/relation/Relation";
import FigureAnalyzer from "./FigureAnalyzer";

export default class BCDConnectPortsEvents implements EventsOfType<BusinessContextDiagram, BusinessContextDiagramEditor> {
    public eventGists: EventGist[] = [];

    private readonly figureAnalyzer = new FigureAnalyzer();

    public eventType(): string {
        return "Connect Ports";
    }

    public prototype(): BCDConnectPortsEvents {
        return new BCDConnectPortsEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product, view: BusinessContextDiagramEditor): boolean {
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
    public apply(diagram: BusinessContextDiagram, product: Product, view: BusinessContextDiagramEditor): boolean {
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
            diagram.addRelation(relation);
        }
        return true;
    }
}