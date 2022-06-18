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
    <v-btn dark icon @click="onClickEditDiagramProperties">
      <v-icon>mdi-content-save-edit-outline</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-card v-if="!toolBarCollapse">
      <CanvasZoomSlider :canvasZoom="canvasZoom" @onChangeZoomBySlider="onChangeZoom" />
    </v-card>

    <span v-if="!toolBarCollapse" @dblclick="onDblClickZoomPercentage()">{{ calcZoomPercentage() }}</span>

    <v-menu
      v-if="!toolBarCollapse"
      top 
      offset-y 
    >
      <template #activator="{ on, attrs }">
        <v-btn dark small icon v-bind="attrs" v-on="on">
          <v-icon>{{ canvasGuideType.iconKey }}</v-icon>
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

    <v-btn v-if="!toolBarCollapse" dark small icon>
      <v-icon @click="onPngDownload">mdi-image</v-icon>
    </v-btn>

    <v-btn v-if="!toolBarCollapse" dark small icon>
      <v-icon @click="onClickSvgDownload">mdi-image-outline</v-icon>
    </v-btn>

    <v-btn v-if="!toolBarCollapse" dark small icon>
      <v-icon @click="onClickDiagramExport">mdi-file-export</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn v-if="!toolBarCollapse" dark icon @click="onClickBarCollapseToggle">
      <v-icon>mdi-arrow-collapse-horizontal</v-icon>
    </v-btn>

    <v-btn v-if="toolBarCollapse" dark icon @click="onClickBarCollapseToggle">
      <v-icon>mdi-arrow-expand-horizontal</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";
import { ResizeObserverEntry } from "resize-observer/lib/ResizeObserverEntry";
import { ResizeObserver } from "resize-observer";
import CanvasZoomSlider from "./CanvasZoomSlider.vue";
import CanvasGuideType from "./CanvasGuideType";

@Component({
  components: {
    CanvasZoomSlider
  }
})
export default class CanvasSettingToolBar extends Vue {
  private static readonly TOOLBAR_PADDING = 10;

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private canvasGuideType!: CanvasGuideType;

  @Emit("onChangeCanvasGuideType")
  private onChangeCanvasGuideType(_canvasGuideType: CanvasGuideType): void {}

  @Emit("onPngDownload")
  private onPngDownload(): void {}

  @Emit("onSvgDownload")
  private onSvgDownLoad(): void {}

  @Emit("onDiagramExport")
  private onDiagramExport(): void {}

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  private toolBarId!: string;
  private toolBarCollapse = true;
  private dragStartLayerX = 0;
  private dragStartLayerY = 0;

  private canvasZoom = 1;

  private lastContainerWidth = 0;
  private lastContainerHeight = 0;

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
  private onChangeZoomParent(zoom: number) {
    this.canvasZoom = zoom;
  }

  private onResizeEditorPain(event: ResizeObserverEntry[]): void {
    // FIXME Tabの非アクティブ時に裏で無限呼び出され、することへの対策。今の所「ResizeObzerverを削除」くらいしか手がないが…。
    if (event[0].target.clientHeight === 0) return;
    const toolBar = this.getToolBarElement();
    if (!toolBar) return;
    const c = event[0].target;

    // 右/下の座標を維持するような挙動張
    const movedX = c.clientWidth - this.lastContainerWidth;
    const movedY = c.clientHeight - this.lastContainerHeight;

    const left = toolBar.offsetLeft + movedX;
    const top = toolBar.offsetTop + movedY;
    this.fixAreaOverToolBar(left, top, toolBar);

    this.lastContainerWidth = c.clientWidth;
    this.lastContainerHeight = c.clientHeight;
  }

  private onDblClickZoomPercentage(): void {
    this.onChangeZoomParent(1);
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

    this.lastContainerWidth = c.clientWidth;
    this.lastContainerHeight = c.clientHeight;

    const padding = CanvasSettingToolBar.TOOLBAR_PADDING;
    const left = c.clientWidth - toolBar.offsetWidth - padding;
    const top = c.clientHeight - toolBar.offsetHeight - padding;

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
    const toolBarId = event.dataTransfer?.getData("text");
    if (toolBarId !== this.toolBarId) return;

    const toolBar = this.getToolBarElement();
    const container = this.getCanvasContainer();
    if (!(toolBar && container)) return;

    const browserAbsContainerRect = container.getBoundingClientRect();
    const left = event.pageX - browserAbsContainerRect.left;
    const top = event.pageY - browserAbsContainerRect.top;

    const adjustLeft = left - this.dragStartLayerX;
    const adjustTop = top - this.dragStartLayerY;

    this.fixAreaOverToolBar(adjustLeft, adjustTop, toolBar);

    event.preventDefault();
  }

  private fixAreaOverToolBar(left: number, top: number, toolBar: HTMLElement) {
    const container = this.getCanvasContainer();
    if (!container) return;
    const toolBarWidth = toolBar.offsetWidth;
    const toolBarHeight = toolBar.offsetHeight;

    const leftOver = left + toolBarWidth - container.clientWidth;
    if (leftOver > 0) left = container.clientWidth - toolBarWidth;
    if (left < 0) left = 0;

    const topOver = top + toolBarHeight - container.clientHeight;
    if (topOver > 0) top = container.clientHeight - toolBarHeight;
    if (top < 0) top = 0;

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
      type => !type.equals(this.canvasGuideType)
    );
  }

  private onClickChangeCanvasGuideType(canvasGuideType: CanvasGuideType): void {
    this.onChangeCanvasGuideType(canvasGuideType);
  }

  private onClickSvgDownload(): void {
    this.onSvgDownLoad();
  }

  private onClickDiagramExport(): void {
    this.onDiagramExport();
  }

  private onClickEditDiagramProperties(): void {
    this.onOpendDiagramPropertiesEditor(this.diagramId);
  }

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
    const container = this.$parent.$el;
    if (!container) return null;
    return container as HTMLElement;
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
  position: absolute;
}
</style>
