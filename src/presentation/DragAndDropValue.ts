import ResourceType from "~/domain/resource/ResourceType";

export default class DragAndDropValue {
    constructor(
        private readonly type: string,
        private readonly value: number
    ) { }

    private static readonly RI = "resourceId";
    private static readonly RT = "resourceType";

    isResourceId(): boolean {
        return this.type === DragAndDropValue.RI;
    }

    isResourceType(): boolean {
        return this.type === DragAndDropValue.RT;
    }

    toResourceId(): number {
        return this.value;
    }

    toResourceType(): ResourceType {
        return ResourceType.ofId(this.value) as ResourceType;
    }

    toString(): string {
        return `${this.type}:${this.value}`;
    }

    static parseOf(text: string): DragAndDropValue {
        if (!text) return DragAndDropValue.empty();
        const parts = text.split(":");
        if (Number.isNaN(parts[1])) return DragAndDropValue.empty();
        return new DragAndDropValue(parts[0], Number.parseInt(parts[1], 10))
    }

    static empty(): DragAndDropValue {
        return new DragAndDropValue("", 0);
    }

    static resourceIdOf(resourceId: number): DragAndDropValue {
        return new DragAndDropValue(DragAndDropValue.RI, resourceId);
    }

    static resourceTypeOf(resourceType: ResourceType): DragAndDropValue {
        return new DragAndDropValue(DragAndDropValue.RT, resourceType.id);
    }
}
