import draw2d from "draw2d";

export default class CanvasGuideType {
    private static readonly vs: any[] = [];

    static なし = new CanvasGuideType(1, "mdi-grid-off", "なし(白地)", null);
    static グリッド = new CanvasGuideType(2, "mdi-grid", "グリッド(方眼・格子状)", new draw2d.policy.canvas.SnapToGridEditPolicy());
    static ジオメトリ = new CanvasGuideType(3, "mdi-crop", "ジオメトリ(他アイコン位置をガイド)", new draw2d.policy.canvas.SnapToGeometryEditPolicy());

    private constructor(
        public readonly id: number,
        public readonly iconKey: string,
        public readonly caption: string,
        public readonly canvasPolicy: object | null,
    ) {
        CanvasGuideType.vs.push(this);
    }

    public equals(other: CanvasGuideType | null): boolean {
        if (!other) return false;
        return other?.iconKey === this.iconKey;
    }

    public static values(): CanvasGuideType[] {
        return CanvasGuideType.vs;
    }

    public static ofId(id: number): CanvasGuideType {
        const found = this.vs
            .find(item => item.id === id);
        if (found) return found;
        return CanvasGuideType.なし;
    }

    public static ofIconKey(iconKey: string): CanvasGuideType {
        const found = this.vs
            .find(item => item.iconKey === iconKey);
        if (found) return found;
        return CanvasGuideType.なし;
    }
}