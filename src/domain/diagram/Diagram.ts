import Relation from "@/domain/relation/Relation";
import DiagramType from "./DiagramType";
import Placement from "./placement/Placement";
import ResourceType from "../resource/ResourceType";
import Resource from "../resource/Resource";
import Resources from "../resource/Resources";

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

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }

    public createPlacementAtCenter(resource: Resource): Placement | null {
        const newPlacement = this.createPlacement(resource, 0, 0);
        if (!newPlacement) return null;

        const x = Math.floor((this.width + newPlacement.width) / 2);
        const y = Math.floor((this.height + newPlacement.height) / 2);
        const modifiedPlacement = newPlacement.move(x, y);
        return modifiedPlacement;
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

    public modifyPlacementOf(placement: Placement): Diagram {
        const newValues = this.placements
            .map(p => p.resourceId === placement.resourceId ? placement : p);
        return this.replacePlacement(newValues);
    }

    public removeResourcesOf(resourceIds: number[]): Diagram {
        const nonDeletedPlacements = this.placements
            .filter(p => !resourceIds.includes(p.resourceId))
        const nonDeletedRelations = this.relations
            .filter(r => resourceIds.every(id => !r.isRelatedTo(id)));
        return this.replacePlacement(nonDeletedPlacements)
            .replaceRelations(nonDeletedRelations);
    }

    public removeRelationsOf(relationIds: string[]): Diagram {
        const nonDeletedRelations = this.relations
            .filter(r => !relationIds.includes(r.id));
        return this.replaceRelations(nonDeletedRelations);
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

    public addRelation(relation: Relation): Diagram {
        const newValues = Array.from(this.relations);
        newValues.push(relation);
        return this.replaceRelations(newValues);
    }

    protected replaceRelations(relations: Relation[]): Diagram {
        throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }

    public addPlacement(placement: Placement): Diagram {
        const newValues = Array.from(this.placements);
        newValues.push(placement);
        return this.replacePlacement(newValues);
    }

    protected replacePlacement(placements: Placement[]): Diagram {
        throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
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

    protected ngType(resourceType: ResourceType): boolean {
        return !this.availableResourceTypes()
            .some(type => type.equals(resourceType));
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

    public static genericPrototypeOf(newDiagramId: number, name: string, diagramType: DiagramType, resources: Resources): Diagram {
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