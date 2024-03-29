<template>
  <PropertiesSettingDialog
    :id="resource"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    :iconKey="iconKey"
    :width="dialogWidth"
    :ignoreEscKey="ignoreEscKey"
    :ignoreEnterKey="ignoreEnterKey"
    @onClose="onClose"
    @onClickOk="onClickUpdateExecute"
    @onShow="onShow"
  >
    <template #inputPart>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              label="名前"
              counter
              :autofocus="!notFocusSetName"
              :rules="[validateName]"
              :maxlength="nameMaxLength"
            ></v-text-field>
          </v-col>
        </v-row>
        <slot name="customInputFields" />
        <v-row>
          <v-col>
            <v-textarea
              v-model="description"
              counter
              filled
              label="備考・メモ"
              rows="2"
              no-resize
              :max="descriptionMaxLength"
              :rules="[validateDescription]"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </PropertiesSettingDialog>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Watch
} from "nuxt-property-decorator";
import PropertiesSettingDialog from "@/components/PropertiesSettingDialog.vue";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import Diagram from "@/domain/diagram/Diagram";

@Component({
  components: { PropertiesSettingDialog }
})
export default class CoreResourceEditDialog extends Vue {
  @Prop({ required: true })
  readonly resource!: Resource;

  @Prop({ required: true })
  readonly resources!: Resources;

  @Prop({ required: true })
  readonly diagram!: Diagram;

  @Prop({ required: true })
  readonly consent!: boolean;

  @Prop()
  notFocusSetName!: boolean;

  @Prop()
  readonly ignoreEscKey!: boolean;

  @Prop()
  readonly ignoreEnterKey!: boolean;

  @Prop()
  readonly dialogWidth!: number;

  @Emit("onModifyResource")
  private onModifyResource(_resource: Resource): void {}

  @Emit("onJustPutOnDiagram")
  private onJustPutOnDiagram(_resource: Resource): void {}

  @Emit("onClose")
  onClose(): void {}

  @Emit("showCustomProperties")
  showCustomProperties(_resource: Resource): void {}

  @Emit("changeConsent")
  changeConsent(_newConsent: boolean): void {}

  @Watch("resource")
  private onChangeResource(): void {
    if (!this.resource) return;
    this.onShow();
  }

  title = "";
  subTitle = "";
  iconKey = "";
  private firstCheck = false;

  name = "";
  description = "";

  onShow(): void {
    this.changeConsent(false);
    this.firstCheck = true;
    const type = this.resource.type;
    this.title = this.resource.isNotRegister()
      ? `${type.name} の新規作成`
      : `${this.resource.name} の設定`;
    this.subTitle = type.name;
    this.iconKey = type.iconKey;
    this.showProperties(this.resource);
    this.$nextTick(() => {
      this.showCustomProperties(this.resource);
      if (ResourceType.始点終点.equals(this.resource.type))
        this.description += " "; // TODO 特殊条件過ぎる。包括的にやりたい。
    });
  }

  private showProperties(resource: Resource): void {
    this.name = resource.name;
    this.description = resource.description;
  }

  private changed(): boolean {
    const old = this.resource;
    return old.name !== this.name || old.description !== this.description;
  }

  get nameMaxLength(): number {
    return Resource.NAME_MAX_LENGTH;
  }

  get descriptionMaxLength(): number {
    return Resource.DESCRIPTION_MAX_LENGTH;
  }

  validateName(): string | boolean {
    this.changeConsent(false);
    if (this.firstCheck) return !(this.firstCheck = false); // 初期未入力でエラーにならないように対策
    const name = this.name;
    if (name.length === 0) return "入力してください。";
    const max = this.nameMaxLength;
    if (name.length > max) return `${max}文字以内で入力してください。`;
    this.changeConsent(this.changed());
    return true;
  }

  validateDescription(): string | boolean {
    this.changeConsent(false);
    const description = this.description;
    const max = this.descriptionMaxLength;
    if (description.length > max) return `${max}文字以内で入力してください。`;
    this.changeConsent(this.changed());
    return true;
  }

  onClickUpdateExecute(): void {
    if (!this.consent) return;

    const resource = this.resource.with(this.name, this.description);
    const typeName = resource.type.name;

    const sameResource = this.resources.getSameOf(resource);
    if (sameResource) {
      if (resource.isNotRegister()) {
        if (this.diagram.existsResourceOnPlacementOf(sameResource.resourceId)) {
          alert(`既に重複した名前の${typeName}が在り、図に配置されています。`);
          return;
        }

        const result = confirm(`既に重複した名前の${typeName}が在ります。既存の${typeName}を図に配置しますか？`);
        if (!result) return;

        this.onJustPutOnDiagram(sameResource);
        this.onClose();
        return;
      }

      if (sameResource.resourceId !== resource.resourceId) {
        alert(`既に重複した名前の${typeName}が在ります。`);
        return;
      }
    }

    this.onModifyResource(resource);
    this.onClose();
  }
}
</script>

<style scoped>
</style>
