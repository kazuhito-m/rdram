import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class UsageSceneDiagram extends Rdra20Diagram {
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
            ResourceType.利用シーン,
            ResourceType.シナリオ,
            ResourceType.ユースケース,
            ResourceType.アクター,
        ];
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): UsageSceneDiagram {
        return new UsageSceneDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): UsageSceneDiagram {
        return new UsageSceneDiagram(
            newDiagramId,
            Rdra20DiagramType.利用シーン図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}
