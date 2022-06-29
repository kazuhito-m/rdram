export default abstract class DiagramType {
    static ALL: any[] = [];

    protected constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
        DiagramType.ALL.push(this);
    }


    equals(other: DiagramType | null): boolean {
        if (!other) return false;
        return other.id === this.id;
    }

    abstract sameTypeIdOf(typeId: number): boolean;
}
