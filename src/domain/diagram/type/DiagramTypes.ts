import CustomDiagramType from "../custom/CustomDiagramType";
import DiagramType from "./DiagramType";
import Rdra20DiagramType from "../rdra20/Rdra20DiagramType";

export default class DiagramTypes {
    static readonly ALL_TYPES: DiagramType[] = [];

    static readonly RDRA20_TYPES = DiagramTypes.ALL_TYPES
        .filter(t => Rdra20DiagramType.システムコンテキスト図.sameTypeIdOf(t.id));

    static readonly CUSTOM_TYPES = DiagramTypes.ALL_TYPES
        .filter(t => CustomDiagramType.フリースタイル図.sameTypeIdOf(t.id));

    static record(type: DiagramType): void {
        DiagramTypes.ALL_TYPES.push(type);
    }
}