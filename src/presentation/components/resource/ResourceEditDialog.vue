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
    <VariationEditDialog
      :resource="targetVariation"
      :resources="latestResources"
      @onModifyResource="onModifyVariation"
      @onClose="onCloseVariationEditDialog"
    />
    <ConditionEditDialog
      :resource="targetCondition"
      :resources="latestResources"
      @onModifyResource="onModifyCondition"
      @onClose="onCloseConditionEditDialog"
    />
    <TableTypeConditionEditDialog
      :resource="targetTableTypeCondition"
      :resources="latestResources"
      @onModifyResource="onModifyTableTypeCondition"
      @onClose="onCloseTableTypeConditionEditDialog"
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
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";
import StandardResourceEditDialog from "./StandardResourceEditDialog.vue";
import HasContentResourceEditDialog from "./HasContentResourceEditDialog.vue";
import VariationEditDialog from "./VariationEditDialog.vue";
import Variation from "@/domain/resource/Variation";
import ConditionEditDialog from "./ConditionEditDialog.vue";
import Condition from "@/domain/resource/Condition";
import TableTypeCondition from "@/domain/resource/TableTypeCondition";
import TableTypeConditionEditDialog from "./TableTypeConditionEditDialog.vue";

@Component({
  components: {
    StandardResourceEditDialog,
    HasContentResourceEditDialog,
    VariationEditDialog,
    ConditionEditDialog,
    TableTypeConditionEditDialog
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
  private targetVariation: Variation | null = null;
  private targetCondition: Condition | null = null;
  private targetTableTypeCondition: TableTypeCondition | null = null;

  @Inject()
  private repository?: StrageRepository;

  private onShow(): void {
    const resources = this.loadResources();
    if (!resources) return;
    const resource = this.getTargetResource(resources);

    this.latestResources = resources;

    // リソース別エディタ切り替え判定

    if (resource instanceof Variation) {
      this.targetVariation = resource;
      return;
    }

    if (resource instanceof Condition) {
      this.targetCondition = resource;
      return;
    }

    if (resource instanceof TableTypeCondition) {
      this.targetTableTypeCondition = resource;
      return;
    }

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

  private onModifyVariation(resource: Variation): void {
    const registerd = this.registerResoruce(resource);
    this.onUpdatedResource(registerd);
  }

  private onCloseVariationEditDialog(): void {
    this.targetVariation = null;
    this.onClose();
  }

  private onModifyCondition(resource: Condition): void {
    const registerd = this.registerResoruce(resource);
    this.onUpdatedResource(registerd);
  }

  private onCloseConditionEditDialog(): void {
    this.targetCondition = null;
    this.onClose();
  }

  private onModifyTableTypeCondition(resource: TableTypeCondition): void {
    const registerd = this.registerResoruce(resource);
    this.onUpdatedResource(registerd);
  }

  private onCloseTableTypeConditionEditDialog(): void {
    this.targetTableTypeCondition = null;
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
