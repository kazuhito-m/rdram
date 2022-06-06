import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";

export default class Behavior {
    constructor(
        public readonly value: BehaviorWhenNameConflict,
        public readonly name: string,
        public readonly description: string
    ) { }
}