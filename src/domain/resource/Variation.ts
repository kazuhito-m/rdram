import Resource from "./Resource";
import ResourceType from "./ResourceType";

export default class Variation extends Resource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        private readonly values: string[],
    ) { super(resourceId, ResourceType.バリエーション.id, name, description); }

    public withValues(newValues: string[]): Variation {
        const resource = this.clone() as any;
        resource.values = newValues;
        return resource;
    }

    public valuesOf(): string[] {
        return this.values.concat();
    }
}