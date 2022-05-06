import Product from "@/domain/product/Product";

export default class ImportedProduct {
    constructor(public value: Product) { }

    public checkOfLogicalStructure(): boolean {
        const p = this.value;
        try {
            return !!p.id
                && !!p.updateAt
                && p.name.trim().length > 0
                && !!p.resourceIdSequence
                && p.resources.length >= 0
                && p.diagrams.length >= 0;
        } catch (e) {
            return false;
        }
    }
}