import DiagramExportService from "~/application/service/diagram/export/DiagramExportService";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import Diagram from "~/domain/diagram/Diagram";
import Placement from "~/domain/diagram/placement/Placement";
import Product from "~/domain/product/Product";
import Resource from "~/domain/resource/Resource";
import ResourceType from "~/domain/resource/ResourceType";
import LocalStorage from "~/domain/storage/LocalStorage";
import StorageRepository from "~/domain/storage/StorageRepository";
import ClientDownloadTransfar from "~/infrastructure/client/ClientDownloadTransfar";
import StorageDatasource from "~/infrastructure/storage/StorageDatasource";

describe('DiagramExportService', () => {

  test('リソース一つを配置した図一つをエクスポートする。', async () => {
    const resource = new Resource(
      1,
      ResourceType.アクター.id,
      "唯一のリソース(Actor)",
      "リソースの説明"
    );
    const diagram = BusinessContextDiagram.prototypeOf(
      10001,
      "唯一の図(ビジネスコンテキスト図)"
    ).addPlacement(new Placement(100, 200, 0, 0, resource.resourceId));

    const storageRepository = mockStorageRepository(diagram, resource);
    const sut = new DiagramExportService(storageRepository, new ClientDownloadTransfar());

    const actual = sut.downloadExportFileOnClient(diagram.id);

    expect(actual).toEqual(true);
  });
});

function mockStorageRepository(diagram: Diagram, resource: Resource): StorageRepository {
  const product = Product.prototypeOf("唯一のプロダクト")
    .replaceOf(diagram)
    .mergeResourceOf(resource);
  const storage = LocalStorage.prototypeOf()
    .merge(product)
    .changeCurrent(product);

  const repository = new StorageDatasource();
  repository.get = () => storage;
  return repository;
}