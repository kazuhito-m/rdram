import LocalStorageImportService from "@/application/service/storage/import/LocalStorageImportService";
import { LocalStorageImportError } from "~/domain/storage/import/LocalStorageImportError";
import LocalStorageImportProgressEvent from "~/domain/storage/import/LocalStorageImportProgressEvent";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import StorageDatasource from "~/infrastructure/storage/StorageDatasource";

describe('LocalStorageImportService', () => {
  test('中身がないなど、無効なファイルを指定された場合エラーを通知する。', async () => {
    const sut = createSut();

    const file = {
      name: "rdram-localstrage-0.json",
      text : async (): Promise<string> => {
        return "";
      }
    } as File;

    let resultEvent!: LocalStorageImportProgressEvent;
    const actual = await sut.importOf(file,
      event => resultEvent = event);

    expect(actual).toBeNull();
    expect(resultEvent.error).toEqual(LocalStorageImportError.非JSON形式);
  });
})

function createSut(): LocalStorageImportService {
  return new LocalStorageImportService(new StorageDatasource(), new FileSystemDatasouce());
}