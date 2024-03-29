import draw2d from "draw2d";
import { CanvasGuideType } from "~/domain/diagram/CanvasGuideType";

export default class Draw2dCanvasGuideType {
    private static readonly vs: any[] = [];

    static なし = new Draw2dCanvasGuideType(CanvasGuideType.NOTHING, "mdi-grid-off", "なし(白地)", null);
    static グリッド = new Draw2dCanvasGuideType(CanvasGuideType.GRID, "mdi-grid", "グリッド(方眼・格子状)", new draw2d.policy.canvas.SnapToGridEditPolicy());
    static ジオメトリ = new Draw2dCanvasGuideType(CanvasGuideType.GEOMETRY, "mdi-crop", "ジオメトリ(他アイコン位置をガイド)", new draw2d.policy.canvas.SnapToGeometryEditPolicy());

    private constructor(
        public readonly type: CanvasGuideType,
        public readonly iconKey: string,
        public readonly caption: string,
        public readonly canvasPolicy: object | null,
    ) {
        Draw2dCanvasGuideType.vs.push(this);
    }

    public equals(other: Draw2dCanvasGuideType | null): boolean {
        if (!other) return false;
        return other?.iconKey === this.iconKey;
    }

    public static values(): Draw2dCanvasGuideType[] {
        return Draw2dCanvasGuideType.vs;
    }

    public static of(type: CanvasGuideType): Draw2dCanvasGuideType {
        const found = this.vs
            .find(item => item.type === type);
        if (found) return found;
        return Draw2dCanvasGuideType.なし;
    }

    public static ofIconKey(iconKey: string): Draw2dCanvasGuideType {
        const found = this.vs
            .find(item => item.iconKey === iconKey);
        if (found) return found;
        return Draw2dCanvasGuideType.なし;
    }
}
