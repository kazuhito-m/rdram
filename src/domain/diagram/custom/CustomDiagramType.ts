import DiagramType from "../type/DiagramType";

export default class CustomDiagramType extends DiagramType {
    static フリースタイル図 = new CustomDiagramType(1001, 'フリースタイル図', "mdi-alpha-s-box");

    static readonly ALL: CustomDiagramType[] = [];

    constructor(id: number, name: string, iconKey: string) {
        super(id, name, iconKey);
        CustomDiagramType.ALL.push(this);
    }

    sameTypeIdOf(typeId: number): boolean {
        return typeId > 1000
    }
}