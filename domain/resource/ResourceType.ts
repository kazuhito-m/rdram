export default class ResourceType {
    private static readonly vs: ResourceType[] = [];

    static アクター = new ResourceType(1, 'アクター', 'mdi-account');
    static 事業体 = new ResourceType(2, '事業体', 'mdi-office-building-outline');

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