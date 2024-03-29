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
import { Component, Vue, Prop, Inject, Emit } from 'nuxt-property-decorator'
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
import Diagram from '@/domain/diagram/Diagram'

@Component({
  components: {
    StandardResourceEditDialog,
    HasContentResourceEditDialog,
    VariationEditDialog,
    ConditionEditDialog,
    TableTypeConditionEditDialog,
  },
})
export default class ResourceEditDialog extends Vue {
  latestResources: Resources = Resources.prototypeOf()
  targetStandaerdResource: Resource | null = null
  targetHasContentResource: HasContentResource | null = null
  targetVariation: Variation | null = null
  targetCondition: Condition | null = null
  targetTableTypeCondition: TableTypeCondition | null = null

  targetDiagram: Diagram | null = null

  private resolve: any = null

  @Inject()
  private repository?: StorageRepository

  @Prop({ required: true })
  private readonly diagramId!: number

  @Emit('onUpdatedResource')
  private onUpdatedResource(_resource: Resource, _addNew: boolean): void {}

  showForModifyOf(resourceId: number): Promise<Resource> {
    return this.show((resources) => resources.of(resourceId))
  }

  showForCreateNew(resourceType: ResourceType): Promise<Resource> {
    return this.show((resources) => resources.prototypeResourceOf(resourceType))
  }

  private show(
    findResourceFunc: (resources: Resources) => Resource | undefined
  ): Promise<Resource> {
    const target = this.initializeOf(findResourceFunc)
    if (!target) return new Promise((resolve) => resolve(Resource.empty()))

    this.visibleByType(target)

    return new Promise((resolve) => (this.resolve = resolve))
  }

  private initializeOf(
    findResourceFunc: (resources: Resources) => Resource | undefined
  ): Resource | null {
    const product = this.repository?.getCurrentProduct()
    if (!product) return null
    const resources = product.resources
    if (!resources) return null
    const diagram = product.diagrams.of(this.diagramId)
    if (!diagram) return null

    const target = findResourceFunc(resources)
    if (!target) return null

    this.latestResources = resources
    this.targetDiagram = diagram

    return target
  }

  // リソース別エディタ切り替え判定
  private visibleByType(target: Resource): void {
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

  onClose(): void {
    this.targetStandaerdResource = null
    this.targetHasContentResource = null
    this.targetVariation = null
    this.targetCondition = null
    this.targetTableTypeCondition = null
  }

  onModifyResource(resource: Resource): void {
    let product = this.repository?.getCurrentProduct()
    if (!product) return

    const addNew = !product.resources.existsIdOf(resource.resourceId)

    let newResource = resource
    if (addNew) {
      newResource = newResource.renewId(product.resourceIdSequence)
      product = product.moveNextResourceIdSequence()
    }

    const addedResources = product.resources.mergeByIdOf(newResource)
    product = product.withResources(addedResources)
    this.repository?.registerCurrentProduct(product)

    this.resolve(newResource)
  }

  onJustPutOnDiagram(resource: Resource): void {
    this.onUpdatedResource(resource, false)
  }
}
</script>

<style scoped></style>
