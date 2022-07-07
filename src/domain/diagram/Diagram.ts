import DiagramTypes from "./type/DiagramTypes";
import { CanvasGuideType } from "./CanvasGuideType";
import Relations from "@/domain/relation/Relations";
import DiagramType from "@/domain/diagram/type/DiagramType";
import Placement from "@/domain/diagram/placement/Placement";
import Relation from "@/domain/relation/Relation";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import RelationWithResources from "@/domain/relation/RelationWithResources";
import StartOrEndPoint from "@/domain/resource/StartOrEndPoint";

export default abstract class Diagram {
    public static readonly NAME_MAX_LENGTH = 128;
    public static readonly MAX_WIDTH = 7680;
    public static readonly MAX_HEIGHT = 4320;

    constructor(
        public readonly id: number,
        protected readonly typeId: number,
        public readonly name: string,
        protected readonly relations: Relation[],   // TODO Relationsに置き換えたい
        public readonly placements: Placement[],
        public readonly width: number,
        public readonly height: number,
        public readonly canvasGuideType: CanvasGuideType,
    ) { }

    public abstract availableResourceTypes(): ResourceType[];

    protected abstract renew(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],   // TODO Relationsに置き換えたい
        placements: Placement[],
        width: number,
        height: number,
        canvasGuideType: CanvasGuideType,
    ): Diagram;

    public relationable(relationPlus: RelationWithResources): string {
        const relations = this.allRelations();

        const message = this.relationableLocalRuleOnDiagramOf(relationPlus);
        if (message !== "") return message;

        if (relationPlus.fromType.equals(ResourceType.始点終点)) {
            const startPoint = relationPlus.fromResource as StartOrEndPoint;
            if (startPoint.startPoint) {
                if (relations.existsFromResource(startPoint)) {
                    return "始点からは一つの関連しか引けません。";
                }
            }
        }
        return "";
    }

    public relationableLocalRuleOnDiagramOf(relationPlus: RelationWithResources): string {
        const relation = relationPlus.source;
        const relations = this.allRelations();

        return relations.existsOrReversivle(relation)
            ? "すでに関連が存在します。"
            : "";
    }

    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        const type = resource.type;
        if (this.ngType(type)) return null;
        return new Placement(
            left,
            top,
            type.defaultWidth,
            type.defaultHeight,
            resource.resourceId,
            false,
        );
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

    public replaceRelations(relations: Relation[]): Diagram {
        return this.renew(
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

    public replacePlacement(placements: Placement[]): Diagram {
        return this.renew(
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
        const srcId = srcResource.resourceId;
        const destId = destResource.resourceId;

        const placements = this.placements
            .map(p => p.resourceId === srcId ? p.withResourceOf(destResource) : p);
        const relations = this.relations
            .map(r => r.fromResourceId === srcId ? r.withFrom(destId) : r)
            .map(r => r.toResourceId === srcId ? r.withTo(destId) : r);

        return this.replacePlacement(placements)
            .replaceRelations(relations);
    }

    public modifyRelationOf(relation: Relation): Diagram {
        const newRelations = this.relations
            .map(r => r.id === relation.id ? relation : r);
        return this.replaceRelations(newRelations);
    }

    public addRelation(relation: Relation): Diagram {
        const newValues = Array.from(this.relations);
        newValues.push(relation);
        return this.replaceRelations(newValues);
    }

    public addPlacement(placement: Placement): Diagram {
        const newValues = Array.from(this.placements);
        newValues.push(placement);
        return this.replacePlacement(newValues);
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
        return DiagramTypes.byId(this.typeId) as DiagramType;
    }

    protected ngType(resourceType: ResourceType): boolean {
        return !this.availableResourceTypes()
            .some(type => type.equals(resourceType));
    }

    public allRelations(): Relations {
        return new Relations(this.relations.slice())
    }

    public resize(width: number, height: number): Diagram {
        return this.renew(
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

    public cloneWith(newDiagramId: number, newName: string): Diagram {
        return this.renew(
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
        // FIXME この処理は要るはず…だが使ってない。究明して正しく使うべし。
        // const surviveRelations = this.relations
        //     .filter(relation => !deletePlacements.some(p => relation.isRelatedTo(p.resourceId)));

        return this.replacePlacement(survivePlacements)
    }

    public isNotRegister(): boolean {
        return this.name === "";
    }

    public removeResouceOf(resource: Resource): Diagram {
        const resourceId = resource.resourceId;
        return this.renew(
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
}
