import Resource from "./Resource";
import ResourceType from "./ResourceType";
import ResourceFactory from "./ResourceFactory";
import Relation from "@/domain/relation/Relation";
import RelationWithResources from "@/domain/relation/RelationWithResources";

export default class Resources {
    constructor(private readonly values: Resource[]) { }

    // search or filter methods.

    public prototypeResourceOf(resourceType: ResourceType): Resource {
        return this.createResourceOf("", resourceType, Resource.YET_NUMBERING_ID);
    }

    public existsIdOf(resourceId: number): boolean {
        return this.values
            .some(resource => resource.resourceId === resourceId);
    }

    public existsSameOf(resource: Resource): boolean {
        return this.values
            .some(r => r.sameOf(resource));
    }

    public existsSameTypeAndName(name: string, resourceType: ResourceType): boolean {
        return this.values
            .some(d => d.name === name
                && d.type.equals(resourceType));
    }

    public getSameOf(resource: Resource): Resource | undefined {
        return this.values
            .find(r => r.sameOf(resource));
    }

    public of(resourceId: number): Resource | undefined {
        return this.values
            .find(resource => resource.resourceId === resourceId);
    }

    public findOf(resourceIds: number[]): Resources {
        const founds = this.values
            .filter(resource => resourceIds.includes(resource.resourceId));
        return new Resources(founds);
    }

    public typesOf(...resourceTypes: ResourceType[]): Resources {
        const newValues = this.values
            .filter(r => resourceTypes.includes(r.type));
        return new Resources(newValues);
    }

    public typeOf(resourceType: ResourceType): Resources {
        return this.typesOf(resourceType);
    }

    public sorted(): Resources {
        const results = this.values
            .slice()
            .sort(this.compareOf);
        return new Resources(results);
    }

    private compareOf(left: Resource, right: Resource): number {
        return this.makeSortKey(left) > this.makeSortKey(right) ? 1 : -1;
    }

    private makeSortKey(resource: Resource): string {
        const typeId = String(resource.type.id).padStart(8, "0");
        return `${typeId}:${resource.name}`;
    }

    // modifies.

    public add(resource: Resource): Resources {
        const newValues = Array.from(this.values);
        newValues.push(resource);
        return new Resources(newValues);
    }

    public remove(resource: Resource): Resources {
        const newValues = this.values
            .filter(r => r.resourceId !== resource.resourceId);
        return new Resources(newValues);
    }

    public mergeByIdOf(resource: Resource): Resources {
        const newValues = this.values
            .map(r => r.resourceId === resource.resourceId ? resource : r);
        if (newValues.every(p => p !== resource)) newValues.push(resource);
        return new Resources(newValues);
    }

    public mergeBySameOf(resource: Resource): Resources {
        const newValues = this.values
            .map(r => r.sameOf(resource) ? resource : r);
        if (newValues.every(p => p !== resource)) newValues.push(resource);
        return new Resources(newValues);
    }

    // stream functions.

    public forEach(func: (resource: Resource) => void) {
        this.values.forEach(func);
    }

    public map<T>(func: (resoruce: Resource) => T): T[] {
        return this.values.map(func);
    }

    public filter(func: (resoruce: Resource) => boolean): Resource[] {
        return this.values.filter(func);
    }

    // create other objects.

    public relationWithResourcesOf(relation: Relation): RelationWithResources | null {
        const fromResource = this.of(relation.fromResourceId);
        const toResource = this.of(relation.toResourceId);
        if (!fromResource || !toResource) return null;

        return RelationWithResources.of(relation, fromResource, toResource);
    }

    // factory methods.

    public static prototypeOf(): Resources {
        return new Resources([]);
    }

    public createResourceOf(name: string, resourceType: ResourceType, resourceId: number): Resource {
        const factory = new ResourceFactory();
        return factory.create(name, resourceType, resourceId, this);
    }

    public static empty(): Resources {
        return new Resources([]);
    }

    // get status.

    public get length(): number {
        return this.values.length;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    // single get.

    public last(): Resource {
        return this.values[this.length - 1];
    }

    public first(): Resource {
        return this.values[0];
    }
}
