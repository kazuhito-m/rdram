import Diagram from "../Diagram";
import ExportedResource from "@/domain/resource/export/ExportedResource";

export default class ExportedDiagram {
    public constructor(
        private readonly diagram: Diagram,
        private readonly useResources: ExportedResource[],
    ) {}
}