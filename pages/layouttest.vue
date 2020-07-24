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
    <div id="test_name" style="font-family: 'Material Design Icons'"></div>
    <div class="diagram-canvas" id="canvas01"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure } from "draw2d";
import { createWrapper } from "@vue/test-utils";

import TopLeftLocator from "@/presentation/draw2d/custom/TopLeftLocator";

@Component
export default class extends Vue {
  private canvas!: draw2d.Canvas;

  public mounted() {
    this.showCanvas();
    this.fixCanvasPosition();

    this.writeIconByCharCode();
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
    this.wakuOnly(canvas);
    this.groupingApproach(canvas);
    this.layoutApproach(canvas);
    this.structuredApproach2(canvas);
    this.structuredApproach2Dash(canvas);

    console.log(canvas);
  }

  private writeIconByCharCode(): void {
    const div = document.getElementById("test_name");
    if (!div) return;
    div.innerHTML = "\u{F151F}";
  }

  /**
   * Rectangleでは「透過にすると、枠線まで透過される」ので、中身透明な枠を作ることが出来ない。
   * そこでStackLayoutに「透明のRectangle」を入れ、代用する。
   */
  private wakuOnly(canvas: draw2d.Canvas): void {
    const onlyBordar = new draw2d.shape.layout.StackLayout();
    const dummyRect = new draw2d.shape.basic.Rectangle({ alpha: 0 });
    onlyBordar.add(dummyRect);
    onlyBordar.setStroke(2);
    onlyBordar.resizable = true;
    onlyBordar.radius = 5;
    onlyBordar.stroke = 3;
    onlyBordar.width = 75;
    onlyBordar.height = 75;
    onlyBordar.color = new draw2d.util.Color(255, 0, 0);
    // onlyBordar.bgColor = new draw2d.util.Color(0,255,0); // これも一応出来る(意味ないが)

    canvas.add(onlyBordar, 50, 100);
  }

