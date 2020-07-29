export default class ResourceType {
    private static readonly vs: ResourceType[] = [];

    static 事業体 = new ResourceType(1, '事業体', 'mdi-office-building-outline');

    private constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
        ResourceType.vs.push(this);
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