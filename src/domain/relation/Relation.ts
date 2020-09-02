import RouterType from "./RouterType";
import Midpoint from "./Midpoint";

export default class Relation {
    constructor(
        id: string,
        fromResourceId: number,
        toResourceId: number,
        routerTypeId: number,
        midpoints: Midpoint[],
    ) {
        this.id = id;
        this.fromResourceId = fromResourceId;
        this.toResourceId = toResourceId;
        this.routerTypeId = routerTypeId;
        this.midpoints = midpoints;
    }

    public readonly id: string;
    public readonly fromResourceId: number;
    public readonly toResourceId: number;
    public readonly routerTypeId: number;
    private readonly midpoints: Midpoint[];

    static prototypeOf(id: string, fromResourceId: number, toResourceId: number): Relation {
        return new Relation(
            id,
            fromResourceId,
            toResourceId,
            RouterType.DIRECT.id,
            [],
        );
    }

    public isRelatedTo(resourceId: number): boolean {
        return this.fromResourceId === resourceId
            || this.toResourceId === resourceId;
    }

    public some(other: Relation): boolean {
        return this.fromResourceId === other.fromResourceId && this.toResourceId === other.toResourceId
            || this.fromResourceId === other.toResourceId && this.toResourceId === other.fromResourceId;
    }

    public changeRouter(routerType: RouterType): Relation {
        return new Relation(
            this.id,
            this.fromResourceId,
            this.toResourceId,
            routerType.id,
            this.midpoints,
        );
    }

    public clone(): Relation {
        return new Relation(
            this.id,
            this.fromResourceId,
            this.toResourceId,
            this.routerTypeId,
            this.midpoints.map(midpoint => midpoint.clone()),
        );      
    }
}