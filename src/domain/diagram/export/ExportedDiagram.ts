import ExportedResource from "@/domain/resource/export/ExportedResource";
import Diagram from "../Diagram";

export default class ExportedDiagram {
    public constructor(
        private readonly diagram: Diagram,
        private readonly useResources: ExportedResource[],
    ) {}
}