<template>
  <PropertiesSettingDialog
    :id="resourceId"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    :iconKey="iconKey"
    width="450"
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
              :autofocus="!enableContent"
              :rules="[validateName]"
              :maxlength="nameMaxLength"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="enableContent">
          <v-col>
            <v-textarea
              v-model="content"
              ref="inputContent"
              counter
              filled
              label="内容"
              rows="3"
              no-resize
              :autofocus="enableContent"
              :rules="[validateContent]"
            ></v-textarea>
          </v-col>
        </v-row>
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
import Uuid from "@/domain/world/Uuid";
import StrageRepository from "@/domain/strage/StrageRepository";
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Purpose from "@/domain/resource/Purpose";
import Resources from "@/domain/resource/Resources";

@Component({
  components: { PropertiesSettingDialog }
})
export default class ResourcePropertiesEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resourceId!: number;
  @Prop({ required: true })
  private readonly resourceType!: ResourceType;

  @Emit("onUpdatedResourceProperties")
  private onUpdatedResourceProperties(resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Watch("resourceId")
  private onChangeResourceId(): void {
    if (!this.resourceId) return;
    const id = Number(this.resourceId);
    if (id !== 0) this.onShow();
  }

  public static readonly ID_WHEN_CREATE_NEW = -1;

  @Inject()
  private repository?: StrageRepository;
  private consent = false;
  private subTitle = "";
  private title = "";
  private iconKey = "";
  private old!: Resource;
  private enableContent = false;

  private name = "";
  private description = "";
  private content = "";

  private onShow(): void {
    this.consent = false;
    const product = this.repository?.getCurrentProduct();
    if (!product) return;
    const resource = this.getTargetResource(product.resources);
    if (!resource) return;
    this.old = resource;
    const type = resource.type;
    this.title = this.isAddNew()
      ? `${type.name} の新規作成`
      : `${resource.name} の設定`;
    this.subTitle = type.name;
    this.iconKey = type.iconKey;
    this.enableContent = ResourceType.目的.equals(type);
    this.showProperties(resource);
  }

  private isAddNew(): boolean {
    return this.resourceId === ResourcePropertiesEditDialog.ID_WHEN_CREATE_NEW;
  }

  private showProperties(resource: Resource): void {
    this.name = resource.name;
    this.description = resource.description;
    if (ResourceType.目的.equals(this.resourceType)) {
      const purpose = resource as Purpose;
      this.content = purpose.content;
    }
  }

  private changed(): boolean {
    const old = this.old;
    let whenSpecialTypeDiff = false;
    if (ResourceType.目的.equals(old.type)) {
      const purpose = this.old as Purpose;
      whenSpecialTypeDiff = purpose.content !== this.content;
    }
    return (
      whenSpecialTypeDiff ||
      old.name !== this.name ||
      old.description !== this.description
    );
  }

  private get nameMaxLength(): number {
    return Resource.NAME_MAX_LENGTH;
  }

  private get descriptionMaxLength(): number {
    return Resource.DESCRIPTION_MAX_LENGTH;
  }

  private validateName(): string | boolean {
    this.consent = false;
    const name = this.name;
    if (this.old.name === name) return true; // 初期値がバリデーションで怒られない対策
    if (name.length === 0) return "入力してください。";
    const max = this.nameMaxLength;
    if (name.length > max) return `${max}文字以内で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private validateDescription(): string | boolean {
    this.consent = false;
    const description = this.description;
    const max = this.descriptionMaxLength;
    if (description.length > max) return `${max}文字以内で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private validateContent(): string | boolean {
    this.consent = false;
    const content = this.content;
    const max = Purpose.CONTENT_MAX_LENGTH;
    if (content.length > max) return `${max}文字以内で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private onClickUpdateExecute(): void {
    if (!this.consent) return;
    const resource = this.registerResourceProperties();
    if (!resource) return;
    this.onUpdatedResourceProperties(resource);
    this.onClose();
  }

  private registerResourceProperties(): Resource | null {
    let product = this.repository?.getCurrentProduct();
    if (!product) return null;

    let resourceId = this.old.resourceId;
    if (this.isAddNew()) {
      resourceId = product.resourceIdSequence;
      product = product.moveNextResourceIdSequence();
    }
    let resource = product.resources.createResourceOf(
      this.name,
      this.old.type,
      resourceId
    );
    if (ResourceType.目的.equals(resource.type)) {
      const purpose = resource as Purpose;
      resource = purpose.withContent(this.content);
    }

    if (!this.logicalValidation(resource, product)) return null;

    const addedResources = product.resources.meage(resource);
    product = product.withResources(addedResources);
    this.repository?.registerCurrentProduct(product);

    return resource;
  }

  private logicalValidation(resource: Resource, product: Product): boolean {
    if (product.resources.existsSomeName(resource.name, resource.type)) {
      alert("既に重複した名前の図が在ります。");
      return false;
    }
    return true;
  }

  private getTargetResource(resources: Resources): Resource | null {
    if (this.isAddNew())
      return resources.prototypeResourceOf(this.resourceType);
    return resources.of(this.resourceId);
  }
}
</script>

<style scoped>
</style>
