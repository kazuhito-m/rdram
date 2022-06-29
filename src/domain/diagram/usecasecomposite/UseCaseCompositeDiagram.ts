import { CanvasGuideType } from "../CanvasGuideType";
import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";

export default class UseCaseCompositeDiagram extends Diagram {
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
            ResourceType.情報,
            ResourceType.画面,
            ResourceType.イベント,
            ResourceType.タイマー,
            ResourceType.バリエーション,
            ResourceType.条件,
            ResourceType.表形式の条件,
            ResourceType.外部システム,
            ResourceType.自社システム,
            ResourceType.システム,
            ResourceType.住宅
        ];
    }

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        if (ResourceType.ユースケース.equals(resource.type)) {
            width = 105;
            height = 35;
        }
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId,
            false,
        );
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
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

    public with(name: string): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
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

    public replaceRelations(relations: Relation[]): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
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

    public replacePlacement(placements: Placement[]): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
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

    public resize(width: number, height: number): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
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

    public cloneWith(newDiagramId: number, newName: string): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
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

    public removeResouceOf(resource: Resource): UseCaseCompositeDiagram {
        const resourceId = resource.resourceId;
        return new UseCaseCompositeDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
            newDiagramId,
            Rdra20DiagramType.ユースケース複合図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}
