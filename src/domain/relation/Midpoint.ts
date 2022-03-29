export default class Midpoint {
    constructor(
        private readonly id: string,
        private readonly left: number,
        private readonly top: number,
    ) { }

    public clone(): Midpoint {
        return new Midpoint(
            this.id,
            this.left,
            this.top,
        );
    }
}