<template>
  <div>
    <CoreResourceEditDialog
      :resource="targetStandaerdResource"
      :resources="latestResources" 
      @onModifyResource="onModifyStandardResource"
      @onClose="onCloseStandardResourceEditDialog"
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
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";

@Component({
  components: {
    CoreResourceEditDialog
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

  public static readonly ID_WHEN_CREATE_NEW = -1;

  private latestResources: Resources | null = null;
  private targetStandaerdResource: Resource | null = null;

  @Inject()
  private repository?: StrageRepository;

  private onShow(): void {
    const resources = this.loadResources();
    if (!resources) return;
    const resource = this.getTargetResource(resources);

    this.latestResources = resources;
    this.targetStandaerdResource = resource;
  }

  private onModifyStandardResource(resource: Resource): void {
    alert(resource.name);
  }

  private onCloseStandardResourceEditDialog(): void {
    this.targetStandaerdResource = null;
    this.onClose();
  }

  private isAddNew(): boolean {
    return this.resourceId === CoreResourceEditDialog.ID_WHEN_CREATE_NEW;
  }

  private getTargetResource(resources: Resources): Resource | null {
    if (this.isAddNew())
      return resources.prototypeResourceOf(this.resourceType);
    return resources.of(this.resourceId);
  }

  private loadResources(): Resources | null {
    const product = this.repository?.getCurrentProduct();
    if (!product) return null;
    return product.resources;
  }
}
</script>

<style scoped>
</style>
