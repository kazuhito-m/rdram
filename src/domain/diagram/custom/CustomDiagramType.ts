import DiagramType from "@/domain/diagram/type/DiagramType";

export default class CustomDiagramType extends DiagramType {
    constructor(id: number, name: string, iconKey: string) {
        super(id, name, iconKey);
    }

    static readonly フリースタイル図 = new CustomDiagramType(1001, 'フリースタイル図', "mdi-all-inclusive-box");

    sameTypeIdOf(typeId: number): boolean {
        return typeId > 1000
    }

    static as(type: DiagramType) {
        return CustomDiagramType.フリースタイル図.sameTypeIdOf(type.id);
    }
}
