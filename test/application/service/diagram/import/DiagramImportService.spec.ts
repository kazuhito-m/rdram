import * as fs from "fs";
import path from "path";
import DiagramImportService from "@/application/service/diagram/import/DiagramImportService";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import DiagramImportProgressEvent from "~/domain/diagram/import/DiagramImportProgressEvent";
import { DiagramImportProgressStep } from "~/domain/diagram/import/DiagramImportProgressStep";
import StorageDatasource from "@/infrastructure/storage/StorageDatasource";
import LocalStorage from "@/domain/storage/LocalStorage";
import Product from "@/domain/product/Product";

describe('DiagramImportService', () => {
  test('図もリソース一つのファイルのインポートが成功する。', async () => {
    // 準備
    const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

    const mockStorageRepository = new MockStorageRepository(Product.prototypeOf("test"));
    const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

    // 実行
    let lastEvent: DiagramImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event },
      (settings) => settings
    );

    // 確認
    expect(lastEvent!).not.toBeNull();
    expect(lastEvent!.step).toEqual(DiagramImportProgressStep.成功);
    expect(lastEvent!.percentage()).toEqual(100);

    expect(actual).not.toBeNull();
    expect(actual!.id).toEqual(2);
    expect(actual!.name).toEqual("FOR_TEST");
    expect(actual!.placements.length).toEqual(2);

    const product = mockStorageRepository.getCurrentProduct() as Product;
    expect(product.resources.length).toEqual(5);
  });
});

function assertNotGoThroughOfNameUniquelogic(originalDiagramName: string): string {
  throw new Error(`名前重複ロジックは通らないはず:${originalDiagramName}`);
}

function fileOf(contents: string): File {
  return new File(
    [contents],
    "rdram-diagram-xxx-0.json",
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

class MockStorageRepository extends StorageDatasource {
  constructor(protected currentProduct: Product) { super() }

  public override  getCurrentProduct(): Product | undefined {
    return this.currentProduct;
  }

  public override registerCurrentProduct(product: Product): void {
    this.currentProduct = product;
  }
}
