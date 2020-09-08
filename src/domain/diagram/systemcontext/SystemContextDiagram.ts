import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import DiagramType from "@/domain/diagram/DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resources from "@/domain/resource/Resources";
import Resource from "~/domain/resource/Resource";
import CanvasGuideType from "~/presentation/components/diagrams/editor/toolbar/CanvasGuideType";

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

    public with(name: string): SystemContextDiagram {
        return new SystemContextDiagram(
            this.id,
            this.typeId,
            name.trim(),
            this.relations,
            this.placements,
            this.width,
            this.height,
            this.canvasGuideTypeId,
        );
    }

    protected replacePlacement(placements: Placement[]): SystemContextDiagram {
        return new SystemContextDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            placements,
            this.width,
            this.height,
            this.canvasGuideTypeId,
        );
    }

    protected replaceRelations(relations: Relation[]): SystemContextDiagram {
        return new SystemContextDiagram(
            this.id,
            this.typeId,
            this.name,
            relations,
            this.placements,
            this.width,
            this.height,
            this.canvasGuideTypeId,
        );
    }

    public resize(width: number, height: number): SystemContextDiagram {
        return new SystemContextDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            this.placements,
            width,
            height,
            this.canvasGuideTypeId,
        );
    }

    public cloneWith(newDiagramId: number, newName: string): SystemContextDiagram {
        return new SystemContextDiagram(
            newDiagramId,
            this.typeId,
            newName,
            this.relations.map(relation => relation.clone()),
            this.placements.map(placement => placement.clone()),
            this.width,
            this.height,
            this.canvasGuideTypeId,
        );
    }

    public removeResouceOf(resource: Resource): SystemContextDiagram {
        const resourceId = resource.resourceId;
        return new SystemContextDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations.filter(r => !r.isRelatedTo(resourceId)),
            this.placements.filter(p => p.resourceId !== resourceId),
            this.width,
            this.height,
            this.canvasGuideTypeId,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string, resources: Resources): SystemContextDiagram {
        const diagram = new SystemContextDiagram(
            newDiagramId,
            DiagramType.システムコンテキスト図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.なし.id,
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