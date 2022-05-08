import Diagram from "../Diagram";
import ExportedResource from "@/domain/resource/export/ExportedResource";
import Resources from "@/domain/resource/Resources";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";

export default class ExportedDiagram {
    public constructor(
        private readonly diagram: Diagram,
        private readonly useResources: ExportedResource[],
    ) { }

    public checkOfLogicalStructure() {
        const d = this.diagram;
        try {
            return this.validate()
                && d.allRelations()
                    .map(this.validateRelation)
                    .every(v => v)
                && d.placements.every(this.validatePlacement)
                && this.checkOfLogicalResources()
                && this.checkOfLogicalRelations();
        } catch (e) {
            return false;
        }
    }

    private checkOfLogicalResources(): boolean {
        const resourcesIsLogical = this.useResources
            .every(resource => resource.checkOfLogicalStructure());
        if (!resourcesIsLogical) return false;

        const idsOnDiagram = this.diagram.placements
            .map(placement => placement.resourceId);
        const useIds = this.useResources
            .map(use => use.resourceId());
        return this.equalArrays(idsOnDiagram, useIds);
    }

    private equalArrays(left: number[], right: number[]) {
        if (left.length !== right.length) return false;
        const sortedL = this.sort(left);
        const sortedR = this.sort(right);
        for (let i = 0; i < sortedL.length; i++)
            if (sortedL[i] !== sortedR[i]) return false;
        return true;
    }

    private sort(numbers: number[]) {
        return numbers.slice()
            .sort((l, r) => l - r);
    }

    private checkOfLogicalRelations(): boolean {
        const useIds = this.useResources
            .map(use => use.resourceId());
        return this.diagram
            .allRelations()
            .map(r => r)
            .every(r => useIds.includes(r.fromResourceId)
                && useIds.includes(r.toResourceId));
    }


    private validateRelation(relation: Relation): boolean {
        const r = relation;
        return r.id.length > 0
            && r.fromResourceId > 0
            && r.toResourceId > 0
            && r.routerType.name.length > 0
            && (r.tipAllow === true || r.tipAllow === false)
            && r.meaning.length >= 0
            && r.midpoints.length >= 0
    }

    private validatePlacement(placement: Placement): boolean {
        const p = placement;
        return p.x >= 0
            && p.y >= 0
            && p.width >= 0
            && p.height >= 0
            && p.resourceId > 0
            && (p.alias === true || p.alias === false);
    }
    private validate(): boolean {
        const d = this.diagram;
        return d.id > 0
            && d.type.id > 0
            && d.name.length > 0
            && d.allRelations().length >= 0
            && d.placements.length >= 0
            && d.width > 0
            && d.height > 0
            && d.canvasGuideTypeId > 0;
    }

    public fixedDiagram(): Diagram {
        return this.diagram;
    }

    public fixedResources(): Resources {
        const values = this.useResources
            .map(useResource => useResource.resource);
        return new Resources(values);
    }
}