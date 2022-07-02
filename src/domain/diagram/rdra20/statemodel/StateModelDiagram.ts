import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";
import RelationWithResources from "@/domain/relation/RelationWithResources";

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

    public relationableLocalRuleOnDiagramOf(relationPlus: RelationWithResources): string {
        if (relationPlus.existsType(ResourceType.始点終点)) {
            if (!relationPlus.existsAnyTypes(ResourceType.状態, ResourceType.状態グループ)) {
                return "そのアイコン種類の間に関連は引けません。"
            }
        }
        if (relationPlus.existsAnyTypes(ResourceType.状態, ResourceType.状態グループ)) {
            if (!relationPlus.existsAnyTypes(ResourceType.ユースケース, ResourceType.始点終点)) {
                return "そのアイコン種類の間に関連は引けません。";
            }
        }
        return "";
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
        const placement = super.createPlacement(resource, left, top);
        if (!placement || !ResourceType.ユースケース.equals(resource.type)) return placement;
        return placement!.resize(120, 40);
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
