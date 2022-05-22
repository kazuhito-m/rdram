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
            this.descriptionOfResourceNameOf(value)
        ));

    private descriptionOfDiagramNameOf(value: BehaviorWhenNameConflict): string {
        if (value === BehaviorWhenNameConflict.置換)
            return "既にある「同名の図」をインポート内容で上書き・置き換えます。";
        if (value === BehaviorWhenNameConflict.別名)
            return "入力した「新しい名前」でインポート内容の図を作成します。";
        return "";
    }

    private descriptionOfResourceNameOf(value: BehaviorWhenNameConflict): string {
        if (value === BehaviorWhenNameConflict.既存)
            return "インポートした図のアイコンは使わず、既にある「同名のアイコン」を使います。";
        if (value === BehaviorWhenNameConflict.置換)
            return "既にある「同名のアイコン」をインポート内容で上書き・置き換えます。";
        if (value === BehaviorWhenNameConflict.別名)
            return "入力した「新しい名前」でインポート内容のアイコンを作成します。";
        return "";
    }

    private nameOf(value: BehaviorWhenNameConflict): string {
        return BehaviorWhenNameConflict[value];
    }
}