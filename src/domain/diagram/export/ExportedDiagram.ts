import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";

export default class ExportedDiagram {
    public constructor(
        public readonly diagram: Diagram,
        public readonly useResources: Resource[],
    ) { }
}