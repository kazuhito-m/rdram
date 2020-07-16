export default class RecouseType {
    private static readonly vs: RecouseType[] = [];

    static 事業体 = new RecouseType(1, '事業体');

    private constructor(
        public readonly id: number,
        public readonly name: string
    ) {
        RecouseType.vs.push(this);
    }

    public static values(): RecouseType[] {
        return RecouseType.vs;
    }

    public static ofId(id: number): RecouseType | null {
        const found = this.vs
            .find(item => item.id === id);
        return found ? found : null;
    }
}