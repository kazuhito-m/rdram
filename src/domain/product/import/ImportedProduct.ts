import Product from "../Product";

export default class ImportedProduct {
    constructor(public value: Product) { }

    public checkOfLogicalStructure(): boolean {
        const p = this.value;
        if (
            !p.id
            || !p.updateAt
            || !p.name
            || p.name.trim().length === 0
            || !p.resourceIdSequence
        ) return false;
        try {
            return p.resources.length >= 0
                && p.diagrams.length >= 0;
        } catch (e) {
            return false;
        }
    }
}