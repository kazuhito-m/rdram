import { CanvasGuideType } from "../CanvasGuideType";
import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";

export default class UsageSceneDiagram extends Diagram {
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

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        const resType = resource.type;
        if (ResourceType.シナリオ.equals(resType)) {
            width = 350;
            height = 75;
        }
        if (ResourceType.ユースケース.equals(resType)) {
            width = 105;
            height = 35;
        }
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): Diagram {
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
