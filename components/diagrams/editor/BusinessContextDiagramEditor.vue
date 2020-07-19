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
            <span class="omit-long-text">{{ paret.resourceType.name }}</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-list dark dence>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                      <v-chip color="primary" dark outlined draggable @dragstart="onDragStartNewCompany">
                        <v-icon left>mdi-server-plus</v-icon>
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
                        <v-icon left>mdi-server-plus</v-icon>
                        {{ resource.name }}
                      </v-chip>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>

          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>この図で使用済</v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-list dark dence>

              <v-list-item
                v-for="usedResource in usedResources"
                :key="usedResource.id"
              >
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                      <v-chip dark>
                        <v-icon left>mdi-server-plus</v-icon>
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
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Inject } from "nuxt-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d from "draw2d";

import Repository from "@/infrastructure/Repository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import BusinessContextDiagram from "@/domain/diagram/businesscontext/BusinessContextDiagram";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Company from "@/domain/company/Company";
import Placement from "@/domain/diagram/placement/Placement";

@Component
export default class BusinessContextDiagramEditor extends Vue {
  @Inject()
  private repository!: Repository

  @Prop({ required: true })
  private readonly diagram!: BusinessContextDiagram;
  private product!: Product;

  private canvas!: draw2d.Canvas;

  private editorPainId!: string;
  private paretPainId!: string;
  private canvasId!: string;

  private paretPainWidth: string | null = null;
  private readonly paretsOpen: number[] = [];
  private readonly parets: Paret[] = [];
  private readonly usedResources: Resource[] = [];

  public created(): void {
    this.product = this.getCurrentProduct();

    const diagramId = this.diagram.id;
    this.editorPainId = "editorPain" + diagramId;
    this.paretPainId = "paretPain" + diagramId;
    this.canvasId = "canvas" + diagramId;
  }

  public mounted() {
    this.resyncParets();
    for (let i = 0; i < this.parets.length + 1; i++) this.paretsOpen.push(i);
    this.showCanvas();
    this.fixCanvasPosition();
  }

  private showCanvas(): void {
    const canvas = new draw2d.Canvas(this.canvasId);

    // TODO Canvasの初期表示

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
    alert(`resourceId:${resourceId} (DaDはまだ未実装だよ！)`);

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
    dist.placementObjects = src.placementObjects;
    dist.availableResourceTypeIds = src.availableResourceTypeIds;
  }

  private createNewCompany(x: number , y: number) {
    let newCompany!: Company;

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

      this.addResourceToDiagram(company, x, y, diagram);
    
      newCompany = company;
      return true;
    });

    if (newCompany) return;

    this.resyncParets();
    this.syncOtherDiagramParets();
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

  private addResourceToDiagram(resoruce: Resource,left: number,top: number,diagram: BusinessContextDiagram) {
    const placement: Placement = {
      x: left,
      y: top,
      width: 20,
      height: 20,
      resourceId: resoruce.resourceId
    };

    diagram.placementObjects.push(placement);

    // TODO アイコンをCanvasに追加する。
    // const icon = xxx;
    // this.canvas.add(icon);
    alert('Canvasに書き込む処理は未実装。');
  }

  private resyncParets(): void {
    const diagram = this.diagram;
    const product = this.product;

    const usedResourceIds = diagram.placementObjects
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
}

interface Paret {
  resourceType: ResourceType;
  resources: Resource[];
}
</script>

<style type="sass">
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
  background-color: aqua;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: move;
}

.diagram-canvas {
  width: 1024px;
  height: 768px;
  background-color: white;
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