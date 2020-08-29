import Resource from "./Resource";
import Product from "../product/Product";
import ResourceType from "./ResourceType";

export default class Resources {
    private readonly values: Resource[];

    constructor(values: Resource[]) {
        this.values = values;
    }

    public static prototypeOf(): Resources {
        return new Resources([]);
    }

    public existsSomeName(name: string, type: ResourceType): boolean {
        return this.values
            .filter(resource => resource.name === name)
            .some(resource => resource.type.equals(type));
    }

    public of(resourceId: number): Resource | null {
        const found = this.values.find(resource => resource.resourceId === resourceId);
        return found ? found : null;
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
        const newValues = Array.from(this.values);
        for (let i = 0; i < newValues.length; i++) {
            const p = newValues[i];
            if (p.resourceId !== resource.resourceId) continue;
            newValues[i] = resource;
            break;
        }
        if (this.values.length === newValues.length) newValues.push(resource);
        return new Resources(newValues);
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
    public last(): Resource {
        return this.values[this.values.length - 1];
    }
}