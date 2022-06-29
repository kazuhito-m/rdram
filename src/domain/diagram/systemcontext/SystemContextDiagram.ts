import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import Resources from "@/domain/resource/Resources";
import Resource from "@/domain/resource/Resource";
import Diagram from "@/domain/diagram/Diagram";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";

export default class SystemContextDiagram extends Diagram {
    protected constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
        width: number,
        height: number,
        canvasGuideTypeId: number,
    ) {
        super(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
            canvasGuideTypeId,
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

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        const resType = resource.type;
        if (ResourceType.システム.equals(resType)) {
            width = 350;
            height = 75;
        }
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideTypeId: number): SystemContextDiagram {
        return new SystemContextDiagram(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
            canvasGuideTypeId,
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
            Diagram.DEFAULT_CANVAS_GUIDE_ID,
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