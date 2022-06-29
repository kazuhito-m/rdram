import DiagramType from "../type/DiagramType";

export default class CustomDiagramType extends DiagramType {
    constructor(id: number, name: string, iconKey: string) {
        super(id, name, iconKey);
    }

    static フリースタイル図 = new CustomDiagramType(1001, 'フリースタイル図', "mdi-alpha-s-box");

    sameTypeIdOf(typeId: number): boolean {
        return typeId > 1000
    }
}