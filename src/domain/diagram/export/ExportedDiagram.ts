import Diagram from "../Diagram";
import ExportedResource from "@/domain/resource/export/ExportedResource";
import Resources from "~/domain/resource/Resources";

export default class ExportedDiagram {
    public constructor(
        private readonly diagram: Diagram,
        private readonly useResources: ExportedResource[],
    ) {}

    public checkOfLogicalStructure() {
        const d = this.diagram;
        try {
            // TODO ちゃんとしたチェックを実装。
            return !!d.id
                && this.checkOfLogicalStructureResources();
        } catch (e) {
            return false;
        }
    }

    private checkOfLogicalStructureResources(): boolean {
        return this.useResources
            .every(resource => resource.checkOfLogicalStructure());
    }

    public fixedDiagram(): Diagram {
        return this.diagram;
    }

    public fixedResources():Resources {
        const values = this.useResources
            .map(useResource => useResource.resource);
        return new Resources(values);
    } 
}