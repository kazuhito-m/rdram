import Relation from "@/domain/relation//Relation";

export default class ImportedRelation {
    constructor(private value: Relation) { }

    public validate(): boolean {
        const r = this.value;
        if (!r) return false;
        try {
            return r.id.length > 0
                && r.fromResourceId > 0
                && r.toResourceId > 0
                && r.routerType.name.length > 0
                && (r.tipAllow === true || r.tipAllow === false)
                && r.meaning.length >= 0
                && r.midpoints.length >= 0;
        } catch (e) {
            return false;
        }
    }
}