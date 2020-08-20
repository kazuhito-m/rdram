<template>
  <div class="diagram-pain-container">
    <div class="editor-pain" :id="editorPainId">
      <div class="diagram-canvas" :id="canvasId"></div>
    </div>
    <div id="slideBar" class="slidebar" @dblclick="onDoubleClickSlideBar"></div>
    <div class="paret-pain" :id="paretPainId">
      <v-expansion-panels class="paret-panel"
        v-model="paretsOpen"
        multiple
        focusable
        dark
      >
        <v-expansion-panel class="paret-panel"
          v-for="resourceType in availableResourceTypes"
          :key="resourceType.id" 
        >
          <v-expansion-panel-header>
            <div class="omit-long-text">
              <v-icon :id="resourceType.iconKey">{{ resourceType.iconKey }}</v-icon>
              {{ resourceType.name }}
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-list dark dence>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                      <v-chip color="primary" dark outlined draggable @dragstart="onDragStartNewCompany" :data-resource-type-id="resourceType.id">
                        <v-icon>{{ resourceType.iconKey }}</v-icon>
                        新規追加
                      </v-chip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                v-for="resource in allResourcesOnCurrentProduct.filter(r => filterDisplayParet(r, resourceType))"
                :key="resource.resourceId"
              >

                <v-list-item-content >
                  <v-list-item-title class="chip-container">
                      <v-chip color="primary" dark draggable
                        @dragstart="onDragStartResource" 
                        v-bind:data-resource-id="resource.resourceId"
                      >
                        <v-icon>{{ resourceType.iconKey }}</v-icon>
                        {{ resource.name }}
                      </v-chip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>

          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="omit-long-text">
              <v-icon>mdi-clipboard-check-multiple-outline</v-icon>
              この図で使用済
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-list dark dence>

              <v-list-item
                v-for="usedResource in allResourcesOnCurrentProduct.filter(r => filterUsedList(r))"
                :key="usedResource.id"
              >
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                      <v-chip dark>
                        <v-icon>{{ iconKeyOf(usedResource) }}</v-icon>
                        {{ usedResource.name }}
                      </v-chip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>

          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </div>

    <v-snackbar
      v-model="warnBar"
      timeout="2000"
    >
      {{ warnMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="warnBar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
　
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
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Inject, Emit } from "nuxt-property-decorator";
import ConnectorRightClickMenuAndEditor from "./ConnectorRightClickMenuAndEditor.vue";
import { RelationContainer } from "./ConnectorRightClickMenuAndEditor.vue";

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
import CompanyIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/icon/CompanyIconGenerator";
import ActorIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/icon/ActorIconGenerator";

import RoomIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/icon/RoomIconGenerator";
import BusinessIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/icon/BusinessIconGenerator";
import GoodsIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/icon/GoodsIconGenerator";
import FacilityIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/icon/FacilityIconGenerator";


import Repository from "@/infrastructure/Repository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import BusinessContextDiagram from "@/domain/diagram/businesscontext/BusinessContextDiagram";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Company from "@/domain/company/Company";
import Placement from "@/domain/diagram/placement/Placement";
import RouterType from "@/domain/diagram/relation/RouterType";
import Relation from "@/domain/diagram/relation/Relation";
import Actor from "@/domain/actor/Actor";
import IconGenerator from "../icon/IconGenerator";

@Component({
  components: {
    ConnectorRightClickMenuAndEditor,
  }
})
export default class BusinessContextDiagramEditor extends Vue {
  @Inject()
  private repository!: Repository

  private readonly companyIconGenerator: CompanyIconGenerator = new CompanyIconGenerator();
  private readonly actorIconGenerator: ActorIconGenerator = new ActorIconGenerator();
  private readonly roomIconGenerator: RoomIconGenerator = new RoomIconGenerator();
  private readonly businessIconGenerator: BusinessIconGenerator = new BusinessIconGenerator();
  private readonly goodsIconGenerator: GoodsIconGenerator = new GoodsIconGenerator();
  private readonly facilityIconGenerator: FacilityIconGenerator = new FacilityIconGenerator();

  @Prop({ required: true })
  private readonly diagram!: BusinessContextDiagram;
  private product!: Product;

  @Prop({ required: true })
  private allResourcesOnCurrentProduct!: Resource[];

  private canvas!: draw2d.Canvas;
  private readonly eventAnalyzer = new EventAnalyzer([
    new BCDDeleteShapeEvents(),
    new BCDConnectPortsEvents(),
    new BCDMoveShapeEvents(),
    new BCDResizeShapeEvents(),
  ]);

  private editorPainId!: string;
  private paretPainId!: string;
  private canvasId!: string;

  private paretPainWidth: string | null = null;
  private readonly paretsOpen: number[] = [];
  private availableResourceTypes: ResourceType[] = [];

  private warnBar: boolean = false;
  private warnMessage: string = '';

  private visibleConnectorMenu = false;
  private relation? : Relation ;
  private menuX = 0;
  private menuY = 0;

  private targetRelationId = '';
  private editableRouterId = 0;

  public created(): void {
    this.product = this.getCurrentProduct();

    const diagramId = this.diagram.id;
    this.editorPainId = "editorPain" + diagramId;
    this.paretPainId = "paretPain" + diagramId;
    this.canvasId = "canvas" + diagramId;

    this.diagram.availableResourceTypeIds
      .map(resourceTypeId => ResourceType.ofId(resourceTypeId))
      .filter(resourceType => resourceType !== null)
      .forEach(resourceType => this.availableResourceTypes.push(resourceType as ResourceType))
    for (let i = 0; i < this.availableResourceTypes.length + 1; i++) this.paretsOpen.push(i);
  }

  public mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
    this.showCanvas();
    this.fixCanvasPosition();
    this.addCanvasEvent();
    this.drawDiagram();

    this.$nextTick(() => {
      this.$nuxt.$loading.finish();  // FIXME フラグ管理的には正しいタイミングで動いているが、Loding画面出てこない。修正要。
    });
  }

  @Emit('onUpdateResources')
  private onUpdateResources(): void {}

  private showCanvas(): void {
    const canvas = new draw2d.Canvas(this.canvasId);
    canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy());
    canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(-1));

    // canvas.setScrollArea("#" + this.canvasId); // TODO もしかしたら「そんなに小細工しなくても、draw2dでスクロールできるかもしれない」ので、後に検討。

    this.canvas = canvas;
  }

  /**
   * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
   */
  private fixCanvasPosition(): void {
    const svg = document.getElementById(this.canvasId)?.firstChild as SVGElement;
    svg.style.removeProperty("position");
    svg.addEventListener('drop', this.onDropCanvas);
    svg.addEventListener('dragover', this.onDropOverCanvas);
    svg.oncontextmenu = function() {return false;}; // これは自動的にdraw2d.jsがやってくれるはず…なんだけどなぁ。
  }

  private addCanvasEvent(): void {
    const commandStack = this.canvas.getCommandStack();
    commandStack.addEventListener(this.onCanvasCommandExecute);
  }

  private onCanvasCommandExecute(event: any): void {
    if (!event.isPostChangeEvent()) return;
    const rootCommand = event.getCommand();

    const analyzeResutEvents = this.eventAnalyzer.analyze(rootCommand);
    if (analyzeResutEvents.isNothing()) return;

    this.transactionOf((diagram, product) => {
      console.log("中央のResoucesのサイズ:" + this.allResourcesOnCurrentProduct.length);
      this.dumpDiagram(diagram, '実行前');

      if (!analyzeResutEvents.validate(diagram, product, this)) return false;
      const result = analyzeResutEvents.apply(diagram, product, this);

      console.log("中央のResoucesのサイズ:" + this.allResourcesOnCurrentProduct.length);
      this.allResourcesOnCurrentProduct.forEach(i => console.log(i));
      this.dumpDiagram(diagram, '実行後');
      return result;
    });
  }

  private makeRouterBy(routerType: RouterType): any {
    if (!routerType) return undefined;
    if (routerType.equals(RouterType.INTERACTIVE_MANHATTAN)) return new draw2d.layout.connection.ManhattanConnectionRouter();
    if (routerType.equals(RouterType.CIRCUIT)) return new draw2d.layout.connection.CircuitConnectionRouter();
    if (routerType.equals(RouterType.SPLINE)) return new draw2d.layout.connection.SplineConnectionRouter();
    if (routerType.equals(RouterType.SKETCH)) return new draw2d.layout.connection.SketchConnectionRouter();
    return undefined;
  }

  public analyzeRouterType(router: any): RouterType {
      if (!router) return RouterType.DIRECT;
      const name = router.NAME;
      if (!name) return RouterType.DIRECT;

      if (name === "draw2d.layout.connection.ManhattanConnectionRouter") return RouterType.INTERACTIVE_MANHATTAN;
      if (name === "draw2d.layout.connection.CircuitConnectionRouter") return RouterType.CIRCUIT;
      if (name === "draw2d.layout.connection.SplineConnectionRouter") return RouterType.SPLINE;
      if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;
      return RouterType.DIRECT;
  }

  private drawDiagram() {
    for (let placement of this.diagram.placements) {
      const resource = this.allResourcesOnCurrentProduct
        .find(resource => resource.resourceId === placement.resourceId);
      if (!resource) continue;

      this.addResouceIconToCanvas(resource, placement);
    }

    for (let relation of this.diagram.relations) {
      this.addConnection(relation);
    }
  }

  private addConnection(relation: Relation) {
    const canvas = this.canvas;

    const connection = new draw2d.Connection({id: relation.id});

    const start = canvas.getFigure(String(relation.fromResourceId));
    const end = canvas.getFigure(String(relation.toResourceId));
    let routerType = RouterType.ofId(relation.routerTypeId);
    if (!routerType) routerType = RouterType.DIRECT;
    // ちょっとトリッキーなデータの持ち方…解析しないとわからない。正攻法が在れば変えたい。
    connection.setSource(start.hybridPorts.data[0]);
    connection.setTarget(end.hybridPorts.data[0]);
    connection.setRouter(this.makeRouterBy(routerType));
    connection.onContextMenu = this.onClickConnectorOnCanvas;

    canvas.add(connection);
  }

  public onClickConnectorOnCanvas(x:number, y:number) {
    const foundFigure = this.canvas.getBestFigure(x, y, [], []);
    if (!foundFigure) return;
    const targetRelation = this.diagram.relations
      .find(relation => relation.id === foundFigure.id);
    if (!targetRelation) return;
    const absoluteX = this.canvas.getAbsoluteX() + x;
    const absoluteY = this.canvas.getAbsoluteY() + y;
    this.showConnectorRightClickMenu(targetRelation, absoluteX, absoluteY);
  }

  public onDoubleClickSlideBar() {
    const style = this.styleOf(this.editorPainId);
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

    const x = event.offsetX;
    const y = event.offsetY;

    const textData = event.dataTransfer?.getData('text');
    if (!textData) return;
    let resourceId = parseInt(textData, 10);
    // 新規追加時。
    if (resourceId < 0) {
      let resource: Resource | null = null;
      const resourceTypeId = resourceId * -1;

      resource = this.createNewResource(resourceTypeId);
      
      if (!resource) return;
      this.allResourcesOnCurrentProduct.push(resource);
      this.onUpdateResources();
      resourceId = resource.resourceId;
    }

    // 追加後は「図への追加(ふつーのドラッグ)」と一緒。
    this.transactionOf((diagram, product) => {
      const resource = this.allResourcesOnCurrentProduct
        .find(resource => resource.resourceId === resourceId);
      if (!resource) return false;
      return this.addResourceToDiagram(resource, x, y , diagram);
    });
  }

  private createNewResource(resourceTypeId: number): Resource | null{
    // 情報の形状が違う物体がでてくるまで、汎用でいく
    const resourceType = ResourceType.ofId(resourceTypeId);
    if (!resourceType) return null;

    const name = prompt(`追加する${resourceType.name}の名前を入力してください。`);
    if (!name) return null;
    if (!this.validateName(name, resourceType)) return null;

    const resource: Resource = {
      resourceId: this.repository.generateResourceId(),
      resourceTypeId: resourceType.id,
      name: name,
      description: '',
    };
    return resource;
  }

  private validateName(name: string, resourceType: ResourceType): boolean {
    if (name.length > 255) {
      alert(`${resourceType.name}名は255文字以内で入力してください。`);
      return false;
    }
    const exists = this.allResourcesOnCurrentProduct
      .filter(resource => resource.resourceTypeId === resourceType.id)
      .some(resource => resource.name === name);
    if (exists) {
      alert(`既に同一の${resourceType.name}名が在ります。`);
      return false;
    }
    return true;
  }


  public onDropOverCanvas(event: DragEvent):void {
    event.preventDefault();
  }

  public onDragStartNewCompany(event: DragEvent):void {
    if (!event.target) return;
    const target= event.target as HTMLElement;
    const text = target.getAttribute('data-resource-type-id');
    if (!text) return;
    const resourceTypeId = parseInt(text, 10);
    event.dataTransfer?.setData('text',  '-' + resourceTypeId);
  }

  public onDragStartResource(event: DragEvent):void {
    const chip = event.srcElement as HTMLElement;
    const resourceIdText = chip.getAttribute('data-resource-id') as string;
    event.dataTransfer?.setData('text',  resourceIdText);
  }

  private getCurrentProduct(): Product {
    return this.repository.getCurrentProduct() as Product;
  }

  /**ResourceType
   * 自動保存のOn/Offを意識した「product,diagramへの操作」。
   */
  private transactionOf(func: (diagram: BusinessContextDiagram, product:Product) => boolean):void {
    const product = this.getCurrentProduct();
    const autoSave = product.userSettings.autoSave;
    if (autoSave) {
      this.product = product;
      const foundDiagram = this.product.diagrams
        .find(d => d.id === this.diagram.id) as BusinessContextDiagram;
      if (foundDiagram) this.shallowCopy(foundDiagram , this.diagram);
    }

    const requireSave = func(this.diagram, this.product);

    if (autoSave && requireSave) this.repository.registerCurrentProduct(this.product);
  }

  private shallowCopy(src: BusinessContextDiagram, dist: BusinessContextDiagram) {
    dist.name = src.name;
    dist.placements = src.placements;
    dist.availableResourceTypeIds = src.availableResourceTypeIds;
    dist.relations = src.relations;
  }

  private addResourceToDiagram(resource: Resource,left: number,top: number,diagram: BusinessContextDiagram): boolean {
    const placement: Placement = {
      x: left,
      y: top,
      width: 50,
      height: 50,
      resourceId: resource.resourceId
    };
    diagram.placements.push(placement);

    return this.addResouceIconToCanvas(resource, placement);
  }

  private addResouceIconToCanvas(resource: Resource, placement: Placement): boolean {
     const resourceType = ResourceType.ofId(resource.resourceTypeId);
    if (!resourceType) return false;

    console.log('resouceType:' + resourceType);

    const iconGenerator = this.choiceIconGenerator(resourceType);
    if (!iconGenerator) return false

    const icon = iconGenerator.generate(placement, resource, this.iconStyleOf(resourceType));
    this.canvas.add(icon);
    return false;
  }

  private choiceIconGenerator(resourceType: ResourceType): IconGenerator | null {
    if (resourceType.equals(ResourceType.アクター)) return this.actorIconGenerator;
    if (resourceType.equals(ResourceType.事業体)) return this.companyIconGenerator;
    if (resourceType.equals(ResourceType.場所)) return this.roomIconGenerator;
    if (resourceType.equals(ResourceType.業務)) return this.businessIconGenerator;
    if (resourceType.equals(ResourceType.物品)) return this.goodsIconGenerator;
    if (resourceType.equals(ResourceType.設備)) return this.facilityIconGenerator;
    return null;
  }

  private iconStyleOf(resourceType: ResourceType): CSSStyleDeclaration {
    const iconElement = document.getElementById(resourceType.iconKey) as HTMLDialogElement;
    return window.getComputedStyle(iconElement, "::before");
  }

  private iconKeyOf(resource: Resource): string {
    if (!resource) return "";
    const resourceType = ResourceType.ofId(resource.resourceTypeId);
    if (!resourceType) return "";
    return resourceType.iconKey;
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

  private showConnectorRightClickMenu(relation: Relation,x: number, y:number):void{
    this.visibleConnectorMenu = false;
    this.menuX = x;
    this.menuY = y;
    this.relation = relation;
    this.targetRelationId = relation.id;
    this.editableRouterId = relation.routerTypeId;
    this.$nextTick(() => {
      this.visibleConnectorMenu = true
    });
  }

  private onChangeRouterTypeOnEditor(routerType: RouterType) {
    const connection = this.canvas.getLine(this.targetRelationId);
    if (!connection) return;
    const router = this.makeRouterBy(routerType);
    connection.setRouter(router);

    this.transactionOf((diagram, product) => {
      const relation = diagram.relations
        .find(relation => relation.id === this.targetRelationId);
      if (!relation) return false;
      relation.routerTypeId = routerType.id;
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

  private filterDisplayParet(resource: Resource, resourceType: ResourceType): boolean {
    if (resource.resourceTypeId !== resourceType.id) return false;
    return this.diagram.placements
      .every(placement => placement.resourceId !== resource.resourceId);
  }

  private filterUsedList(resource: Resource): boolean {
    return this.diagram.placements
      .some(placement => placement.resourceId === resource.resourceId);
  }

  private dumpDiagram(diagram: BusinessContextDiagram, prefix: string) {
    console.log(`---- ${prefix} Diagram情報 start ----`);
    diagram.placements.forEach(i => console.log(`位置;${i.resourceId}`));
    diagram.relations.forEach(i => console.log(`線;${i.id}, from:${i.fromResourceId}, to:${i.toResourceId}`));
    console.log(`---- ${prefix} Diagram情報 end ----`);
  }
}

interface Paret {
  resourceType: ResourceType;
  resources: Resource[];
}

interface CanvasSelections {
  figures: Figure[],
  connections: any[]
}
</script>

<style type="sass" scoped>
.diagram-pain-container {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
}

.editor-pain {
  resize: horizontal;
  width: 80%;
  min-width: 0px;
  overflow: auto;
}

.paret-pain {
  flex-grow: 1;
  min-width: 0px;
  overflow-y: auto;
  overflow-x: hidden;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: move;
}

.diagram-canvas {
  width: 1024px;
  height: 768px;
  margin: 0px;

  border-radius: 5px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));

  position: relative;
}

.paret-panel {
  position:sticky;
  width: 100%;
}

.omit-long-text {
  position: absolute;
  text-align: left;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 0px;
}

div[class*="-expansion-panel-content__wrap"] {
  padding: 0 0px 0px;
  flex: auto;
}

.chip-container {
  position: absolute;
  text-align: left;
  width: 100%;
}
</style>