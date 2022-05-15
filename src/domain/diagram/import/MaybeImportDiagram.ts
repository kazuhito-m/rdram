import Diagram from "@/domain/diagram/Diagram";
import MaybeImportResource from "@/domain/resource/import/MaybeImportResource";
import MaybeImportRelation from "@/domain/relation/import/MaybeImportRelation";
import MaybeImportPlacement from "@/domain/diagram/placement/import/MaybeImportPlacement";
import ExportedDiagram from "@/domain/diagram/export/ExportedDiagram";

export default class MaybeImportDiagram {
    public constructor(
        public readonly diagram: Diagram,
        private readonly resources: MaybeImportResource[],
    ) { }

    public checkOfLogicalStructure() {
        const d = this.diagram;
        try {
            return this.validate()
                && d.allRelations()
                    .map(r => new MaybeImportRelation(r))
                    .every(ir => ir.validate())
                && d.placements
                    .map(p => new MaybeImportPlacement(p))
                    .every(ip => ip.validate())
                && this.checkOfLogicalResources()
                && this.checkOfLogicalRelations();
        } catch (e) {
            return false;
        }
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

    private checkOfLogicalResources(): boolean {
        const resourcesIsLogical = this.resources
            .every(resource => resource.checkOfLogicalStructure());
        if (!resourcesIsLogical) return false;

        const idsOnDiagram = this.diagram.placements
            .map(placement => placement.resourceId);
        const useIds = this.resources
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
        const useIds = this.resources
            .map(use => use.resourceId());
        return this.diagram
            .allRelations()
            .map(r => r)
            .every(r => useIds.includes(r.fromResourceId)
                && useIds.includes(r.toResourceId));
    }

    

    /**
     * 一度「自身のシステムに無いResourceId群」にするため、すべてのResorceIdを正負反転する。
     */
    public replaceUniqueResourceIds(): MaybeImportDiagram {
        const diagram = this.diagram;
        const placements = diagram.placements
            .map(p => p.withResourceIdOf(-p.resourceId));
        const relations = diagram.allRelations()
            .map(r => r.withFrom(-r.fromResourceId).withTo(-r.toResourceId));
        const newDiaglam = diagram
            .replacePlacement(placements)
            .replaceRelations(relations);
        const newResources = this.resources
            .map(r => r.inversionNegativeResourceId())
        return new MaybeImportDiagram(newDiaglam, newResources);
    }

    public static of(exportedDiagram: ExportedDiagram): MaybeImportDiagram | null {
        if (!exportedDiagram
            || !exportedDiagram.diagram
            || !exportedDiagram.useResources) return null;
        const importedResouces = exportedDiagram.useResources
            .map(r => new MaybeImportResource(r));
        return new MaybeImportDiagram(exportedDiagram.diagram, importedResouces);
    }
}