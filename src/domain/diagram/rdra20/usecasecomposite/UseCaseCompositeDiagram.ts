import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class UseCaseCompositeDiagram extends Rdra20Diagram {
    protected constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
        width: number,
        height: number,
        canvasGuideType: CanvasGuideType,
    ) {
        super(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
            canvasGuideType,
        );
    }

    public availableResourceTypes(): ResourceType[] {
        return [
            ResourceType.アクター,
            ResourceType.アクティビティ,
            ResourceType.ユースケース,
            ResourceType.情報,
            ResourceType.画面,
            ResourceType.イベント,
            ResourceType.タイマー,
            ResourceType.バリエーション,
            ResourceType.条件,
            ResourceType.表形式の条件,
            ResourceType.外部システム,
            ResourceType.自社システム,
            ResourceType.システム,
            ResourceType.建物
        ];
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
            id,
            typeId,
            name,
            relations,
            placements,
            width,
            height,
            canvasGuideType,
        );
    }

    public static prototypeOf(newDiagramId: number, name: string): UseCaseCompositeDiagram {
        return new UseCaseCompositeDiagram(
            newDiagramId,
            Rdra20DiagramType.ユースケース複合図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}
