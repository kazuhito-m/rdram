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

    public existsSomeName(name: string, type: ResourceType): boolean {
        return this.values
            .filter(resource => resource.name === name)
            .some(resource => resource.type.equals(type));
    }

    public of(resourceId: number): Resource | undefined {
        return this.values
            .find(resource => resource.resourceId === resourceId);
    }

    public typeOf(resourceType: ResourceType): Resources {
        const newValues = this.values.filter(r => resourceType.equals(r.type));
        return new Resources(newValues);
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

    public meage(resource: Resource): Resources {
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

    public last(): Resource {
        return this.values[this.length - 1];
    }
}