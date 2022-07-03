<template>
  <DiagramEditor
    :diagram="diagram"
    :allResources="allResources"
    :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
    :eventAnalyzer="eventAnalyzer"
    :iconGenerators="iconGenerators"
    @onUpdateResources="onUpdateResources"
    @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
    @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    @onRenamedResource="onRenamedResource"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from 'nuxt-property-decorator'
import DiagramEditor from '@/components/diagrams/editor/template/DiagramEditor.vue'

import EventAnalyzer from '@/components/diagrams/editor/template/event/EventAnalyzer'
import BusinessFlowConnectPortsEvents from '@/components/diagrams/editor/rdra20/businessflowdiagram/event/BusinessFlowConnectPortsEvents'
import GemerocDeleteShapeEvents from '@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents'
import GenericMoveShapeEvents from '@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents'
import GenericResizeShapeEvents from '@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents'

import IconGenerator from '@/components/diagrams/icon/IconGenerator'
import ActorAndLaneIconGenerator from '@/components/diagrams/editor/template/icon/ActorAndLaneIconGenerator'
import ActivityForBusinessFlowIconGenerator from '@/components/diagrams/editor/template/icon/ActivityForBusinessFlowIconGenerator'
import UseCaseIconGenerator from '@/components/diagrams/editor/template/icon/UseCaseIconGenerator'
import StartOrEndPointIconGenerator from '@/components/diagrams/editor/template/icon/StartOrEndPointIconGenerator'

import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class BusinessFlowDiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagram!: Diagram

  @Prop({ required: true })
  readonly allResources!: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  // This class fields;

  readonly eventAnalyzer = new EventAnalyzer([
    new GemerocDeleteShapeEvents(),
    new BusinessFlowConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents(),
  ])

  readonly iconGenerators: IconGenerator<Resource>[] = [
    new ActorAndLaneIconGenerator(),
    new ActivityForBusinessFlowIconGenerator(),
    new UseCaseIconGenerator(),
    new StartOrEndPointIconGenerator(),
  ]

  // Emits

  @Emit('onUpdateResources')
  onUpdateResources(): void {}

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}
}
</script>

<style></style>
