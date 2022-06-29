import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class StateModelDiagram extends Rdra20Diagram {
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
            ResourceType.ユースケース,
            ResourceType.状態,
            ResourceType.状態グループ,
            ResourceType.始点終点,
        ];
    }

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        const resType = resource.type;
        if (ResourceType.ユースケース.equals(resType)) {
            width = 120;
            height = 40;
        }
        if (ResourceType.状態.equals(resType)) {
            width = 160;
            height = 40;
        }
        if (ResourceType.状態グループ.equals(resType)) {
            width = 200;
            height = 120;
        }
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): StateModelDiagram {
        return new StateModelDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): StateModelDiagram {
        return new StateModelDiagram(
            newDiagramId,
            Rdra20DiagramType.状態モデル図.id,
            name.trim(),
            [],
            [],
            768,
            1024,
            CanvasGuideType.GRID,
        );
    }
}
