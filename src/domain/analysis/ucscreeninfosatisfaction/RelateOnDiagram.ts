import Diagram from "@/domain/diagram/Diagram";

export default class RelateOnDiagram {
    constructor(
        public readonly diagram: Diagram,
        public readonly relationId: string
    ) { }
}
