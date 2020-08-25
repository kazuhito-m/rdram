<template lang="html">
    <v-card-text>
        <v-row>
            <v-col>
                <v-slider
                    v-model.number="zoomPercentage"
                    append-icon="zoom_in"
                    prepend-icon="zoom_out"
                    max="200"
                    min="20"
                    @click:append="onClickZoomIn"
                    @click:prepend="onClickZoomOut"
                >
                <template v-slot:append>
                    <v-text-field
                        v-model="zoomPercentage"
                        class="mt-0 pt-0"
                        type="number"
                        style="width: 60px; float: righat; clear=both;"
                    ></v-text-field>
                </template>
                </v-slider>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { Canvas, Figure } from "draw2d";

@Component
export default class CanvasZoomSlider extends Vue {
  private zoomPercentage: number = 100;

  @Prop()
  private canvas!: Canvas;

  private readonly MAX = 200;
  private readonly MIN = 20;
  private readonly INCREMENTAL = 10;

  private mounted(): void {
    // とりあえず、Canvas側をデフォルトとして表示(Zoom率を保存するように成ったら変わるかも)
    this.canvasZoomToSlider(this.canvas.getZoom());
    this.canvas.on("zoom", this.onZoomChangeFromCanvas);
  }

  private canvasZoomToSlider(zoom: number) {
    this.zoomPercentage = 100 / zoom;
  }

  @Watch("zoomPercentage")
  private onChangeSliderValue(e: any) {
    if (!Number.isNaN(this.zoomPercentage)) return;

    let base = Number(this.zoomPercentage);
    isNaN;
    let fix = base;
    if (base < this.MIN) fix = this.MIN;
    if (base > this.MAX) fix = this.MAX;
    if (base != fix) {
      this.zoomPercentage = fix;
      return;
    }
    const zoom = 100 / fix;
    console.log(zoom);
    this.canvas.setZoom(zoom, false);
  }

  private onZoomChangeFromCanvas(emitterFigure: Figure, zoomData: any) {
    this.canvasZoomToSlider(zoomData.value);
  }

  private onClickZoomOut() {
    this.zoomPercentage = this.zoomPercentage - this.INCREMENTAL || this.MIN;
  }

  private onClickZoomIn() {
    this.zoomPercentage = this.zoomPercentage + this.INCREMENTAL || this.MAX;
  }
}
</script>

<style scoped>
</style>