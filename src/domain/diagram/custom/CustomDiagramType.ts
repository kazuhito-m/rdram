import DiagramType from "../type/DiagramType";

export default class CustomDiagramType extends DiagramType {
    static フリースタイル図 = new CustomDiagramType(1001, 'フリースタイル図', "mdi-alpha-s-box");

    sameTypeIdOf(typeId: number): boolean {
        return typeId > 1000
    }
}