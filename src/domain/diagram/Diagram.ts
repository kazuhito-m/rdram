import Relations from "../relation/Relations";
import DiagramType from "@/domain/diagram/DiagramType";
import Placement from "@/domain/diagram/placement/Placement";
import Relation from "@/domain/relation/Relation";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";

export default class Diagram {
    public static readonly NAME_MAX_LENGTH = 128;
    public static readonly MAX_WIDTH = 7680;
    public static readonly MAX_HEIGHT = 4320;

    public static readonly DEFAULT_CANVAS_GUIDE_ID = 1; // TODO CavasGuideTypeのEnumをPresentation層からDomain層側に引き剥がして、定数化する。

    protected constructor(
        public readonly id: number,
        protected readonly typeId: number,
        public readonly name: string,
        protected readonly relations: Relation[],   // TODO Relationsに置き換えたい
        public readonly placements: Placement[],
        public readonly width: number,
        public readonly height: number,
        public readonly canvasGuideTypeId: number,
    ) {
    }

    public availableResourceTypes(): ResourceType[] {
        return [];
    }

    public createPlacement(_resource: Resource, _left: number, _top: number): Placement | null {
        throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }

    public createPlacementAtCenter(resource: Resource): Placement | null {
        const newPlacement = this.createPlacement(resource, 0, 0);
        if (!newPlacement) return null;

        const x = Math.floor((this.width - newPlacement.width) / 2);
        const y = Math.floor((this.height - newPlacement.height) / 2);
        const modifiedPlacement = newPlacement.move(x, y);
        return modifiedPlacement;
    }

    public placementOf(resourceId: number): Placement | undefined {
        return this.placements
            .find(placement => placement.resourceId === resourceId);
    }

    public defaultNameWhenCopy(): string {
        return `${this.name} のコピー`;
    }

    public relationIdsOfDeleteTargetResouce(deleteTargetResourceIds: number[]): string[] {
        return this.relations
            .filter(relation => deleteTargetResourceIds.includes(relation.fromResourceId)
                || deleteTargetResourceIds.includes(relation.toResourceId))
            .map(relation => relation.id);
    }

    public usingOf(resource: Resource): boolean {
        return this.placements
            .some(Placement => Placement.resourceId === resource.resourceId);
    }

    public reIdOf(newId: number): Diagram {
        return this.cloneWith(newId, this.name);
    }

    public renameOf(newName: string): Diagram {
        return this.cloneWith(this.id, newName);
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

    public replaceOf(srcResource: Resource, destResource: Resource): Diagram {
       const placements = this.placements
            .map(p => p.resourceId === srcResource.resourceId ? p.withResourceOf(destResource) : p);
        const relations = this.relations
            .

    }

    /**
     * FIXME ここだ「イミュータブルを破ってしまって」いる…なんとかしたい。 
     */
    public modifyRelationOf(relation: Relation): Diagram {
        const index = this.relations
            .findIndex(r => r.id === relation.id);
        if (index < 0) return this;
        this.relations[index] = relation;
        return this;
    }

    public addRelation(relation: Relation): Diagram {
        const newValues = Array.from(this.relations);
        newValues.push(relation);
        return this.replaceRelations(newValues);
    }

    protected replaceRelations(_relations: Relation[]): Diagram {
        throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }

    public addPlacement(placement: Placement): Diagram {
        const newValues = Array.from(this.placements);
        newValues.push(placement);
        return this.replacePlacement(newValues);
    }

    protected replacePlacement(_placements: Placement[]): Diagram {
        throw new Error('このメソッドが呼ばれるのはおかしいです。サブクラスで実装してください。');
    }

    public sameOf(other: Diagram) {
        return this.type.equals(other.type)
            && this.name === other.name;
    }

    public existsSameOf(relation: Relation): boolean {
        return this.relations
            .some(r => r.equalRouteReversivle(relation));
    }

    public relationOf(relationId: string): Relation | undefined {
        return this.relations
            .find(r => r.id === relationId);
    }

    public existsStickOutPlacements(): boolean {
        return this.placements
            .some(placement => this.isStickOut(placement));
    }

    public existsResourceOnPlacementOf(resourceId: number): boolean {
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

    public allRelations(): Relations {
        return new Relations(this.relations.slice())
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
            this.canvasGuideTypeId,
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
            this.canvasGuideTypeId,
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
            this.canvasGuideTypeId,
        );
    }

    /**
     * 現在のサイズではみ出しているものを削除。
     */
    public fixStickOuts(): Diagram {
        const deletePlacements: Placement[] = [];
        const survivePlacements: Placement[] = [];
        for (const placement of this.placements) {
            if (this.isStickOut(placement)) deletePlacements.push(placement)
            else survivePlacements.push(placement);
        }
        const surviveRelations = this.relations
            .filter(relation => !deletePlacements.some(p => relation.isRelatedTo(p.resourceId)));

        return this.replacePlacement(survivePlacements)
            .replaceRelations(surviveRelations);
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
            this.canvasGuideTypeId,
        );
    }

    public static genericPrototypeOf(newDiagramId: number, name: string, diagramType: DiagramType, _resources: Resources): Diagram {
        return new Diagram(
            newDiagramId,
            diagramType.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            Diagram.DEFAULT_CANVAS_GUIDE_ID,
        );
    }
}