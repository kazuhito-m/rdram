import Diagram from "@/domain/diagram/Diagram";
import Relation from "@/domain/diagram/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import DiagramType from "@/domain/diagram/DiagramType";
import ResourceType from "@/domain/resource/ResourceType";

export default class BusinessContextDiagram extends Diagram {
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
            ResourceType.業務,
            ResourceType.アクター,
            ResourceType.商品,
            ResourceType.設備,
            ResourceType.契約,
            ResourceType.サービス,
            ResourceType.組織,
            ResourceType.会社,
        ];
    }

    public with(name: string): BusinessContextDiagram {
        return new BusinessContextDiagram(
            this.id,
            this.typeId,
            name.trim(),
            this.relations,
            this.placements,
            this.width,
            this.height,
        );
    }

    public resize(width: number, height: number): BusinessContextDiagram {
        return new BusinessContextDiagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            this.placements,
            width,
            height,
        );
    }

    public cloneWith(newDiagramId: number, newName: string): BusinessContextDiagram {
        return new BusinessContextDiagram(
            newDiagramId,
            this.typeId,
            newName,
            this.relations.map(relation => relation.clone()),
            this.placements.map(placement => placement.clone()),
            this.width,
            this.height,
        );
    }

    /**
     * 現在のサイズではみ出しているものを削除。
     */
    public fixStickOuts(): BusinessContextDiagram {
        const deletePlacements: Placement[] = [];
        const survivePlacements: Placement[] = [];
        for (let placement of this.placements) {
            if (this.isStickOut(placement)) deletePlacements.push(placement)
            else survivePlacements.push(placement);
        }
        const surviveRelations = this.relations
            .filter(relation => !deletePlacements.some(placement => relation.isRelatedTo(placement.resourceId)));

        return new BusinessContextDiagram(
            this.id,
            this.typeId,
            this.name,
            surviveRelations,
            survivePlacements,
            this.width,
            this.height,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string): BusinessContextDiagram {
        return new BusinessContextDiagram(
            newDiagramId,
            DiagramType.ビジネスコンテキスト図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
        );
    }
}