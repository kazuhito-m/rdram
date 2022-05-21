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
    <v-menu bottom origin="center center" transition="scale-transition">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-on="on">線種切り替え</v-btn>
      </template>-->

      <v-list>
        <v-list-item
          v-for="lineType in Object.keys(LINE_TYPE)"
          :key="lineType"
          @click="changeLintType(lineType)"
        >
          <v-list-item-title>{{ lineType }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn color="normal" dark @click="onCrickSiri">尻</v-btn>

    <v-btn color="normal" dark @click="onCrickZoom">ズム</v-btn>

    <v-btn color="normal" dark @click="onClickRouter">router</v-btn>

    <v-btn color="normal" dark @click="onClickStore">store</v-btn>

    <v-btn color="normal" dark @click="onClickVersion">version</v-btn>

    <v-btn color="normal" dark @click="onClickModalDialogTest">Modal Dialog Test</v-btn>
    <Confirm ref="confirm"/>

    <v-btn color="normal" dark @click="onClickUserArrengeDialog">図/アイコンの名前の重複 Dialog Test</v-btn>
    <UserArrengeWhenNameConfrictDialog ref="userArrangeDialog"/>

    <v-card-text>
      <v-row>
        <v-col>
          <v-slider
            v-model.number="slider"
            append-icon="mdi-magnify-plus-outline"
            prepend-icon="mdi-magnify-minus-outline"
            max="300"
            min="20"
            @click:append="zoomIn"
            @click:prepend="zoomOut"
          >
            <template v-slot:append>
              <v-text-field
                v-model="slider"
                class="mt-0 pt-0"
                type="number"
                style="width: 60px; float: righat; clear=both;"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="diagram-canvas" id="canvas01"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d, { Figure } from "draw2d";

import TopLeftLocator from "@/draw2d/custom/TopLeftLocator";

import Confirm from "@/components/debug/Confirm.vue";
import UserArrengeWhenNameConfrictDialog from "@/components/diagrams/import/arrange/UserArrengeWhenNameConfrictDialog.vue";
import UserArrangeOfImportDiagram from "~/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";

@Component({
  components: {
    Confirm,
    UserArrengeWhenNameConfrictDialog
  }
})
export default class extends Vue {
  private canvas!: draw2d.Canvas;

  private slider: number = 100;

  private readonly LINE_TYPE: { [key: string]: any } = {
    // InteractiveManhattan(操作ポイント付きマンハッタン)があるので、普通のはイラんかな。
    // "draw2d.layout.connection.ManhattanConnectionRouter": new draw2d.layout.connection.ManhattanConnectionRouter(),
    // 角付きマンハッタン…はわかりにくいから要らんかな。
    // "draw2d.layout.connection.ManhattanBridgedConnectionRouter": new draw2d.layout.connection.ManhattanBridgedConnectionRouter(),
    "draw2d.layout.connection.InteractiveManhattanConnectionRouter": new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
    "draw2d.layout.connection.CircuitConnectionRouter": new draw2d.layout.connection.CircuitConnectionRouter(),
    "draw2d.layout.connection.DirectRouter": new draw2d.layout.connection.DirectRouter(),
    "draw2d.layout.connection.SplineConnectionRouter": new draw2d.layout.connection.SplineConnectionRouter(),
    // なんかバグる
    // "draw2d.layout.connection.MazeConnectionRouter": new draw2d.layout.connection.MazeConnectionRouter(),
    "draw2d.layout.connection.SketchConnectionRouter": new draw2d.layout.connection.SketchConnectionRouter()
  };

  public mounted() {
    this.showCanvas();
    this.fixCanvasPosition();

    this.writeIconByCharCode();
  }

  private showCanvas(): void {
    const canvas = new draw2d.Canvas("canvas01");

    // ポートをカーソルの近くのものしか見せないモード。
    canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy());

    // 未指定のときのデフォルトが20、マイナス値かポリシー削除で非表示に
    canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(-1));

    canvas.installEditPolicy(new draw2d.policy.canvas.ExtendedKeyboardPolicy());

    const commandStack = canvas.getCommandStack();
    this.addCommandEventListner(commandStack);

    this.addSampleObjects(canvas);

    this.canvas = canvas;

    this.setSliderZoomNumgber();
  }

  private addCommandEventListner(commandStack: any): void {
    commandStack.addEventListener((event: any) => {
      // http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/api/draw2d.command.CommandStackEvent
      const command = event.getCommand();
      console.log(
        "execute commnad! " + event.action + ", " + command.getLabel()
      );
      console.log(event);
      if (event.isPostChangeEvent()) {
        //&& command.canExecute()
        command.cancel();
        // if (confirm("この処理をそのまま適用して良いですか？")) return;
        // command.undo();
      }
    });
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
    this.startPointCircle(canvas);
    this.endPointCircle(canvas);
    this.circleAndIcon(canvas);
    this.conneectIcons(canvas);
    this.addStartEndTest(canvas);
    this.sampleContainer(canvas);

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

    this.createStandardIconPort(icon);

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
    this.createStandardIconPort(icon);

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

    this.createStandardIconPort(icon);

    const name = new draw2d.shape.basic.Label({
      text: resourceName,
      stroke: 0,
      padding: padding,
      resizable: false,
      selectable: false
    });

    waku.add(icon, new draw2d.layout.locator.XYAbsPortLocator({ x: 2, y: 4 }));
    waku.add(name, new draw2d.layout.locator.TopLocator());
    // ↑狙ったのは「枠の中で、左上からの一定の位置をキープ」である…が左に張り付いてうんともすんともいわない。
    // XYRelPortLocator -40)だと反応するし、マイナスで枠外にも行くことから、バグのように感じられる。
    // …しかし”PortLocator"だからなぁ。
    //
    // と思ったが、仕様の違いで「{ x: 2, y: 4 }指定でなければ有効にならない」でした。
    // https://github.com/freegroup/draw2d/blob/master/src/layout/locator/XYAbsPortLocator.js#L36
    // …てか「仕様を合わせたほうが良い」くね？やっぱバグっぽい。

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
      // 以下2つで、透明化AND頃合いの色になる
      bgColor: "none",
      color: "#666666",
      alpha: 1,

      width: 75,
      height: 75,
      radius: 5,
      stroke: 3,
      selectable: true,
      resizable: true,
      padding: padding,
      id: id
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

    // this.createStandardIconPort(icon);

    const name = new draw2d.shape.basic.Label({
      text: resourceName,
      stroke: 0,
      padding: padding,
      resizable: false,
      selectable: false
    });

    waku.createPort(
      "hybrid",
      new draw2d.layout.locator.XYAbsPortLocator({ x: 12, y: -14 })
    );

    icon.add(
      name,
      new draw2d.layout.locator.XYRelPortLocator({ x: 95, y: 23 })
    );
    waku.add(icon, new TopLeftLocator()); // 無かったものを地力で作った

    canvas.add(waku);
    const createdWaku = canvas.getFigure(id);

    createdWaku.on("resize", (emitter: Figure) => {
      console.log("resized. figure:" + emitter.getId());
    });

    createdWaku.on("move", (emitter: Figure) => {
      console.log("move. figure:" + emitter.getId());
    });
  }

  /**
   * アイコンにポートを作成する。
   *
   * アイコンは「真ん中」かつ「汎用」かつ「線の方向なし」で
   */
  private createStandardIconPort(icon: any) {
    // 「中央」だと、「線がいつも下から出る」ので、うーん…(飢えから出て欲しい)
    icon.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
    // icon.createPort("hybrid", new draw2d.layout.locator.TopLocator());
  }

  public changeLintType(lineType: string) {
    const connectionRouter: any = this.LINE_TYPE[lineType];
    this.canvas
      .getLines()
      .each((i: number, line: any) => line.setRouter(connectionRouter));
    this.canvas.getLines().each((i: number, line: any) => {
      console.log(line);
      console.log(line.router);
      if (!line.router) return;
      console.log("name:" + line.router.NAME);
    });
  }

  private conneectIcons(canvas: draw2d.Canvas) {
    const src = canvas.getFigure(6000001);
    console.log(src);
    const start = src.hybridPorts.data[0];
    console.log(start);
    console.log("↑はプロパティ的にはあるはずなのに…。");

    // TODO もう片方

    const connection = new draw2d.Connection();
    connection.setStroke(2);
    connection.setOutlineStroke(1);
    connection.setOutlineColor("#303030");
    connection.setRouter(null);
    connection.setColor("#91B93E");
    connection.setSource(start);
    // connection.setTarget(end.getInputPort(0));

    canvas.add(connection);
  }

  /**
   * 丸とトップアイコンなスタンダード系を模索
   */
  private circleAndIcon(canvas: draw2d.Canvas) {
    const id = 7000001;

    // icon のTag(v-icon)から、フォントと文字を類推。
    const iconTag = document.getElementById("companyIcon") as HTMLDivElement;
    const style = window.getComputedStyle(iconTag, "::before");

    const waku = new draw2d.shape.basic.Oval({
      x: 50,
      y: 300,
      bgColor: "#99DDFF",
      alpha: 1,
      width: 105,
      height: 40,
      radius: 0,
      stroke: 0,
      selectable: true,
      resizable: true,
      color: "#000000",
      padding: 0,
      id: id
    });

    const moji = new draw2d.shape.basic.Label({
      text: "鉢文字基本かな灘",
      stroke: 0,
      padding: 0,
      alpha: 1,
      bold: true
    });

    const icon = new draw2d.shape.basic.Label({
      fontFamily: style.fontFamily,
      text: style.content.replace(/"/g, ""),
      fontSize: 25,
      stroke: 0,
      padding: 0,
      bgColor: "#FFFFFF",
      alpha: 1
    });

    waku.add(moji, new draw2d.layout.locator.CenterLocator());
    waku.add(
      icon,
      new draw2d.layout.locator.XYAbsPortLocator({ x: -14, y: -17 })
    );

    waku.createPort("hybrid", new draw2d.layout.locator.CenterLocator());

    canvas.add(waku);
  }

  private startPointCircle(canvas: draw2d.Canvas): void {
    const id = 114514;

    const bg = new draw2d.shape.basic.Rectangle({
      stroke: 0,
      padding: 0,
      alpha: 0.5,
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
    waku.addPort(outputPort, new draw2d.layout.locator.CenterLocator());
    // waku.createPort("output");
    // const outputPort = waku.getPorts().last();

    const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(waku);
    const port = outputPort as any;
    port.setConnectionAnchor(anchor);
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
      alpha: 0.5,
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
      resizable: false,
      id: id
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
    const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(center);
    const port = inputPort as any;
    port.setConnectionAnchor(anchor);
    center.addPort(inputPort, new draw2d.layout.locator.CenterLocator());

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

  private addStartEndTest(canvas: draw2d.Canvas): void {
    var start = new draw2d.shape.node.Start({ x: 50, y: 450 });
    var end = new draw2d.shape.node.End({ x: 230, y: 450 });
    canvas.add(start);
    canvas.add(end);
  }

  private sampleContainer(canvas: draw2d.Canvas) {
    var label1 =  new draw2d.shape.basic.Label({text:"[0,1] with long long long long label", fontColor:"#00AF00"});
    var label2 =  new draw2d.shape.basic.Label({text:"[1,1] padding:10", fontColor:"#00AF00"});
    var label3 =  new draw2d.shape.basic.Label({text:"[2,1] align:right", fontColor:"#00AF00"});
    var label4 =  new draw2d.shape.basic.Label({text:"[3,1] resize:true",resizeable:true, fontColor:"#00AF00"});

    var container = new draw2d.shape.layout.TableLayout();

    container.addRow(...["[0,0]", label1 ,"[0,2] align:center"]);
    container.addRow(...["[1,0] valign:bottom", label2,"[1,2] long long long label"]);
    container.addRow(...["[2,0]", label3,"[2,2]"]);
    container.addRow(...["[3,0]", label4,"[3,2]"]);

    var cells = ["a", "b", "c"];
    container.addRow(...cells);

    var numbers = [];
    for (let i = 0; i<3; i++) numbers.push(i + "");
    container.addRow(...numbers);

    container.setPadding(0);
    container.setCellPadding(1,1, 10);

    container.setCellAlign(0,2, "center");
    container.setCellAlign(2,1, "right");

    container.setCellVerticalAlign(1, 0, "bottom");

    canvas.add(container, 500, 350);
  }

  private onCrickSiri() {

  }

  private onCrickZoom() {
    alert(this.canvas.getZoom());
  }

  private onChangeInputZoom(e: any) {
    console.log(e);
  }

  private setSliderZoomNumgber() {
    this.canvasZoomToSlider(this.canvas.getZoom());
    this.canvas.on("zoom", this.onZoomChangeFromCanvas);
  }

  private canvasZoomToSlider(zoom: number) {
    // alert(zoom);
    this.slider = 100 / zoom;
  }

  @Watch("slider")
  private onChangeSliderValue(e: any) {
    console.log(e);
    console.log(new Date(), this.slider);
    if (Number.isInteger(this.slider)) {
      let base = Number(this.slider);
      isNaN;
      let fix = base;
      if (base < 20) fix = 20;
      if (base > 300) fix = 300;
      if (base != fix) {
        this.$nextTick(() => {
          this.slider = fix;
        });
        return false;
      }
      const zoom = 100 / fix;
      console.log(zoom);
      this.canvas.setZoom(zoom, false);
      return true;
    }
  }

  private onZoomChangeFromCanvas(emitterFigure: Figure, zoomData: any) {
    console.log(emitterFigure);
    console.log(zoomData.value);
    // if (zoomData && Number.isNaN(zoomData.value))
    this.canvasZoomToSlider(zoomData.value);
  }

  private zoomOut() {
    this.slider = this.slider - 50 || 20;
  }

  private zoomIn() {
    this.slider = this.slider + 50 || 300;
  }

  private onClickRouter() {
    console.log(this.$router);
  }

  private onClickStore() {
    console.log(this.$store);
  }

  private onClickVersion() {
    const head = this.$store?.app?.head as any;
    alert(head.selfVersion);
  }

  private async onClickModalDialogTest(): Promise<void> {
    console.log("onClickModalDialogTest までは来ている。");

    const confirm = this.$refs.confirm as Confirm;
    const result = await confirm.open("モーダルダイアログを表示するテスト", "どうですか？", { color: 'green', width: 400});

    console.log("ダイアログを表示して終わったとこまで。", result);
    alert(result);
  }

  private async onClickUserArrengeDialog(): Promise<void> {
    const dialog = this.$refs.userArrangeDialog as UserArrengeWhenNameConfrictDialog;
    await dialog.show(UserArrangeOfImportDiagram.empty());
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