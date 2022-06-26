import DragAndDropValue from "~/presentation/DragAndDropValue";

export default class DragAndDropSlideBarId extends DragAndDropValue<string> {
    constructor(type: string, value: string) {
        super(type, value);
    }

    protected typeName(): string {
        return "slideBarId";
    }

    protected convIdToValue(id: string): string {
        return id;
    }

    protected convValueToId(value: string): string {
        return value;
    }

    protected of(type: string, value: string): DragAndDropSlideBarId {
        return new DragAndDropSlideBarId(type, value);
    }

    protected empty(): DragAndDropSlideBarId {
        return DragAndDropSlideBarId.prototypeOf();
    }

    static prototypeOf(): DragAndDropSlideBarId {
        return new DragAndDropSlideBarId("", "");
    }
}
