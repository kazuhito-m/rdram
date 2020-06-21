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

    public static ofId(id:number): DiagramType | null {
        const found = this.vs
            .find(item => item.id === id);
        if (!found) return null;
        return found as DiagramType;
    }
}