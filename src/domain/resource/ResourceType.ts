export default class ResourceType {
    private static readonly vs: any[] = [];

    static システム = new ResourceType(1, 'システム', 'mdi-desktop-mac-dashboard');
    static 自社システム = new ResourceType(2, '自社システム', 'mdi-desktop-tower-monitor');
    static 外部システム = new ResourceType(3, '外部システム', 'mdi-server');
    static 目的 = new ResourceType(4, '目的', 'mdi-bullseye-arrow');
    static アクター = new ResourceType(5, 'アクター', 'mdi-account');

    static 要求 = new ResourceType(6, '要求', 'mdi-hand-heart-outline');
    static 要件 = new ResourceType(7, '要件', 'mdi-handshake-outline');

    static 業務 = new ResourceType(8, '業務', 'mdi-cog-outline');
    static 商品 = new ResourceType(9, '商品', 'mdi-package-variant-closed');
    static 住宅 = new ResourceType(10, '住宅', 'mdi-home-variant');
    static 契約 = new ResourceType(11, '契約', 'mdi-file-key-outline');
    static サービス = new ResourceType(12, 'サービス', 'mdi-room-service-outline');
    static 組織 = new ResourceType(13, '組織', 'mdi-sitemap');
    static 会社 = new ResourceType(14, '会社', 'mdi-office-building-outline');
    static 在庫 = new ResourceType(15, '在庫', 'mdi-stack-exchange');
    static 配送 = new ResourceType(16, '配送', 'mdi-truck-outline');
    static 条件 = new ResourceType(17, '条件', 'mdi-call-split');

    static 利用シーン = new ResourceType(25, '利用シーン', 'mdi-video-account');
    static シナリオ = new ResourceType(32, 'シナリオ', 'mdi-script-text-outline');
    static ユースケース = new ResourceType(23, 'ユースケース', 'mdi-alpha-u-circle-outline');

    static 情報 = new ResourceType(18, '情報', 'mdi-text-box-outline');
    static 情報グループ = new ResourceType(19, '情報グループ', 'mdi-text-box-multiple-outline');
    static 画面 = new ResourceType(20, '画面', 'mdi-application');

    static アクティビティ = new ResourceType(21, 'アクティビティ', 'mdi-alpha-a-box-outline');
    static イベント = new ResourceType(22, 'イベント', 'mdi-lightning-bolt');
    static ビジネスユースケース = new ResourceType(24, 'ビジネスユースケース', 'mdi-alpha-b-circle-outline');
    static タイマー = new ResourceType(26, 'タイマー', 'mdi-alarm');

    static 状態 = new ResourceType(27, '状態', 'mdi-circle-slice-4');
    static 状態グループ = new ResourceType(28, '状態グループ', 'mdi-circle-slice-4');

    static バリエーション = new ResourceType(29, 'バリエーション', 'mdi-lock-pattern');
    static 表形式の条件 = new ResourceType(30, '表形式の条件', 'mdi-table');
    static 項目説明 = new ResourceType(31, '項目説明', '');
    static スライド = new ResourceType(32, 'スライド', 'mdi-presentation');

    static 説明 = new ResourceType(101, '説明', 'mdi-comment-outline');
    static 始点終点 = new ResourceType(102, '始点・終点', 'mdi-source-commit-start');

    static 遷移 = new ResourceType(801, '遷移', ''); // 資料にあったが…これはなんだろう？
    static Webサービス = new ResourceType(901, 'Webサービス', 'mdi-cloud-download-outline');
    static 通帳 = new ResourceType(902, '通帳', 'mdi-badge-account-horizontal-outline');
    static データベース = new ResourceType(903, 'データベース', 'mdi-database');
    static 機器 = new ResourceType(904, '機器', 'mdi-chip');
    static 決済 = new ResourceType(905, '決済', 'mdi-cash-register');
    static 背景 = new ResourceType(906, '背景', 'mdi-wallpaper');
    static お金 = new ResourceType(907, 'お金', 'mdi-cash-100');

    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
        ResourceType.vs.push(this);
    }

    public equals(other: ResourceType | null): boolean {
        if (!other) return false;
        return other.id === this.id;
    }

    public static values(): ResourceType[] {
        return ResourceType.vs;
    }

    public static ofId(id: number): ResourceType | undefined {
        return this.vs
            .find(item => item.id === id);
    }
}