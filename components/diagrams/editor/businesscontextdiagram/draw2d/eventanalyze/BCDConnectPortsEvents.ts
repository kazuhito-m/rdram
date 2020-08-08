import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";
import RouterType from "~/domain/diagram/relation/RouterType";
import Relation from "~/domain/diagram/relation/Relation";

export default class BCDConnectPortsEvents implements EventsOfType<BusinessContextDiagram> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Connect Ports";
    }

    public prototype(): BCDConnectPortsEvents {
        return new BCDConnectPortsEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product): boolean {
        // TODO 同一関連線は引けない
        // TODO UIにどうやって伝播しようか…。
        return true;
    }
    public apply(diagram: BusinessContextDiagram, product: Product): boolean {
        for (let eventGist of this.eventGists) {
            const srcResourceId = this.analyzeResourceId(eventGist.source);
            const distResourceId = this.analyzeResourceId(eventGist.target);

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

    private analyzeResourceId(figure?: Figure): number | null {
        if (!figure) return null;

        let id = figure.getId();
        if (!id || id.search(/^[0-9]+$/)) {
            const parent = figure.getParent();
            id = parent.getId();
        }
        const resourceId = parseInt(id, 10);
        return resourceId;
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