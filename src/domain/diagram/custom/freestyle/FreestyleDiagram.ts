import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import CustomDiagram from "@/domain/diagram/custom/CustomDiagram";
import CustomDiagramType from "@/domain/diagram/custom/CustomDiagramType";

export default class FreestyleDiagram extends CustomDiagram {
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
        return ResourceType.values()
            .filter(type => !type.equals(ResourceType.始点終点));
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): FreestyleDiagram {
        return new FreestyleDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): FreestyleDiagram {
        return new FreestyleDiagram(
            newDiagramId,
            CustomDiagramType.フリースタイル図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}
