import LocalStrageImportErrorMessageConverter from "./LocalStrageImportErrorMessageConverter";
import { LocalStrageImportProgressStep } from "@/domain/strage/import/LocalStrageImportProgressStep";
import { LocalStrageImportError } from "@/domain/strage/import/LocalStrageImportError";
import LocalStrageImportProgressEvent from "@/domain/strage/import/LocalStrageImportProgressEvent";

export default class LocalStrageImportMessageConverter {
    private readonly errorMessageConverter = new LocalStrageImportErrorMessageConverter();

    private static readonly MESSAGE_DIC = LocalStrageImportMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[LocalStrageImportProgressStep.失敗] = "インポートが失敗しました。";
        m[LocalStrageImportProgressStep.エラー] = "エラー : ";
        m[LocalStrageImportProgressStep.キャンセル] = "インポートがキャンセルされました。";
        m[LocalStrageImportProgressStep.開始] = "インポートを開始します。";
        m[LocalStrageImportProgressStep.ファイル読み込み] = "ファイルの読み込み。";
        m[LocalStrageImportProgressStep.形式チェック] = "ファイル内容・形式のチェック。";
        m[LocalStrageImportProgressStep.追加] = "プロダクトの追加・置き換え。";
        m[LocalStrageImportProgressStep.保存] = "LocalStrageへの保存。";
        m[LocalStrageImportProgressStep.完了] = "完了。"
        m[LocalStrageImportProgressStep.成功] = "インポートが成功しました。"
        return m;
    }

    public makeMessage(event: LocalStrageImportProgressEvent): string {
        const main = LocalStrageImportMessageConverter.MESSAGE_DIC[event.step];
        const error = this.errorMessageOf(event.error);
        return main + error + event.optionalMessage;
    }

    public errorMessageOf(error: LocalStrageImportError) {
        return this.errorMessageConverter.messageOf(error);
    }
}
