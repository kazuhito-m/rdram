import Diagram from "./Diagram";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";
import ResourceType from "@/domain/resource/ResourceType";

export default class DiagramType {
    private static readonly vs: DiagramType[] = [];

    static ビジネスコンテキスト図 = new DiagramType(1, 'ビジネスコンテキスト図');
    static システムコンテキスト図 = new DiagramType(2, 'システムコンテキスト図');
    static 要求モデル図 = new DiagramType(3, '要求モデル図');
    static ビジネスユースケース図 = new DiagramType(4, 'ビジネスユースケース図');
    static 情報モデル図 = new DiagramType(5, '情報モデル図');
    static 状態モデル = new DiagramType(6, '状態モデル');
    static ユースケース複合図 = new DiagramType(7, 'ユースケース複合図');
    static バリエーション = new DiagramType(8, 'バリエーション');

    private constructor(
        public readonly id: number,
        public readonly name: string
    ) {
        DiagramType.vs.push(this);
    }

    public static values(): DiagramType[] {
        return DiagramType.vs;
    }

    public static ofId(id: number): DiagramType | null {
        const found = this.vs
            .find(item => item.id === id);
        return found ? found : null;
    }

    public prototypeOf(newId: number, newName: string): Diagram {
        if (this === DiagramType.ビジネスコンテキスト図) {
            const dg1: BusinessContextDiagram = {
                id: newId,
                typeId: this.id,
                name: newName,
                placementObjects: [],
                availableResourceTypeIds: [ResourceType.事業体].map(type => type.id)
            };
            return dg1;
        }

        // 上記以外…は「本来無い」ので、以下は未実装部分のための仮実装
        return {
            id: newId,
            typeId: this.id,
            name: newName
        };
    }
}