<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :diagram="diagram"
    :consent="consent"
    dialogWidth="450"
    @onModifyResource="onModifyResource"
    @onJustPutOnDiagram="onJustPutOnDiagram"
    @onClose="onClose"
    @changeConsent="changeConsent"
  />
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit
} from "nuxt-property-decorator";
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import Diagram from "@/domain/diagram/Diagram";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class StandardResourceEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Resource;

  @Prop({ required: true })
  private readonly resources!: Resources;

  @Prop({ required: true })
  private readonly diagram!: Diagram;

  @Emit("onModifyResource")
  private onModifyResource(_resource: Resource): void {}

  @Emit("onJustPutOnDiagram")
  private onJustPutOnDiagram(_resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  private consent: boolean = false;

  private changeConsent(newConsent: boolean): void {
    this.consent = newConsent;
  }
}
</script>

<style scoped>
</style>
