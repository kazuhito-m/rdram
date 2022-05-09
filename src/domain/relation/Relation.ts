import RouterType from "./RouterType";
import Midpoint from "./Midpoint";

export default class Relation {
    public static MEANING_MAX_LENGTH = 64;

    constructor(
        public readonly id: string,
        public readonly fromResourceId: number,
        public readonly toResourceId: number,
        public readonly routerTypeId: number,
        public readonly tipAllow: boolean,
        public readonly meaning: string,
        public readonly midpoints: Midpoint[],
    ) { }

    public get routerType(): RouterType {
        return RouterType.ofId(this.routerTypeId) as RouterType;
    }

    public static prototypeOf(id: string, fromResourceId: number, toResourceId: number): Relation {
        return new Relation(
            id,
            fromResourceId,
            toResourceId,
            RouterType.DIRECT.id,
            false,
            "",
            [],
        );
    }

    public reverse(): Relation {
        return this.withFromTo(
            this.toResourceId,
            this.fromResourceId,
        );
    }

    public otherSideOf(resourceId: number): number {
        if (!this.isRelatedTo(resourceId)) return 0;
        return this.fromResourceId === resourceId
            ? this.toResourceId
            : this.fromResourceId;
    }

    public isRelatedTo(resourceId: number): boolean {
        return this.fromResourceId === resourceId
            || this.toResourceId === resourceId;
    }

    public equalRoute(other: Relation): boolean {
        return this.fromResourceId === other.fromResourceId
            && this.toResourceId === other.toResourceId;
    }

    public equalRouteReversivle(other: Relation): boolean {
        return this.equalRoute(other)
            || this.reverse().equalRoute(other);
    }

    public changeMeaning(meaning: string): Relation {
        return this.with(meaning, this.routerType, this.tipAllow);
    }

    public changeRouter(routerType: RouterType): Relation {
        return this.with(this.meaning, routerType, this.tipAllow);
    }

    public changeTipAllow(value: boolean): Relation {
        return this.with(this.meaning, this.routerType, value);
    }

    private with(meaning: string, routerType: RouterType, tipAllow: boolean): Relation {
        return new Relation(
            this.id,
            this.fromResourceId,
            this.toResourceId,
            routerType.id,
            tipAllow,
            meaning.trim(),
            this.midpoints,
        );
    }

    public withFrom(fromResourceId: number): Relation {
        return this.withFromTo(
            fromResourceId, 
            this.toResourceId
        );
    }

    public withTo(toResourceId: number): Relation {
        return this.withFromTo(
            this.fromResourceId, 
            toResourceId
        );
    }

    private withFromTo(fromResourceId: number, toResourceId: number): Relation {
        return new Relation(
            this.id,
            fromResourceId,
            toResourceId,
            this.routerTypeId,
            this.tipAllow,
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
            this.tipAllow,
            this.meaning,
            this.midpoints.map(midpoint => midpoint.clone()),
        );
    }
}