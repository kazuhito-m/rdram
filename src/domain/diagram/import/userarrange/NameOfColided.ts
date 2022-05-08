import { BehaviorWhenNameColide } from "./BehavioWhenNameColide";

export default class NameOfColided {
    constructor(
        public readonly behavior: BehaviorWhenNameColide,
        public readonly sourceName: string,
        public readonly destinationName: string,
        private readonly sourceId: number
    ) { }

    public with(behavior: BehaviorWhenNameColide, destinationName: string): NameOfColided {
        return new NameOfColided(
            behavior,
            this.sourceName,
            destinationName,
            this.sourceId
        );
    }

    public static prototypeOf(sourceName: string, sourceId: number,
        behavior: BehaviorWhenNameColide = BehaviorWhenNameColide.既存): NameOfColided {
        return new NameOfColided(
            behavior,
            sourceName,
            "",
            sourceId
        );
    }
}