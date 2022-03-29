<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :consent="consent"
    dialogWidth="450"
    @onModifyResource="onModifyResource"
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

  @Emit("onModifyResource")
  private onModifyResource(_resource: Resource): void {}

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
