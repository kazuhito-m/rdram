import DiagramType from "../type/DiagramType";

export default class Rdra20DiagramType extends DiagramType {
    constructor(id: number, name: string, iconKey: string) {
        super(id, name, iconKey);
    }

    static システムコンテキスト図 = new Rdra20DiagramType(1, 'システムコンテキスト図', "mdi-alpha-s-box");
    static 要求モデル図 = new Rdra20DiagramType(2, '要求モデル図', "mdi-alpha-r-box");
    static ビジネスコンテキスト図 = new Rdra20DiagramType(3, 'ビジネスコンテキスト図', "mdi-alpha-c-box");
    static ビジネスユースケース図 = new Rdra20DiagramType(4, 'ビジネスユースケース図', "mdi-alpha-u-box");
    static 業務フロー図 = new Rdra20DiagramType(11, '業務フロー図', "mdi-clipboard-flow");
    static 利用シーン図 = new Rdra20DiagramType(12, '利用シーン図', "mdi-video-image");
    static 情報モデル図 = new Rdra20DiagramType(5, '情報モデル図', "mdi-axis-arrow-info");
    static 状態モデル図 = new Rdra20DiagramType(6, '状態モデル図', "mdi-state-machine");
    static ユースケース複合図 = new Rdra20DiagramType(7, 'ユースケース複合図', "mdi-set-none");
    static バリエーション条件 = new Rdra20DiagramType(8, 'バリエーション・条件', "mdi-vector-combine");

    sameTypeIdOf(typeId: number): boolean {
        return typeId > 0 && typeId <= 1000;
    }
}
