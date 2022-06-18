export default class ZoomRatioOnDraw2d {
    public constructor(private readonly zoom: number) { }

    public percentage(): number {
        return 100 / this.zoom;
    }

    public retio(): number {
        return 1 / this.zoom;   
    }

    public static of(zoom: number): ZoomRatioOnDraw2d {
        const fixZoom = isFinite(zoom) ? Number(zoom) : 1;
        return new ZoomRatioOnDraw2d(fixZoom);
    }
}