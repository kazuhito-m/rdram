export default class ResourceType {
    private static readonly vs: ResourceType[] = [];

    static 業務 = new ResourceType(1, '業務', 'mdi-cog-outline');
    static アクター = new ResourceType(2, 'アクター', 'mdi-account');
    static 物品 = new ResourceType(3, '物品', 'mdi-cube-outline');
    static 設備 = new ResourceType(4, '設備', 'mdi-barn');
    static 場所 = new ResourceType(5, '場所', 'mdi-sitemap');
    static 事業体 = new ResourceType(6, '事業体', 'mdi-office-building-outline');

    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
        ResourceType.vs.push(this);
    }

    public equals(other: ResourceType): boolean {
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