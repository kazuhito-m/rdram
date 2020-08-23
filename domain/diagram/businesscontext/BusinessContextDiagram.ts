import Diagram from "@/domain/diagram/Diagram";
import Relation from "../relation/Relation";
import Placement from "../placement/Placement";
import DiagramType from "../DiagramType";
import ResourceType from "~/domain/resource/ResourceType";

export default class BusinessContextDiagram extends Diagram {
    public static prototypeOf(newDiagramId: number, name: string): BusinessContextDiagram {
        return new BusinessContextDiagram(
            newDiagramId,
            DiagramType.ビジネスコンテキスト図.id,
            name,
            [],
            [],
        );
    }
}