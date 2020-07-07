<template>
  <div class="diagram-pain-container">
    <div class="editor-pain" id="editorPain">abcd</div>
    <div id="slideBar" class="slidebar" @dblclick="onDoubleClickSlideBar"></div>
    <div class="paret-pain" id="paretPain">efgh</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "nuxt-property-decorator";
import Diagram from "@/domain/diagram/Diagram";

@Component
export default class BusinessContextDiagramEditor extends Vue {
  @Prop({ required: true })
  private readonly diagram!: Diagram;

  private paretPainWidth: string | null = null;

  public onDoubleClickSlideBar() {
    const style = this.styleOf('editorPain');
    const paretStyle = this.styleOf('paretPain');
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

  private styleOf(id : string): CSSStyleDeclaration {
    const element = document.getElementById(id) as HTMLElement;
    return element.style;
  }
}
</script>

<style>
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
  text-align: left;
}

.paret-pain {
  flex-grow: 1;
  min-width: 0px;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: move;
}
</style>
