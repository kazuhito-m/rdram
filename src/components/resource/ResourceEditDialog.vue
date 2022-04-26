<template>
  <div>
    <StandardResourceEditDialog
      :resource="targetStandaerdResource"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onCloseStandardResourceEditDialog"
    />
    <HasContentResourceEditDialog
      :resource="targetHasContentResource"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onCloseHasContentResourceEditDialog"
    />
    <VariationEditDialog
      :resource="targetVariation"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onCloseVariationEditDialog"
    />
    <ConditionEditDialog
      :resource="targetCondition"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onCloseConditionEditDialog"
    />
    <TableTypeConditionEditDialog
      :resource="targetTableTypeCondition"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
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
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";
import StandardResourceEditDialog from "./StandardResourceEditDialog.vue";
import HasContentResourceEditDialog from "./HasContentResourceEditDialog.vue";
import VariationEditDialog from "./VariationEditDialog.vue";
import ConditionEditDialog from "./ConditionEditDialog.vue";
import TableTypeConditionEditDialog from "./TableTypeConditionEditDialog.vue";
import StrageRepository from "@/domain/strage/StrageRepository";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import HasContentResource from "@/domain/resource/HasContentResource";
import Variation from "@/domain/resource/Variation";
import Condition from "@/domain/resource/Condition";
import TableTypeCondition from "@/domain/resource/TableTypeCondition";
import Diagram from "~/domain/diagram/Diagram";

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

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Emit("onUpdatedResource")
  private onUpdatedResource(_resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Watch("resourceId")
  private onChangeResourceId(): void {
    if (!this.resourceId) return;
    const id = Number(this.resourceId);
    if (id !== 0) this.onShow();
  }

  private latestResources: Resources = Resources.prototypeOf();
  private targetStandaerdResource: Resource | null = null;
  private targetHasContentResource: HasContentResource | null = null;
  private targetVariation: Variation | null = null;
  private targetCondition: Condition | null = null;
  private targetTableTypeCondition: TableTypeCondition | null = null;

  private targetDiagram: Diagram | null = null;

  @Inject()
  private repository?: StrageRepository;

  private onShow(): void {
    const resources = this.loadResources();
    if (!resources) return;
    const resource = this.getTargetResource(resources);

    this.latestResources = resources;
    this.targetDiagram = this.getTargetDiagram();

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

    if (resource) {
      this.targetStandaerdResource = resource;
      return;
    }
    this.targetStandaerdResource = null;
  }

  private onModifyResource(resource: Resource): void {
    const registerd = this.registerResoruce(resource);
    this.onUpdatedResource(registerd);
  }

  private onJustPutOnDiagram(resource: Resource): void {
    this.onUpdatedResource(resource);
  }

  private onCloseStandardResourceEditDialog(): void {
    this.targetStandaerdResource = null;
    this.onClose();
  }

  private onCloseHasContentResourceEditDialog(): void {
    this.targetHasContentResource = null;
    this.onClose();
  }

  private onCloseVariationEditDialog(): void {
    this.targetVariation = null;
    this.onClose();
  }

  private onCloseConditionEditDialog(): void {
    this.targetCondition = null;
    this.onClose();
  }

  private onCloseTableTypeConditionEditDialog(): void {
    this.targetTableTypeCondition = null;
    this.onClose();
  }

  private isAddNew(): boolean {
    return this.resourceId === CoreResourceEditDialog.ID_WHEN_CREATE_NEW;
  }

  private getTargetResource(resources: Resources): Resource | undefined {
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

  private getTargetDiagram(): Diagram | null {
    const diagram = this.repository
      ?.getCurrentProduct()
      ?.diagrams
      .of(this.diagramId);
    return diagram || null;
  }
}
</script>

<style scoped>
</style>
