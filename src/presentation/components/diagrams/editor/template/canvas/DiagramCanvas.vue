<template lang="html">
    <div class="canvas-container" ref="convasContainer">
        <div class="diagram-canvas" :id="canvasId"/>

        <CanvasSettingToolBar
            :diagramId="diagramId"
            :canvasZoom="canvasZoom"
            @onChangeZoomBySlider="onChangeZoomBySlider"
            @onChangeCanvasGuideType="onChangeCanvasGuideType"
            @onPngDownload="onPngDownload"
            @onSvgDownload="onSvgDownload"
            @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
        />

        <!-- リアクティブ監視させたいけど、ネストしたくないので…自身をコンテナにして監視させる(ちょっととトリッキー？) -->
        <ConnectorRightClickMenuAndEditor
            :visibleConnectorRightClickMenu="visibleConnectorMenu"
            :menuPositionX="menuX"
            :menuPositionY="menuY"
            :relationId="targetRelationId"
            :selectedRouterTypeId="editableRouterId"
            @onChangeRouterType="onChangeRouterTypeOnEditor"
            @onClickDeleteConnection="onClickDeleteConnection"
        />

        <ResourcePropertiesEditDialog 
          :resourceId="editResourceId"
          :resourceType="editResourceType"
          @onUpdatedResourceProperties="onUpdatedResourceProperties"
          @onClose="onCloseResourcePropertiesEditor"
        />

    </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Emit,
  Inject,
  Watch
} from "vue-property-decorator";
import CanvasSettingToolBar from "@/presentation/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue";
import ConnectorRightClickMenuAndEditor from "@/presentation/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue";
import ResourcePropertiesEditDialog from "@/presentation/components/diagrams/editor/ResourcePropertiesEditDialog.vue";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure, command } from "draw2d";

import moment from "moment/moment";

import EventAnalyzer from "@/presentation/components/diagrams/editor/template/event/EventAnalyzer";
import IconGenerator from "@/presentation/components/diagrams/icon/IconGenerator";

import Product from "@/domain/product/Product";
import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import MessageBox from "@/presentation/MessageBox";
import StrageRepository from "@/domain/strage/StrageRepository";
import Placement from "@/domain/diagram/placement/Placement";

import Relation from "@/domain/relation/Relation";
import RouterType from "@/domain/relation/RouterType";
import IconFontAndChar from "@/presentation/components/diagrams/icon/IconFontAndChar";
import CanvasGuideType from "../../toolbar/CanvasGuideType";
import DownloadFile from "@/domain/client/DownloadFile";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";

@Component({
  components: {
    CanvasSettingToolBar,
    ConnectorRightClickMenuAndEditor,
    ResourcePropertiesEditDialog
  }
})
export default class DiagramCanvas extends Vue {
  @Prop({ required: true })
  private readonly diagramId!: number;
  @Prop({ required: true })
  private readonly product!: Product;
  @Prop({ required: true })
  private readonly usedResouceIds!: number[];
  @Prop({ required: true })
  private readonly allResourcesOnCurrentProduct!: Resource[];
  @Prop({ required: true })
  private readonly lastPropertiesUpdatedDiagramId!: number;
  @Prop({ required: true })
  private readonly iconMap!: { [key: string]: IconFontAndChar };
  @Prop({ required: true })
  private readonly eventAnalyzer!: EventAnalyzer;
  @Prop({ required: true })
  private readonly iconGenerators!: IconGenerator[];

  // This class fields.

  @Inject()
  private repository!: StrageRepository;
  @Inject()
  private clientDownloadRepository!: ClientDownloadRepository;

  private canvas!: draw2d.Canvas;
  private canvasId!: string;
  private canvasZoom = 1;

  private lastResourcesOnCurrentProductCount = 0;

  private visibleConnectorMenu = false;
  private relation?: Relation;
  private menuX = 0;
  private menuY = 0;
  private targetRelationId = "";
  private editableRouterId = 0;

  private editResourceId = 0;
  private editResourceType: ResourceType | null = null;
  private dropXOnCanvas = 0;
  private dropYOnCanvas = 0;

  // Events

  // This view callback(Emit).

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  @Emit("onMergePlacement")
  private onMergePlacement(diffTarget: Placement[]) {}

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(diagramId: number): void {}

  @Emit("onShowWarnBar")
  private onShowWarnBar(text: string): void {}

  // Watch event.

