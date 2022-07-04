import Resource from "~/domain/resource/Resource";

export default class RelatedResource {
    constructor(
        public readonly resource: Resource,
        public readonly relateOnDiagramId: number
    ) { }
}
