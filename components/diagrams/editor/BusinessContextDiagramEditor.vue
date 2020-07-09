<template>
  <div class="diagram-pain-container">
    <div class="editor-pain" :id="editorPainId">
      <div class="diagram-canvas" :id="canvasId"></div>
    </div>
    <div id="slideBar" class="slidebar" @dblclick="onDoubleClickSlideBar"></div>
    <div class="paret-pain" :id="paretPainId">efgh</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "nuxt-property-decorator";
import Diagram from "@/domain/diagram/Diagram";

import 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';
import draw2d from "draw2d";

@Component
export default class BusinessContextDiagramEditor extends Vue {
  @Prop({ required: true })
  private readonly diagram!: Diagram;

  private editorPainId!: string;
  private paretPainId!: string;
  private canvasId!: string;

  private paretPainWidth: string | null = null;

  public created(): void {
    const diagramId = this.diagram.id;
    this.editorPainId = "editorPain" + diagramId;
    this.paretPainId = "paretPain" + diagramId;
    this.canvasId = "canvas" + diagramId;
  }

  public mounted() {
    this.showCanvas();
  }

  private showCanvas(): void {
    var canvas: any = new draw2d.Canvas(this.canvasId);

    // @ts-ignore`
    canvas.add(new draw2d.shape.widget.Slider({ width: 90, height: 20 }),50,50);
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
}
</script>

<style>
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
  text-align: left;
}

.paret-pain {
  flex-grow: 1;
  min-width: 0px;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: move;
}

.diagram-canvas {
  width: 3000px;
  height: 3000px;
  /* background-color: white; */
}
</style>
