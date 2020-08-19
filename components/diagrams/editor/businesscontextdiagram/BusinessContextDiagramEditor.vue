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
          v-for="paret in parets"
          :key="paret.resourceType.id" 
        >
          <v-expansion-panel-header>
            <div class="omit-long-text">
              <v-icon :id="paret.resourceType.iconKey">{{ paret.resourceType.iconKey }}</v-icon>
              {{ paret.resourceType.name }}
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-list dark dence>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                      <v-chip color="primary" dark outlined draggable @dragstart="onDragStartNewCompany">
                        <v-icon>{{ paret.resourceType.iconKey }}</v-icon>
                        新規追加
                      </v-chip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                v-for="resource in paret.resources"
                :key="resource.resourceId"
              >

                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                      <v-chip color="primary" dark draggable @dragstart="onDragStartResource" v-bind:data-resource-id="resource.resourceId">
                        <v-icon>{{ paret.resourceType.iconKey }}</v-icon>
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
                v-for="usedResource in usedResources"
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
import { Prop, Component, Vue, Inject } from "nuxt-property-decorator";
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

import Repository from "@/infrastructure/Repository";
import CompanyIconGenerator from "@/components/diagrams/editor/businesscontextdiagram/CompanyIconGenerator";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import BusinessContextDiagram from "@/domain/diagram/businesscontext/BusinessContextDiagram";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Company from "@/domain/company/Company";
import Placement from "@/domain/diagram/placement/Placement";
import RouterType from "@/domain/diagram/relation/RouterType";
import Relation from "@/domain/diagram/relation/Relation";

@Component({
  components: {
    ConnectorRightClickMenuAndEditor,
  }
})
export default class BusinessContextDiagramEditor extends Vue {
  @Inject()
  private repository!: Repository

  private  readonly companyIconGenerator: CompanyIconGenerator = new CompanyIconGenerator();

  @Prop({ required: true })
  private readonly diagram!: BusinessContextDiagram;
  private product!: Product;

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
  private readonly parets: Paret[] = [];
  private readonly usedResources: Resource[] = [];

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

