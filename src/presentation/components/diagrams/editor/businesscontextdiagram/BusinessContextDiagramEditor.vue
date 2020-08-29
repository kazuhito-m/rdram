<template>
  <div class="diagram-pain-container">
    <TwoPainWithSlideBarLayout adsorptionLeftWhenDoubleClick="true" defaultLeftPainWidth="80%">
      <template v-slot:leftPain>
        <div class="canvas-container" ref="convasContainer">
          <div class="diagram-canvas" :id="canvasId"></div>
        </div>

        <CanvasSettingToolBar
          :diagramId="diagramId"
          :canvasZoom="canvasZoom"
          @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
          @onChangeZoomBySlider="onChangeZoomBySlider"
          @onChangeCanvasGuideType="onChangeCanvasGuideType"
          @onSvgDownload="onSvgDownload"
        />
      </template>
      <template v-slot:rightPain>
        <ResourceParet
          :diagramId="diagramId"
          :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
          :usedResouceIds="usedResouceIds"
          :product="product"
          @onDeleteResourceOnDiagram="onDeleteResourceOnDiagram"
          @onDeleteResourceOnProduct="onDeleteResourceOnProduct"
        />
      </template>
    </TwoPainWithSlideBarLayout>
  </div>
</template>

<script lang="ts">
import {
  Prop,
  Component,
  Vue,
  Inject,
  Emit,
  Watch
} from "nuxt-property-decorator";
import TwoPainWithSlideBarLayout from "@/presentation/components/TwoPainWithSlideBarLayout.vue";
import ResourceParet from "@/presentation/components/diagrams/editor/businesscontextdiagram/paret/ResourceParet.vue";
import ConnectorRightClickMenuAndEditor from "./ConnectorRightClickMenuAndEditor.vue";
import CanvasSettingToolBar from "@/presentation/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue";
import { RelationContainer } from "./ConnectorRightClickMenuAndEditor.vue";
import { ResizeObserver } from "resize-observer";

import moment from "moment/moment";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure, command } from "draw2d";
import EventAnalyzer from "@/presentation/draw2d/eventanalyze/EventAnalyzer";
import BCDConnectPortsEvents from "./draw2d/eventanalyze/BCDConnectPortsEvents";
import BCDDeleteShapeEvents from "./draw2d/eventanalyze/BCDDeleteShapeEvents";
import BCDMoveShapeEvents from "./draw2d/eventanalyze/BCDMoveShapeEvents";
import BCDResizeShapeEvents from "./draw2d/eventanalyze/BCDResizeShapeEvents";

import CompanyIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/CompanyIconGenerator";
import ActorIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/ActorIconGenerator";
import RoomIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/RoomIconGenerator";
import BusinessIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/BusinessIconGenerator";
import GoodsIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/GoodsIconGenerator";
import FacilityIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/FacilityIconGenerator";
import ContractIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/ContractIconGenerator";
import ServiceIconGenerator from "@/presentation/components/diagrams/editor/businesscontextdiagram/icon/ServiceIconGenerator";

import StrageRepository from "@/domain/strage/StrageRepository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import BusinessContextDiagram from "@/domain/diagram/businesscontext/BusinessContextDiagram";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Placement from "@/domain/diagram/placement/Placement";
import RouterType from "@/domain/diagram/relation/RouterType";
import Relation from "@/domain/diagram/relation/Relation";
import IconGenerator from "@/presentation/components/diagrams/icon/IconGenerator";
import MessageBox from "@/presentation/MessageBox";
import Uuid from "@/domain/world/Uuid";
import { ResizeObserverEntry } from "resize-observer/lib/ResizeObserverEntry";
import CanvasGuideType from "../toolbar/CanvasGuideType";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import DownloadFile from "@/domain/client/DownloadFile";
import Products from "@/domain/product/Products";

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    ResourceParet,
    ConnectorRightClickMenuAndEditor,
    CanvasSettingToolBar
  }
})
export default class BusinessContextDiagramEditor extends Vue {
  @Inject()
  private repository!: StrageRepository;
  @Inject()
  private clientDownloadRepository!: ClientDownloadRepository;

  private static readonly ICON_GENERATORS: IconGenerator[] = [
    new CompanyIconGenerator(),
    new ActorIconGenerator(),
    new RoomIconGenerator(),
    new BusinessIconGenerator(),
    new GoodsIconGenerator(),
    new FacilityIconGenerator(),
    new ServiceIconGenerator(),
    new ContractIconGenerator()
  ];

