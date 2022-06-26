import DragAndDropValue from "@/presentation/DragAndDropValue";

export default class DragAndDropResourceId extends DragAndDropValue<number> {
    constructor(type: string, value: string) {
        super(type, value);
    }

    protected typeName(): string {
        return "resourceId";
    }

    protected convIdToValue(id: number): string {
        return id.toString();
    }

    protected convValueToId(value: string): number {
        if (Number.isNaN(value)) return 0;
        return Number.parseInt(value, 10);
    }

    protected of(type: string, value: string): DragAndDropResourceId {
        return new DragAndDropResourceId(type, value);
    }

    protected empty(): DragAndDropResourceId {
        return DragAndDropResourceId.prototypeOf();
    }

    static prototypeOf(): DragAndDropResourceId {
        return new DragAndDropResourceId("", "");
    }
}
