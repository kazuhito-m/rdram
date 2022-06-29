import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Diagram from "@/domain/diagram/Diagram";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import { CanvasGuideType } from "../CanvasGuideType";

export default class RequestModelDiagram extends Diagram {
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
            ResourceType.要求,
            ResourceType.要件,
        ];
    }

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        const resType = resource.type;
        if (ResourceType.要求.equals(resType)
            || ResourceType.要件.equals(resType)) {
            width = 200;
            height = 37;
        }
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): RequestModelDiagram {
        return new RequestModelDiagram(
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

    public with(name: string): RequestModelDiagram {
        return new RequestModelDiagram(
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

    public replacePlacement(placements: Placement[]): RequestModelDiagram {
        return new RequestModelDiagram(
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

    public replaceRelations(relations: Relation[]): RequestModelDiagram {
        return new RequestModelDiagram(
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

    public resize(width: number, height: number): RequestModelDiagram {
        return new RequestModelDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            this.placements,
            width,
            height,
            this.canvasGuideType,
        );
    }

    public cloneWith(newDiagramId: number, newName: string): RequestModelDiagram {
        return new RequestModelDiagram(
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

    public removeResouceOf(resource: Resource): RequestModelDiagram {
        const resourceId = resource.resourceId;
        return new RequestModelDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): RequestModelDiagram {
        return new RequestModelDiagram(
            newDiagramId,
            Rdra20DiagramType.要求モデル図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}