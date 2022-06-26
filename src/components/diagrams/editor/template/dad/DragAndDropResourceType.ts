import ResourceType from "@/domain/resource/ResourceType";
import DragAndDropValue from "@/presentation/DragAndDropValue";

export default class DragAndDropResourceType extends DragAndDropValue<ResourceType> {
    constructor(type: string, value: string) {
        super(type, value);
    }

    protected typeName(): string {
        return "resourceType";
    }

    protected convIdToValue(id: ResourceType): string {
        return id.id.toString();
    }

    protected convValueToId(value: string): ResourceType {
        if (Number.isNaN(value)) return ResourceType.アクター;
        const id = Number.parseInt(value, 10);
        return ResourceType.ofId(id) as ResourceType;
    }

    protected of(type: string, value: string): DragAndDropResourceType {
        return new DragAndDropResourceType(type, value);
    }

    protected empty(): DragAndDropResourceType {
        return DragAndDropResourceType.prototypeOf();
    }

    static prototypeOf(): DragAndDropResourceType {
        return new DragAndDropResourceType("", "");
    }
}
