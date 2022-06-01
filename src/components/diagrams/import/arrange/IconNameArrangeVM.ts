import UserArrangeVM from "./UserArrangeVM";
import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";
import ResourceType from "~/domain/resource/ResourceType";

export default class IconNameArrangeVM {
    constructor(
        public readonly srcName: string,
        public destName: string,
        private _behavior: BehaviorWhenNameConflict,
        private readonly sourceId: number,
        public readonly resourceType: ResourceType,
        private parent: UserArrangeVM
    ) { }

    public readonly diagramNameMaxLength = 128;

    public isNotAriasNameOfBehavior(): boolean {
        return this._behavior !== BehaviorWhenNameConflict.別名;
    }

    public toDomain(): ConflictNameBehavior {
        return new ConflictNameBehavior(
            this._behavior,
            this.srcName,
            this.destName,
            this.sourceId,
            this.resourceType.id
        );
    }

    public equals(other: IconNameArrangeVM): boolean {
        return this.destName === other.destName
            && this.resourceType.equals(other.resourceType);
    }

    // validation methods

    public validateIconName(): boolean | string {
        const name = this.destName;
        if (this.isNotAriasNameOfBehavior()) return true;
        if (name.trim().length === 0)
            return "別名を入力してください。";
        if (name.length > this.diagramNameMaxLength)
            return `別名は${this.diagramNameMaxLength}文字以内で入力してください。`;
        if (name.trim() === this.srcName)
            return `別名に「元の名前」は指定できません。`;
        return this.parent.validateoConfrictResourceOf(this);
        // TODO プロダクト全体での重複も許さない
    }

    // properties

    public get behavior(): BehaviorWhenNameConflict {
        return this._behavior;
    }

    public set behavior(value: BehaviorWhenNameConflict) {
        if (value !== BehaviorWhenNameConflict.別名) this.destName = "";
        this._behavior = value;
    }

    // factory methods

    public static of(conflictIconName: ConflictNameBehavior, parent: UserArrangeVM): IconNameArrangeVM {
        return new IconNameArrangeVM(
            conflictIconName.sourceName,
            conflictIconName.destinationName,
            conflictIconName.behavior,
            conflictIconName.sourceId,
            ResourceType.ofId(conflictIconName.sourceType) as ResourceType,
            parent
        );
    }
}
