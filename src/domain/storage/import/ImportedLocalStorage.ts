import LocalStorage from "../LocalStorage";

export default class ImportedLocalStorage {
    constructor(public value: LocalStorage) { }

    public checkOfLogicalStructure(): boolean {
        const s = this.value;
        if (!s) return false;
        if (
            !s.updateAt
            || !s.status
            || !s.status.currentProductId
            || !s.products
        ) return false;
        try {
            return s.products.length() >= 0;
        } catch (e) {
            return false;
        }
    }
}