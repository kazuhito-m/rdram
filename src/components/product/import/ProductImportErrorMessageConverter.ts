import { ProductImportError } from "@/domain/product/import/ProductImportError";

export default class ProductImportErrorMessageConverter {
    private static readonly MESSAGE_DIC = ProductImportErrorMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[ProductImportError.なし] = "";
        m[ProductImportError.予期せぬエラー] = "予期せぬエラーが発生しました。";
        m[ProductImportError.ファイル名不正] = "RDRAMシステムからエクスポートされたものではないファイル名です。";
        m[ProductImportError.サイズ超過] = "ファイルが大きすぎます。";
        m[ProductImportError.非JSON形式] = "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";
        m[ProductImportError.読込失敗] = "ローカルファイルの読み込みに失敗しました。";
        m[ProductImportError.プロダクト名不明] = "形式が不正です。プロダクト名が設定されていません。";
        return m;
    }

    public messageOf(error: ProductImportError): string {
        return ProductImportErrorMessageConverter.MESSAGE_DIC[error];
    }
}
