export default class Range {
    private constructor(
        public readonly start: number,
        private readonly end: number,
    ) { }

    in(value: number): boolean {
        return this.start <= value
            && this.end > value;
    }

    startTo(value: number): number {
        return this.start + value;
    }

    nextTo(end: number): Range {
        return new Range(this.end, end);
    }

    static of(start: number, end: number): Range {
        const values = [start, end];
        return new Range(Math.min(...values), Math.max(...values));
    }
}
