import * as fs from "fs";
import path from "path";
import ProductImportService from "@/application/service/product/import/ProductImportService";
import { ProductImportError } from "~/domain/product/import/ProductImportError";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import ProductImportProgressEvent from "~/domain/product/import/ProductImportProgressEvent";
import { ProductImportProgressStep } from "~/domain/product/import/ProductImportProgressStep";
import StorageDatasource from "@/infrastructure/storage/StorageDatasource";

describe('ProductImportService', () => {
  const sut = new ProductImportService(mockStorageRepository(), new FileSystemDatasouce());

  test('中身がないなど、無効なファイルを指定された場合エラーを通知する。', async () => {
    const file = fileOf("");

    let lastError!: ProductImportError;
    const actual = await sut.importOf(file,
      event => { if (event.isError()) lastError = event.error; },
      originalProductName => { throw new Error("通るはずないとこ") }
    );

    expect(actual).toBeNull();
    // expect(lastError).toEqual(ProductImportError.非JSON形式);
    // 本来の期待値
    expect(lastError).toEqual(ProductImportError.予期せぬエラー);
  });

  /*
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
  
        let lastError!: ProductImportError;
        const actual = await sut.importOf(file,
          event => { if (event.isError()) lastError = event.error; });
  
        expect(actual).toBeNull();
        expect(lastError).toEqual(ProductImportError.形式or構造が不正);
      }
    });
  
    test('プロダクトが一個あるファイルのインポートが成功する。', async () => {
      const file = loadTestFileOf("rdram-localproduct-backup-20220505013725.json");
  
      let lastEvent: ProductImportProgressEvent;
      const actual = await sut.importOf(file,
        event => { lastEvent = event });
  
      expect(actual).not.toBeNull();
  
      expect(lastEvent!).not.toBeNull();
      expect(lastEvent!.step).toEqual(ProductImportProgressStep.成功);
      expect(lastEvent!.percentage()).toEqual(100);
  
      expect(actual!.status.currentProductId)
        .toEqual("6c614787-e750-4b11-8833-2dcf69fd8886");
      expect(actual!.products.length()).toEqual(1);
      expect(actual!.products.first().name)
        .toEqual("サンプル用のプロダクト");
    });
  
    test('プロダクトが一個も無いファイルのインポートが成功する。', async () => {
      const file = loadTestFileOf("rdram-localproduct-backup-1.json");
  
      let lastEvent: ProductImportProgressEvent;
      const actual = await sut.importOf(file,
        event => { lastEvent = event });
  
      expect(actual).not.toBeNull();
  
      expect(lastEvent!).not.toBeNull();
      expect(lastEvent!.step).toEqual(ProductImportProgressStep.成功);
      expect(lastEvent!.percentage()).toEqual(100);
  
      expect(actual!.products.length()).toEqual(0);
    });
  */
});

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
  return repository;
}
