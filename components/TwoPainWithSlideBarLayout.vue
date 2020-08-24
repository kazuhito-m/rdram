<template>
  <v-flex class="text-center">
    <div
      class="pain-container"
      @dragover="onDragOverMasterPainSlideBar"
      @drop="onDropMasterPainSlideBar"
    >
      <div id="leftPainId" class="left-pain">
        <slot name="leftPain"></slot>
      </div>
      <div
        id="slideBar"
        class="slidebar"
        draggable="true"
        @dblclick="onDoubleClickSlideBar"
        @dragstart="onDragStartMasterPainSlideBar"
      ></div>
      <div id="rightPainId" class="right-pain">
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

  private dragId?: string;
  private paretPainWidth: string | null = null;

  public onDoubleClickSlideBar(): void {
    const leftPain = document.getElementById("leftPainId") as HTMLElement;
    const leftPainStyle = leftPain.style;
    if (this.adsorptionLeftWhenDoubleClick) {
      const rightPainStyle = this.styleOf("rightPainId");
      if (this.paretPainWidth === null) {
        rightPainStyle.display = "none";
        this.paretPainWidth = leftPainStyle.width;
        leftPainStyle.width = "100%";
        leftPainStyle.resize = "none";
      } else {
        rightPainStyle.display = "inline";
        leftPainStyle.resize = "horizontal";
        leftPainStyle.width = this.paretPainWidth;
        this.paretPainWidth = null;
      }
    } else {
      leftPainStyle.display =
        leftPainStyle.display === "none" ? "inline" : "none";
    }
  }

  private styleOf(id: string): CSSStyleDeclaration {
    const element = document.getElementById(id) as HTMLElement;
    return element.style;
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
    const style = this.styleOf("leftPainId");
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
  overflow: auto;
  text-align: left;
}

.right-pain {
  flex-grow: 1;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: col-resize;
}
</style>
