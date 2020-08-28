import Resource from "./Resource";

export default class Resources {
    private readonly values: Resource[];

    constructor(values: Resource[]) {
        this.values = values;
    }

    public static prototypeOf(): Resources {
        return new Resources([]);
    }

    public existsSomeName(name: string): boolean {
        return this.values
            .some(resource => resource.name === name);
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
}