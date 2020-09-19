<template>
  <PropertiesSettingDialog
    :id="resource"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    :iconKey="iconKey"
    width="450"
    :ignoreEscKey="ignoreEscKey"
    :ignoreEnterKey="ignoreEnterKey"
    @onClose="onClose"
    @onClickOk="onClickUpdateExecute"
    @onShow="onShow"
  >
    <template v-slot:inputPart>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              label="名前"
              counter
              v-model="name"
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
  Inject,
  Emit,
  Watch
} from "nuxt-property-decorator";
import PropertiesSettingDialog from "@/presentation/components/PropertiesSettingDialog.vue";
import StrageRepository from "@/domain/strage/StrageRepository";
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Purpose from "@/domain/resource/Purpose";
import Resources from "@/domain/resource/Resources";
import HasContentResource from "@/domain/resource/HasContentResource";

@Component({
  components: { PropertiesSettingDialog }
})
export default class CoreResourceEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Resource;
  @Prop({ required: true })
  private readonly resources!: Resources;
  @Prop({ required: true })
  private readonly consent!: boolean;
  @Prop()
  private notFocusSetName!: boolean;
  @Prop()
  private readonly ignoreEscKey!: boolean;
  @Prop()
  private readonly ignoreEnterKey!: boolean;

  @Emit("onModifyResource")
  private onModifyResource(resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Emit("showCustomProperties")
  private showCustomProperties(resource: Resource): void {}

  @Emit("changeConsent")
  private changeConsent(newConsent: boolean): void {}

  @Watch("resource")
  private onChangeResource(): void {
    if (!this.resource) return;
    this.onShow();
  }

  public static readonly ID_WHEN_CREATE_NEW = -1;

  private subTitle = "";
  private title = "";
  private iconKey = "";
  private firstCheck = false;

  private name = "";
  private description = "";

  private onShow(): void {
    this.changeConsent(false);
    this.firstCheck = true;
    const type = this.resource.type;
    this.title = this.isAddNew()
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

  private isAddNew(): boolean {
    return (
      this.resource.resourceId === CoreResourceEditDialog.ID_WHEN_CREATE_NEW
    );
  }

  private showProperties(resource: Resource): void {
    this.name = resource.name;
    this.description = resource.description;
  }

  private changed(): boolean {
    const old = this.resource;
    return old.name !== this.name || old.description !== this.description;
  }

  private get nameMaxLength(): number {
    return Resource.NAME_MAX_LENGTH;
  }

  private get descriptionMaxLength(): number {
    return Resource.DESCRIPTION_MAX_LENGTH;
  }

  private validateName(): string | boolean {
    this.changeConsent(false);
    if (this.firstCheck) return !(this.firstCheck = false); // 初期未入力でエラーにならないように対策
    const name = this.name;
    if (name.length === 0) return "入力してください。";
    const max = this.nameMaxLength;
    if (name.length > max) return `${max}文字以内で入力してください。`;
    this.changeConsent(this.changed());
    return true;
  }

  private validateDescription(): string | boolean {
    this.changeConsent(false);
    const description = this.description;
    const max = this.descriptionMaxLength;
    if (description.length > max) return `${max}文字以内で入力してください。`;
    this.changeConsent(this.changed());
    return true;
  }

  private onClickUpdateExecute(): void {
    if (!this.consent) return;
    const resource = this.getInputResource();
    if (resource === null) return;
    this.onModifyResource(resource);
    this.onClose();
  }

  private getInputResource(): Resource | null {
    const newResource = this.resource.with(this.name, this.description);
    if (!this.logicalValidation(newResource)) return null;
    return newResource;
  }

  private logicalValidation(resource: Resource): boolean {
    if (this.resources.existsSomeName(resource.name, resource.type)) {
      alert(`既に重複した名前の${resource.type.name}が在ります。`);
      return false;
    }
    return true;
  }
}
</script>

<style scoped>
</style>
