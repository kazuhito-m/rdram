import { CanvasGuideType } from "../CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class BusinessFlowDiagram extends Rdra20Diagram {
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
            ResourceType.アクティビティ,
            ResourceType.ユースケース,
            ResourceType.始点終点,
        ];
    }

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        const resType = resource.type;
        if (ResourceType.アクター.equals(resType)) {
            width = 280;
            height = 700;
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

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            newDiagramId,
            Rdra20DiagramType.業務フロー図.id,
            name.trim(),
            [],
            [],
            768,
            1024,
            CanvasGuideType.GRID,
        );
    }
}
