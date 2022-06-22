<template>
  <DiagramEditor
    :diagramId="diagramId"
    :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
    :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
    :eventAnalyzer="eventAnalyzer"
    :iconGenerators="iconGenerators"
    @onUpdateResources="onUpdateResources"
    @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
    @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from 'nuxt-property-decorator'
import DiagramEditor from '@/components/diagrams/editor/template/DiagramEditor.vue'

import EventAnalyzer from '@/components/diagrams/editor/template/event/EventAnalyzer'
import GenericConnectPortsEvents from '@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents'
import GemerocDeleteShapeEvents from '@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents'
import GenericMoveShapeEvents from '@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents'
import GenericResizeShapeEvents from '@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents'

import IconGenerator from '@/components/diagrams/icon/IconGenerator'

import SystemForSystemContextIconGenerator from '@/components/diagrams/editor/template/icon/SystemForSystemContextIconGenerator'
import ActorIconGenerator from '@/components/diagrams/editor/template/icon/ActorIconGenerator'
import OutsideSystemIconGenerator from '@/components/diagrams/editor/template/icon/OutsideSystemIconGenerator'
import PurposeIconGenerator from '@/components/diagrams/editor/template/icon/PurposeIconGenerator'
import InHouseSystemIconGenerator from '@/components/diagrams/editor/template/icon/InHouseSystemIconGenerator'

import Resource from '@/domain/resource/Resource'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class SystemContextDiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagramId!: number

  @Prop({ required: true })
  readonly allResourcesOnCurrentProduct!: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  // This class fields;

  readonly eventAnalyzer = new EventAnalyzer([
    new GemerocDeleteShapeEvents(),
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents(),
  ])

  readonly iconGenerators: IconGenerator<Resource>[] = [
    new SystemForSystemContextIconGenerator(),
    new PurposeIconGenerator(),
    new ActorIconGenerator(),
    new OutsideSystemIconGenerator(),
    new InHouseSystemIconGenerator(),
  ]

  // Emits

  @Emit('onUpdateResources')
  onUpdateResources(): void {}

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}
}
</script>

<style></style>
