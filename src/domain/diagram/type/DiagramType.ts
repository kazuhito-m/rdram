import DiagramTypes from "./DiagramTypes";

export default abstract class DiagramType {
    protected constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly iconKey: string,
    ) {
       DiagramTypes.record(this);
    }

    equals(other: DiagramType | null): boolean {
        if (!other) return false;
        return other.id === this.id;
    }

    abstract sameTypeIdOf(typeId: number): boolean;
}