  @Watch("lastPropertiesUpdatedDiagramId")
  private onUpdatedDiagramProperties(): void {
    if (this.diagramId !== this.lastPropertiesUpdatedDiagramId) return;

    const product = this.repository.getCurrentProduct() as Product;
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    const c = this.canvas;
    if (c.getWidth() === diagram.width && c.getHeight() === diagram.height)
      return;

    this.reverceSyncCavansDeleteThings();
    this.canvas.setDimension(diagram.width, diagram.height);
    this.onMergePlacement(diagram.placements);
    this.onChangeZoomBySlider(this.canvasZoom + 0.001); // 再描画がうまく行くHack
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

  @Watch("usedResouceIds")
  private onChangeUsedResouceIds(): void {
    this.reverceSyncCavansDeleteThings();
  }

  // Vue events.(life cycle events)

  private created(): void {
    const diagram = this.product?.diagrams.of(this.diagramId);
    if (!diagram) return;
    this.canvasId = "canvas" + this.diagramId;
    this.lastResourcesOnCurrentProductCount = this.allResourcesOnCurrentProduct.length;
  }

  private mounted() {
    this.$nuxt.$loading.start();

    this.$nextTick(() => {
      const diagram = this.product?.diagrams.of(this.diagramId);
      if (!diagram) return;

      this.showCanvas();
      this.fixCanvasPosition();
      this.addCanvasEvent();
      this.drawDiagram(diagram);

      this.$nuxt.$loading.finish(); // FIXME フラグ管理的には正しいタイミングで動いているが、Loding画面出てこない。修正要。
    });
  }

  // public by other diarogs

  public showWarnBar(text: string): void {
    this.onShowWarnBar(text);
  }

  // right click menu events.

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

  // from Toolbar events.

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

  private onPngDownload(): void {
    const product = this.repository.getCurrentProduct();
    const diagram = product!.diagrams.of(this.diagramId);
    if (!diagram) return;
    const fileName = this.makeDownloadFileName(diagram, "png");
    const writer = new draw2d.io.png.Writer();
    writer.marshal(this.canvas, (png: string) => {
      this.clientDownloadRepository.registerBase64PngImage(png, fileName);
    });
  }

  private onSvgDownload(): void {
    const product = this.repository.getCurrentProduct();
    const diagram = product!.diagrams.of(this.diagramId);
    if (!diagram) return;
    const fileName = this.makeDownloadFileName(diagram, "svg");
    const writer = new draw2d.io.svg.Writer();
    writer.marshal(this.canvas, (svg: string) => {
      const withFontSvg = this.includeWebFont(svg);
      const file = new DownloadFile(fileName, "image/svg+xml", withFontSvg);
      this.clientDownloadRepository.register(file);
    });
  }

  // from ResourcePropertiesEditor events.

  private onUpdatedResourceProperties(resource: Resource): void {
    this.addPlacement(resource);
    this.onUpdateResources(); // 親にコールバック
  }

  private onCloseResourcePropertiesEditor(): void {
    this.editResourceId = 0;
  }

  // Canvas Events

  private onZoomChangeFromCanvas(emitterFigure: Figure, zoomData: any): void {
    this.canvasZoom = zoomData.value;
  }

  private onDropCanvas(event: DragEvent) {
    event.preventDefault();

    let zoom = this.canvas.getZoom();
    zoom = isFinite(zoom) ? Number(zoom) : 1; // Zoom状況を考慮

    this.dropXOnCanvas = event.offsetX * zoom;
    this.dropYOnCanvas = event.offsetY * zoom;

    const textData = event.dataTransfer?.getData("text");
    if (!textData) return;
    let resourceId = parseInt(textData, 10);
    const isAddNew = resourceId < 0;

    // 新規追加時。
    let resource: Resource | null = null;
    if (isAddNew) {
      const resourceType = ResourceType.ofId(resourceId * -1) as ResourceType;
      this.showResourcePropertiesEditor(resourceType);
      return;
    }

    let product = this.repository.getCurrentProduct() as Product;
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    resource = product.resources.of(resourceId);
    if (!resource) return;

    this.addPlacement(resource);
  }

  private onDropOverCanvas(event: DragEvent): void {
    event.preventDefault();
  }

  private onCanvasCommandExecute(event: any): void {
    if (!event.isPostChangeEvent()) return;
    const rootCommand = event.getCommand();

    const analyzeResutEvents = this.eventAnalyzer.analyze(rootCommand);
    if (analyzeResutEvents.isNothing()) return;

    this.transactionOf2((diagram, product) => {
      if (!analyzeResutEvents.validate(diagram, product, this)) return null;
      return analyzeResutEvents.apply(diagram, product, this);
    });
  }

  // Initialize methods

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

  public onClickConnectorOnCanvas(x: number, y: number) {
    const canvas = this.canvas;
    const foundFigure = canvas.getBestFigure(x, y, [], []);
    if (!foundFigure) return;
    const product = this.repository.getCurrentProduct();
    if (!product) return;
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;
    const targetRelation = diagram.relationOf(foundFigure.id);
    if (!targetRelation) return;
    const zoom = canvas.getZoom();
    const absoluteX = canvas.getAbsoluteX() + x / zoom;
    const absoluteY = canvas.getAbsoluteY() + y / zoom;
    this.showConnectorRightClickMenu(targetRelation, absoluteX, absoluteY);
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

  // self decralation event.

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

  // UI controll.

  private addResouceIconToCanvas(
    resource: Resource,
    placement: Placement
  ): void {
    const generator = this.choiceIconGenerator(resource.type) as IconGenerator;
    if (!generator) {
      alert("ジェネレータ無しアイコン生成不能:" + resource.type.name);
      return;
    }
    const icon = generator.generate(
      placement,
      resource,
      this.iconStyleOf(resource.type)
    );
    this.canvas.add(icon);
  }

  private choiceIconGenerator(
    resourceType: ResourceType
  ): IconGenerator | null {
    const generator = this.iconGenerators.find(g =>
      g.resourceType().equals(resourceType)
    );
    return generator ? generator : null;
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

  private iconStyleOf(resourceType: ResourceType): IconFontAndChar {
    return this.iconMap[resourceType.iconKey];
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

  private makeDownloadFileName(diagram: Diagram, extension: string): string {
    const namePart = diagram.name.replace(" ", "-").replace("　", "＿");
    const ymdhms = moment().format("YYYYMMDDHHmmss");
    const fileName = `rdram-${diagram.id}-${namePart}-${ymdhms}.${extension}`;
    return fileName;
  }

  private includeWebFont(svgContents: string): string {
    const cssLink =
      "<defs><style type='text/css'>@import url('https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css');</style></defs>";
    return svgContents.replace("<defs", cssLink + "<defs");
  }

  // private decodePngBase64(pngBase64Text: string): string {
  //   const cutedHeader = pngBase64Text.replace(/^data:image\/png;base64,/, "");
  //   return atob(cutedHeader);
  // }

  private showResourcePropertiesEditor(resourceType: ResourceType): void {
    this.editResourceType = resourceType;
    this.editResourceId = ResourcePropertiesEditDialog.ID_WHEN_CREATE_NEW;
  }

  // Data change controll.

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

  private promptResourceName(
    resourceType: ResourceType,
    product: Product
  ): string {
    const messageBox = new MessageBox();
    const message = `追加する${resourceType.name}の名前を入力してください。`;
    const name = messageBox.promptWith255Limit(message, "", inputText => {
      if (inputText.length > Resource.NAME_MAX_LENGTH) {
        alert(`${Resource.NAME_MAX_LENGTH}文字以内で入力してください。`);
        return false;
      }
      const exists = product.resources.existsSomeName(inputText, resourceType);
      if (exists) alert(`既に同一の${resourceType.name}名が在ります。`);
      return !exists;
    });
    return name ? name : "";
  }

  private addPlacement(resource: Resource): void {
    const product = this.repository.getCurrentProduct();
    const diagram = product!.diagrams.of(this.diagramId);
    if (!product || !diagram) return;

    const placement = diagram.createPlacement(
      resource,
      this.dropXOnCanvas,
      this.dropYOnCanvas
    ) as Placement;
    const modifiedDiagram: Diagram = diagram.addPlacement(placement);
    const modifiedProduct = product.replaceOf(modifiedDiagram);

    this.addResouceIconToCanvas(resource, placement);

    this.repository.registerCurrentProduct(modifiedProduct);

    this.onMergePlacement(modifiedDiagram.placements);
  }

  /**
   * 自動保存のOn/Offを意識した「product,diagramへの操作」。
   */
  private transactionOf(
    func: (diagram: Diagram, product: Product) => boolean
  ): void {
    const product = this.repository.getCurrentProduct() as Product;
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    const requireSave = func(diagram, this.product);

    this.onMergePlacement(diagram.placements);

    if (requireSave) this.repository.registerCurrentProduct(product);
  }

  private transactionOf2(
    func: (diagram: Diagram, product: Product) => Diagram | null
  ): void {
    const product = this.repository.getCurrentProduct() as Product;
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    const modifiedDiagram = func(diagram, this.product);
    if (modifiedDiagram === null) return;

    this.onMergePlacement(modifiedDiagram.placements);
    const modifiedProduct = product.replaceOf(modifiedDiagram);
    this.repository.registerCurrentProduct(modifiedProduct);
  }
}
</script>

<style type="sass" scoped>
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