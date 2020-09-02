import Relation from "@/domain/relation/Relation";

export default class RelationFactory {
    public prototype(id: string, fromResourceId: number, toResourceId: number): Relation {
        return new Relation(
            id,
            fromResourceId,
            toResourceId,
            1,
            []
        );
    }
}