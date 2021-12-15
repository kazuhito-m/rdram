import ProductImportErrorMessageConverter from "./ProductImportErrorMessageConverter";
import { ProductImportProgressStep } from "@/domain/product/import/ProductImportProgressStep";
import { ProductImportError } from "~/domain/product/import/ProductImportError";
import ProductImportProgressEvent from "@/domain/product/import/ProductImportProgressEvent";

export default class ProductImportMessageConverter {
    private readonly errorMessageConverter = new ProductImportErrorMessageConverter();

    private static readonly MESSAGE_DIC = ProductImportMessageConverter.initMap();

    private static initMap(): { [key: number]: string } {
        const m: { [key: number]: string } = {};
        m[ProductImportProgressStep.失敗] = "インポートが失敗しました。";
        m[ProductImportProgressStep.エラー] = "エラー : ";
        m[ProductImportProgressStep.キャンセル] = "インポートがキャンセルされました。";
        m[ProductImportProgressStep.開始] = "インポートを開始します。";
        m[ProductImportProgressStep.ファイル読み込み] = "ファイルの読み込み。";
        m[ProductImportProgressStep.形式チェック] = "ファイル内容・形式のチェック。";
        m[ProductImportProgressStep.追加] = "プロダクトの追加・置き換え。";
        m[ProductImportProgressStep.保存] = "LocalStrageへの保存。";
        m[ProductImportProgressStep.完了] = "完了。"
        m[ProductImportProgressStep.成功] = "インポートが成功しました。"
        return m;
    }

    public makeMessage(event: ProductImportProgressEvent): string {
        const main = ProductImportMessageConverter.MESSAGE_DIC[event.step];
        const error = this.errorMessageOf(event.error);
        return main + error + event.optionalMessage;
    }

    public errorMessageOf(error: ProductImportError) {
        return this.errorMessageConverter.messageOf(error);
    }
}
