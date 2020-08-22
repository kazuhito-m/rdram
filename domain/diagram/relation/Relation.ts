import Midpoint from "./Midpoint";
import { Type } from "class-transformer";

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

    private readonly id: string;
    private readonly fromResourceId: number;
    private readonly toResourceId: number;
    private readonly routerTypeId: number;
    @Type(() => Midpoint)
    private readonly midpoints: Midpoint[];
}