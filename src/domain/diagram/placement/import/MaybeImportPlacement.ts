import Placement from "@/domain/diagram/placement/Placement";

export default class MaybeImportPlacement {
    constructor(private value: Placement) { }

    public validate(): boolean {
        const p = this.value;
        if (!p) return false;
        try {
            return p.x >= 0
                && p.y >= 0
                && p.width >= 0
                && p.height >= 0
                && p.resourceId > 0
                && (p.alias === true || p.alias === false);
        } catch (e) {
            return false;
        }
    }
}