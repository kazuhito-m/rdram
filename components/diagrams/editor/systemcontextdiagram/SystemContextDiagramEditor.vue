<template>
  <div class="diagram-pain-container">
    <div class="editor-pain" :id="editorPainId">
      <div class="diagram-canvas" :id="canvasId"></div>
    </div>
    <div id="slideBar" class="slidebar" @dblclick="onDoubleClickSlideBar"></div>
    <div
      class="paret-pain"
      :id="paretPainId"
    >0123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890012345678900123456789001234567890</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure, command } from "draw2d";

import Diagram from "@/domain/diagram/Diagram";

@Component
export default class SystemContextDiagramEditor extends Vue {
  @Prop({ required: true })
  private readonly diagram!: Diagram;

  private canvas!: draw2d.Canvas;

  private editorPainId!: string;
  private paretPainId!: string;
  private canvasId!: string;

  private paretPainWidth: string | null = null;

  public created(): void {
    const diagramId = this.diagram.id;
    this.editorPainId = `editorPain${diagramId}`;
    this.paretPainId = `paretPain${diagramId}`;
    this.canvasId = `canvas${diagramId}`;
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
      this.$nuxt.$loading.finish(); // FIXME フラグ管理的には正しいタイミングで動いているが、Loding画面出てこない。修正要。
    });
  }

  @Emit("onUpdateResources")
  private onUpdateResources(diagramId: number): void {}

  private showCanvas(): void {
    const canvas = new draw2d.Canvas(this.canvasId);
    canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy());
    canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(-1));

    canvas.setScrollArea("#" + this.canvasId);
    this.canvas = canvas;
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
    svg.oncontextmenu = () => false; // これは自動的にdraw2d.jsがやってくれるはず…なんだけどなぁ。
  }

  private addCanvasEvent(): void {
    const commandStack = this.canvas.getCommandStack();
    commandStack.addEventListener(this.onCanvasCommandExecute);
  }

  private drawDiagram() {}

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

  private onCanvasCommandExecute(event: any): void {}

  public onDropCanvas(event: DragEvent) {
    event.preventDefault();
  }

  public onDropOverCanvas(event: DragEvent): void {
    event.preventDefault();
  }
}
</script>

<style type="sass" scoped>
.mainpain {
  background-color: aqua;
}

.diagram-pain-container {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
}

.editor-pain {
  resize:none;
  width: 80%;
  min-width: 0px;
  overflow: hidden;
}

.paret-pain {
  resize: horizontal;
  width: 0%;
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
</style>
