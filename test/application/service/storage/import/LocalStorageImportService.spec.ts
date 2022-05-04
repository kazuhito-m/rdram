import LocalStorageImportService from "@/application/service/storage/import/LocalStorageImportService";
import { LocalStorageImportError } from "~/domain/storage/import/LocalStorageImportError";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import StorageDatasource from "~/infrastructure/storage/StorageDatasource";

describe('LocalStorageImportService', () => {
  const sut = new LocalStorageImportService(new StorageDatasource(), new FileSystemDatasouce());

  test('中身がないなど、無効なファイルを指定された場合エラーを通知する。', async () => {
    const file = fileOf("");

    let lastError!: LocalStorageImportError;
    const actual = await sut.importOf(file,
      event => { if (event.isError()) lastError = event.error; });

    expect(actual).toBeNull();
    expect(lastError).toEqual(LocalStorageImportError.非JSON形式);
  });
})

function fileOf(contents: string): File {
  return new File(
    [contents],
    "rdram-localstorage-backup-0.json",
    { type: 'text/html' }
  );
}
