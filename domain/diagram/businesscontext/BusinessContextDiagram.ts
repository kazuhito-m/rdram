import Diagram from "@/domain/diagram/Diagram";
import Relation from "../relation/Relation";
import Placement from "../placement/Placement";
import DiagramType from "../DiagramType";

export default class BusinessContextDiagram extends Diagram {
    private constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
    ) {
        super(
            id,
            typeId,
            name,
            relations,
            placements,
        );
    }

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