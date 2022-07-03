import DiagramType from "./DiagramType";
import CustomDiagramType from "@/domain/diagram/custom/CustomDiagramType";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";

export default class DiagramTypes {
    static readonly ALL_TYPES = DiagramType.ALL;

    static readonly RDRA20_TYPES = DiagramTypes.ALL_TYPES
        .filter(t => Rdra20DiagramType.システムコンテキスト図.sameTypeIdOf(t.id));

    static readonly CUSTOM_TYPES = DiagramTypes.ALL_TYPES
        .filter(t => CustomDiagramType.フリースタイル図.sameTypeIdOf(t.id));

    public static record(type: DiagramType): void {
        DiagramTypes.ALL_TYPES.push(type);
    }

    static byId(typeId: number): DiagramType | undefined {
        return this.ALL_TYPES.find(t => t.id === typeId);
    }
}
