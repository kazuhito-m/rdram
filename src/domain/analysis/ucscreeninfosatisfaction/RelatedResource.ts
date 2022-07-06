import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";

export default class RelatedResource {
    constructor(
        public readonly resource: Resource,
        public readonly relateOnDiagrams: Diagram[]
    ) { }

    public get id(): number {
        return this.resource.resourceId;
    }
}
