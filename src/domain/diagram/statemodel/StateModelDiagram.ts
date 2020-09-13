import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import DiagramType from "@/domain/diagram/DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "~/domain/resource/Resource";
import CanvasGuideType from "~/presentation/components/diagrams/editor/toolbar/CanvasGuideType";

export default class StateModelDiagram extends Diagram {
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
        if (ResourceType.状態グループ.equals(resType)) {
            width = 100;
            height = 40;
        }
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    public with(name: string): StateModelDiagram {
        return new StateModelDiagram(
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

    protected replacePlacement(placements: Placement[]): StateModelDiagram {
        return new StateModelDiagram(
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

    protected replaceRelations(relations: Relation[]): StateModelDiagram {
        return new StateModelDiagram(
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

    public resize(width: number, height: number): StateModelDiagram {
        return new StateModelDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            this.placements,
            width,
            height,
            this.canvasGuideTypeId
        );
    }

    public cloneWith(newDiagramId: number, newName: string): StateModelDiagram {
        return new StateModelDiagram(
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

    public removeResouceOf(resource: Resource): StateModelDiagram {
        const resourceId = resource.resourceId;
        return new StateModelDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): StateModelDiagram {
        return new StateModelDiagram(
            newDiagramId,
            DiagramType.状態モデル.id,
            name.trim(),
            [],
            [],
            768,
            1024,
            CanvasGuideType.グリッド.id,
        );
    }
}