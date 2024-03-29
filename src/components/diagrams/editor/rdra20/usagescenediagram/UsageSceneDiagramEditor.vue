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
import ScenarioIconGenerator from '@/components/diagrams/editor/template/icon/ScenarioIconGenerator'
import UseCaseIconGenerator from '@/components/diagrams/editor/template/icon/UseCaseIconGenerator'

import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class UsageSceneDiagramEditor extends Vue {
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
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents(),
  ])

  readonly iconGenerators: IconGenerator<Resource>[] = [
    new ScenarioIconGenerator(),
    new UseCaseIconGenerator(),
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
