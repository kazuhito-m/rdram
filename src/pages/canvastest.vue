<template>
  <div>
    <div class="diagram-canvas" id="canvas01"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure, command, Canvas } from "draw2d";
import { createWrapper } from "@vue/test-utils";

import TopLeftLocator from "@/draw2d/custom/TopLeftLocator";
import TopAbsAndCenterLocator from "@/draw2d/custom/TopAbsAndCenterLocator";

@Component
export default class extends Vue {
  public mounted() {
    var canvas = new draw2d.Canvas("canvas01");

    canvas.installEditPolicy(
      new draw2d.policy.canvas.FadeoutDecorationPolicy()
    );
    canvas.installEditPolicy(
      new draw2d.policy.connection.DragConnectionCreatePolicy({
        createConnection() {
          // const c = new draw2d.shape.state.Connection();
          const c = new draw2d.Connection();
          // c.setRouter(new draw2d.layout.connection.ManhattanConnectionRouter());

          const label = new draw2d.shape.basic.Label({
            text: "登録日付 < 本日"
          });
          label.setStroke(0);
          // label.setPadding(2);
          label.setPadding(0);
          label.setAlpha(0.75);
          label.setBackgroundColor("#ffffff");
          c.add(label, new draw2d.layout.locator.PolylineMidpointLocator());
          // c.add(label, new draw2d.layout.locator.ParallelMidpointLocator());

          const decorator = new draw2d.decoration.connection.ArrowDecorator();
          decorator.setBackgroundColor(c.getColor());
          c.setTargetDecorator(decorator);
          return c;
        }
      })
    );

    canvas.installEditPolicy(new draw2d.policy.canvas.SnapToGridEditPolicy());

    var start = new draw2d.shape.node.Start({ x: 50, y: 450 });
    var end = new draw2d.shape.node.End({ x: 230, y: 150 });

    // canvas.add(start);
    // canvas.add(end);

    for (let i = 0; i < 5; i++) {
      let y = 300;
      let x = 100;
      y += Math.floor(i / 5) * 200;
      x += (i % 5) * 100;
      this.simpleLabelIcon(canvas, x, y);
    }

    this.startPointCircle(canvas);
    this.endPointCircle(canvas);

    this.laneAndIcon(canvas, 300, 100);
    this.laneAndIcon(canvas, 650, 100);
  }

  private startPointCircle(canvas: draw2d.Canvas): void {
    const id = 114514;

    const bg = new draw2d.shape.basic.Rectangle({
      stroke: 0,
      padding: 0,
      alpha: 0.0,
      width: 40,
      height: 40
    });
    bg.setResizeable(false);

    const waku = new draw2d.shape.basic.Circle({
      bgColor: "#000000",
      alpha: 1,
      radius: 0,
      stroke: 0,
      selectable: true,
      resizable: false,
      id: id
    });
    waku.setWidth(20);
    waku.setResizeable(false);

    const outputPort = new draw2d.OutputPort();
    waku.addPort(outputPort, new draw2d.layout.locator.BottomLocator());
    // const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(waku);
    // const port = outputPort as any;
    // port.setConnectionAnchor(anchor);
    waku.add(
      bg,
      new draw2d.layout.locator.XYAbsPortLocator({ x: -10, y: -10 })
    );

    canvas.add(waku, 500, 150);
  }

  private endPointCircle(canvas: draw2d.Canvas): void {
    const id = 11451419;

    const bg = new draw2d.shape.basic.Rectangle({
      stroke: 0,
      padding: 0,
      alpha: 0.0,
      width: 40,
      height: 40
    });
    bg.setResizeable(false);

    const waku = new draw2d.shape.basic.Circle({
      bgColor: "none",
      alpha: 1,
      radius: 0,
      stroke: 2,
      selectable: true,
      resizable: false
    });
    waku.setWidth(21);
    waku.setResizeable(false);

    const center = new draw2d.shape.basic.Circle({
      bgColor: "#000000",
      alpha: 1,
      radius: 0,
      stroke: 0,
      selectable: false,
      resizable: false,
      id: id
    });
    center.setWidth(13);
    center.setResizeable(false);

    const inputPort = new draw2d.InputPort();
    // const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(center);
    // const port = inputPort as any;
    // port.setConnectionAnchor(anchor);
    center.addPort(inputPort, new draw2d.layout.locator.TopLocator());

    center.add(
      waku,
      new draw2d.layout.locator.XYAbsPortLocator({ x: -4, y: -4 })
    );

    center.add(
      bg,
      new draw2d.layout.locator.XYAbsPortLocator({ x: -13, y: -13 })
    );

    canvas.add(center, 600, 150);
  }

