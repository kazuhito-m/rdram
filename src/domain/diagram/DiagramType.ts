export default class DiagramType {
    private static readonly vs: DiagramType[] = [];

    static システムコンテキスト図 = new DiagramType(1, 'システムコンテキスト図', "mdi-alpha-s-box");
    static 要求モデル図 = new DiagramType(2, '要求モデル図', "mdi-alpha-r-box");
    static ビジネスコンテキスト図 = new DiagramType(3, 'ビジネスコンテキスト図', "mdi-alpha-c-box");
    static ビジネスユースケース図 = new DiagramType(4, 'ビジネスユースケース図', "mdi-alpha-u-box");
    static 業務フロー = new DiagramType(11, '業務フロー', "");
    static 利用シーン = new DiagramType(12, '利用シーン', "mdi-video-image");
    static 情報モデル図 = new DiagramType(5, '情報モデル図', "mdi-axis-arrow-info");
    static 状態モデル = new DiagramType(6, '状態モデル', "mdi-state-machine");
    static ユースケース複合図 = new DiagramType(7, 'ユースケース複合図', "mdi-set-none");
    static バリエーション = new DiagramType(8, 'バリエーション', "mdi-vector-combine");

    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
        DiagramType.vs.push(this);
    }

    public static values(): DiagramType[] {
        return DiagramType.vs;
    }

    public equals(other: DiagramType | null): boolean {
        if (!other) return false;
        return other?.id === this.id;
    }

    public static ofId(id: number): DiagramType | null {
        const found = this.vs
            .find(item => item.id === id);
        return found ? found : null;
    }
}