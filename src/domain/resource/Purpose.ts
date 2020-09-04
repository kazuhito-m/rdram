import ResourceType from "./ResourceType";
import Resource from "./Resource";

/**
 * 「目的」リソース。
 */
export default class Purpose extends Resource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        public readonly content: string,
    ) { super(resourceId, ResourceType.目的.id, name, description); }

    public withContent(content: string): Purpose {
        return new Purpose(
            this.resourceId,
            this.name,
            this.description,
            content,
        );
    }

    public static makeDefaultName(seq: number): string {
        return `目的${this.zeroPadding(seq, 2)}`
    }

    private static zeroPadding(value: number, point: number): string {
        return ('0'.repeat(point) + value).slice(-1 * point);
    }
}