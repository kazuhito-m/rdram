<template>
  <div>
    <StandardResourceEditDialog
      :resource="targetStandaerdResource"
      :resources="latestResources"
      @onModifyResource="onModifyStandardResource"
      @onClose="onCloseStandardResourceEditDialog"
    />
    <HasContentResourceEditDialog
      :resource="targetHasContentResource"
      :resources="latestResources"
      @onModifyResource="onModifyHasContentResource"
      @onClose="onCloseHasContentResourceEditDialog"
    />
  </div>
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
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import HasContentResource from "@/domain/resource/HasContentResource";
import StandardResourceEditDialog from "./StandardResourceEditDialog.vue";
import HasContentResourceEditDialog from "./HasContentResourceEditDialog.vue";
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";

@Component({
  components: {
    StandardResourceEditDialog,
    HasContentResourceEditDialog
  }
})
export default class ResourceEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resourceId!: number;
  @Prop({ required: true })
  private readonly resourceType!: ResourceType;

  @Emit("onUpdatedResource")
  private onUpdatedResource(resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Watch("resourceId")
  private onChangeResourceId(): void {
    if (!this.resourceId) return;
    const id = Number(this.resourceId);
    if (id !== 0) this.onShow();
  }

  private latestResources: Resources | null = null;
  private targetStandaerdResource: Resource | null = null;
  private targetHasContentResource: HasContentResource | null = null;

  @Inject()
  private repository?: StrageRepository;

  private onShow(): void {
    const resources = this.loadResources();
    if (!resources) return;
    const resource = this.getTargetResource(resources);

    this.latestResources = resources;

    // リソース別エディタ切り替え判定

    if (resource instanceof HasContentResource) {
      this.targetHasContentResource = resource;
      return;
    }

    this.targetStandaerdResource = resource;
  }

  private onModifyStandardResource(resource: Resource): void {
    const registerd = this.registerResoruce(resource);
    this.onUpdatedResource(registerd);
  }

  private onCloseStandardResourceEditDialog(): void {
    this.targetStandaerdResource = null;
    this.onClose();
  }

  private onModifyHasContentResource(resource: HasContentResource): void {
    const registerd = this.registerResoruce(resource);
    this.onUpdatedResource(registerd);
  }

  private onCloseHasContentResourceEditDialog(): void {
    this.targetHasContentResource = null;
    this.onClose();
  }

  private isAddNew(): boolean {
    return this.resourceId === CoreResourceEditDialog.ID_WHEN_CREATE_NEW;
  }

  private getTargetResource(resources: Resources): Resource | null {
    if (this.isAddNew())
      return resources
        .prototypeResourceOf(this.resourceType)
        .renewId(CoreResourceEditDialog.ID_WHEN_CREATE_NEW);
    return resources.of(this.resourceId);
  }

  private loadResources(): Resources | null {
    const product = this.repository?.getCurrentProduct();
    if (!product) return null;
    return product.resources;
  }

  private registerResoruce(resource: Resource): Resource {
    let product = this.repository?.getCurrentProduct();
    if (!product) return resource;

    let newResource = resource;
    if (this.isAddNew()) {
      newResource = newResource.renewId(product.resourceIdSequence);
      product = product.moveNextResourceIdSequence();
    }

    const addedResources = product.resources.meage(newResource);
    product = product.withResources(addedResources);
    this.repository?.registerCurrentProduct(product);

    return newResource;
  }
}
</script>

<style scoped>
</style>
