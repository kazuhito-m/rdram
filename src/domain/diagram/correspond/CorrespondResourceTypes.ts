import ResourceType from "@/domain/resource/ResourceType";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";

/**
 * 図対応するリソースタイプの定義を責務とするクラス。
 * <p/>
 * 図とリソースの静的な関係の定義を司る。
 */
export default class CorrespondResourceTypes {
    private static readonly MAP = new Map([
        [ResourceType.業務.id, [Rdra20DiagramType.ビジネスユースケース図]],
        [ResourceType.ビジネスユースケース.id, [Rdra20DiagramType.ユースケース複合図, Rdra20DiagramType.利用シーン図]],
    ]);

    public correspondingDiagramTypesOf(resourceType: ResourceType): Rdra20DiagramType[] {
        const result = CorrespondResourceTypes.MAP.get(resourceType.id);
        if (!result) return [];
        return result.slice();
    }

    public hasCorrespondingDiagramTypeOf(resourceType: ResourceType): boolean {
        return this.correspondingDiagramTypesOf(resourceType).length > 0;
    }
}
