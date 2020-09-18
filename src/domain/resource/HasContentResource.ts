import Resource from "./Resource";

/**
 * 「内容」付きリソース。
 */
export default abstract class HasContentResource extends Resource {
    public static CONTENT_MAX_LENGTH = 512;

    constructor(
        resourceId: number,
        resouceTypeId: number,
        name: string,
        description: string,
        public readonly content: string,
    ) { super(resourceId, resouceTypeId, name, description); }

    public withContent(content: string): HasContentResource {
        const clone = this.clone() as any;
        clone.content = content;
        return clone;
    }

    public renewDefaultName(seq: number): HasContentResource {
        const type = this.type;
        const newName = type.name + this.zeroPadding(seq, 2);
        return this.withName(newName) as HasContentResource;
    }

    private zeroPadding(value: number, point: number): string {
        return ('0'.repeat(point) + value).slice(-1 * point);
    }
}