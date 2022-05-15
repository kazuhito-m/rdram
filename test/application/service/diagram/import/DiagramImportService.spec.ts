import * as fs from "fs";
import path from "path";
import DiagramImportService from "@/application/service/diagram/import/DiagramImportService";
import FileSystemDatasouce from "@/infrastructure/filesystem/FileSystemDatasource";
import DiagramImportProgressEvent from "@/domain/diagram/import/progress/DiagramImportProgressEvent";
import { DiagramImportProgressStep } from "@/domain/diagram/import/progress/DiagramImportProgressStep";
import StorageDatasource from "@/infrastructure/storage/StorageDatasource";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import { BehaviorWhenNameColide } from "@/domain/diagram/import/userarrange/BehavioWhenNameColide";
import UserArrangeOfImportDiagramSetting from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagramSetting";
import DiagramType from "@/domain/diagram/DiagramType";
import NameOfColided from "@/domain/diagram/import/userarrange/NameOfColided";

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
      (arrange) => arrange
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

  describe('既存の同種同名のリソースと図が在る状態で、リソース1つが重複しているファイルのインポート。', () => {
    test('ユーザがリソースへ「既存」(何も変更せず/default)を指定し、成功する。', async () => {
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
          // ユーザは、変更せずデフォルトで答える、というオペレーション
          return arrange;
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

      const modifiedProduct = mockStorageRepository.getCurrentProduct() as Product;

      expect(modifiedProduct.diagrams.length).toEqual(1);
      const resources = modifiedProduct.resources;
      expect(resources.length).toEqual(4);  // 同じリソースが在った場合は「既存」がデフォルト、なので足されない。

      const r1 = resourceOf(ResourceType.システム, "SampleSystem");
      const addedR1 = resources.getSameOf(r1);
      expect(addedR1).not.toBeUndefined();
      expect(addedR1?.type).toEqual(r1.type);
      expect(addedR1?.name).toEqual(r1.name);
      expect(addedR1?.description).toEqual(""); // 既存のもの(Importで置き換えてない)

      const r2 = resourceOf(ResourceType.アクター, "三浦");
      const addedR2 = resources.getSameOf(r2);
      expect(addedR2).not.toBeUndefined();
      expect(addedR2?.type).toEqual(r2.type);
      expect(addedR2?.name).toEqual(r2.name);
      expect(addedR2?.description).toEqual("インポートされた側のリソース:三浦");

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

    test('ユーザがリソースへ「置換」指定し、成功する。', async () => {
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

      expect(actual).not.toBeNull();
      expect(actual!.placements.length).toEqual(2);
      expect(actual!.allRelations().length).toEqual(1);

      const modifiedProduct = mockStorageRepository.getCurrentProduct() as Product;

      expect(modifiedProduct.diagrams.length).toEqual(1);
      const resources = modifiedProduct.resources;
      expect(resources.length).toEqual(4);  // 同じリソースが在るが「置換」を指定した、ので足されない。

      const r1 = resourceOf(ResourceType.システム, "SampleSystem");
      const addedR1 = resources.getSameOf(r1);
      expect(addedR1).not.toBeUndefined();
      expect(addedR1?.type).toEqual(r1.type);
      expect(addedR1?.name).toEqual(r1.name);
      expect(addedR1?.description).toEqual("インポートされた側のリソース:SampleSystem");

      const r2 = resourceOf(ResourceType.アクター, "三浦");
      const addedR2 = resources.getSameOf(r2);
      expect(addedR2).not.toBeUndefined();
      expect(addedR2?.type).toEqual(r2.type);
      expect(addedR2?.name).toEqual(r2.name);
      expect(addedR2?.description).toEqual("インポートされた側のリソース:三浦");

      expect(passedCallback).toEqual(true);
    });

    test('ユーザがリソースへ「別名」指定し、成功する。', async () => {
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

      const modifiedProduct = mockStorageRepository.getCurrentProduct() as Product;

      expect(modifiedProduct.diagrams.length).toEqual(1);
      const resources = modifiedProduct.resources;
      expect(resources.length).toEqual(5); // 同じリソースが在るが「別名」を指定した、ので一つ増える。
      expect(modifiedProduct.resourceIdSequence).toEqual(6); // 一件追加した最後のidSequence。(次足す場合のIDにインクリメントされて終わる)

      const r1 = resourceOf(ResourceType.システム, "SampleSystem");
      const addedR1 = resources.getSameOf(r1);
      expect(addedR1).not.toBeUndefined();
      expect(addedR1?.type).toEqual(r1.type);
      expect(addedR1?.name).toEqual(r1.name);
      expect(addedR1?.description).toEqual("");

      const r2 = resourceOf(ResourceType.アクター, "三浦");
      const addedR2 = resources.getSameOf(r2);
      expect(addedR2).not.toBeUndefined();
      expect(addedR2?.type).toEqual(r2.type);
      expect(addedR2?.name).toEqual(r2.name);
      expect(addedR2?.description).toEqual("インポートされた側のリソース:三浦");

      const r3 = resourceOf(ResourceType.システム, "SampleSystemが重複したので変更した名前");
      const addedR3 = resources.getSameOf(r3);
      expect(addedR3).not.toBeUndefined();
      expect(addedR3?.type).toEqual(r3.type);
      expect(addedR3?.name).toEqual(r3.name);
      expect(addedR3?.description).toEqual("インポートされた側のリソース:SampleSystem");

      expect(passedArrange).not.toBeNull();
      expect(passedArrange!.resourceNamesOfColided).toHaveLength(1);
      expect(passedArrange!.resourceNamesOfColided[0].sourceName).toEqual("SampleSystem");
    });

    test('ユーザが図へ「別名」指定し、成功する。', async () => {
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
          // ユーザは、「図は別名に変更してインポート」と答える、というオペレーション
          const arrangedColidedName = arrange
            .diagramNamesOfColided?.with(BehaviorWhenNameColide.別名, "FOR_TESTという図名が重複したので置換した名前")
          return arrange.withDiagramName(arrangedColidedName as NameOfColided);
        }
      );

      // 確認
      expect(lastEvent!).not.toBeNull();

      expect(actual).not.toBeNull();
      expect(actual!.placements.length).toEqual(2);
      expect(actual!.allRelations().length).toEqual(1);

      const modifiedProduct = mockStorageRepository.getCurrentProduct() as Product;

      const diagrams = modifiedProduct.diagrams;
      expect(diagrams.length).toEqual(2); // 「別名」を指定したので一つ増える。
      const diagramExists = diagrams.existsSameTypeAndName("FOR_TESTという図名が重複したので置換した名前", DiagramType.システムコンテキスト図);
      expect(diagramExists).toEqual(true);

      expect(passedArrange).not.toBeNull();
      expect(passedArrange!.diagramNamesOfColided).not.toBeNull();
      expect(passedArrange!.diagramNamesOfColided!.sourceName).toEqual("FOR_TEST");
    });

    test('ユーザにキャンセルされた場合。', async () => {
      // 準備
      const product = Product.prototypeOf("SampleSystem")
        .createAndAddDiagram("FOR_TEST", DiagramType.システムコンテキスト図); // システムアイコン置いたシステムコンテキスト図一つだけのプロダクト

      const mockStorageRepository = new MockStorageRepository(product);
      const sut = new DiagramImportService(mockStorageRepository, new FileSystemDatasouce());

      const file = loadTestFileOf("rdram-diagram-FOR_TEST-0.json");

      // 実行
      let passedArrange: UserArrangeOfImportDiagramSetting | null = null;
      const progressSteps: DiagramImportProgressStep[] = [];
      const actual = await sut.importOf(file,
        event => { progressSteps.push(event.step); },
        arrange => {
          passedArrange = arrange;
          // ユーザは、「インポートをキャンセル」と答える、というオペレーション
          return UserArrangeOfImportDiagramSetting.empty();
        }
      );

      // 確認
      expect(progressSteps.length).toBeGreaterThan(0);
      expect(progressSteps[progressSteps.length - 2]).toEqual(DiagramImportProgressStep.キャンセル);
      expect(progressSteps[progressSteps.length - 1]).toEqual(DiagramImportProgressStep.失敗);

      expect(actual).toBeNull();
      expect(passedArrange).not.toBeNull();
    });
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
