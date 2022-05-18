import DiagramImportErrorMessageConverter from "./DiagramImportErrorMessageConverter";
import { DiagramImportProgressStep } from "@/domain/diagram/import/progress/DiagramImportProgressStep";
import { DiagramImportError } from "@/domain/diagram/import/progress/DiagramImportError";
import DiagramImportProgressEvent from "@/domain/diagram/import/progress/DiagramImportProgressEvent";

export default class DiagramImportMessageConverter {
    private readonly errorMessageConverter = new DiagramImportErrorMessageConverter();

    private static readonly MESSAGE_DIC = DiagramImportMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[DiagramImportProgressStep.失敗] = "インポートが失敗しました。";
        m[DiagramImportProgressStep.エラー] = "エラー : ";
        m[DiagramImportProgressStep.キャンセル] = "インポートがキャンセルされました。";
        m[DiagramImportProgressStep.開始] = "インポートを開始します。";
        m[DiagramImportProgressStep.ファイル読み込み] = "ファイルの読み込み。";
        m[DiagramImportProgressStep.ユーザーアレンジ] = "ユーザーによる名前重複時の扱い受付。"
        m[DiagramImportProgressStep.形式チェック] = "ファイル内容・形式のチェック。";
        m[DiagramImportProgressStep.追加] = "プロダクトの追加・置き換え。";
        m[DiagramImportProgressStep.保存] = "図への保存。";
        m[DiagramImportProgressStep.完了] = "完了。"
        m[DiagramImportProgressStep.成功] = "インポートが成功しました。"
        return m;
    }

    public makeMessage(event: DiagramImportProgressEvent): string {
        const main = DiagramImportMessageConverter.MESSAGE_DIC[event.step];
        const error = this.errorMessageOf(event.error);
        return main + error + event.optionalMessage;
    }

    public errorMessageOf(error: DiagramImportError) {
        return this.errorMessageConverter.messageOf(error);
    }
}
