import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import DiagramType from "@/domain/diagram/DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";

export default class BusinessFlowDiagram extends Diagram {
    protected constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
        width: number,
        height: number,
    ) {
        super(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
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
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    public with(name: string): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            this.id,
            this.typeId,
            name.trim(),
            this.relations,
            this.placements,
            this.width,
            this.height,
        );
    }

    protected replaceRelations(relations: Relation[]): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            this.id,
            this.typeId,
            this.name,
            relations,
            this.placements,
            this.width,
            this.height,
        );
    }

    protected replacePlacement(placements: Placement[]): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            placements,
            this.width,
            this.height,
        );
    }

    public resize(width: number, height: number): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            this.placements,
            width,
            height,
        );
    }

    public cloneWith(newDiagramId: number, newName: string): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            newDiagramId,
            this.typeId,
            newName,
            this.relations.map(relation => relation.clone()),
            this.placements.map(placement => placement.clone()),
            this.width,
            this.height,
        );
    }

    public removeResouceOf(resource: Resource): BusinessFlowDiagram {
        const resourceId = resource.resourceId;
        return new BusinessFlowDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations.filter(r => !r.isRelatedTo(resourceId)),
            this.placements.filter(p => p.resourceId !== resourceId),
            this.width,
            this.height,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string): BusinessFlowDiagram {
        return new BusinessFlowDiagram(
            newDiagramId,
            DiagramType.業務フロー図.id,
            name.trim(),
            [],
            [],
            1024,
            1024,
        );
    }
}