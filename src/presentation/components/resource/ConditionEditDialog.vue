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
          <v-text-field
            label="条件の内容"
            counter
            v-model="value"
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
