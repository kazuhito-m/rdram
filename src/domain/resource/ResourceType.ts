import { IconShape } from "./IconShape";

export default class ResourceType {
    private static readonly ALL: any[] = [];

    static システム = of(1, 'システム', 'mdi-desktop-mac-dashboard', 350, 75, [IconShape.その他カスタム]);
    static 自社システム = of(2, '自社システム', 'mdi-desktop-tower-monitor');
    static 外部システム = of(3, '外部システム', 'mdi-server');
    static 目的 = of(4, '目的', 'mdi-bullseye-arrow', 0, 0, [IconShape.記述]);
    static アクター = of(5, 'アクター', 'mdi-account', 0, 0, [IconShape.シンプル, IconShape.その他カスタム]);

    static 要求 = of(6, '要求', 'mdi-hand-heart-outline', 200, 37, [IconShape.記述]);
    static 要件 = of(7, '要件', 'mdi-handshake-outline', 200, 37, [IconShape.記述]);

    static 業務 = of(8, '業務', 'mdi-cog-outline', 105, 35, [IconShape.サークル]);
    static 商品 = of(9, '商品', 'mdi-package-variant-closed');
    static 建物 = of(10, '建物', 'mdi-home-variant');
    static 契約 = of(11, '契約', 'mdi-file-key-outline');
    static サービス = of(12, 'サービス', 'mdi-room-service-outline');
    static 組織 = of(13, '組織', 'mdi-sitemap', 80, 35, [IconShape.範囲]);
    static 会社 = of(14, '会社', 'mdi-office-building-outline', 80, 35, [IconShape.範囲]);
    static 在庫 = of(15, '在庫', 'mdi-stack-exchange', 0, 0, [IconShape.範囲]);
    static 配送 = of(16, '配送', 'mdi-truck-outline');
    static 条件 = of(17, '条件', 'mdi-call-split', 0, 0, [IconShape.表形式, IconShape.シンプル]);

    static 利用シーン = of(25, '利用シーン', 'mdi-video-account');
    static シナリオ = of(32, 'シナリオ', 'mdi-script-text-outline', 300, 75, [IconShape.記述]);
    static ユースケース = of(23, 'ユースケース', 'mdi-alpha-u-circle-outline', 105, 35, [IconShape.サークル]);

    static 情報 = of(18, '情報', 'mdi-text-box-outline');
    static 情報グループ = of(19, '情報グループ', 'mdi-text-box-multiple-outline', 80, 35, [IconShape.範囲]);
    static 画面 = of(20, '画面', 'mdi-application');

    static アクティビティ = of(21, 'アクティビティ', 'mdi-alpha-a-box-outline', 0, 0, [IconShape.シンプル, IconShape.その他カスタム]);
    static イベント = of(22, 'イベント', 'mdi-lightning-bolt');
    static ビジネスユースケース = of(24, 'ビジネスユースケース', 'mdi-alpha-b-circle-outline', 105, 35, [IconShape.サークル]);
    static タイマー = of(26, 'タイマー', 'mdi-clock-outline');

    static 状態 = of(27, '状態', 'mdi-circle-slice-4', 160, 40, [IconShape.サークル]);
    static 状態グループ = of(28, '状態グループ', 'mdi-circle-slice-4', 200, 120, [IconShape.範囲]);

    static バリエーション = of(29, 'バリエーション', 'mdi-lock-pattern', 0, 0, [IconShape.表形式, IconShape.シンプル]);
    static 表形式の条件 = of(30, '表形式の条件', 'mdi-table', 0, 0, [IconShape.表形式, IconShape.シンプル]);
    // static 項目説明 = of(31, '項目説明', '');
    static スライド = of(32, 'スライド', 'mdi-presentation');

    static 説明ノート = of(101, '説明・ノート', 'mdi-comment-outline', 0, 0, [IconShape.記述]);
    static 始点終点 = of(102, '始点・終点', 'mdi-source-commit-start', 0, 0, [IconShape.その他カスタム]);

    // static 遷移 = of(801, '遷移', ''); // 資料にあったが…これはなんだろう？
    static Webサービス = of(901, 'Webサービス', 'mdi-cloud-download-outline');
    static 通帳 = of(902, '通帳', 'mdi-badge-account-horizontal-outline');
    static データベース = of(903, 'データベース', 'mdi-database');
    static 機器 = of(904, '機器', 'mdi-chip');
    static 決済 = of(905, '決済', 'mdi-cash-register');
    static 背景 = of(906, '背景', 'mdi-wallpaper');
    static お金 = of(907, 'お金', 'mdi-cash-100');

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
        public readonly defaultWidth: number,
        public readonly defaultHeight: number,
        public readonly iconShapes: IconShape[]
    ) {
        ResourceType.ALL.push(this);
    }

    public equals(other: ResourceType | null): boolean {
        if (!other) return false;
        return other.id === this.id;
    }

    public static values(): ResourceType[] {
        return ResourceType.ALL;
    }

    public static ofId(id: number): ResourceType | undefined {
        return this.ALL
            .find(item => item.id === id);
    }
}

function of(
    id: number,
    name: string,
    iconKey: string,
    defaultWidth: number = 0,
    defaultHeight: number = 0,
    iconShapes: IconShape[] = [IconShape.シンプル]
): ResourceType {
    return new ResourceType(id, name, iconKey, defaultWidth, defaultHeight, iconShapes);
}
