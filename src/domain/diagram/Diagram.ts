import Relation from "./relation/Relation";
import DiagramType from "./DiagramType";
import Placement from "./placement/Placement";
import ResourceType from "../resource/ResourceType";
import Resource from "../resource/Resource";

export default class Diagram {
    public static readonly NAME_MAX_LENGTH = 128;
    public static readonly MAX_WIDTH = 7680;
    public static readonly MAX_HEIGHT = 4320;

    protected constructor(
        public readonly id: number,
        protected readonly typeId: number,
        public readonly name: string,
        public readonly relations: Relation[],
        public readonly placements: Placement[],
        public readonly width: number,
        public readonly height: number,
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

    public defaultNameWhenCopy(): string {
        return `${this.name} のコピー`;
    }

    public relationIdsOfDeleteTargetResouce(deleteTargetResourceIds: number[]): string[] {
        return this.relations
            .filter(relation => deleteTargetResourceIds.some(id => id === relation.fromResourceId)
                || deleteTargetResourceIds.some(id => id === relation.toResourceId))
            .map(relation => relation.id);
    }

    public usingOf(resource: Resource): boolean {
        return this.placements
            .some(Placement => Placement.resourceId === resource.resourceId);
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

    public existsStickOutPlacements(): boolean {
        return this.placements
            .some(placement => this.isStickOut(placement));
    }

    public existsPlacementId(resourceId: number): boolean {
        return this.placements
            .some(placement => placement.resourceId === resourceId);
    }

    protected isStickOut(placement: Placement): boolean {
        const p = placement;
        return (p.x + p.width) > this.width
            || (p.y + p.height) > this.height;
    }

    public existsRelationId(relationId: string): boolean {
        return this.relations
            .some(relation => relation.id === relationId)
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
            this.width,
            this.height,
        );
    }

    public resize(width: number, height: number): Diagram {
        return new Diagram(
            this.id,
            this.typeId,
            this.name,
            this.relations,
            this.placements,
            width,
            height,
        );
    }

    public cloneWith(newDiagramId: number, newName: string): Diagram {
        return new Diagram(
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
    public fixStickOuts(): Diagram {
        const deletePlacements: Placement[] = [];
        const survivePlacements: Placement[] = [];
        for (let placement of this.placements) {
            if (this.isStickOut(placement)) deletePlacements.push(placement)
            else survivePlacements.push(placement);
        }
        const surviveRelations = this.relations
            .filter(relation => !deletePlacements.some(placement => relation.isRelatedTo(placement.resourceId)));

        return new Diagram(
            this.id,
            this.typeId,
            this.name,
            surviveRelations,
            survivePlacements,
            this.width,
            this.height,
        );
    }

    public removeResouceOf(resource: Resource): Diagram {
        const resourceId = resource.resourceId;
        return new Diagram(
            this.id,
            this.typeId,
            this.name,
            this.relations.filter(r => !r.isRelatedTo(resourceId)),
            this.placements.filter(p => p.resourceId !== resourceId),
            this.width,
            this.height,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        return new Diagram(
            newDiagramId,
            diagramType.id,
            name.trim(),
            [],
            [],
            1024,
            768,
        );
    }
}