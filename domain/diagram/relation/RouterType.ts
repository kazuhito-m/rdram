export default class RouterType {
    private static readonly vs: RouterType[] = [];

    static DIRECT = new RouterType(1, '直線');
    static INTERACTIVE_MANHATTAN = new RouterType(2, 'マンハッタン');
    static CIRCUIT = new RouterType(3, 'サーキット');
    static SPLINE = new RouterType(4, 'スプライン');
    // static SKETCH = new RouterType(5, 'スケッチ');

    private constructor(
        public readonly id: number,
        public readonly name: string
    ) {
        RouterType.vs.push(this);
    }

    public static values(): RouterType[] {
        return RouterType.vs;
    }

    public static ofId(id: number): RouterType | null {
        const found = this.vs
            .find(item => item.id === id);
        return found ? found : null;
    }

    public equals(other: RouterType) {
        return this.id === other.id;
    }
}