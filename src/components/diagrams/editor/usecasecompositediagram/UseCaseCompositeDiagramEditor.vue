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
import GenericDeleteShapeEvents from '@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents'
import GenericMoveShapeEvents from '@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents'
import GenericResizeShapeEvents from '@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents'

import IconGenerator from '@/components/diagrams/icon/IconGenerator'
import ActorIconGenerator from '@/components/diagrams/editor/template/icon/ActorIconGenerator'
import ActivityIconGenerator from '@/components/diagrams/editor/template/icon/ActivityIconGenerator'
import UseCaseIconGenerator from '@/components/diagrams/editor/template/icon/UseCaseIconGenerator'
import InformationIconGenerator from '@/components/diagrams/editor/template/icon/InformationIconGenerator'
import ScreenIconGenerator from '@/components/diagrams/editor/template/icon/ScreenIconGenerator'
import EventIconGenerator from '@/components/diagrams/editor/template/icon/EventIconGenerator'
import TimerIconGenerator from '@/components/diagrams/editor/template/icon/TimerIconGenerator'
import VariationIconGenerator from '@/components/diagrams/editor/template/icon/VariationIconGenerator'
import ConditionIconGenerator from '@/components/diagrams/editor/template/icon/ConditionIconGenerator'
import TableTypeConditionIconGenerator from '@/components/diagrams/editor/template/icon/TableTypeConditionIconGenerator'
import OutsideSystemIconGenerator from '@/components/diagrams/editor/template/icon/OutsideSystemIconGenerator'
import InHouseSystemIconGenerator from '@/components/diagrams/editor/template/icon/InHouseSystemIconGenerator'
import SystemIconGenerator from '@/components/diagrams/editor/template/icon/SystemIconGenerator'
import FacilityIconGenerator from '@/components/diagrams/editor/template/icon/FacilityIconGenerator'

import Resource from '@/domain/resource/Resource'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class UseCaseCompositeDiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagramId!: number

  @Prop({ required: true })
  readonly allResourcesOnCurrentProduct!: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  // This class fields;

  readonly eventAnalyzer = new EventAnalyzer([
    new GenericDeleteShapeEvents(),
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents(),
  ])

  readonly iconGenerators: IconGenerator<Resource>[] = [
    new ActorIconGenerator(),
    new ActivityIconGenerator(),
    new UseCaseIconGenerator(),
    new InformationIconGenerator(),
    new ScreenIconGenerator(),
    new EventIconGenerator(),
    new TimerIconGenerator(),
    new VariationIconGenerator(),
    new ConditionIconGenerator(),
    new TableTypeConditionIconGenerator(),
    new OutsideSystemIconGenerator(),
    new InHouseSystemIconGenerator(),
    new SystemIconGenerator(),
    new FacilityIconGenerator(),
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
