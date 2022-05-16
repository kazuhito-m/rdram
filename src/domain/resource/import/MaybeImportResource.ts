import Condition from "@/domain/resource/Condition";
import Purpose from "@/domain/resource/Purpose";
import Request from "@/domain/resource/Request";
import Requirement from "@/domain/resource/Requirement";
import Resource from "@/domain/resource/Resource";
import Scenario from "@/domain/resource/Scenario";
import StartOrEndPoint from "@/domain/resource/StartOrEndPoint";
import TableTypeCondition from "@/domain/resource/TableTypeCondition";
import Variation from "@/domain/resource/Variation";
import HasContentResource from "@/domain/resource/HasContentResource";

export default class MaybeImportResource {
    public constructor(
        public readonly value: Resource
    ) { }

    public checkOfLogicalStructure(): boolean {
        const r = this.value;
        try {
            if (!this.validate()) return false;
            if (r instanceof Condition && !this.validateCondition(r)) return false;
            if (r instanceof Purpose && !this.validateHasContent(r)) return false;
            if (r instanceof Request && !this.validateHasContent(r)) return false;
            if (r instanceof Requirement && !this.validateHasContent(r)) return false;
            if (r instanceof Scenario && !this.validateHasContent(r)) return false;
            if (r instanceof StartOrEndPoint && !this.validateStartOrEndPoint(r)) return false;
            if (r instanceof TableTypeCondition && !this.validateTableTypeCondition(r)) return false;
            if (r instanceof Variation && !this.validateVariation(r)) return false;
            return true;
        } catch (e) {
            return false;
        }
    }

    private validate(): boolean {
        const r = this.value;
        return r.resourceId > 0
            && r.type.name.length > 0
            && r.name.length > 0
            && r.description.length >= 0
            && (r.deletable === true || r.deletable === false);
    }

    private validateCondition(c: Condition): boolean {
        return c.value.length > 0;
    }

    private validateHasContent(h: HasContentResource): boolean {
        return h.content.length > 0;
    }

    private validateStartOrEndPoint(s: StartOrEndPoint): boolean {
        return s.startPoint === true
            || s.startPoint === false;
    }

    private validateTableTypeCondition(t: TableTypeCondition): boolean {
        const valid = t.leftVariationId > 0
            && t.topVariationId > 0;
        if (!valid) return false;

        for (const values of t.valuesOf()) {
            for (const value of values) {
                if (value.length <= 0) return false;
            }
        }
        return true;
    }

    private validateVariation(v: Variation): boolean {
        for (const value of v.valuesOf())
            if (value.length <= 0) return false;
        return true;
    }

    public resourceId(): number {
        return this.value.resourceId;
    }
}
