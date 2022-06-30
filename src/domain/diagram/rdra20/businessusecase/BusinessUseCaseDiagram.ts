import { CanvasGuideType } from "@/domain/diagram/CanvasGuideType";
import Relation from "@/domain/relation/Relation";
import Placement from "@/domain/diagram/placement/Placement";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import ResourceType from "@/domain/resource/ResourceType";
import Rdra20Diagram from "@/domain/diagram/rdra20/Rdra20Diagram";

export default class BusinessUseCaseDiagram extends Rdra20Diagram {
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
            ResourceType.ビジネスユースケース,
            ResourceType.アクター,
            ResourceType.商品,
            ResourceType.建物,
            ResourceType.契約,
            ResourceType.サービス,
            ResourceType.組織,
            ResourceType.会社,
            ResourceType.自社システム,
            ResourceType.外部システム,
            ResourceType.情報,
            ResourceType.条件,
            ResourceType.表形式の条件,
        ];
    }

    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideType: CanvasGuideType): BusinessUseCaseDiagram {
        return new BusinessUseCaseDiagram(
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

    public static prototypeOf(newDiagramId: number, name: string): BusinessUseCaseDiagram {
        return new BusinessUseCaseDiagram(
            newDiagramId,
            Rdra20DiagramType.ビジネスユースケース図.id,
            name.trim(),
            [],
            [],
            1024,
            768,
            CanvasGuideType.NOTHING,
        );
    }
}