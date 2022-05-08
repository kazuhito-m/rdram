import Resource from "~/domain/resource/Resource";
import Diagram from "../../Diagram";
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

    public static prototypeDiagramOf(diagram: Diagram): NameOfColided {
        return this.prototypeOf(
            diagram.name,
            diagram.id,
            BehaviorWhenNameColide.置換
        );
    }

    public static prototypeResourceOf(resouce: Resource): NameOfColided {
        return this.prototypeOf(
            resouce.name,
            resouce.resourceId,
            BehaviorWhenNameColide.既存
        );
    }
}