import LocalStorageImportErrorMessageConverter from "./LocalStorageImportErrorMessageConverter";
import { LocalStorageImportProgressStep } from "@/domain/storage/import/LocalStorageImportProgressStep";
import { LocalStorageImportError } from "@/domain/storage/import/LocalStorageImportError";
import LocalStorageImportProgressEvent from "@/domain/storage/import/LocalStorageImportProgressEvent";

export default class LocalStorageImportMessageConverter {
    private readonly errorMessageConverter = new LocalStorageImportErrorMessageConverter();

    private static readonly MESSAGE_DIC = LocalStorageImportMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[LocalStorageImportProgressStep.失敗] = "インポートが失敗しました。";
        m[LocalStorageImportProgressStep.エラー] = "エラー : ";
        m[LocalStorageImportProgressStep.開始] = "インポートを開始します。";
        m[LocalStorageImportProgressStep.ファイル読み込み] = "ファイルの読み込み。";
        m[LocalStorageImportProgressStep.形式チェック] = "ファイル内容・形式のチェック。";
        m[LocalStorageImportProgressStep.保存] = "LocalStorageへの保存。";
        m[LocalStorageImportProgressStep.完了] = "完了。"
        m[LocalStorageImportProgressStep.成功] = "インポートが成功しました。"
        return m;
    }

    public makeMessage(event: LocalStorageImportProgressEvent): string {
        const main = LocalStorageImportMessageConverter.MESSAGE_DIC[event.step];
        const error = this.errorMessageOf(event.error);
        return main + error + event.optionalMessage;
    }

    public errorMessageOf(error: LocalStorageImportError) {
        return this.errorMessageConverter.messageOf(error);
    }
}
