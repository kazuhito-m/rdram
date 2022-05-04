import RdramLocalStorageExportFileName from "@/domain/storage/export/RdramLocalStorageExportFileName";

describe('RdramLocalStorageExportFileName', () => {
  test('ファイル名の形式が一致しているかを検査できる', () => {
    const fileName = 'rdram-localstorage-backup-20220430041848.json';

    const actual = RdramLocalStorageExportFileName.isApplicableOf(fileName);

    expect(actual).toEqual(true);
  });
});