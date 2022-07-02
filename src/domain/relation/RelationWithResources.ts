import RouterType from "@/domain/relation/RouterType";
import Relation from "@/domain/relation/Relation";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";

export default class RelationWithResources {
    constructor(
        public readonly source: Relation,
        public readonly fromResource: Resource,
        public readonly toResource: Resource,
        public readonly routerType: RouterType,
    ) { }

    public static of(relation: Relation, fromResource: Resource, toResource: Resource) {
        return new RelationWithResources(
            relation,
            fromResource,
            toResource,
            RouterType.ofId(relation.routerTypeId) as RouterType,
        );
    }

    public isFlowRelation(): boolean {
        return this.betweenBothFromTo(ResourceType.アクティビティ) ||
            this.betweenRevercibleFromTo(ResourceType.アクティビティ, ResourceType.始点終点) ||
            this.betweenRevercibleFromTo(ResourceType.状態, ResourceType.ユースケース) ||
            this.betweenRevercibleFromTo(ResourceType.状態, ResourceType.始点終点) ||
            this.betweenRevercibleFromTo(ResourceType.状態グループ, ResourceType.ユースケース) ||
            this.betweenRevercibleFromTo(ResourceType.状態グループ, ResourceType.始点終点)
    }

    /**
     * from/to両方共「同一タイプのリソース」か。
     */
    public betweenBothFromTo(resourceType: ResourceType): boolean {
        return resourceType.equals(this.fromType)
            && resourceType.equals(this.toType);
    }

    /**
     * from/to問わず「2つのタイプのリソース」か。
     */
    public betweenRevercibleFromTo(typeOne: ResourceType, typeTwo: ResourceType): boolean {
        return typeOne.equals(this.fromType) && typeTwo.equals(this.toType)
            || typeTwo.equals(this.fromType) && typeOne.equals(this.toType)
    }

    public existsType(resourceType: ResourceType): boolean {
        return resourceType.equals(this.fromType)
            || resourceType.equals(this.toType);
    }

    public get fromType(): ResourceType {
        return this.fromResource.type;
    }

    public get toType(): ResourceType {
        return this.toResource.type;
    }
}