  @Prop({ required: true })
  private readonly diagramId!: number;
  private usedResouceIds: number[] = [];
  private product!: Product;

  @Prop({ required: true })
  private allResourcesOnCurrentProduct!: Resource[];
  private lastResourcesOnCurrentProductCount = 0;

  @Prop()
  private resizedDiagramId = 0;

  private canvas!: draw2d.Canvas;
  private readonly eventAnalyzer = new EventAnalyzer([
    new BCDDeleteShapeEvents(),
    new BCDConnectPortsEvents(),
    new BCDMoveShapeEvents(),
    new BCDResizeShapeEvents()
  ]);

  private paretPainId!: string;
  private canvasId!: string;

  private paretPainWidth: string | null = null;

  private warnBar: boolean = false;
  private warnMessage: string = "";

  private visibleConnectorMenu = false;
  private relation?: Relation;
  private menuX = 0;
  private menuY = 0;

  private targetRelationId = "";
  private editableRouterId = 0;

  private canvasZoom = 1;

  public created(): void {
    this.product = this.getCurrentProduct();

    const diagramId = this.diagramId;
    const diagram = this.product.diagrams.of(diagramId);
    if (!diagram) return;

    this.paretPainId = "paretPain" + diagramId;
    this.canvasId = "canvas" + diagramId;

    this.lastResourcesOnCurrentProductCount = this.allResourcesOnCurrentProduct.length;
  }

  public mounted() {
    this.$nuxt.$loading.start();

    this.$nextTick(() => {
      const diagram = this.product.diagrams.of(this.diagramId) as Diagram;

      this.showCanvas();
      this.fixCanvasPosition();
      this.addCanvasEvent();
      this.drawDiagram(diagram);

      this.$nuxt.$loading.finish(); // FIXME フラグ管理的には正しいタイミングで動いているが、Loding画面出てこない。修正要。
    });
  }

