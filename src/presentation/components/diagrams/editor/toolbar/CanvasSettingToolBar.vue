<template>
  <v-toolbar
    :id="toolBarId"
    class="canvas-float-toolbar"
    draggable
    dense
    floating
    outlined
    rounded
    shaped
    short
    :collapse="toolBarCollapse"
    @dragstart="onDragStartToolBar"
    @mousedown="onMouseDownToolBar"
  >
    <v-btn icon @click="showDiagramPropertiesEditDialog">
      <v-icon>mdi-content-save-edit-outline</v-icon>
    </v-btn>

    <DiagramPropertiesEditDialog
      :diagramId="propertiesEditorDiagramId"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
      @onClose="onCloseDiagramPropertiesEditDialog"
    />

    <v-spacer></v-spacer>

    <v-card v-if="!toolBarCollapse">
      <CanvasZoomSlider :canvasZoom="canvasZoom" @onChangeZoomBySlider="onChangeZoom" />
    </v-card>

    <span v-if="!toolBarCollapse">{{ calcZoomPercentage() }}</span>

    <v-menu top offset-y v-if="!toolBarCollapse">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>{{ canvasGuideTypeIconKey }}</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="guideType in canvasGuideTypes()"
          :key="guideType.iconKey"
          @click="onClickChangeCanvasGuideType(guideType)"
        >
          <v-list-item-title>
            <v-icon>{{ guideType.iconKey }}</v-icon>
            {{ guideType.caption }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon v-if="!toolBarCollapse">
      <v-icon @click="onClickSvgDownload">mdi-image</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon v-if="!toolBarCollapse" @click="onClickBarCollapseToggle">
      <v-icon>mdi-arrow-collapse-horizontal</v-icon>
    </v-btn>
    <v-btn icon v-if="toolBarCollapse" @click="onClickBarCollapseToggle">
      <v-icon>mdi-arrow-expand-horizontal</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";
import { ResizeObserverEntry } from "resize-observer/lib/ResizeObserverEntry";
import { ResizeObserver } from "resize-observer";
import { Canvas } from "draw2d";
import CanvasZoomSlider from "./CanvasZoomSlider.vue";
import DiagramPropertiesEditDialog from "@/presentation/components/diagrams/editor/DiagramPropertiesEditDialog.vue";
import CanvasGuideType from "./CanvasGuideType";
import Diagram from "@/domain/diagram/Diagram";

@Component({
  components: {
    CanvasZoomSlider,
    DiagramPropertiesEditDialog
  }
})
export default class CanvasSettingToolBar extends Vue {
  private readonly TOOLBAR_PADDING = 10;

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private readonly canvasZoom!: number;

  @Emit("onChangeCanvasGuideType")
  private onChangeCanvasGuideType(
    canvasGuideType: CanvasGuideType,
    beforeCanvasGuideType: CanvasGuideType
  ): void {}

  @Emit("onSvgDownload")
  private onSvgDownLoad(): void {}

  @Emit("onUpdatedDiagramProperties")
  private onUpdatedDiagramProperties(diagram: Diagram): void {
    // TODO サイズ変更と再描画
  }

  private toolBarId!: string;
  private toolBarCollapse = false;
  private dragStartLayerX = 0;
  private dragStartLayerY = 0;

  private canvasGuideTypeIconKey = CanvasGuideType.なし.iconKey;

  private propertiesEditorDiagramId = 0;

  public created(): void {
    this.toolBarId = "toolBar" + this.diagramId;
  }

  public mounted(): void {
    const container = this.getCanvasContainer();
    if (!container) return;
    container.addEventListener("dragover", this.onDragOverToolBar);
    container.addEventListener("drop", this.onDropToolBar);
    this.addResizeListenerCanvasContainer();
    this.moveToolBarOnFirstPosition();
  }

  private onChangeZoom(zoom: number) {
    this.onChangeZoomParent(zoom);
  }

  @Emit("onChangeZoomBySlider")
  private onChangeZoomParent(zoom: number) {}

  private getToolBarElement(): HTMLElement {
    // FIXME 本当は「IDとっといてgetElementById()とかしたくない」んだけど、$refsが「ほんものを返してくれない」のでLeft値が変えられない。
    return document.getElementById(this.toolBarId) as HTMLElement;
  }

  private getEditorPain(): HTMLElement | null {
    const parent = this.getToolBarElement().parentElement;
    if (!parent) return null;
    return parent;
  }

  private getCanvasContainer(): HTMLElement | null {
    const editorPain = this.getEditorPain();
    if (!editorPain) return null;
    const elements = editorPain.getElementsByClassName("canvas-container");
    const container = elements.item(0);
    if (!container) return null;
    return container as HTMLElement;
  }

  private onResizeEditorPain(event: ResizeObserverEntry[]): void {
    // FIXME Tabの非アクティブ時に裏で無限呼び出され、することへの対策。今の所「ResizeObzerverを削除」くらいしか手がないが…。
    if (event[0].target.clientHeight === 0) return;
    // console.log(this.diagramId, event[0].target.clientHeight);

    const toolBar = this.getToolBarElement();
    if (!toolBar) return;
    const left = toolBar.offsetLeft;
    const top = parseInt(toolBar.style.top.replace(/px$/, ""));
    this.fixAreaOverToolBar(left, top, toolBar);
  }

  private addResizeListenerCanvasContainer(): void {
    const container = this.getCanvasContainer();
    if (!container) return;
    const observer = new ResizeObserver(this.onResizeEditorPain);
    observer.observe(container);
  }

  private moveToolBarOnFirstPosition(): void {
    const toolBar = this.getToolBarElement();
    const c = this.getCanvasContainer();
    if (!c) return;

    const padding = this.TOOLBAR_PADDING;
    let barWidth = toolBar.offsetWidth;
    const containerWidth = c.clientLeft + c.clientWidth;
    const scrollBarHeight = c.offsetHeight - c.clientHeight;
    const left = containerWidth - barWidth - padding;
    const top = -(toolBar.offsetHeight + padding + scrollBarHeight);
    const style = toolBar.style;
    style.left = `${left}px`;
    style.top = `${top}px`;
  }

  private onMouseDownToolBar(event: any) {
    this.dragStartLayerX = event.layerX;
    this.dragStartLayerY = event.layerY;
  }

  private onDragStartToolBar(event: DragEvent): void {
    event.dataTransfer?.setData("text", this.toolBarId);
  }

  private onDragOverToolBar(event: DragEvent): void {
    event?.preventDefault();
  }

  private onDropToolBar(event: DragEvent): void {
    event.preventDefault();
    const toolBarId = event.dataTransfer?.getData("text");
    if (toolBarId !== this.toolBarId) return;

    const toolBar = this.getToolBarElement();
    const container = this.getCanvasContainer();
    if (!(toolBar && container)) return;

    const left = event.offsetX - container.scrollLeft;
    const top = event.offsetY - container.scrollTop - container.offsetHeight;

    const adjustLeft = left - this.dragStartLayerX;
    const adjustTop = top - this.dragStartLayerY;

    this.fixAreaOverToolBar(adjustLeft, adjustTop, toolBar);
  }

  private fixAreaOverToolBar(left: number, top: number, toolBar: HTMLElement) {
    const container = this.getCanvasContainer();
    if (!container) return;
    let toolBarWidth = toolBar.offsetWidth;

    const leftOver = left + toolBarWidth - container.clientWidth;
    if (leftOver > 0) left = container.clientWidth - toolBarWidth;
    if (left < 0) left = 0;

    const scrollBarHeight = container.offsetHeight - container.clientHeight;
    const topOver = top + toolBar.offsetHeight + scrollBarHeight;
    if (topOver > 0) top = -(toolBar.offsetHeight + scrollBarHeight);

    const topUnder = top + container.offsetHeight;
    if (topUnder < 0) top = -container.offsetHeight;

    const style = toolBar.style;
    style.left = `${left}px`;
    style.top = `${top}px`;
  }

  /**
   * バーを畳む時「左畳み」ではなく「右畳み」にする。
   */
  private onClickBarCollapseToggle(): void {
    const toolBar = this.getToolBarElement();
    const beforeWidth = toolBar.offsetWidth;
    this.toolBarCollapse = !this.toolBarCollapse;
    this.$nextTick(() => {
      const left = toolBar.offsetLeft + beforeWidth - toolBar.offsetWidth;
      const top = parseInt(toolBar.style.top.replace(/px$/, ""));
      this.fixAreaOverToolBar(left, top, toolBar);
    });
  }

  private calcZoomPercentage(): string {
    return `${Math.floor(100 / this.canvasZoom)}%`;
  }

  private canvasGuideTypes(): CanvasGuideType[] {
    return CanvasGuideType.values().filter(
      type => type.iconKey !== this.canvasGuideTypeIconKey
    );
  }

  private onClickChangeCanvasGuideType(canvasGuideType: CanvasGuideType): void {
    const before = CanvasGuideType.ofId(this.canvasGuideTypeIconKey);
    if (!before) return;
    this.onChangeCanvasGuideType(canvasGuideType, before);
    this.canvasGuideTypeIconKey = canvasGuideType.iconKey;
  }

  private onClickSvgDownload(): void {
    this.onSvgDownLoad();
  }

  private showDiagramPropertiesEditDialog(): void {
    this.propertiesEditorDiagramId = this.diagramId;
  }

  private onCloseDiagramPropertiesEditDialog(): void {
    this.propertiesEditorDiagramId = 0;
  }
}
</script>

<style>
.canvas-float-toolbar {
  /* position:fixed; */
  /* height: 50px; */
  width: 500px;
  left: 2%;
  top: -10%;
  display: block;
  z-index: 2;
  transition: none;
}
</style>
