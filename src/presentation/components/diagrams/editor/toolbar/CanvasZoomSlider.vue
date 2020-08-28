<template lang="html">
  <v-slider  class="zoom-slider"
      v-model.number="zoomPercentage"
      dence
      append-icon="mdi-magnify-plus-outline"
      prepend-icon="mdi-magnify-minus-outline"
      :max="MAX"
      :min="MIN"
      @click:append="onClickZoomIn"
      @click:prepend="onClickZoomOut"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { Canvas, Figure } from "draw2d";

@Component
export default class CanvasZoomSlider extends Vue {
  @Prop({ required: true })
  private readonly canvasZoom!: number;
  private zoomPercentage: number = 100;

  private readonly MAX = 200;
  private readonly MIN = 20;
  private readonly INCREMENTAL = 10;

  @Emit("onChangeZoomBySlider")
  private onChangeZoomBySlider(zoom: number) {}

  private canvasZoomToSlider(zoom: number) {
    this.zoomPercentage = 100 / zoom;
  }

  @Watch("canvasZoom")
  private onChangeCanvasZoom() {
    this.canvasZoomToSlider(this.canvasZoom);
  }

  @Watch("zoomPercentage")
  private onChangeSliderValue() {
    if (!isFinite(this.zoomPercentage)) return;
    let base = Number(this.zoomPercentage);
    let fix = base;
    if (base < this.MIN) fix = this.MIN;
    if (base > this.MAX) fix = this.MAX;
    if (base !== fix) {
      this.zoomPercentage = fix;
      return;
    }
    const zoom = 100 / fix;

    this.onChangeZoomBySlider(zoom);
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
.zoom-slider {
  width: 250px;
  height: 35px;
}
.zoom-parsentage {
  height: 35px;
}
</style>