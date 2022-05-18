import { DiagramImportError } from "@/domain/diagram/import/progress/DiagramImportError";

export default class DiagramImportErrorMessageConverter {
    private static readonly MESSAGE_DIC = DiagramImportErrorMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[DiagramImportError.なし] = "";
        m[DiagramImportError.予期せぬエラー] = "予期せぬエラーが発生しました。";
        m[DiagramImportError.ファイル名不正] = "RDRAMシステムからエクスポートされたものではないファイル名です。";
        m[DiagramImportError.サイズ超過] = "ファイルが大きすぎます。";
        m[DiagramImportError.非JSON形式] = "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";
        m[DiagramImportError.読込失敗] = "ローカルファイルの読み込みに失敗しました。";
        m[DiagramImportError.形式or構造が不正] = "形式が不正です。内容が読み取れない形式です。";
        return m;
    }

    public messageOf(error: DiagramImportError): string {
        return DiagramImportErrorMessageConverter.MESSAGE_DIC[error];
    }
}
