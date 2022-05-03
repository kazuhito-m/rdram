import LocalStorageImportService from "@/application/service/storage/import/LocalStorageImportService";
import { LocalStorageImportError } from "~/domain/storage/import/LocalStorageImportError";
import LocalStorageImportProgressEvent from "~/domain/storage/import/LocalStorageImportProgressEvent";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import StorageDatasource from "~/infrastructure/storage/StorageDatasource";

describe('LocalStorageImportService', () => {
  test('中身がないなど、無効なファイルを指定された場合エラーを通知する。', async () => {
    const sut = createSut();

    const file = new File([""], 
      "rdram-localstorage-backup-0.json",
      { type: 'text/html' }
    );

    let lastError!: LocalStorageImportError;
    const callback = (event: LocalStorageImportProgressEvent): void => {
      if (event.error === LocalStorageImportError.なし) return;

      console.log('callbackがコールされた。', 'step', event.step, 'error', event.error);
      lastError = event.error;
    }
    const actual = await sut.importOf(file, callback);

    expect(actual).toBeNull();
    expect(lastError).toEqual(LocalStorageImportError.非JSON形式);
  });
})

function createSut(): LocalStorageImportService {
  return new LocalStorageImportService(new StorageDatasource(), new FileSystemDatasouce());
}