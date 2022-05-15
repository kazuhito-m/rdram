import Resource from "@/domain/resource/Resource";
import Diagram from "@/domain/diagram/Diagram";

export class ImportDiagramCandidate {
    constructor(
        private readonly diagram: Diagram,
        private readonly useResources: Resource[]
    ) { }
}