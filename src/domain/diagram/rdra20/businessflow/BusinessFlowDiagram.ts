import { CanvasGuideType } from "../../CanvasGuideType";
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
        const placement = super.createPlacement(resource, left, top);
        if (!placement || !ResourceType.アクター.equals(resource.type)) return placement;
        return placement!.resize(280, 700);
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
