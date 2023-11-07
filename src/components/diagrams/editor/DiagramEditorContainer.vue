<template>
  <div>
    <Rdra20DiagramEditorContainer
      v-if="!customVisible"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      :catchedUISyncSignals="catchedUISyncSignals"
      @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />

    <CustomDiagramEditorContainer
      v-if="customVisible"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      :catchedUISyncSignals="catchedUISyncSignals"
      @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Emit } from 'nuxt-property-decorator'
import Rdra20DiagramEditorContainer from '@/components/diagrams/editor/rdra20/Rdra20DiagramEditorContainer.vue'
import CustomDiagramEditorContainer from '@/components/diagrams/editor/custom/CustomDiagramEditorContainer.vue'
import UISyncSignal from '@/components/diagrams/editor/template/uisync/UISyncSignal'
import StorageRepository from '@/domain/storage/StorageRepository'
import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'
import CustomDiagramType from '@/domain/diagram/custom/CustomDiagramType'

@Component({
  components: {
    Rdra20DiagramEditorContainer,
    CustomDiagramEditorContainer,
  },
})
export default class DiagramEditorContainer extends Vue {
  @Inject()
  readonly repository!: StorageRepository

  @Prop({ required: true })
  readonly diagramId!: number

  @Prop({ required: true })
  allResources?: Resource[]

  @Prop({ required: true })
  lastPropertiesUpdatedDiagramId?: number

  @Prop({ required: true })
  readonly catchedUISyncSignals!: UISyncSignal[]

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onUpdateResoucesOnContainer')
  onUpdateResoucesOnContainer(): void {}

  @Emit('onUpdatedDiagramProperties')
  onUpdatedDiagramProperties(_diagram: Diagram): void {}

  diagram?: Diagram
  customVisible = false

  public created(): void {
    this.diagram = this.diagramOf(this.diagramId)

    const type = this.diagram?.type
    if (!type) return
    this.customVisible = CustomDiagramType.as(type)
  }

  diagramOf(diagramId: number): Diagram | undefined {
    const product = this.repository.getCurrentProduct()
    if (!product) return undefined
    return product.diagrams.of(diagramId)
  }
}
</script>

<style></style>
