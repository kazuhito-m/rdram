import { CanvasGuideType } from "../../CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import Resources from "@/domain/resource/Resources";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class SystemContextDiagram extends Rdra20Diagram {
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
            ResourceType.システム,
            ResourceType.目的,
            ResourceType.アクター,
            ResourceType.外部システム,
            ResourceType.自社システム,
        ];
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): SystemContextDiagram {
        return new SystemContextDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string, resources: Resources): SystemContextDiagram {
        const diagram = new SystemContextDiagram(
            newDiagramId,
            Rdra20DiagramType.システムコンテキスト図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
        // 特殊処理、Resource種が「システム」で、かつ「ひとつだけ」なら予め足してしまう。
        const resoucesOfSystem = resources.typeOf(ResourceType.システム);
        if (resoucesOfSystem.length !== 1) return diagram;
        const system = resoucesOfSystem.last();
        const placement = diagram.createPlacementAtCenter(system);
        if (!placement) return diagram;
        const modified = diagram.addPlacement(placement);
        return modified as SystemContextDiagram;
    }
}
