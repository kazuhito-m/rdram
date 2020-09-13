import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import DiagramType from "@/domain/diagram/DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "~/domain/resource/Resource";
import CanvasGuideType from "~/presentation/components/diagrams/editor/toolbar/CanvasGuideType";

export default class VariationAndConditionDiagram extends Diagram {
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
            ResourceType.バリエーション,
            ResourceType.条件,
            ResourceType.表形式の条件,
        ];
    }

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        if (this.ngType(resource.type)) return null;

        let width = 0;
        let height = 0;
        return new Placement(
            left,
            top,
            width,
            height,
            resource.resourceId
        );
    }

    public with(name: string): VariationAndConditionDiagram {
        return new VariationAndConditionDiagram(
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

    protected replaceRelations(relations: Relation[]): VariationAndConditionDiagram {
        return new VariationAndConditionDiagram(
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

    protected replacePlacement(placements: Placement[]): VariationAndConditionDiagram {
        return new VariationAndConditionDiagram(
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

    public resize(width: number, height: number): VariationAndConditionDiagram {
        return new VariationAndConditionDiagram(
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

    public cloneWith(newDiagramId: number, newName: string): VariationAndConditionDiagram {
        return new VariationAndConditionDiagram(
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

    public removeResouceOf(resource: Resource): VariationAndConditionDiagram {
        const resourceId = resource.resourceId;
        return new VariationAndConditionDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): VariationAndConditionDiagram {
        return new VariationAndConditionDiagram(
            newDiagramId,
            DiagramType.バリエーション条件.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.なし.id,
        );
    }
}