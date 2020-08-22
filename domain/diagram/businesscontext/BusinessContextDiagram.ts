import Diagram from "@/domain/diagram/Diagram";
import Relation from "../relation/Relation";
import Placement from "../placement/Placement";
import DiagramType from "../DiagramType";
import ResourceType from "~/domain/resource/ResourceType";

export default class BusinessContextDiagram extends Diagram {
  modifyRelationOf(changed: Relation) {
    throw new Error("Method not implemented.");
  }
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

    public availableResourceTypes(): ResourceType[] {
        return [
            ResourceType.業務,
            ResourceType.アクター,
            ResourceType.商品,
            ResourceType.設備,
            ResourceType.組織,
            ResourceType.会社,
        ];
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