<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
    />
    <!-- https://cdn.jsdelivr.net/npm/@mdi/font@latest/fonts/materialdesignicons-webfont.eot?v=5.5.55 -->
    <v-icon>$vuetify.icons.company</v-icon>
    <v-icon>mdi-office-building-outline</v-icon>
    <div id="companyIcon" class="mdi mdi-office-building-outline"></div>
    <div id="test_text" style="font-family: 'Material Design Icons'"></div>
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
    const resourceId = 1;
    const resourceName = "図書館";
    const left = 20;
    const top = 20;

    // ---- icon作成 ----

    // icon のTag(v-icon)から、フォントと文字を類推。
    const iconTag = document.getElementById("companyIcon") as HTMLDivElement;
    const style = window.getComputedStyle(iconTag, "::before");

    const padding = 0;

    const id3 = `${resourceId}-1`;
    const icon = new draw2d.shape.basic.Label({
      x: left,
      y: top,
      //   width: 20,
      //   height: 30,
      fontFamily: style.fontFamily,
      text: style.content.replace(/"/g, ""),
      fontSize: 25,
      stroke: 0,
      padding: padding,
      id: id3
    });
    canvas.add(icon);
    const createdIcon = canvas.getFigure(id3);
    console.log(createdIcon);

    const id = `${resourceId}-2`;
    const text = new draw2d.shape.basic.Label({
      x: left + createdIcon.lastAppliedAttributes.width,
      y: top + 6,
      text: resourceName,
      stroke: 0,
      padding: padding,
      id: id
    });
    canvas.add(text);
    const createdText = canvas.getFigure(id);
    console.log(createdText);

    const id2 = `${resourceId}-3`;
    const waku = new draw2d.shape.basic.Rectangle({
      x: left,
      y: top + createdIcon.lastAppliedAttributes.width + 5,
      bgColor: "#FFFFFF",
      alpha: 0.6, // opacityと一緒
      width: 75,
      height: 75,
      radius: 3,
      stroke: 3,
      grow: true,
      color: "#000000",
      padding: padding,
      id: id2
    });
    canvas.add(waku);
    const createdWaku = canvas.getFigure(id2);

    const div = document.getElementById("test_text");
    if (!div) return;
    div.textContent = "\u{F151F}";
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