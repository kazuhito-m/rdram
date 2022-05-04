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

  test('JSONとしては成り立つが、論理的構造がLocalStrageではない場合、エラーを通知する。', async () => {
    const validContent = `{
  "updateAt": "2022-04-29T19:18:33.274Z",
  "status": {
    "currentProductId": "6c614787-e750-4b11-8833-2dcf69fd8886",
    "__CLASS_NAME": "Status"
  },
  "products": {
    "values": []
  }
}`;

    const errorContents = [
      removedLinesContaining("updateAt", validContent),
      removedLinesContaining("currentProductId", validContent),
      removedLinesContaining("values", validContent),
    ];

    for (const errorContent of errorContents) {
      const file = fileOf(errorContent);

      let lastError!: LocalStorageImportError;
      const actual = await sut.importOf(file,
        event => { if (event.isError()) lastError = event.error; });

      expect(actual).toBeNull();
      expect(lastError).toEqual(LocalStorageImportError.形式or構造が不正);
    }
  });
})

function fileOf(contents: string): File {
  return new File(
    [contents],
    "rdram-localstorage-backup-0.json",
    { type: 'text/html' }
  );
}

function removedLinesContaining(word: string, content: string): string {
  return content.split(/\r?\n/)
    .filter(i => !i.includes(word))
    .join("\n");
}
