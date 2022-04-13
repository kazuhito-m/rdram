import ProductImportProgressEvent from "@/domain/product/import/ProductImportProgressEvent";
import { ProductImportProgressStep } from "@/domain/product/import/ProductImportProgressStep";
import { ProductImportError } from "@/domain/product/import/ProductImportError";

describe('ProductImportProgressEvent', () => {
  test('stepの順序番号との相互変換が出来る', () => {
    const sut = new ProductImportProgressEvent(ProductImportProgressStep.失敗, ProductImportError.なし, "");
    expect(sut.stepNumber()).toEqual(-1);
  });

  test('stepの最大数(要素数)から現在stepで進捗率(パーセンテージ)が出せる', () => {
    const sut = new ProductImportProgressEvent(ProductImportProgressStep.形式チェック, ProductImportError.なし, "");
    expect(sut.percentage()).toEqual(42.857142857142854);
  });
})