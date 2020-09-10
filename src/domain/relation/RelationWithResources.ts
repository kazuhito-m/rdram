import RouterType from "./RouterType";
import Midpoint from "./Midpoint";
import Resource from "../resource/Resource";
import Relation from "./Relation";
import ResourceType from "../resource/ResourceType";

export default class RelationWithResources {
    constructor(
        public readonly id: string,
        public readonly fromResource: Resource,
        public readonly toResource: Resource,
        public readonly routerType: RouterType,
        private readonly midpoints: Midpoint[],
    ) { }

    public static of(relation: Relation, fromResource: Resource, toResource: Resource) {
        return new RelationWithResources(
            relation.id,
            fromResource,
            toResource,
            RouterType.ofId(relation.routerTypeId) as RouterType,
            relation.midpoints,
        );
    }

    public betweenBothFromTo(resourceType: ResourceType): boolean {
        return resourceType.equals(this.fromType)
            && resourceType.equals(this.toType);
    }

    public get fromType(): ResourceType {
        return this.fromResource.type;
    }

    public get toType(): ResourceType {
        return this.toResource.type;
    }
}