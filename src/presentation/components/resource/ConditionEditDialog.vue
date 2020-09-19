<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :consent="consent"
    @onModifyResource="onModifyResourceInner"
    @onClose="onClose"
    @showCustomProperties="showCustomProperties"
    @changeConsent="changeConsent"
  >
    <template v-slot:customInputFields>
      <v-row>
        <v-col>
          これ表示できたら成功。
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
import Condition from "@/domain/resource/Condition";
import ResourceType from "@/domain/resource/ResourceType";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class ConditionEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Condition;
  @Prop({ required: true })
  private readonly resources!: Resources;

  @Emit("onModifyResource")
  private onModifyResource(resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  private value: string = "";

private consent: boolean = false;

  private showCustomProperties(resource: Condition): void {
    this.value = resource.value;
  }

  private onModifyResourceInner(resource: Condition): void {
    const withContent = resource.withValue(this.value);
    this.onModifyResource(withContent);
  }

  private changeConsent(newConsent: boolean): void {
    this.consent = newConsent;
  }
}
</script>

<style scoped>
</style>
