import draw2d from "draw2d";

export default class CanvasGuideType {
    private static readonly vs: CanvasGuideType[] = [];

    static なし = new CanvasGuideType('mdi-grid-off', 'なし(白地)', null);
    static グリッド = new CanvasGuideType('mdi-grid', 'グリッド(方眼・格子状)', new draw2d.policy.canvas.SnapToGridEditPolicy());
    static ジオメトリ = new CanvasGuideType('mdi-crop', 'ジオメトリ(他アイコン位置をガイド)', new draw2d.policy.canvas.SnapToGeometryEditPolicy());
  
    private constructor(
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

    public static ofId(iconKey: string): CanvasGuideType | null {
        const found = this.vs
            .find(item => item.iconKey === iconKey);
        return found ? found : CanvasGuideType.なし;
    }
}