    this.resyncParets();
    for (let i = 0; i < this.parets.length + 1; i++) this.paretsOpen.push(i);
  }

  public mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });
    this.showCanvas();
    this.fixCanvasPosition();
    this.addCanvasEvent();
    this.drowDiagram();

    this.$nextTick(() => {
      this.$nuxt.$loading.finish();  // FIXME フラグ管理的には正しいタイミングで動いているが、Loding画面出てこない。修正要。
    });
  }

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
      this.dumpDiagram(diagram, '実行前');

      if (!analyzeResutEvents.validate(diagram, product, this)) return false;
      const result = analyzeResutEvents.apply(diagram, product, this);

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

      if (name === "draw2d.layout.connection.CircuitConnectionRouter") return RouterType.CIRCUIT;
      if (name === "draw2d.layout.connection.SplineConnectionRouter") return RouterType.SPLINE;
      if (name === "draw2d.layout.connection.SketchConnectionRouter") return RouterType.SKETCH;
      return RouterType.DIRECT;
  }

  private drowDiagram() {
    for (let placement of this.diagram.placements) {
      const resource = this.usedResources
        .find(resource => resource.resourceId === placement.resourceId);
      if (!resource) continue;

      if (resource.resourceTypeId === ResourceType.事業体.id) 
        this.addCompanyIcon(placement, resource);
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
    const resourceId = parseInt(textData, 10);
    // 新規追加時。
    if (resourceId < 0) {
      const resourceTypeId = resourceId * -1;
      if (resourceTypeId === ResourceType.事業体.id) this.createNewCompany(x, y);
      return;
    }

    // それ以外は「図への追加(ふつーのドラッグ)」
    this.transactionOf((diagram, product) => {
      const resource = product.resources
        .find(resource => resource.resourceId === resourceId);
      if (!resource) return false;

      return this.addResourceToDiagram(resource, x, y , diagram);
    });
    this.resyncParets();
  }

  public onDropOverCanvas(event: DragEvent):void {
    event.preventDefault();
  }

  public onDragStartNewCompany(event: DragEvent):void  {
    event.dataTransfer?.setData('text',  '-' + ResourceType.事業体.id);
  }

  public onDragStartResource(event: DragEvent):void {
    const chip = event.srcElement as HTMLElement;
    const resourceIdText = chip.getAttribute('data-resource-id') as string;
    event.dataTransfer?.setData('text',  resourceIdText);
  }

  private getCurrentProduct(): Product {
    return this.repository.getCurrentProduct() as Product;
  }

  /**
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

  private createNewCompany(x: number , y: number) {
    this.transactionOf((diagram, product) => {
      const name = prompt("追加する事業体の名前を入力してください。");
      if (!name) return false;
      if (!this.validateCompanyName(name, product)) return false;

      const company: Company = {
        resourceId: this.generateResourceId(product),
        resourceTypeId: ResourceType.事業体.id,
        name: name,
        description: '',
      };

      product.resources.push(company);

      if (!this.addResourceToDiagram(company, x, y, diagram)) return false;
    
      this.resyncParets();
      this.syncOtherDiagramParets();
      return true;
    });
  }

  private validateCompanyName(companyName: string, product: Product): boolean {
    if (companyName.length > 255) {
      alert('プロダクト名は255文字以内で入力してください。');
      return false;
    }
    const exists = product.resources
      .filter(resource => resource.resourceTypeId === ResourceType.事業体.id)
      .some(resource => resource.name === companyName);
    if (exists) {
      alert('既に同一の事業体名が在ります。');
      return false;
    }
    return true;
  }

  private generateResourceId(product: Product) {
    return ++product.resourceIdSequence;
  }

  private addResourceToDiagram(resoruce: Resource,left: number,top: number,diagram: BusinessContextDiagram): boolean {
    const placement: Placement = {
      x: left,
      y: top,
      width: 50,
      height: 50,
      resourceId: resoruce.resourceId
    };
    diagram.placements.push(placement);

    this.addCompanyIcon(placement, resoruce);
    return true;
  }

  private addCompanyIcon(placement:Placement, resoruce: Resource) {
    const icon = this.companyIconGenerator
      .generate(placement, resoruce as Company, this.iconStyleOf(ResourceType.事業体));
    this.canvas.add(icon);
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

  public resyncParets(): void {
    const diagram = this.diagram;
    const product = this.product;

    const usedResourceIds = diagram.placements
      .map(placement => placement.resourceId);

    const parets: Paret[] = diagram.availableResourceTypeIds
      .map(typeId => ResourceType.ofId(typeId) as ResourceType)
      .map(type => {
        const paret: Paret = {
          resourceType: type,
          resources: product.resources
            .filter(resource => resource.resourceTypeId === type.id)
            .filter(resource => usedResourceIds.every(id => id !== resource.resourceId)),
        }
        return paret;
      });

    const usedResources = product.resources
      .filter(resource => usedResourceIds.some(id => id === resource.resourceId));

    // reactiveに動く前提として、「配列自体の参照は残す」が「出来るだけ時間掛けない(低コスト)」にしたい。
    // なので「材料は予め用意しておいて、移し替えだけ集中してやる」にする。
    this.parets.length = 0;
    for (let paret of parets) this.parets.push(paret);
    this.usedResources.length = 0;
    for (let resource of usedResources) this.usedResources.push(resource);
  }

  /**
   * 開いている他の図の右側パレットを、データの状態と同期する。
   *
   * リソースの削除や追加の場合のみ、「他の図に影響が行く」のでそれは更新されないといけない。
   */
  private syncOtherDiagramParets() {
    // TODO 実装
    console.log('TODO実装。自分の親に言って、すべての図でみぎPaletを更新してこいと。');
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
    this.transactionOf((diagram, product) => {
      const relation = diagram.relations
        .find(relation => relation.id === this.targetRelationId);
      if (!relation) return false;
      relation.routerTypeId = routerType.id;
      return true;
    });

    const connection = this.canvas.getLine(this.targetRelationId);
    if (!connection) return;
    const router = this.makeRouterBy(routerType);
    connection.setRouter(router);
  }

  private onClickDeleteConnection() {
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

    const connection = this.canvas.getLine(this.targetRelationId);
    this.canvas.remove(connection);
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