  private simpleLabelIcon(canvas: draw2d.Canvas, x: number, y: number): void {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactor = alpha.charAt(Math.floor(Math.random() * alpha.length));

    const icon = new draw2d.shape.basic.Label({
      x: x,
      y: y,
      text: charactor,
      width: 50,
      fontSize: 40,
      stroke: 1,
      padding: 0,
      bgColor: "#FFFFFF",
      resizable: false,
      alpha: 1 // opacityと一緒
    });

    const name = new draw2d.shape.basic.Label({
      text: "ここに タイトルが入ります",
      stroke: 0,
      padding: 0,
      resizable: false,
      selectable: false
    });

    icon.createPort("input", new draw2d.layout.locator.TopLocator());
    icon.createPort("output", new draw2d.layout.locator.BottomLocator());

    const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(icon);
    const port = icon.getOutputPorts().last() as any;
    port.setConnectionAnchor(anchor);

    // const port2 = icon.getInputPorts().last() as any;
    // console.log(port2);
    // port2.setConnectionAnchor(anchor);

    icon.add(name, new draw2d.layout.locator.BottomLocator());
    canvas.add(icon);
  }

  private laneAndIcon(canvas: draw2d.Canvas, x: number, y: number): void {
    const icon = new draw2d.shape.basic.Label({
      text: "類",
      fontSize: 30,
      stroke: 0,
      padding: 0,
      bgColor: "#FFFFFF",
      resizable: false,
      alpha: 1 // opacityと一緒
    });

    const name = new draw2d.shape.basic.Label({
      text: "ここに タイトルが入ります",
      stroke: 0,
      padding: 0,
      resizable: false,
      selectable: false
    });

    const waku = new draw2d.shape.basic.Rectangle({
      x: x,
      y: y,
      width: 280,
      height: 700,
      minWidth: 100,
      minHeight: 60,
      bgColor: "none",
      color: "#000000",
      alpha: 1,
      stroke: 2,
      zOrder: 100
    });

    const topBox = new draw2d.shape.basic.Rectangle({
      width: 280,
      height: 60,
      bgColor: "none",
      color: "#000000",
      alpha: 1,
      stroke: 1
    });

    waku.on("resize", (selfFigure: Figure) => {
      selfFigure
        .getChildren()
        .data.forEach((i: any) => i.setWidth(selfFigure.getWidth()));
    });

    icon.add(name, new draw2d.layout.locator.BottomLocator());
    waku.add(icon, new TopAbsAndCenterLocator({ y: 5 }));
    waku.add(topBox, new draw2d.layout.locator.XYAbsPortLocator(0, 0));

    canvas.add(waku);

    const added = canvas.getFigures().last();
    console.log("added", added.getZOrder());
    // const lastZOrder: Figure = canvas
    //   .getFigures()
    //   .asArray()
    //   // .forEach((i: Figure) => console.log(i.getZOrder()));
    //   // .filter((i: Figure) => i !== added)
    //   .reduce(
    //     (l: Figure, r: Figure) =>
    //       l.getZOrder !== undefined && Math.max(l.getZOrder(), r.getZOrder())
    //   );
    let lastZOrder = null;
    for (const figure of canvas.getFigures().asArray()) {
      if (figure.getId() === added.getId()) continue;
      if (!lastZOrder) {
        lastZOrder = figure;
        continue;
      }
      if (lastZOrder.getZOrder() < figure.getZOrder()) continue;
      lastZOrder = figure;
    }
    console.log("lastZOrder", lastZOrder.getZOrder());
    if (!lastZOrder) return;
    added.toFront(lastZOrder);
    // lastZOrder.toBack(added);

    // canvas.add(line2);
  }
}
</script>

<style type="sass" scoped>
.diagram-canvas {
  width: 1024px;
  height: 1024px;
  background-color: white;
  margin: 0px;

  border-radius: 5px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));

  position: relative;
}
</style>