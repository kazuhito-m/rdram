import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";

export default class Behavior {
    constructor(public readonly value: BehaviorWhenNameConflict) { }

    public get name() {
        return BehaviorWhenNameConflict[this.value];
    }
}