  private groupingApproach(canvas: draw2d.Canvas): void {
    const resourceId = 1;
    const resourceName =
      "グルーピングアプローチで作られた場合、ここに名前が出ますよ！";
    const left = 200;
    const top = 20;

    // icon のTag(v-icon)から、フォントと文字を類推。
    const iconTag = document.getElementById("companyIcon") as HTMLDivElement;
    const style = window.getComputedStyle(iconTag, "::before");

    const padding = 0;

    const id = `${resourceId}-0`;
    const waku = new draw2d.shape.basic.Rectangle({
      x: left,
      y: top + 27,
      bgColor: "#FFFFFF",
      alpha: 0.6, // opacityと一緒
      width: 75,
      height: 75,
      radius: 5,
      stroke: 3,
      selectable: true,
      resizable: true,
      color: "#000000",
      padding: padding,
      id: id
    });
    canvas.add(waku);
    const createdWaku = canvas.getFigure(id);

    const id1 = `${resourceId}-1`;
    const icon = new draw2d.shape.basic.Label({
      x: left,
      y: top,
      fontFamily: style.fontFamily,
      text: style.content.replace(/"/g, ""),
      fontSize: 25,
      stroke: 0,
      padding: padding,
      bgColor: "#FFFFFF",
      alpha: 1, // opacityと一緒
      id: id1
    });

    const id2 = `${resourceId}-2`;
    const name = new draw2d.shape.basic.Label({
      // x: left,
      // y: top,
      text: resourceName,
      stroke: 0,
      padding: padding,
      resizable: false,
      selectable: false,
      id: id2
    });
    icon.add(name, new draw2d.layout.locator.RightLocator());
    canvas.add(icon);
    const createdIcon = canvas.getFigure(icon.id);

    const groupItems = new draw2d.util.ArrayList();
    groupItems.id = resourceId;
    groupItems.add(createdWaku);
    groupItems.add(createdIcon);
    groupItems.resizable = true;
    const groupCommand = new draw2d.command.CommandGroup(canvas, groupItems);
    canvas.getCommandStack().execute(groupCommand);

    const figures: Figure[] = canvas.getFigures() as Figure[];
    const group = figures.find(
      f => f.getCssClass() === "draw2d_shape_composite_Group"
    );
    if (!group) return;
    // 下のほうほうでリサイズ可能にしても、グッシャグシャにバグる。
    // group.setResizeable(true);
    // group.resizeable = true;

    // 自力でグループ作っても、上のようにならない。
    // const group = new draw2d.shape.composite.Group();
    // group.add(createdWaku, new draw2d.layout.locator.XYAbsPortLocator(0, 26));
    // group.add(createdIcon, new draw2d.layout.locator.XYAbsPortLocator(20, 20));
    // group.width = createdWaku.lastAppliedAttributes.width;
    // group.height = createdWaku.lastAppliedAttributes.height + 26;
    // canvas.add(group);
    // const createdGroup = canvas.getFigure(group.id);
    // createdGroup.resizable = true;
  }

  private layoutApproach(canvas: draw2d.Canvas): void {
    const resourceId = 1;
    const resourceName = "構造化アプローチ(Layout利用編)";
    const left = 20;
    const top = 20;

    // ---- icon作成 ----

    // icon のTag(v-icon)から、フォントと文字を類推。
    const iconTag = document.getElementById("companyIcon") as HTMLDivElement;
    const style = window.getComputedStyle(iconTag, "::before");

    const padding = 0;

    const id = resourceId + 2000000;
    const waku = new draw2d.shape.basic.Rectangle({
      x: left,
      y: top,
      bgColor: "#FFFFFF",
      alpha: 0.6, // opacityと一緒
      width: 75,
      height: 75,
      radius: 5,
      stroke: 3,
      // grow: true,
      selectable: true,
      resizable: true,
      color: "#000000",
      padding: padding
    });

    const icon = new draw2d.shape.basic.Label({
      width: 20,
      height: 30,

      fontFamily: style.fontFamily,
      text: style.content.replace(/"/g, ""),
      fontSize: 25,
      stroke: 0,
      padding: padding,
      bgColor: "#FFFFFF",
      alpha: 1 // opacityと一緒
    });

    const name = new draw2d.shape.basic.Label({
      text: resourceName,
      stroke: 0,
      padding: padding,
      resizable: false,
      selectable: false
    });

    const hContainer = new draw2d.shape.layout.HorizontalLayout();

    hContainer.add(icon);
    hContainer.add(name);
    hContainer.setStroke(0);

    waku.add(hContainer, new draw2d.layout.locator.TopLocator());

    canvas.add(waku);
    const createdWaku = canvas.getFigure(id);
  }

  private structuredApproach2(canvas: draw2d.Canvas): void {
    const resourceId = 1;
    const resourceName = "構造化アプローチ(Locatorとadd利用編)";
    const left = 500;
    const top = 500;

    // ---- icon作成 ----

    // icon のTag(v-icon)から、フォントと文字を類推。
    const iconTag = document.getElementById("companyIcon") as HTMLDivElement;
    const style = window.getComputedStyle(iconTag, "::before");

    const padding = 0;

    const id = resourceId + 4000000;
    const waku = new draw2d.shape.basic.Rectangle({
      x: left,
      y: top,
      bgColor: "#FFFFFF",
      alpha: 0.6, // opacityと一緒
      width: 75,
      height: 75,
      radius: 5,
      stroke: 3,
      selectable: true,
      resizable: true,
      color: "#000000",
      padding: padding
    });

    const icon = new draw2d.shape.basic.Label({
      fontFamily: style.fontFamily,
      text: style.content.replace(/"/g, ""),
      fontSize: 25,
      stroke: 0,
      padding: padding,
      bgColor: "#FFFFFF",
      alpha: 1 // opacityと一緒
    });

    const name = new draw2d.shape.basic.Label({
      text: resourceName,
      stroke: 0,
      padding: padding,
      resizable: false,
      selectable: false
    });

    waku.add(icon, new draw2d.layout.locator.XYAbsPortLocator(40, 40));
    waku.add(name, new draw2d.layout.locator.TopLocator());
    // ↑狙ったのは「枠の中で、左上からの一定の位置をキープ」である…が左に張り付いてうんともすんともいわない。
    // XYRelPortLocator(40, -40)だと反応するし、マイナスで枠外にも行くことから、バグのように感じられる。
    // …しかし”PortLocator"だからなぁ。

    canvas.add(waku);
    const createdWaku = canvas.getFigure(id);
  }

  private structuredApproach2Dash(canvas: draw2d.Canvas): void {
    const resourceId = 1;
    const resourceName = "構造化アプローチ(Locatorとadd利用編の自力拡張版)";
    const left = 500;
    const top = 250;

    // ---- icon作成 ----

    // icon のTag(v-icon)から、フォントと文字を類推。
    const iconTag = document.getElementById("companyIcon") as HTMLDivElement;
    const style = window.getComputedStyle(iconTag, "::before");

    const padding = 0;

    const id = resourceId + 6000000;
    const waku = new draw2d.shape.basic.Rectangle({
      x: left,
      y: top,
      bgColor: "#FFFFFF",
      alpha: 0.6, // opacityと一緒
      width: 75,
      height: 75,
      radius: 5,
      stroke: 3,
      selectable: true,
      resizable: true,
      color: "#000000",
      padding: padding
    });

    const icon = new draw2d.shape.basic.Label({
      fontFamily: style.fontFamily,
      text: style.content.replace(/"/g, ""),
      fontSize: 25,
      stroke: 0,
      padding: padding,
      bgColor: "#FFFFFF",
      alpha: 1 // opacityと一緒
    });

    const name = new draw2d.shape.basic.Label({
      text: resourceName,
      stroke: 0,
      padding: padding,
      resizable: false,
      selectable: false
    });

    icon.add(name, new draw2d.layout.locator.RightLocator());
    waku.add(icon, new TopLeftLocator()); // 無かったものを地力で作った

    canvas.add(waku);
    const createdWaku = canvas.getFigure(id);
  }
}
</script>

<style type="sass" scoped>
.diagram-canvas {
  width: 1024px;
  height: 768px;
  background-color: blue;
  margin: 0px;

  border-radius: 5px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));

  position: relative;
}
</style>