<template>
  <div class="diagram-pain-container">
    <div class="editor-pain" :id="editorPainId">
      <div class="diagram-canvas" :id="canvasId"></div>
    </div>
    <div id="slideBar" class="slidebar" @dblclick="onDoubleClickSlideBar"></div>
    <div class="paret-pain" :id="paretPainId">
      <v-expansion-panels class="paret-panel"
        multiple
        focusable
        dark
      >
        <v-expansion-panel class="paret-panel">
          <v-expansion-panel-header>
            <span class="omit-long-text">会社・企業等</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <v-list dark dence>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                    <draggable>
                      <v-chip dark outlined="">
                        <v-icon left>mdi-server-plus</v-icon>
                        (追加)
                      </v-chip>
                    </draggable>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                    <draggable>
                      <v-chip dark>
                        <v-icon left>mdi-server-plus</v-icon>
                        図書館
                      </v-chip>
                    </draggable>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="chip-container">
                    <draggable>
                      <v-chip dark>
                        <v-icon left>mdi-server-plus</v-icon>
                        東京特許許可局(修正修理中かつ特許申請中)
                      </v-chip>
                    </draggable>
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
import { Prop, Component, Vue } from "nuxt-property-decorator";
import draggable from "vuedraggable";
import Diagram from "@/domain/diagram/Diagram";

import "jquery";
import "jquery-ui";
import "jquery-ui/ui/widgets/draggable";
import "jquery-ui/ui/widgets/droppable";
import draw2d from "draw2d";

@Component({
  components: {
    draggable,
  }
})
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
    this.fixCanvasPosition();
  }

  private showCanvas(): void {
    const canvas: any = new draw2d.Canvas(this.canvasId);

    canvas.add(
      new draw2d.shape.widget.Slider({ width: 90, height: 20 }),
      50,
      50
    );
  }

  /**
   * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
   */
  private fixCanvasPosition(): void {
    const svg = document.getElementById(this.canvasId)
      ?.firstChild as SVGElement;
    svg.style.removeProperty("position");
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