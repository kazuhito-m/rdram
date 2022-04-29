import RdramProductExportFileName from "@/domain/product/export/RdramProductExportFileName";

describe('RdramProductExportFileName', () => {
  test('ファイル名の形式が一致しているかを検査できる', () => {
    const fileName = 'rdram-product-konata-20220430024908.json';

    const actual = RdramProductExportFileName.isApplicableOf(fileName);

    expect(actual).toEqual(true);
  });
})