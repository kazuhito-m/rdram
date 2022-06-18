export default class ZoomValueOnDraw2d {
    public constructor(private readonly zoom: number) { }

    public percentage(): number {
        return 100 / this.zoom;
    }

    public ratio(): number {
        return 1 / this.zoom;   
    }

    public static of(zoom: number): ZoomValueOnDraw2d {
        const fixZoom = isFinite(zoom) ? Number(zoom) : 1;
        return new ZoomValueOnDraw2d(fixZoom);
    }
}