  @Emit("onUpdatedDiagramProperties")
  private onUpdatedDiagramProperties(diagram: Diagram): void {
    const c = this.canvas;
    if (c.getWidth() === diagram.width && c.getHeight() === diagram.height)
      return;

    this.usedResouceIds.splice(0, this.usedResouceIds.length);
    c.clear();
    this.drawDiagram(diagram);
    this.onChangeZoomBySlider(this.canvasZoom);
  }

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  private showCanvas(): void {
    const canvas = new draw2d.Canvas(
      this.canvasId,
      Diagram.MAX_WIDTH,
      Diagram.MAX_HEIGHT
    );
    canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy());
    canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(-1));
    canvas.installEditPolicy(new draw2d.policy.canvas.ExtendedKeyboardPolicy());

    // XXX 多分必要だと思うのだけど、実害がないので一旦消す。
    // これで「スクロールの元と成るオブジェクトがわからなくなる」のだとは思うが、
    // canvasのスクロールを制御するコードがまだないので、このままにしておく。
    // 必要になったらここを思い出すこと。(無理だろ…)
    //
    // const editorPain = this.$refs.editorPain as HTMLElement;
    // editorPain.id = `editorPain${this.diagramId}`;
    // canvas.setScrollArea(`#${editorPain.id}`);

    this.canvas = canvas;
  }

  private onResizeDiagram():void {
    if (this.diagramId !== this.resizedDiagramId) return;
  }

  /**
   * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
   */
  private fixCanvasPosition(): void {
    const svg = document.getElementById(this.canvasId)
      ?.firstChild as SVGElement;
    svg.style.removeProperty("position");
    svg.addEventListener("drop", this.onDropCanvas);
    svg.addEventListener("dragover", this.onDropOverCanvas);
    svg.oncontextmenu = function() {
      return false;
    }; // これは自動的にdraw2d.jsがやってくれるはず…なんだけどなぁ。
  }

  private addCanvasEvent(): void {
    const commandStack = this.canvas.getCommandStack();
    commandStack.addEventListener(this.onCanvasCommandExecute);
    this.canvas.on("zoom", this.onZoomChangeFromCanvas);
  }

  private onCanvasCommandExecute(event: any): void {
    if (!event.isPostChangeEvent()) return;
    const rootCommand = event.getCommand();

    const analyzeResutEvents = this.eventAnalyzer.analyze(rootCommand);
    if (analyzeResutEvents.isNothing()) return;

    this.transactionOf((diagram, product) => {
      if (!analyzeResutEvents.validate(diagram, product, this)) return false;
      return analyzeResutEvents.apply(diagram, product, this);
    });
  }

  private makeRouterBy(routerType: RouterType): any {
    if (!routerType) return undefined;
    if (routerType.equals(RouterType.INTERACTIVE_MANHATTAN))
      return new draw2d.layout.connection.ManhattanConnectionRouter();
    if (routerType.equals(RouterType.CIRCUIT))
      return new draw2d.layout.connection.CircuitConnectionRouter();
    if (routerType.equals(RouterType.SPLINE))
      return new draw2d.layout.connection.SplineConnectionRouter();
    // if (routerType.equals(RouterType.SKETCH))
    //    return new draw2d.layout.connection.SketchConnectionRouter();
    return undefined;
  }

  public analyzeRouterType(router: any): RouterType {
    if (!router) return RouterType.DIRECT;
    const name = router.NAME;
    if (!name) return RouterType.DIRECT;

    if (name === "draw2d.layout.connection.ManhattanConnectionRouter")
      return RouterType.INTERACTIVE_MANHATTAN;
    if (name === "draw2d.layout.connection.CircuitConnectionRouter")
      return RouterType.CIRCUIT;
    if (name === "draw2d.layout.connection.SplineConnectionRouter")
      return RouterType.SPLINE;
    // if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;
    return RouterType.DIRECT;
  }

  private drawDiagram(diagram: Diagram) {
    diagram.placements.forEach(p => this.usedResouceIds.push(p.resourceId));

    this.canvas.setDimension(diagram.width, diagram.height);
    for (let placement of diagram.placements) {
      const resource = this.allResourcesOnCurrentProduct.find(
        resource => resource.resourceId === placement.resourceId
      );
      if (!resource) continue;
      this.addResouceIconToCanvas(resource, placement);
    }

    for (let relation of diagram.relations) {
      this.addConnection(relation);
    }
  }

  private addConnection(relation: Relation) {
    const canvas = this.canvas;

    const connection = new draw2d.Connection({ id: relation.id });

    const start = canvas.getFigure(String(relation.fromResourceId));
    const end = canvas.getFigure(String(relation.toResourceId));

    // ちょっとトリッキーなデータの持ち方…解析しないとわからない。正攻法が在れば変えたい。
    const startHybridPort = this.getHybridPort(relation.fromResourceId, canvas);
    if (startHybridPort) connection.setSource(startHybridPort);
    const endHybridPort = this.getHybridPort(relation.toResourceId, canvas);
    if (endHybridPort) connection.setTarget(endHybridPort);

    let routerType = RouterType.ofId(relation.routerTypeId);
    if (!routerType) routerType = RouterType.DIRECT;
    connection.setRouter(this.makeRouterBy(routerType));
    connection.onContextMenu = this.onClickConnectorOnCanvas;

    canvas.add(connection);
  }

  private getHybridPort(resourceId: number, canvas: draw2d.Canvas): any | null {
    const targetFigure = canvas.getFigure(String(resourceId));
    if (
      !targetFigure ||
      !targetFigure.hybridPorts ||
      !targetFigure.hybridPorts.data
    )
      return null;
    return targetFigure.hybridPorts.data[0];
  }

  public onClickConnectorOnCanvas(x: number, y: number) {
    const canvas = this.canvas;
    const foundFigure = canvas.getBestFigure(x, y, [], []);
    if (!foundFigure) return;
    const diagram = this.product.diagrams.of(this.diagramId);
    if (!diagram) return;
    const targetRelation = diagram.relationOf(foundFigure.id);
    if (!targetRelation) return;
    const zoom = canvas.getZoom();
    const absoluteX = canvas.getAbsoluteX() + x / zoom;
    const absoluteY = canvas.getAbsoluteY() + y / zoom;
    this.showConnectorRightClickMenu(targetRelation, absoluteX, absoluteY);
  }

  public onDoubleClickSlideBar() {
    const elem = this.$refs.editorPain as HTMLElement;
    const style = elem.style;
    const paretStyle = this.styleOf(this.paretPainId);
    if (this.paretPainWidth === null) {
      paretStyle.display = "none";
      this.paretPainWidth = style.width;
      style.width = "100%";
      style.resize = "none";
    } else {
      paretStyle.display = "inline";
      style.resize = "horizontal";
      style.width = this.paretPainWidth;
      this.paretPainWidth = null;
    }
  }

  private styleOf(id: string): CSSStyleDeclaration {
    const element = document.getElementById(id) as HTMLElement;
    return element.style;
  }

  public onDropCanvas(event: DragEvent) {
    event.preventDefault();

    let zoom = this.canvas.getZoom();
    zoom = isFinite(zoom) ? Number(zoom) : 1; // Zoom状況を考慮

    const x = event.offsetX * zoom;
    const y = event.offsetY * zoom;

    const textData = event.dataTransfer?.getData("text");
    if (!textData) return;
    let resourceId = parseInt(textData, 10);
    const isAddNew = resourceId < 0;

    let product = this.getCurrentProduct();
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    // 新規追加時。
    let resource: Resource | null = null;
    if (isAddNew) {
      const resourceTypeId = resourceId * -1;
      product = product.moveNextResourceIdSequence();
      const newResouceId = product.resourceIdSequence;
      resource = this.createNewResource(resourceTypeId, newResouceId);
      if (!resource) return;
      const addedResources = product.resources.add(resource);
      product = product.withResources(addedResources);
    } else {
      resource = product.resources.of(resourceId);
    }
    if (!resource) return;

    // 追加後は「図への追加(ふつーのドラッグ)」と一緒。
    this.addResourceToDiagram(resource, x, y, diagram);
    this.mergePlacement(this.usedResouceIds, diagram.placements);

    // product/diagrogまとめて保存。
    this.repository.registerCurrentProduct(product);
    this.product = product;

    // 親にコールバック。
    if (isAddNew) this.onUpdateResources();
  }

  private createNewResource(
    resourceTypeId: number,
    newResourceId: number
  ): Resource | null {
    // 情報の形状が違う物体がでてくるまで、汎用でいく
    const resourceType = ResourceType.ofId(resourceTypeId);
    if (!resourceType) return null;

    const messageBox = new MessageBox();
    const message = `追加する${resourceType.name}の名前を入力してください。`;
    const name = messageBox.promptWith255Limit(message, "", inputText => {
      const exists = this.allResourcesOnCurrentProduct
        .filter(resource => resource.type.equals(resourceType))
        .some(resource => resource.name === inputText);
      if (exists) alert(`既に同一の${resourceType.name}名が在ります。`);
      return !exists;
    });
    if (!name) return null;

    return new Resource(newResourceId, resourceType.id, name, "");
  }

  public onDropOverCanvas(event: DragEvent): void {
    event.preventDefault();
  }

  private onDeleteResourceOnDiagram(resourceId: number): void {
    const diagram = this.deleteResourceOnDiagram(resourceId);
    if (!diagram) return;
    this.reverceSyncCavansDeleteThings();
    this.mergePlacement(this.usedResouceIds, diagram.placements);
  }

  private onDeleteResourceOnProduct(resourceId: number): void {
    this.deleteResourceOnProduct(resourceId);
    this.onUpdateResources();
  }

  private deleteResourceOnDiagram(resourceId: number): Diagram | null {
    const product = this.getCurrentProduct();
    const diagram = product.diagrams.of(this.diagramId) as Diagram;
    const resource = product.resources.of(resourceId);
    if (!resource) return null;

    if (!this.confirmResourceDelete([resourceId], diagram)) return null;

    const modifiedDiagram = diagram.removeResouceOf(resource);
    const diagrams = product.diagrams.meage(modifiedDiagram);
    const modifiedProduct = product.with(diagrams);

    this.repository.registerCurrentProduct(modifiedProduct);
    this.product = modifiedProduct;

    return modifiedDiagram;
  }

  public confirmResourceDelete(
    resourceIds: number[],
    diagram: Diagram
  ): boolean {
    const relationIds = diagram.relationIdsOfDeleteTargetResouce(resourceIds);
    if (relationIds.length === 0) return true;
    const message = `選択された要素には、他の要素への関連があります。それらを含め削除してよろしいですか。`;
    return confirm(message);
  }

  private getCurrentProduct(): Product {
    return this.repository.getCurrentProduct() as Product;
  }

  private deleteResourceOnProduct(resourceId: number): void {
    const product = this.getCurrentProduct();
    const resource = product.resources.of(resourceId);
    if (!resource) return;

    const usedCount = product.diagrams.countOfUsingOf(resource);
    if (usedCount > 0) {
      const message =
        `「${resource.name}」は、現在 ${usedCount}個 のダイアグラムで参照されています。\n` +
        "削除する場合、それらのダイアログのアイコンや関連のすべては削除されます。\n" +
        `${resource.name} を削除してもよろしいですか。`;
      if (!window.confirm(message)) return;
    }

    const modifiedProduct = product.removeOf(resource);

    this.repository.registerCurrentProduct(modifiedProduct);
    this.product = modifiedProduct;
  }

  /**ResourceType
   * 自動保存のOn/Offを意識した「product,diagramへの操作」。
   */
  private transactionOf(
    func: (diagram: BusinessContextDiagram, product: Product) => boolean
  ): void {
    const product = this.getCurrentProduct();
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    const requireSave = func(diagram, this.product);

    this.mergePlacement(this.usedResouceIds, diagram.placements);

    if (requireSave) this.repository.registerCurrentProduct(product);
    this.product = product;
  }

  private mergePlacement(usedResouceIds: number[], diffTarget: Placement[]) {
    const idSet = new Set(diffTarget.map(p => p.resourceId));
    for (let i = usedResouceIds.length - 1; i >= 0; i--) {
      const usedResouceId = usedResouceIds[i];
      if (idSet.has(usedResouceId)) idSet.delete(usedResouceId);
      else usedResouceIds.splice(i, 1);
    }
    idSet.forEach(id => usedResouceIds.push(id));
  }

  private addResourceToDiagram(
    resource: Resource,
    left: number,
    top: number,
    diagram: BusinessContextDiagram
  ): boolean {
    let width = 0;
    let height = 0;
    const resType = resource.type;
    if (
      ResourceType.組織.equals(resType) ||
      ResourceType.会社.equals(resType)
    ) {
      width = 80;
      height = 35;
    }
    if (ResourceType.業務.equals(resType)) {
      width = 105;
      height = 35;
    }
    const placement = new Placement(
      left,
      top,
      width,
      height,
      resource.resourceId
    );
    diagram.placements.push(placement);

    return this.addResouceIconToCanvas(resource, placement);
  }

  private addResouceIconToCanvas(
    resource: Resource,
    placement: Placement
  ): boolean {
    const iconGenerator = this.choiceIconGenerator(resource.type);
    if (!iconGenerator) return false;

    const icon = iconGenerator.generate(
      placement,
      resource,
      this.iconStyleOf(resource.type)
    );
    this.canvas.add(icon);
    return true;
  }

  private choiceIconGenerator(
    resourceType: ResourceType
  ): IconGenerator | null {
    const generator = BusinessContextDiagramEditor.ICON_GENERATORS.find(g =>
      g.resourceType().equals(resourceType)
    );
    return generator ? generator : null;
  }

  private iconStyleOf(resourceType: ResourceType): CSSStyleDeclaration {
    const iconElement = document.getElementById(
      resourceType.iconKey
    ) as HTMLDialogElement;
    return window.getComputedStyle(iconElement, "::before");
  }

  /**
   * 開いている他の図の右側パレットを、データの状態と同期する。
   *
   * リソースの削除や追加の場合のみ、「他の図に影響が行く」のでそれは更新されないといけない。
   */
  private syncOtherDiagramParets() {
    this.onUpdateResources();
  }

  public showWarnBar(text: string): void {
    this.warnMessage = text;
    this.warnBar = true;
  }

  private showConnectorRightClickMenu(
    relation: Relation,
    x: number,
    y: number
  ): void {
    this.visibleConnectorMenu = false;
    this.menuX = x;
    this.menuY = y;
    this.relation = relation;
    this.targetRelationId = relation.id;
    this.editableRouterId = relation.routerTypeId;
    this.$nextTick(() => {
      this.visibleConnectorMenu = true;
    });
  }

  private onChangeRouterTypeOnEditor(routerType: RouterType) {
    const connection = this.canvas.getLine(this.targetRelationId);
    if (!connection) return;
    const router = this.makeRouterBy(routerType);
    connection.setRouter(router);

    this.transactionOf((diagram, product) => {
      const relation = diagram.relationOf(this.targetRelationId);
      if (!relation) return false;
      const changed: Relation = relation.changeRouter(routerType);
      diagram.modifyRelationOf(changed);
      return true;
    });
  }

  private onClickDeleteConnection() {
    const connection = this.canvas.getLine(this.targetRelationId);
    this.canvas.remove(connection);

    this.transactionOf((diagram, product) => {
      const relations = diagram.relations;
      for (let i = 0; i < relations.length; i++) {
        const relation = relations[i];
        if (relation.id !== this.targetRelationId) continue;
        relations.splice(i, 1);
        break;
      }
      return true;
    });
  }

  private onZoomChangeFromCanvas(emitterFigure: Figure, zoomData: any) {
    this.canvasZoom = zoomData.value;
  }

  private onChangeZoomBySlider(zoom: number) {
    this.canvas.setZoom(zoom, false);
  }

  private onChangeCanvasGuideType(
    canvasGuideType: CanvasGuideType,
    beforeCanvasGuideType: CanvasGuideType
  ): void {
    const canvas = this.canvas;
    if (beforeCanvasGuideType.canvasPolicy)
      canvas.uninstallEditPolicy(beforeCanvasGuideType.canvasPolicy);
    if (canvasGuideType.canvasPolicy)
      canvas.installEditPolicy(canvasGuideType.canvasPolicy);
    // 「何故か、背景が真っ黒になってしまう」対策。ちょーーっとだけリサイズする。
    // …こんなワークアラウンドのほうが安定するからしゃーない。
    canvas.setZoom(canvas.getZoom() - 0.001, false);
  }

  private onSvgDownload(): void {
    const diagram = this.product.diagrams.of(this.diagramId);
    if (!diagram) return;
    const ymdhms = moment().format("YYYYMMDDHHmmss");
    const fileName = this.makeSvgDownloadFileName(diagram);

    const writer = new draw2d.io.svg.Writer();
    writer.marshal(this.canvas, (svg: string) => {
      const withFontSvg = this.includeWebFont(svg);
      const file = new DownloadFile(fileName, "image/svg+xml", withFontSvg);
      this.clientDownloadRepository.register(file);
    });
  }

  private makeSvgDownloadFileName(diagram: Diagram): string {
    const namePart = diagram.name.replace(" ", "-").replace("　", "＿");
    const ymdhms = moment().format("YYYYMMDDHHmmss");
    const fileName = `rdram-${diagram.id}-${namePart}-${ymdhms}.svg`;
    return fileName;
  }

  private includeWebFont(svgContents: string): string {
    const cssLink =
      "<defs><style type='text/css'>@import url('https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css');</style></defs>";
    return svgContents.replace("<defs", cssLink + "<defs");
  }

  @Watch("allResourcesOnCurrentProduct.length")
  private onChangeAllResourcesOnCurrentProduct(): void {
    const whenRemoveResource =
      this.allResourcesOnCurrentProduct.length <
      this.lastResourcesOnCurrentProductCount;
    this.lastResourcesOnCurrentProductCount = this.allResourcesOnCurrentProduct.length;
    if (!whenRemoveResource) return;

    this.reverceSyncCavansDeleteThings();
  }

  /**
   * キャンバス側から、逆にデータにあるかを調べ、削除されてそうなものが在れば消す。
   */
  private reverceSyncCavansDeleteThings(): void {
    const product = this.repository.getCurrentProduct() as Product;
    const diagram = product.diagrams.of(this.diagramId) as Diagram;

    const canvas = this.canvas;
    canvas.getLines().each((i: number, line: any) => {
      if (!diagram.existsRelationId(line.id.toString())) canvas.remove(line);
    });

    canvas.getFigures().each((i: number, figure: any) => {
      const resourceId = Number(figure.id);
      if (!diagram.existsPlacementId(resourceId)) canvas.remove(figure);
    });

    this.product = product;
  }

  private dumpDiagram(diagram: BusinessContextDiagram, prefix: string) {
    console.log(`---- ${prefix} Diagram情報 start ----`);
    diagram.placements.forEach(i => console.log(`位置;${i.resourceId}`));
    diagram.relations.forEach(i =>
      console.log(`線;${i.id}, from:${i.fromResourceId}, to:${i.toResourceId}`)
    );
    console.log(`---- ${prefix} Diagram情報 end ----`);
  }
}

interface Paret {
  resourceType: ResourceType;
  resources: Resource[];
}

interface CanvasSelections {
  figures: Figure[];
  connections: any[];
}
</script>

<style type="sass" scoped>
.diagram-pain-container {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: move;
}

.canvas-container {
  width: 100%;
  height: 100%;
  min-width: 0px;
  overflow: auto;
  text-align: left;
}

.diagram-canvas {
  width: 1px;
  height: 1px;
  margin: 0px;

  border-radius: 5px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));
  /* background-color: white; */

  position: relative;
}
</style>