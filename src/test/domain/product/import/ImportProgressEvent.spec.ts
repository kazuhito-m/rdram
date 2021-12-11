import { ProductImportProgressStep } from "@/domain/product/import/ProductImportProgressStep";
import EnumAnalyzer from "@/domain/basic/enum/EnumAnalyzer";

describe('ImportProgressEvent', () => {
  test('stepの順序番号との相互変換が出来る', () => {
    const num = ProductImportProgressStep.失敗 as number;
    console.log("キャンセルの番号:" + num);
    expect(num).toEqual(-1);
  });

  test('stepの最大数(要素数)を取得する事が出来る', () => {
    const size = EnumAnalyzer.enumLengthOf(ProductImportProgressStep);
    expect(size).toEqual(7);
  });
})