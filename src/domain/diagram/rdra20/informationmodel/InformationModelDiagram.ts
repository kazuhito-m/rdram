import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class InformationModelDiagram extends Rdra20Diagram {
    protected constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
        width: number,
        height: number,
        canvasGuideType: CanvasGuideType,
    ) {
        super(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
            canvasGuideType,
        );
    }

    public availableResourceTypes(): ResourceType[] {
        return [
            ResourceType.情報,
            ResourceType.情報グループ,
        ];
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): InformationModelDiagram {
        return new InformationModelDiagram(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
            canvasGuideType,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string): InformationModelDiagram {
        return new InformationModelDiagram(
            newDiagramId,
            Rdra20DiagramType.情報モデル図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}
