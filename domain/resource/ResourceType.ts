export default class ResourceType {
    private static readonly vs: ResourceType[] = [];

    static 業務 = new ResourceType(1, '業務', 'mdi-cog-outline');
    static アクター = new ResourceType(2, 'アクター', 'mdi-account');
    static 商品 = new ResourceType(3, '商品', 'mdi-cube-outline');
    static 設備 = new ResourceType(4, '設備', 'mdi-barn');
    static 組織 = new ResourceType(5, '組織', 'mdi-sitemap');
    static 会社 = new ResourceType(6, '会社', 'mdi-office-building-outline');

    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
        ResourceType.vs.push(this);
    }

    public equals(other: ResourceType | null): boolean {
        if (!other) return false;
        return other?.id === this.id;
    }

    public static values(): ResourceType[] {
        return ResourceType.vs;
    }

    public static ofId(id: number): ResourceType | null {
        const found = this.vs
            .find(item => item.id === id);
        return found ? found : null;
    }
}