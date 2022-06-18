export default class ZoomValueOnDraw2d {
    private constructor(public readonly value: number) { }

    public percentage(): number {
        return 100 / this.value;
    }

    public ratio(): number {
        return 1 / this.value;   
    }

    public static of(zoom: number): ZoomValueOnDraw2d {
        const fixZoom = isFinite(zoom) ? Number(zoom) : 1;
        return new ZoomValueOnDraw2d(fixZoom);
    }
}