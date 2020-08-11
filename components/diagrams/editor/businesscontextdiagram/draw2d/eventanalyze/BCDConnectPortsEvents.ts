import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import BusinessContextDiagramEditor from "~/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
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
        // TODO 同一関連線は引けない
        // TODO UIにどうやって伝播しようか…。
        return true;
    }
    public apply(diagram: BusinessContextDiagram, product: Product, view: BusinessContextDiagramEditor): boolean {
        for (let eventGist of this.eventGists) {
            const srcResourceId = parseInt(eventGist.source?.getParent().id, 10);
            const distResourceId = parseInt(eventGist.target?.getParent().id, 10);

            if (!srcResourceId || !distResourceId) continue;

            const connection = eventGist.connection;
            const routerType = this.analyzeRouterType(connection.router);

            const relation: Relation = {
                id: connection.id,
                fromResourceId: srcResourceId,
                toResourceId: distResourceId,
                routerTypeId: routerType.id,
                midpoints: []
            };

            diagram.relations.push(relation);
        }
        return true;
    }

    private analyzeRouterType(router: any): RouterType {
        if (!router) return RouterType.DIRECT;
        const name = router.NAME;
        if (!name) return RouterType.DIRECT;

        if (name === "draw2d.layout.connection.InteractiveManhattanConnectionRouter") return RouterType.INTERACTIVE_MANHATTAN;
        if (name === "draw2d.layout.connection.CircuitConnectionRouter") return RouterType.CIRCUIT;
        if (name === "draw2d.layout.connection.SplineConnectionRouter") return RouterType.SPLINE;
        if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;
        return RouterType.DIRECT;
    }
}