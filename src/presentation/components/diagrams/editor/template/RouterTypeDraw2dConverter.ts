import RouterType from "~/domain/relation/RouterType";
import draw2d from "draw2d";

export default class RouterTypeDraw2dConverter {
    public makeRouterBy(routerType: RouterType): any {
        if (!routerType) return undefined;
        if (routerType.equals(RouterType.MANHATTAN))
            return new draw2d.layout.connection.ManhattanConnectionRouter();
        if (routerType.equals(RouterType.CIRCUIT))
            return new draw2d.layout.connection.CircuitConnectionRouter();
        if (routerType.equals(RouterType.SPLINE))
            return new draw2d.layout.connection.SplineConnectionRouter();
        // if (routerType.equals(RouterType.SKETCH))
        //    return new draw2d.layout.connection.SketchConnectionRouter();
        return undefined;
    }

    public analyzeRouterType(router: any): RouterType {
        if (!router) return RouterType.DIRECT;
        const name = router.NAME;
        if (!name) return RouterType.DIRECT;

        if (name === "draw2d.layout.connection.ManhattanConnectionRouter")
            return RouterType.MANHATTAN;
        if (name === "draw2d.layout.connection.CircuitConnectionRouter")
            return RouterType.CIRCUIT;
        if (name === "draw2d.layout.connection.SplineConnectionRouter")
            return RouterType.SPLINE;
        // if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;
        return RouterType.DIRECT;
    }

}