<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :consent="consent"
    notFocusSetName="true"
    @onModifyResource="onModifyResourceInner"
    @onClose="onClose"
    @showCustomProperties="showCustomProperties"
    @changeConsent="changeConsent"
  >
    <template v-slot:customInputFields>
      <v-row>
        <v-col>
        </v-col>
      </v-row>
    </template>
  </CoreResourceEditDialog>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Inject,
  Emit,
  Watch
} from "nuxt-property-decorator";
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import Purpose from "@/domain/resource/Purpose";
import Variation from "@/domain/resource/Variation";
import ResourceType from "@/domain/resource/ResourceType";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class VariationEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Resource;
  @Prop({ required: true })
  private readonly resources!: Resources;

  @Emit("onModifyResource")
  private onModifyResource(resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  private values: string[][] = [];

  private consent: boolean = false;

  private showCustomProperties(resource: Variation): void {
    this.values = resource.valuesOf().map(value => [value]);
  }

  private onModifyResourceInner(resource: Variation): void {
    const withContent = resource.withValues(this.values.map(line => line[0]));
    this.onModifyResource(withContent);
  }

  private changeConsent(newConsent: boolean): void {
    this.consent = newConsent;
  }
}
</script>

<style scoped>
</style>
