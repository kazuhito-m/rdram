import Relation from "./relation/Relation";
import { Type } from "class-transformer";
import DiagramType from "./DiagramType";
import Placement from "./placement/Placement";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";
import ResourceType from "../resource/ResourceType";

export default class Diagram {
    public readonly id: number;
    private readonly typeId: number;
    public readonly name: string;
    @Type(() => Relation)
    private readonly relations: Relation[];
    @Type(() => Placement)
    private readonly placements: Placement[];

    protected constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
    ) {
        this.id = id;
        this.typeId = typeId
        this.name = name;
        this.relations = relations;
        this.placements = placements;
    }

    public availableResourceTypes(): ResourceType[] {
        return [];
    }

    public placementOf(resourceId: number): Placement | null {
        const found = this.placements
            .find(placement => placement.resourceId === resourceId);
        return found ? found : null;
    }

    public relationIdsOfDeleteTargetResouce(deleteTargetResourceIds: number[]): string[] {
        return this.relations
            .filter(relation => deleteTargetResourceIds.some(id => id === relation.fromResourceId)
                || deleteTargetResourceIds.some(id => id === relation.toResourceId))
            .map(relation => relation.id);
    }

    /**
     * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。 
     */
    public modifyPlacementOf(placement: Placement) {
        const index = this.placements
            .findIndex(p => p.resourceId === placement.resourceId);
        if (!index) return;
        this.placements[index] = placement;
    }

    /**
      * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。 
      */
    public removeResourcesOf(resourceIds: number[]) {
        const placements = this.placements;
        for (let i = placements.length - 1; i >= 0; i--) {
            const resourceId = placements[i].resourceId;
            if (resourceIds.some(deleteResourceId => deleteResourceId === resourceId)) {
                placements.splice(i, 1);
            }
        }
    }

    /**
     * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。 
     */
    public removeRelationsOf(relationIds: string[]) {
        for (let i = this.relations.length - 1; i >= 0; i--) {
            const relationId = this.relations[i].id;
            if (relationIds.some(deleteId => deleteId === relationId)) {
                this.relations.splice(i, 1);
            }
        }
    }

    /**
     * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。 
     */
    public addRelation(relation: Relation) {
        this.relations.push(relation);
    }

    public existsSomeRelation(relation: Relation): boolean {
        return this.relations
            .some(r => r.some(relation));
    }

    public get type(): DiagramType {
        return DiagramType.ofId(this.id) as DiagramType;
    }

    public static prototypeOf(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        if (DiagramType.ビジネスコンテキスト図.equals(diagramType)) {
            return BusinessContextDiagram.prototypeOf(newDiagramId, name);
        }

        // それ以外(未定義なものが来た時)
        return new Diagram(
            newDiagramId,
            diagramType.id,
            name,
            [],
            [],
        );
    }
}