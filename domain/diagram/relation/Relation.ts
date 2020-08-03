import Midpoint from "./Midpoint";

export default interface Relation {
    id: string;
    fromResourceId: number;
    toResourceId: number;
    routerTypeId: number;
    midpoints: Midpoint[];
}