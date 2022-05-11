import Resource from "~/domain/resource/Resource";

export default class Placement {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly width: number,
        public readonly height: number,
        public readonly resourceId: number,
        public readonly alias: boolean = false,
    ) { }

    public resize(width: number, height: number): Placement {
        return new Placement(
            this.x,
            this.y,
            width,
            height,
            this.resourceId,
            this.alias,
        );
    }

    public move(x: number, y: number): Placement {
        return new Placement(
            x,
            y,
            this.width,
            this.height,
            this.resourceId,
            this.alias,
        );
    }

    public withResourceIdOf(resourceId: number): Placement {
        return new Placement(
            this.x,
            this.y,
            this.width,
            this.height,
            resourceId,
            this.alias
        );
    }

    public withResourceOf(resource: Resource): any {
        return this.withResourceIdOf(resource.resourceId);
    }

    public clone(): Placement {
        return new Placement(
            this.x,
            this.y,
            this.width,
            this.height,
            this.resourceId,
            this.alias
        );
    }
}