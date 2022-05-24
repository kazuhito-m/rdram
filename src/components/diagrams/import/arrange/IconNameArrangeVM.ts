import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";
import UserArrangeVM from "./UserArrangeVM";

export default class IconNameArrangeVM {
    constructor(
        public readonly srcName: string,
        public destName: string,
        private _behavior: BehaviorWhenNameConflict,
        private readonly sourceId: number,
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
            this.sourceId
        );
    }

    // validation methods

    public validateIconName(value: string): boolean | string {
        if (this.isNotAriasNameOfBehavior()) return true;
        if (value.trim().length === 0)
            return "アイコンの別名を入力してください。";
        // TODO 自身オブジェクトを参照する方法を調べる
        if (value.length > this.diagramNameMaxLength)
            return `アイコンの別名は${this.diagramNameMaxLength}文字以内で入力してください。`;
        if (value.trim() === this.srcName)
            return `アイコンの別名に「インポートした元の名前」は指定できません。`;
        // TODO Diagram内での重複を許さない 
        // TODO プロダクト全体での重複も許さない
        return true;
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
            parent
        );
    }
}
