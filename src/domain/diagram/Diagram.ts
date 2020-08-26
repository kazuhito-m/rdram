import Relation from "./relation/Relation";
import DiagramType from "./DiagramType";
import Placement from "./placement/Placement";
import ResourceType from "../resource/ResourceType";

export default class Diagram {
    public static readonly NAME_MAX_LENGTH = 128;

    protected constructor(
        public readonly id: number,
        protected readonly typeId: number,
        public readonly name: string,
        public readonly relations: Relation[],
        public readonly placements: Placement[],
    ) {
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
        if (index < 0) return;
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
    public modifyRelationOf(relation: Relation): void {
        const index = this.relations
            .findIndex(r => r.id === relation.id);
        if (index < 0) return;
        this.relations[index] = relation;
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

    public relationOf(relationId: string): Relation | null {
        const found = this.relations
            .find(r => r.id === relationId);
        return found ? found : null;
    }

    public get type(): DiagramType {
        return DiagramType.ofId(this.typeId) as DiagramType;
    }

    public with(name: string): Diagram {
        return new Diagram(
            this.id,
            this.typeId,
            name.trim(),
            this.relations,
            this.placements,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        return new Diagram(
            newDiagramId,
            diagramType.id,
            name.trim(),
            [],
            [],
        );
    }
}