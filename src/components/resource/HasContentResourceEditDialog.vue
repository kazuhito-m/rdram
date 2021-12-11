<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :consent="consent"
    dialogWidth="450"
    notFocusSetName="true"
    @onModifyResource="onModifyResourceInner"
    @onClose="onClose"
    @showCustomProperties="showCustomProperties"
    @changeConsent="changeConsent"
  >
    <template #customInputFields>
      <v-row>
        <v-col>
          <v-textarea
            ref="inputContent"
            v-model="content"
            counter
            filled
            label="内容"
            rows="3"
            no-resize
            autofocus
            :rules="[validateContent]"
            :hint="inputContentHint"
          ></v-textarea>
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
import Purpose from "@/domain/resource/Purpose";
import HasContentResource from "@/domain/resource/HasContentResource";
import ResourceType from "@/domain/resource/ResourceType";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class HasContentResourceEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Resource;

  @Prop({ required: true })
  private readonly resources!: Resources;

  @Emit("onModifyResource")
  private onModifyResource(_resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  private content: string = "";

  private inputContentHint: string = "";
  private consent: boolean = false;

  private showCustomProperties(resource: HasContentResource): void {
    this.content = resource.content;
    this.inputContentHint = this.choiceHintText(resource);
  }

  private changeConsent(newConsent: boolean): void {
    if (this.validateContent() !== true) {
      this.consent = false;
      return;
    }
    this.consent = newConsent;
  }

  private choiceHintText(resource: HasContentResource): string {
    if (ResourceType.目的.equals(resource.type))
      return "半角スペース・改行 で折り返す事ができます。";
    return "改行 で折り返す事ができます。";
  }

  private validateContent(): string | boolean {
    this.consent = false;
    const content = this.content;
    if (content.length <= 0) return `入力してください。`;
    const max = Purpose.CONTENT_MAX_LENGTH;
    if (content.length > max) return `${max}文字以内で入力してください。`;
    this.consent = true;
    return true;
  }

  private onModifyResourceInner(resource: HasContentResource): void {
    const withContent = resource.withContent(this.content);
    this.onModifyResource(withContent);
  }
}
</script>

<style scoped>
</style>
