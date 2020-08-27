export default class Placement {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly width: number,
        public readonly height: number,
        public readonly resourceId: number,
    ) { }

    public withSize(width: number, height: number): Placement {
        return new Placement(
            this.x,
            this.y,
            width,
            height,
            this.resourceId,
        );
    }

    public withPosition(x: number, y: number): Placement {
        return new Placement(
            x,
            y,
            this.width,
            this.height,
            this.resourceId,
        );
    }

    public clone(): Placement {
        return new Placement(
            this.x,
            this.y,
            this.width,
            this.height,
            this.resourceId,
        );
    }
}