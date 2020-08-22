import Midpoint from "./Midpoint";
import { Type } from "class-transformer";
import RouterType from "./RouterType";

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
    private readonly routerTypeId: number;
    @Type(() => Midpoint)
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

    public some(other: Relation): boolean {
        return this.fromResourceId === other.fromResourceId && this.toResourceId === other.toResourceId
            || this.fromResourceId === other.toResourceId && this.toResourceId === other.fromResourceId;
    }
}