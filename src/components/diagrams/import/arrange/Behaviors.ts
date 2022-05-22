import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import Behavior from "./Behavior";

export default class Behaviors {
    public readonly behaviorsOfDiagramName: Behavior[] = Object.values(BehaviorWhenNameConflict)
        .filter(value => typeof value !== 'string')
        .map(value => value as BehaviorWhenNameConflict)
        .filter(value => value !== BehaviorWhenNameConflict.既存)
        .map(value => new Behavior(
            value,
            this.nameOf(value),
            this.descriptionOfDiagramNameOf(value)
        ));

    public readonly behaviorsOfResourceName: Behavior[] = Object.values(BehaviorWhenNameConflict)
        .filter(value => typeof value !== 'string')
        .map(value => value as BehaviorWhenNameConflict)
        .map(value => new Behavior(
            value,
            this.nameOf(value),
            this.descriptionOfDiagramNameOf(value)
        ));

    private descriptionOfDiagramNameOf(value: BehaviorWhenNameConflict): string {
        if (value === BehaviorWhenNameConflict.置換)
            return "";
        if (value === BehaviorWhenNameConflict.別名)
            return "";
        return "";
    }

    private nameOf(value: BehaviorWhenNameConflict): string {
        return BehaviorWhenNameConflict[value];
    }
}