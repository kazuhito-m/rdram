<template>
  <div>
    <div class="v-icon mdi mdi-office-building-outline"></div>
    <div class="diagram-canvas" id="canvas01"></div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d from "draw2d";

@Component
export default class extends Vue {
  private canvas!: draw2d.Canvas;

  public mounted() {
    this.showCanvas();
    this.fixCanvasPosition();
  }

  private showCanvas(): void {
    const canvas = new draw2d.Canvas("canvas01");
    // canvas.setScrollArea("#" + this.canvasId); // TODO もしかしたら「そんなに小細工しなくても、draw2dでスクロールできるかもしれない」ので、後に検討。

    // TODO Canvasの初期表示
    this.addSampleObjects(canvas);

    this.canvas = canvas;
  }

  /**
   * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
   */
  private fixCanvasPosition(): void {
    const svg = document.getElementById("canvas01")?.firstChild as SVGElement;
    svg.style.removeProperty("position");
  }

  private addSampleObjects(canvas: draw2d.Canvas) {
    const id2 = "枠のID";
    const waku = new draw2d.shape.basic.Rectangle({
      x: 10,
      y: 10,
      bgColor: "#FFFFFF",
      alpha: 0.6, // opacityと一緒
      width: 100,
      height: 100,
      radius: 3,
      stroke: 3,
      grow: true,
      color: "#000000",
      id: id2
    });
    canvas.add(waku);
    const createdWaku = canvas.getFigure(id2);

    const id = "テキストのID";
    const text = new draw2d.shape.basic.Label({
      x: 20,
      y: 20,
      text: "そりゃもう、優勝よ！",
      stroke: 0,
      id: id
    });
    canvas.add(text);
    const createdText = canvas.getFigure(id);
    console.log(createdText);

    const id3 = "アイコンのID";
    const icon = new draw2d.shape.basic.Label({
      x: 200,
      y: 200,
      text: "a",
    //   cssClass: "v-icon mdi mdi-office-building-outline",
      stroke: 0,
      id: id
    });
    canvas.add(icon);
    const createdIcon = canvas.getFigure(id3);
    console.log(createdText);
  }
}
</script>

<style type="sass" scoped>
.diagram-canvas {
  width: 1024px;
  height: 768px;
  background-color: white;
  margin: 0px;

  border-radius: 5px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));

  position: relative;
}
</style>