export default class RouterType {
    static DIRECT = new RouterType(1, '直線');
    static MANHATTAN = new RouterType(2, 'マンハッタン');
    static CIRCUIT = new RouterType(3, 'サーキット');
    static SPLINE = new RouterType(4, 'スプライン');
    // static SKETCH = new RouterType(5, 'スケッチ');

    private static readonly vs: any[] = [];

    private constructor(
        public readonly id: number,
        public readonly name: string
    ) {
        RouterType.vs.push(this);
    }

    public static values(): RouterType[] {
        return RouterType.vs;
    }

    public static ofId(id: number): RouterType | undefined {
        return this.vs
            .find(item => item.id === id);
    }

    public equals(other: RouterType) {
        return this.id === other.id;
    }
}