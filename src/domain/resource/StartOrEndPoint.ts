import Resource from "./Resource";
import ResourceType from "./ResourceType";

/**
 * 「始点」または「終点」。
 */
export default class StartOrEndPoint extends Resource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        public readonly startPoint: boolean = false,
    ) { super(resourceId, ResourceType.始点終点.id, name, description); }

    public withName(name: string): StartOrEndPoint {
        return new StartOrEndPoint(
            this.resourceId,
            name,
            this.description,
            this.startPoint,
        );
    }

    public renewDefaultName(seq: number): StartOrEndPoint {
        const type = this.type;
        const newName = '終点' + this.zeroPadding(seq, 2);
        return this.withName(newName);
    }

    private zeroPadding(value: number, point: number): string {
        return ('0'.repeat(point) + value).slice(-1 * point);
    }
}