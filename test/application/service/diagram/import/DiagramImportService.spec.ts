import * as fs from "fs";
import path from "path";
import DiagramImportService from "@/application/service/diagram/import/DiagramImportService";
import FileSystemDatasouce from "@/infrastructure/filesystem/FileSystemDatasource";
import DiagramImportProgressEvent from "@/domain/diagram/import/DiagramImportProgressEvent";
import { DiagramImportProgressStep } from "@/domain/diagram/import/DiagramImportProgressStep";
import StorageDatasource from "@/infrastructure/storage/StorageDatasource";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import { BehaviorWhenNameColide } from "@/domain/diagram/import/userarrange/BehavioWhenNameColide";
import UserArrangeOfImportDiagramSetting from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagramSetting";
import DiagramType from "~/domain/diagram/DiagramType";

describe('DiagramImportService', () => {
  test('既存の図もリソースも無い状態で、リソース2つを配置した図のファイルのインポートが成功する。', async () => {
    // 準備
    const mockStorageRepository = new MockStorageRepository(Product.prototypeOf("test"));
    const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

    const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

    // 実行
    let lastEvent: DiagramImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event; },
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
    expect(resources.existsSameOf(r1)).toEqual(true);
    const r2 = resourceOf(ResourceType.アクター, "三浦");
    expect(resources.existsSameOf(r2)).toEqual(true);
  });

  test('既存の同種同名のリソースと図が在る状態で、リソース2つを配置した図のファイルのインポートが成功する。', async () => {
    // 準備
    const product = Product.prototypeOf("SampleSystem")
      .createAndAddDiagram("FOR_TEST", DiagramType.システムコンテキスト図); // システムアイコン置いたシステムコンテキスト図一つだけのプロダクト

    const mockStorageRepository = new MockStorageRepository(product);
    const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

    const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

    // 実行
    let passedArrange: UserArrangeOfImportDiagramSetting | null = null;
    let lastEvent: DiagramImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event },
      arrange => {
        passedArrange = arrange;
        return arrange; // ユーザは、変更せずデフォルトで答える、というオペレーション
      }
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

    const modifyProduct = mockStorageRepository.getCurrentProduct() as Product;
    // expect(modifyProduct.diagrams.length).toEqual(1);  // TODO 最後に蘇らせる
    const resources = modifyProduct.resources;
    expect(resources.length).toEqual(4);  // 同じリソースが在った場合は「既存」がデフォルト、なので足されない。

    const r1 = resourceOf(ResourceType.システム, "SampleSystem");
    expect(resources.existsSameOf(r1)).toEqual(true);
    const r2 = resourceOf(ResourceType.アクター, "三浦");
    expect(resources.existsSameOf(r2)).toEqual(true);


    // 「ユーザ確認」でコールバックされていた値
    expect(passedArrange).not.toBeNull();

    expect(passedArrange!.isColidedDiagramName()).toEqual(true);
    expect(passedArrange!.diagramNamesOfColided?.behavior)
      .toEqual(BehaviorWhenNameColide.置換);
    expect(passedArrange!.diagramNamesOfColided?.sourceName)
      .toEqual("FOR_TEST");

    expect(passedArrange!.resourceNamesOfColided).toHaveLength(1);
    const colidedResouceName = passedArrange!.resourceNamesOfColided[0];
    expect(colidedResouceName.behavior)
      .toEqual(BehaviorWhenNameColide.既存);
    expect(colidedResouceName.sourceName).toEqual("SampleSystem");
  });

  test('既存の同種同名のリソースと図が在る状態で、リソース1つが重複しているが「置換」指定で、ファイルインポートが成功する。', async () => {
    // 準備
    const product = Product.prototypeOf("SampleSystem")
      .createAndAddDiagram("FOR_TEST", DiagramType.システムコンテキスト図); // システムアイコン置いたシステムコンテキスト図一つだけのプロダクト

    const mockStorageRepository = new MockStorageRepository(product);
    const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

    const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

    // 実行
    let passedCallback = false;
    let lastEvent: DiagramImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event },
      arrange => {
        passedCallback = true;
        // ユーザは、「リソースはインポートデータで置換」と答える、というオペレーション
        const arrangedColidedNames = arrange.resourceNamesOfColided
          .map(name => name.with(BehaviorWhenNameColide.置換));
        return arrange.withResourceNames(arrangedColidedNames);
      }
    );

    // 確認
    expect(lastEvent!).not.toBeNull();

    // TODO 「インポートした結果」をどうするのか、をちゃんと考える(リソースは「インポートしたもののみ」を返す？)
    expect(actual).not.toBeNull();
    expect(actual!.placements.length).toEqual(2);
    expect(actual!.allRelations().length).toEqual(1);

    expect(passedCallback).toEqual(true);
    // TODO 確認の実装。
  });

  test('既存の同種同名のリソースと図が在る状態で、リソース1つが重複しているが「別名」指定で、ファイルインポートが成功する。', async () => {
    // 準備
    const product = Product.prototypeOf("SampleSystem")
      .createAndAddDiagram("FOR_TEST", DiagramType.システムコンテキスト図); // システムアイコン置いたシステムコンテキスト図一つだけのプロダクト

    const mockStorageRepository = new MockStorageRepository(product);
    const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

    const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

    // 実行
    let passedCallback = false;
    let lastEvent: DiagramImportProgressEvent;
    const actual = await sut.importOf(file,
      event => { lastEvent = event },
      arrange => {
        passedCallback = true;
        // ユーザは、「リソースは別名に変更してインポート」と答える、というオペレーション
        const arrangedColidedNames = arrange.resourceNamesOfColided
          .map(name => name.with(BehaviorWhenNameColide.別名, "SampleSystemが重複したので変更した名前"));
        return arrange.withResourceNames(arrangedColidedNames);
      }
    );

    // 確認
    expect(lastEvent!).not.toBeNull();

    // TODO 「インポートした結果」をどうするのか、をちゃんと考える(リソースは「インポートしたもののみ」を返す？)
    expect(actual).not.toBeNull();
    expect(actual!.placements.length).toEqual(2);
    expect(actual!.allRelations().length).toEqual(1);

    expect(passedCallback).toEqual(true);
    // TODO 確認の実装。
  });

  test('既存の同種同名のリソースと図が在る状態で、リソース1つが重複しているが、ユーザにキャンセルされた場合。', async () => {
    // 準備
    const product = Product.prototypeOf("SampleSystem")
      .createAndAddDiagram("FOR_TEST", DiagramType.システムコンテキスト図); // システムアイコン置いたシステムコンテキスト図一つだけのプロダクト

    const mockStorageRepository = new MockStorageRepository(product);
    const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

    const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

    // 実行
    let passedCallback = false;
    const progressSteps: DiagramImportProgressStep[] = [];
    const actual = await sut.importOf(file,
      event => { progressSteps.push(event.step); },
      arrange => {
        passedCallback = true;
        // ユーザは、「インポートをキャンセル」と答える、というオペレーション
        return UserArrangeOfImportDiagramSetting.empty();
      }
    );

    // 確認
    expect(progressSteps.length).toBeGreaterThan(0);
    expect(progressSteps[progressSteps.length - 2]).toEqual(DiagramImportProgressStep.キャンセル);
    expect(progressSteps[progressSteps.length - 1]).toEqual(DiagramImportProgressStep.失敗);

    expect(actual).toBeNull();
    expect(passedCallback).toEqual(true);
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
  constructor(private currentProduct: Product) { super() }

  public override  getCurrentProduct(): Product | undefined {
    return this.currentProduct;
  }

  public override registerCurrentProduct(product: Product): void {
    this.currentProduct = product;
  }
}
