import draw2d from "draw2d";
import ZoomValueOnDraw2d from "./ZoomValueOnDraw2d";

/**
 * Canvasの座標から、ブラウザ上の絶対座標に変換するクラス。
 */
export default class AbsolutePosition {
    constructor(
        private readonly xOnCanvas: number,
        private readonly yOnCanvas: number,
        private readonly canvas: draw2d.Canvas,
    ) { }

    private ratio(): number {
        const zoom = this.canvas.getZoom();
        return ZoomValueOnDraw2d.of(zoom).ratio();
    }

    public x(): number {
        return this.xOnCanvas * this.ratio()
            + this.canvas.getAbsoluteX();
    }

    public y(): number {
        return this.yOnCanvas * this.ratio()
            + this.canvas.getAbsoluteY();
    }
}
