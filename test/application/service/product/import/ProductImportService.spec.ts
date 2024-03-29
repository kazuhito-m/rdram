import * as fs from "fs";
import path from "path";
import ProductImportService from "@/application/service/product/import/ProductImportService";
import { ProductImportError } from "~/domain/product/import/ProductImportError";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import ProductImportProgressEvent from "~/domain/product/import/ProductImportProgressEvent";
import { ProductImportProgressStep } from "~/domain/product/import/ProductImportProgressStep";
import StorageDatasource from "@/infrastructure/storage/StorageDatasource";
import LocalStorage from "@/domain/storage/LocalStorage";

describe('ProductImportService', () => {
  const sut = new ProductImportService(mockStorageRepository(), new FileSystemDatasouce());

  test('中身がないなど、無効なファイルを指定された場合エラーを通知する。', async () => {
    const file = fileOf("");

    let lastError!: ProductImportError;
    const actual = await sut.importOf(file,
      event => { if (event.isError()) lastError = event.error; },
      assertNotGoThroughOfNameUniquelogic
    );

    expect(actual).toBeNull();
    expect(lastError).toEqual(ProductImportError.非JSON形式);
  });

  test('JSONとしては成り立つが、論理的構造がLocalStrageではない場合、エラーを通知する。', async () => {
    const validContent = `{
    "updateAt": "2022-05-04T22:37:26.738Z",
    "id": "3b2f6fe6-5595-48ae-971c-37c1ffcbfe94",
    "name": "テスト用のプロダクト名",
    "userSettings": {
        "autoSave": true,
        "darkMode": true,
        "__CLASS_NAME": "UserSettings"
    },
    "diagrams": {
        "values": [],
        "__CLASS_NAME": "Diagrams"
    },
    "resources": {
        "values": [],
        "__CLASS_NAME": "Resources"
    },
    "resourceIdSequence": 1,
    "__CLASS_NAME": "Product"
  }`;

    const errorContents = [
      removedLinesContaining("updateAt", validContent),
      removedLinesContaining("id", validContent),
      removedLinesContaining("name", validContent),
      removedLinesContaining("values", validContent),
      removedLinesContaining("resourceIdSequence", validContent),
    ];

    for (const errorContent of errorContents) {
      const file = fileOf(errorContent);

      let lastError!: ProductImportError;
      const actual = await sut.importOf(file,
        event => { if (event.isError()) lastError = event.error; },
        assertNotGoThroughOfNameUniquelogic
      );

      expect(actual).toBeNull();
      expect(lastError).toEqual(ProductImportError.形式or構造が不正);
    }
  });

  test('デフォルト状態のプロダクトのファイルのインポートが成功する。', async () => {
    const file = loadTestFileOf("rdram-product-テスト用デフォルト-20220505184354.json");

    let lastEvent: ProductImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event },
      assertNotGoThroughOfNameUniquelogic
    );

    expect(lastEvent!).not.toBeNull();
    expect(lastEvent!.step).toEqual(ProductImportProgressStep.成功);
    expect(lastEvent!.percentage()).toEqual(100);

    expect(actual).not.toBeNull();

    expect(actual!.id)
      .toEqual("59d99156-9c49-418c-b83b-480c71f07907");
    expect(actual!.name).toEqual("テスト用デフォルト");
    expect(actual!.diagrams.length).toEqual(0);
    expect(actual!.resources.length).toEqual(3);
  });

  test('図もリソースも一個も無いファイルのインポートが成功する。', async () => {
    const file = loadTestFileOf("rdram-product-FOR_TEST_PRODUCT-20220505175636.json");

    let lastEvent: ProductImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event },
      assertNotGoThroughOfNameUniquelogic
    );

    expect(lastEvent!).not.toBeNull();
    expect(lastEvent!.step).toEqual(ProductImportProgressStep.成功);
    expect(lastEvent!.percentage()).toEqual(100);

    expect(actual).not.toBeNull();

    expect(actual!.id)
      .toEqual("3b2f6fe6-5595-48ae-971c-37c1ffcbfe94");
    expect(actual!.name).toEqual("FOR_TEST_PRODUCT");
    expect(actual!.diagrams.length).toEqual(0);
    expect(actual!.resources.length).toEqual(0);
  });
});

function assertNotGoThroughOfNameUniquelogic(originalProductName: string): string {
  throw new Error(`名前重複ロジックは通らないはず:${originalProductName}`);
}

function fileOf(contents: string): File {
  return new File(
    [contents],
    "rdram-product-xxx-0.json",
    { type: 'text/html' }
  );
}

function loadTestFileOf(fileName: string): File {
  const dataFilePath = path.join(__dirname, "data", fileName);
  const contents = fs.readFileSync(dataFilePath, "utf8");
  return new File(
    [contents.toString()],
    fileName,
    { type: 'text/html' }
  );
}

function removedLinesContaining(word: string, content: string): string {
  return content.split(/\r?\n/)
    .filter(i => !i.includes(word))
    .join("\n");
}

function mockStorageRepository() {
  const repository = new StorageDatasource();
  repository.register = (storage) => expect(storage).not.toBeNull();
  repository.get = () => LocalStorage.prototypeOf();
  return repository;
}
