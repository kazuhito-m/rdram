import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class RequestModelDiagram extends Rdra20Diagram {
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
            ResourceType.アクター,
            ResourceType.要求,
            ResourceType.要件,
        ];
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): RequestModelDiagram {
        return new RequestModelDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): RequestModelDiagram {
        return new RequestModelDiagram(
            newDiagramId,
            Rdra20DiagramType.要求モデル図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}
