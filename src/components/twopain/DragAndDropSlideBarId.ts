export default class DragAndDropSlideBarId {
    constructor(
        private readonly type: string,
        private readonly value: string
    ) { }

    protected typeName(): string {
        return "slideBarId";
    }

    protected convIdToValue(id: string): string {
        return id;
    }

    protected convValueToId(value: string): string {
        return value;
    }


    is(): boolean {
        return this.type === this.typeName();
    }

    isInvalid(): boolean {
        return !this.is() || this.value === "";
    }

    id(): string {
        return this.convIdToValue(this.value);
    }

    toString(): string {
        return `${this.type}:${this.value}`;
    }

    parseOf(text?: string): DragAndDropSlideBarId {
        if (!text) return this.empty();
        const parts = text.split(":");
        const value = this.convIdToValue(parts[1]);
        if (value.length === 0) return this.empty();
        return new DragAndDropSlideBarId(parts[0], value)
    }

    protected empty(): DragAndDropSlideBarId {
        return DragAndDropSlideBarId.prototypeOf();
    }

    static prototypeOf(): DragAndDropSlideBarId {
        return new DragAndDropSlideBarId("", "");
    }

    renew(slideBarId: string): DragAndDropSlideBarId {
        return new DragAndDropSlideBarId(this.typeName(), this.convIdToValue(slideBarId));
    }

    protected of(type: string, value: string): DragAndDropSlideBarId {
        return new DragAndDropSlideBarId(type, value);
    }
}
