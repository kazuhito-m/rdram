/**
 * Draw2Dのzoom値(getZoom()で取れる値)を表すValueオブジェクト。
 * <p>
 * その値自体は倍率ではない(1を割るための分母)であるため、その知識をクラスに表す。
 */
export default class ZoomValueOnDraw2d {
    private constructor(public readonly value: number) { }

    public percentage(): number {
        return 100 / this.value;
    }

    public ratio(): number {
        return 1 / this.value;
    }

    public static of(zoom: number): ZoomValueOnDraw2d {
        const fixZoom = Number.isFinite(zoom) ? zoom : 1;
        return new ZoomValueOnDraw2d(fixZoom);
    }
}