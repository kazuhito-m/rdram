<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :diagram="diagram"
    :consent="consent"
    dialogWidth="450"
    @onModifyResource="onModifyResourceInner"
    @onJustPutOnDiagram="onJustPutOnDiagram"
    @onClose="onClose"
    @showCustomProperties="showCustomProperties"
    @changeConsent="changeConsent"
  >
    <template #customInputFields>
      <v-row>
        <v-col>
          <v-text-field
            v-model="value"
            label="条件の内容"
            counter
            :rules="[validateValue]"
            :maxlength="valueMaxLength"
          ></v-text-field>
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
  Emit
} from "nuxt-property-decorator";

import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import Condition from "@/domain/resource/Condition";
import Diagram from "@/domain/diagram/Diagram";

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

  @Prop({ required: true })
  private readonly diagram!: Diagram;

  @Emit("onModifyResource")
  private onModifyResource(_resource: Resource): void {}

  @Emit("onJustPutOnDiagram")
  private onJustPutOnDiagram(_resource: Resource): void {}

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
    if (this.validateValue() !== true) return;
    this.consent = newConsent;
  }

  private get valueMaxLength(): number {
    return Condition.CONDITION_VALUE_MAX_LENGTH;
  }

  private validateValue(): string | boolean {
    this.consent = false;
    const value = this.value;
    if (value.length === 0) return "入力してください。";
    const max = this.valueMaxLength;
    if (value.length > max) return `${max}文字以内で入力してください。`;
    this.consent = true;
    return true;
  }
}
</script>

<style scoped>
</style>
