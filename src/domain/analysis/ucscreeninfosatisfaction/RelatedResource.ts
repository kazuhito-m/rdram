import RelateOnDiagram from "./RelateOnDiagram";
import Resource from "@/domain/resource/Resource";
import Diagram from "@/domain/diagram/Diagram";

export default class RelatedResource {
    constructor(
        public readonly resource: Resource,
        public readonly relateOnDiagrams: RelateOnDiagram[]
    ) { }

    public get id(): number {
        return this.resource.resourceId;
    }

    public get relateCount(): number {
        return this.relateOnDiagrams.length;
    }

    public get diagrams(): Diagram[] {
        return this.relateOnDiagrams
            .map(r => r.diagram);
    }
}
