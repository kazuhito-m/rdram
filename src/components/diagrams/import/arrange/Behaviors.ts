import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import Behavior from "./Behavior";

export default class Behaviors {
    private readonly values: Behavior[] = Object.values(BehaviorWhenNameConflict)
        .filter(value => typeof value !== 'string')
        .map(value => value as BehaviorWhenNameConflict)
        .map(enumValue => new Behavior(enumValue));

    public behaviorOfDiagramName(): Behavior[] {
        return this.values
            .slice()
            .filter(value => value.value !== BehaviorWhenNameConflict.既存);
    }

    public behaviorOfResourceName(): Behavior[] {
        return this.values.slice();
    }

}