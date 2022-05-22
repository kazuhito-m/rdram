import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";

export default class ConflictNameBehavior {
    constructor(
        public readonly behavior: BehaviorWhenNameConflict,
        public readonly sourceName: string,
        public readonly destinationName: string,
        public readonly sourceId: number
    ) { }

    public isAriasNameOfBehavior(): boolean {
        return this.behavior === BehaviorWhenNameConflict.置換;
    }

    public isEmpty(): boolean {
        return this.sourceName.length === 0
            && this.destinationName.length === 0;
    }

    public with(behavior: BehaviorWhenNameConflict, destinationName = ""): ConflictNameBehavior {
        return new ConflictNameBehavior(
            behavior,
            this.sourceName,
            destinationName,
            this.sourceId
        );
    }

    public static prototypeOf(sourceName: string, sourceId: number,
        behavior: BehaviorWhenNameConflict = BehaviorWhenNameConflict.既存): ConflictNameBehavior {
        return new ConflictNameBehavior(
            behavior,
            sourceName,
            "",
            sourceId
        );
    }

    public static prototypeDiagramOf(diagram: Diagram): ConflictNameBehavior {
        return this.prototypeOf(
            diagram.name,
            diagram.id,
            BehaviorWhenNameConflict.置換
        );
    }

    public static prototypeResourceOf(resouce: Resource): ConflictNameBehavior {
        return this.prototypeOf(
            resouce.name,
            resouce.resourceId,
            BehaviorWhenNameConflict.既存
        );
    }

    public static empty() {
        return this.prototypeOf(
            "",
            0,
            BehaviorWhenNameConflict.既存
        );
    }
}
