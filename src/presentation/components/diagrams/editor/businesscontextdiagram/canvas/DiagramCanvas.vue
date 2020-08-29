<template lang="html">
    <div class="canvas-container" ref="convasContainer">
        <div class="diagram-canvas" :id="canvasId"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure, command } from "draw2d";

import EventAnalyzer from "../../../../../draw2d/eventanalyze/EventAnalyzer";
import BCDDeleteShapeEvents from "../draw2d/eventanalyze/BCDDeleteShapeEvents";
import BCDConnectPortsEvents from "../draw2d/eventanalyze/BCDConnectPortsEvents";
import BCDMoveShapeEvents from "../draw2d/eventanalyze/BCDMoveShapeEvents";
import BCDResizeShapeEvents from "../draw2d/eventanalyze/BCDResizeShapeEvents";

import Product from "../../../../../../domain/product/Product";
import Diagram from "../../../../../../domain/diagram/Diagram";
import Resource from "../../../../../../domain/resource/Resource";
import ResourceType from "../../../../../../domain/resource/ResourceType";
import MessageBox from "../../../../../MessageBox";
import StrageRepository from "../../../../../../domain/strage/StrageRepository";
import Placement from "../../../../../../domain/diagram/placement/Placement";
import IconGenerator from "../../../icon/IconGenerator";
import CompanyIconGenerator from "../icon/CompanyIconGenerator";
import ActorIconGenerator from "../icon/ActorIconGenerator";
import RoomIconGenerator from "../icon/RoomIconGenerator";
import BusinessIconGenerator from "../icon/BusinessIconGenerator";
import GoodsIconGenerator from "../icon/GoodsIconGenerator";
import ServiceIconGenerator from "../icon/ServiceIconGenerator";
import FacilityIconGenerator from "../icon/FacilityIconGenerator";
import ContractIconGenerator from "../icon/ContractIconGenerator";
import Relation from "../../../../../../domain/diagram/relation/Relation";
import RouterType from "../../../../../../domain/diagram/relation/RouterType";
import IconFontAndChar from "../../../icon/IconFontAndChar";

@Component
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

  @Inject()
  private repository!: StrageRepository;

  private canvas!: draw2d.Canvas;
  private canvasId!: string;
  private canvasZoom = 1;

  private readonly eventAnalyzer = new EventAnalyzer([
    new BCDDeleteShapeEvents(),
    new BCDConnectPortsEvents(),
    new BCDMoveShapeEvents(),
    new BCDResizeShapeEvents()
  ]);

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

  private visibleConnectorMenu = false;
  private relation?: Relation;
  private menuX = 0;
  private menuY = 0;
  private targetRelationId = "";
  private editableRouterId = 0;

  // Events

  // This view callback(Emit).

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  @Emit("onMergePlacement")
  private mergePlacement(diffTarget: Placement[]) {} // TODO 親側未定義

  // Vue events.(life cycle events)

  private created(): void {
    const diagram = this.product?.diagrams.of(this.diagramId);
    if (!diagram) return;
    this.canvasId = "canvas" + this.diagramId;
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

  // Canvas Events

  private onDropCanvas(event: DragEvent) {
    event.preventDefault();

    let zoom = this.canvas.getZoom();
    zoom = isFinite(zoom) ? Number(zoom) : 1; // Zoom状況を考慮

    const x = event.offsetX * zoom;
    const y = event.offsetY * zoom;

    const textData = event.dataTransfer?.getData("text");
    if (!textData) return;
    let resourceId = parseInt(textData, 10);
    const isAddNew = resourceId < 0;
    const resourceType = ResourceType.ofId(resourceId * -1) as ResourceType;

    let product = this.repository.getCurrentProduct() as Product;
    const diagram = product.diagrams.of(this.diagramId);
    if (!diagram) return;

    // 新規追加時。
    let resource: Resource | null = null;
    if (isAddNew) {
      const name = this.promptResourceName(resourceType, product);
      product = product.createAndAddResource(name, resourceType);
      resource = product.lastCreatdResource();
    } else {
      resource = product.resources.of(resourceId);
    }
    if (!resource) return;

    // 追加後は「図への追加(ふつーのドラッグ)」と一緒。
    const placement = diagram.createPlacement(resource, x, y) as Placement;
    const modifiedDiagram: Diagram = diagram.addPlacement(placement);
    product = product.replaceOf(diagram);

    this.addResouceIconToCanvas(resource, placement);

    // product/diagrogまとめて保存。
    this.repository.registerCurrentProduct(product);

    // 親にコールバック。
    this.mergePlacement(diagram.placements);
    if (isAddNew) this.onUpdateResources();
  }

  private onDropOverCanvas(event: DragEvent): void {
    event.preventDefault();
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

  private onZoomChangeFromCanvas(emitterFigure: Figure, zoomData: any) {
    this.canvasZoom = zoomData.value;
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
    const diagram = this.product.diagrams.of(this.diagramId);
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

  // UI controll.

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
    const generator = DiagramCanvas.ICON_GENERATORS.find(g =>
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

    this.mergePlacement(diagram.placements);

    if (requireSave) this.repository.registerCurrentProduct(product);
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