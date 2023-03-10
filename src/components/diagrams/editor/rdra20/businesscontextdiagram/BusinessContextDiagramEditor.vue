<template>
  <DiagramEditor
    :diagram="diagram"
    :allResources="allResources"
    :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
    :removedRelationIdsForNotify="removedRelationIdsForNotify"
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
import UISyncSignal from '@/components/diagrams/editor/template/uisync/UISyncSignal'

import EventAnalyzer from '@/components/diagrams/editor/template/event/EventAnalyzer'
import GenericConnectPortsEvents from '@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents'
import GemerocDeleteShapeEvents from '@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents'
import GenericMoveShapeEvents from '@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents'
import GenericResizeShapeEvents from '@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents'

import IconGenerator from '@/components/diagrams/icon/IconGenerator'
import CompanyIconGenerator from '@/components/diagrams/editor/template/icon/CompanyIconGenerator'
import RoomIconGenerator from '@/components/diagrams/editor/template/icon/RoomIconGenerator'
import BusinessIconGenerator from '@/components/diagrams/editor/template/icon/BusinessIconGenerator'

import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class InfomationModelEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagram!: Diagram

  @Prop({ required: true })
  readonly allResources!: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  @Prop({ required: true })
  readonly removedRelationIdsForNotify!: UISyncSignal[]

  // This class fields;

  readonly eventAnalyzer = new EventAnalyzer([
    new GemerocDeleteShapeEvents(),
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents(),
  ])

  readonly iconGenerators: IconGenerator<Resource>[] = [
    new BusinessIconGenerator(),
    new CompanyIconGenerator(),
    new RoomIconGenerator(),
  ]

  // Emits

  @Emit('onUpdateResources')
  onUpdateResources(): void {}

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit("onRenamedResource")
  onRenamedResource(_src: Resource, _dest: Resource): void {}
}
</script>

<style></style>
