import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";

export default class ExportedDiagram {
    public constructor(
        private readonly diagram: Diagram,
        private readonly useResources: Resource[],
    ) { }
}