import { LocalStorageImportError } from "@/domain/storage/import/LocalStorageImportError";

export default class LocalStorageImportErrorMessageConverter {
    private static readonly MESSAGE_DIC = LocalStorageImportErrorMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[LocalStorageImportError.なし] = "";
        m[LocalStorageImportError.予期せぬエラー] = "予期せぬエラーが発生しました。";
        m[LocalStorageImportError.ファイル名不正] = "RDRAMシステムからエクスポートされたものではないファイル名です。";
        m[LocalStorageImportError.サイズ超過] = "ファイルが大きすぎます。";
        m[LocalStorageImportError.非JSON形式] = "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";
        m[LocalStorageImportError.読込失敗] = "ローカルファイルの読み込みに失敗しました。";
        m[LocalStorageImportError.形式or構造が不正] = "形式が不正です。内容が読み取れない形式です。";
        return m;
    }

    public messageOf(error: LocalStorageImportError): string {
        return LocalStorageImportErrorMessageConverter.MESSAGE_DIC[error];
    }
}
