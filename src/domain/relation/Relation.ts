import RouterType from "./RouterType";
import Midpoint from "./Midpoint";

export default class Relation {
    constructor(
        public readonly id: string,
        public readonly fromResourceId: number,
        public readonly toResourceId: number,
        public readonly routerTypeId: number,
        public readonly meaning: string,
        public readonly midpoints: Midpoint[],
    ) { }

    public static prototypeOf(id: string, fromResourceId: number, toResourceId: number): Relation {
        return new Relation(
            id,
            fromResourceId,
            toResourceId,
            RouterType.DIRECT.id,
            "",
            [],
        );
    }

    public reverse(): Relation {
        return new Relation(
            this.id,
            this.toResourceId,
            this.fromResourceId,
            this.routerTypeId,
            this.meaning,
            this.midpoints,
        );
    }

    public isRelatedTo(resourceId: number): boolean {
        return this.fromResourceId === resourceId
            || this.toResourceId === resourceId;
    }

    public equalRoute(other: Relation): boolean {
        return this.fromResourceId === other.fromResourceId && this.toResourceId === other.toResourceId;
    }

    public equalRouteReversivle(other: Relation): boolean {
        return this.equalRoute(other) || this.reverse().equalRoute(other);
    }

    public changeRouter(routerType: RouterType): Relation {
        return new Relation(
            this.id,
            this.fromResourceId,
            this.toResourceId,
            routerType.id,
            this.meaning,
            this.midpoints,
        );
    }

    public clone(): Relation {
        return new Relation(
            this.id,
            this.fromResourceId,
            this.toResourceId,
            this.routerTypeId,
            this.meaning,
            this.midpoints.map(midpoint => midpoint.clone()),
        );
    }
}