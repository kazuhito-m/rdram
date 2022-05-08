import * as fs from "fs";
import path from "path";
import DiagramImportService from "@/application/service/diagram/import/DiagramImportService";
import FileSystemDatasouce from "~/infrastructure/filesystem/FileSystemDatasource";
import DiagramImportProgressEvent from "~/domain/diagram/import/DiagramImportProgressEvent";
import { DiagramImportProgressStep } from "~/domain/diagram/import/DiagramImportProgressStep";
import StorageDatasource from "@/infrastructure/storage/StorageDatasource";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";

describe('DiagramImportService', () => {
  test('リソース2つを配置した図のファイルのインポートが成功する。', async () => {
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
    expect(actual!.allRelations().length).toEqual(1);

    const product = mockStorageRepository.getCurrentProduct() as Product;
    const resources = product.resources;
    expect(resources.length).toEqual(5);

    const r1 = resourceOf(ResourceType.システム, "SampleSystem");
    expect(resources.existsSomeTypeAndNameOf(r1)).toEqual(true);
    const r2 = resourceOf(ResourceType.アクター, "三浦");
    expect(resources.existsSomeTypeAndNameOf(r2)).toEqual(true);
  });
});

function loadTestFileOf(fileName: string): File {
  const dataFilePath = path.join(__dirname, "data", fileName);
  const contents = fs.readFileSync(dataFilePath, "utf8");
  return new File(
    [contents.toString()],
    fileName,
    { type: 'text/html' }
  );
}

function resourceOf(resouceType: ResourceType, name: string): Resource {
  return new Resource(0, resouceType.id, name, "");
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
