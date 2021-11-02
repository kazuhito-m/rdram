<template>
  <v-flex class="text-center">
    <div
      class="pain-container"
      @dragover="onDragOverMasterPainSlideBar"
      @drop="onDropMasterPainSlideBar"
    >
      <div ref="leftPain" class="left-pain">
        <slot name="leftPain"></slot>
      </div>
      <div
        id="slideBar"
        class="slidebar"
        draggable="true"
        @dblclick="onDoubleClickSlideBar"
        @dragstart="onDragStartMasterPainSlideBar"
      ></div>
      <div ref="rightPain" class="right-pain">
        <slot name="rightPain"></slot>
      </div>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "nuxt-property-decorator";
import Uuid from "@/domain/world/Uuid";

@Component
export default class TwoPainWithSlideBarLayout extends Vue {
  @Prop()
  private adsorptionLeftWhenDoubleClick?: boolean;
  @Prop()
  private readonly defaultLeftPainWidth?: string;

  private dragId?: string;
  private leftPainWidth: string | null = null;

  private mounted(): void {
    if (!this.defaultLeftPainWidth) return;
    const leftPain = this.$refs.leftPain as HTMLElement;
    leftPain.style.width = this.defaultLeftPainWidth;
  }

  public onDoubleClickSlideBar(): void {
    const leftPain = this.$refs.leftPain as HTMLElement;
    const leftPainStyle = leftPain.style;
    if (this.adsorptionLeftWhenDoubleClick) {
      const rightPain = this.$refs.rightPain as HTMLElement;
      const rightPainStyle = rightPain.style;
      if (this.leftPainWidth === null) {
        rightPainStyle.display = "none";
        this.leftPainWidth = leftPainStyle.width;
        leftPainStyle.width = "100%";
        leftPainStyle.resize = "none";
      } else {
        rightPainStyle.display = "inline";
        leftPainStyle.resize = "horizontal";
        leftPainStyle.width = this.leftPainWidth;
        this.leftPainWidth = null;
      }
    } else {
      leftPainStyle.display =
        leftPainStyle.display === "none" ? "inline" : "none";
    }
  }

  private onDragStartMasterPainSlideBar(event: DragEvent): void {
    this.dragId = Uuid.generate();
    event.dataTransfer?.setData("text", this.dragId);
  }

  private onDragOverMasterPainSlideBar(event: DragEvent): void {
    event?.preventDefault();
  }

  private onDropMasterPainSlideBar(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.getData("text") !== this.dragId) return;
    const leftPain = this.$refs.leftPain as HTMLElement;
    const style = leftPain.style;
    let painLeft = 0;
    if (style.left) {
      const left = style.left;
      if (left.match("px$")) painLeft = parseInt(left.replace("px", ""), 10);
    }
    style.width = event.x - painLeft + "px";
  }
}
</script>

<style scoped>
.pain-container {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: initial;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: unset;
  margin-left: unset;
}

.left-pain {
  overflow: hidden;
  text-align: left;
  resize: both;
  width: 250px;
}

.right-pain {
  flex-grow: 1;
  width: 0%;
  min-width: 0px;
  overflow: hidden;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: col-resize;
}
</style>
