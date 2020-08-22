export default class Midpoint {
    constructor(
        id: string,
        left: number,
        top: number,
    ) {
        this.id = id;
        this.left = left;
        this.top = top;
    }

    private readonly id: string;
    private readonly left: number;
    private readonly top: number;
}