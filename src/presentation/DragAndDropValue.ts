export default abstract class DragAndDropValue<T> {
    constructor(
        private readonly type: string,
        private readonly value: string
    ) { }

    protected abstract typeName(): string;

    protected abstract convIdToValue(id: T): string;

    protected abstract convValueToId(value: string): T;

    protected abstract of(type: string, value: string): DragAndDropValue<T>;

    is(): boolean {
        return this.type === this.typeName();
    }

    isInvalid(): boolean {
        return !this.is() || this.value === "";
    }

    id(): T {
        return this.convValueToId(this.value);
    }

    toString(): string {
        return `${this.type}:${this.value}`;
    }

    parseOf(text?: string): DragAndDropValue<T> {
        if (!text) return this.empty();
        const parts = text.split(":");
        const value = parts[1];
        if (value.length === 0) return this.empty();
        return this.of(parts[0], value)
    }

    renew(slideBarId: T): DragAndDropValue<T> {
        return this.of(this.typeName(), this.convIdToValue(slideBarId));
    }

    protected empty(): DragAndDropValue<T> {
        return this.of("", "");
    }
}
