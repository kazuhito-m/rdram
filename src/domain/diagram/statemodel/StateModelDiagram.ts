import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import { CanvasGuideType } from "../CanvasGuideType";

export default class StateModelDiagram extends Diagram {
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

    public with(name: string): StateModelDiagram {
        return new StateModelDiagram(
            this.id,
            this.typeId,
            name.trim(),
            this.relations,
            this.placements,
            this.width,
            this.height,
            this.canvasGuideType,
        );
    }

    public replacePlacement(placements: Placement[]): StateModelDiagram {
        return new StateModelDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            placements,
            this.width,
            this.height,
            this.canvasGuideType,
        );
    }

    public replaceRelations(relations: Relation[]): StateModelDiagram {
        return new StateModelDiagram(
            this.id,
            this.typeId,
            this.name,
            relations,
            this.placements,
            this.width,
            this.height,
            this.canvasGuideType,
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
            this.canvasGuideType
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
            this.canvasGuideType,
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
            this.canvasGuideType,
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