<template>
  <DiagramEditor
    :diagram="diagram"
    :allResources="allResources"
    :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
    :catchedUISyncSignals="catchedUISyncSignals"
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
import StateIconGenerator from '../../template/icon/StateIconGenerator'
import StateGroupIconGenerator from '../../template/icon/StateGroupIconGenerator'
import DiagramEditor from '@/components/diagrams/editor/template/DiagramEditor.vue'

import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'

import EventAnalyzer from '@/components/diagrams/editor/template/event/EventAnalyzer'
import GenericConnectPortsEvents from '@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents'
import GemerocDeleteShapeEvents from '@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents'
import GenericMoveShapeEvents from '@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents'
import GenericResizeShapeEvents from '@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents'

import IconGenerator from '@/components/diagrams/icon/IconGenerator'
import CompanyIconGenerator from '@/components/diagrams/editor/template/icon/CompanyIconGenerator'
import RoomIconGenerator from '@/components/diagrams/editor/template/icon/RoomIconGenerator'
import BusinessIconGenerator from '@/components/diagrams/editor/template/icon/BusinessIconGenerator'
import BusinessUseCaseIconGenerator from '@/components/diagrams/editor/template/icon/BusinessUseCaseIconGenerator'
import ConditionIconGenerator from '@/components/diagrams/editor/template/icon/ConditionIconGenerator'
import InformationGroupIconGenerator from '@/components/diagrams/editor/template/icon/InformationGroupIconGenerator'
import PurposeIconGenerator from '@/components/diagrams/editor/template/icon/PurposeIconGenerator'
import RequestIconGenerator from '@/components/diagrams/editor/template/icon/RequestIconGenerator'
import RequirementIconGenerator from '@/components/diagrams/editor/template/icon/RequirementIconGenerator'
import ScenarioIconGenerator from '@/components/diagrams/editor/template/icon/ScenarioIconGenerator'
import SystemForSystemContextIconGenerator from '@/components/diagrams/editor/template/icon/SystemForSystemContextIconGenerator'
import TableTypeConditionIconGenerator from '@/components/diagrams/editor/template/icon/TableTypeConditionIconGenerator'
import UseCaseIconGenerator from '@/components/diagrams/editor/template/icon/UseCaseIconGenerator'
import VariationIconGenerator from '@/components/diagrams/editor/template/icon/VariationIconGenerator'

import UISyncSignal from '@/components/diagrams/editor/template/uisync/UISyncSignal'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class FreestyleDiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagram!: Diagram

  @Prop({ required: true })
  readonly allResources!: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  @Prop({ required: true })
  readonly catchedUISyncSignals!: UISyncSignal[]

  // This class fields;

  readonly eventAnalyzer = new EventAnalyzer([
    new GemerocDeleteShapeEvents(),
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents(),
  ])

  readonly iconGenerators: IconGenerator<Resource>[] = [
    new SystemForSystemContextIconGenerator(),
    new BusinessIconGenerator(),
    new CompanyIconGenerator(),
    new RoomIconGenerator(),
    new BusinessUseCaseIconGenerator(),
    new UseCaseIconGenerator(),
    new ConditionIconGenerator(),
    new TableTypeConditionIconGenerator(),
    new VariationIconGenerator(),
    new InformationGroupIconGenerator(),
    new PurposeIconGenerator(),
    new RequestIconGenerator(),
    new RequirementIconGenerator(),
    new ScenarioIconGenerator(),
    new StateIconGenerator(true),
    new StateGroupIconGenerator(true),
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
