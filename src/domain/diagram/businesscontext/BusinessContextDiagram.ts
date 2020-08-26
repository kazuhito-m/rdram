import Diagram from "@/domain/diagram/Diagram";
import Relation from "../relation/Relation";
import Placement from "../placement/Placement";
import DiagramType from "../DiagramType";
import ResourceType from "~/domain/resource/ResourceType";

export default class BusinessContextDiagram extends Diagram {
    protected constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
        width: number,
        height: number,
    ) {
        super(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
        );
    }

    public availableResourceTypes(): ResourceType[] {
        return [
            ResourceType.業務,
            ResourceType.アクター,
            ResourceType.商品,
            ResourceType.設備,
            ResourceType.契約,
            ResourceType.サービス,
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
            1024,
            768,
        );
    }
}