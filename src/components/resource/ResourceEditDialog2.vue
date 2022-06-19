<template>
  <div>
    <StandardResourceEditDialog
      :resource="targetStandaerdResource"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onClose"
    />
    <HasContentResourceEditDialog
      :resource="targetHasContentResource"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onClose"
    />
    <VariationEditDialog
      :resource="targetVariation"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onClose"
    />
    <ConditionEditDialog
      :resource="targetCondition"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onClose"
    />
    <TableTypeConditionEditDialog
      :resource="targetTableTypeCondition"
      :resources="latestResources"
      :diagram="targetDiagram"
      @onModifyResource="onModifyResource"
      @onJustPutOnDiagram="onJustPutOnDiagram"
      @onClose="onClose"
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
  Watch,
} from 'nuxt-property-decorator'
import CoreResourceEditDialog from './CoreResourceEditDialog.vue'
import StandardResourceEditDialog from './StandardResourceEditDialog.vue'
import HasContentResourceEditDialog from './HasContentResourceEditDialog.vue'
import VariationEditDialog from './VariationEditDialog.vue'
import ConditionEditDialog from './ConditionEditDialog.vue'
import TableTypeConditionEditDialog from './TableTypeConditionEditDialog.vue'
import StorageRepository from '@/domain/storage/StorageRepository'
import ResourceType from '@/domain/resource/ResourceType'
import Resource from '@/domain/resource/Resource'
import Resources from '@/domain/resource/Resources'
import HasContentResource from '@/domain/resource/HasContentResource'
import Variation from '@/domain/resource/Variation'
import Condition from '@/domain/resource/Condition'
import TableTypeCondition from '@/domain/resource/TableTypeCondition'
import Diagram from '~/domain/diagram/Diagram'

@Component({
  components: {
    StandardResourceEditDialog,
    HasContentResourceEditDialog,
    VariationEditDialog,
    ConditionEditDialog,
    TableTypeConditionEditDialog,
  },
})
export default class ResourceEditDialog2 extends Vue {
  private latestResources: Resources = Resources.prototypeOf()
  private targetStandaerdResource: Resource | null = null
  private targetHasContentResource: HasContentResource | null = null
  private targetVariation: Variation | null = null
  private targetCondition: Condition | null = null
  private targetTableTypeCondition: TableTypeCondition | null = null

  private targetDiagram: Diagram | null = null

  @Inject()
  private repository?: StorageRepository

  @Prop({ required: true })
  private readonly diagramId!: number

  @Emit('onUpdatedResource')
  private onUpdatedResource(_resource: Resource): void {}

  showForModifyOf(resourceId: number): void {
    this.show((resources) => resources.of(resourceId))
  }

  showForCreateNew(resourceType: ResourceType): void {
    this.show((Resources) => resources.prototypeResourceOf(resourceType))
  }

  private show(findResourceFunc: (resources: Resources) => Resource): void {
    const product = this.repository?.getCurrentProduct()
    if (!product) return null
    const resources = product.resources
    if (!resources) return
    const diagram = product.diagrams.of(this.diagramId)
    if (!diagram) return

    const target = findResourceFunc(resources)
    if (!target) return

    this.latestResources = resources
    this.targetDiagram = diagram

    // リソース別エディタ切り替え判定

    if (target instanceof Variation) {
      this.targetVariation = target
      return
    }

    if (target instanceof Condition) {
      this.targetCondition = target
      return
    }

    if (target instanceof TableTypeCondition) {
      this.targetTableTypeCondition = target
      return
    }

    if (target instanceof HasContentResource) {
      this.targetHasContentResource = target
      return
    }

    if (target) {
      this.targetStandaerdResource = target
      return
    }
    this.targetStandaerdResource = null
  }

  private onClose(): void {
    this.targetStandaerdResource = null
    this.targetHasContentResource = null
    this.targetVariation = null
    this.targetCondition = null
    this.targetTableTypeCondition = null
  }

  onModifyResource(resource: Resource): void {
    let product = this.repository?.getCurrentProduct()
    if (!product) return resource

    const addNew = !product.resources.existsIdOf(resource.resourceId)

    let newResource = resource
    if (addNew) {
      newResource = newResource.renewId(product.resourceIdSequence)
      product = product.moveNextResourceIdSequence()
    }

    const addedResources = product.resources.mergeByIdOf(newResource)
    product = product.withResources(addedResources)
    this.repository?.registerCurrentProduct(product)

    this.onUpdatedResource(registerd, addNew)
  }

  onJustPutOnDiagram(resource: Resource): void {
    this.onUpdatedResource(resource, false)
  }
}
</script>

<style scoped></style>
