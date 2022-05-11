import Resource from "./Resource";
import ResourceType from "./ResourceType";
import ResourceFactory from "./ResourceFactory";
import Relation from "@/domain/relation/Relation";
import RelationWithResources from "@/domain/relation/RelationWithResources";

export default class Resources {
    private readonly values: Resource[];

    constructor(values: Resource[]) {
        this.values = values;
    }

    public static prototypeOf(): Resources {
        return new Resources([]);
    }

    public createResourceOf(name: string, resourceType: ResourceType, resourceId: number): Resource {
        const factory = new ResourceFactory();
        return factory.create(name, resourceType, resourceId, this);
    }

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
            .map(p => p.resourceId === resource.resourceId ? resource : p);
        if (newValues.every(p => p !== resource)) newValues.push(resource);
        return new Resources(newValues);
    }

    public relationWithResourcesOf(relation: Relation): RelationWithResources | null {
        const fromResource = this.of(relation.fromResourceId);
        const toResource = this.of(relation.toResourceId);
        if (!fromResource || !toResource) return null;

        return RelationWithResources.of(relation, fromResource, toResource);
    }

    public static empty(): Resources {
        return new Resources([]);
    }

    public forEach(func: (resource: Resource) => void) {
        this.values.forEach(func);
    }

    public map<T>(func: (resoruce: Resource) => T): T[] {
        return this.values.map(func);
    }

    public filter(func: (resoruce: Resource) => boolean): Resource[] {
        return this.values.filter(func);
    }

    public get length(): number {
        return this.values.length;
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public last(): Resource {
        return this.values[this.length - 1];
    }

    public first(): Resource {
        return this.values[0];
    }
}
