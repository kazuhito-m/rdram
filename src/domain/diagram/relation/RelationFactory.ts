import Relation from "./Relation";

export default class RelationFactory {
    public prototype(id: string, fromResourceId: number, toResourceId: number): Relation {
        return {
            id: id,
            fromResourceId: fromResourceId,
            toResourceId: toResourceId,
            routerTypeId: 1,
            midpoints: []
        };
    }
}