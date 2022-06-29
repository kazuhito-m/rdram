<template>
  <DiagramEditor
    :diagramId="diagramId"
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
import GenericConnectPortsEvents from '@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents'
import GemerocDeleteShapeEvents from '@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents'
import GenericMoveShapeEvents from '@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents'
import GenericResizeShapeEvents from '@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents'

import IconGenerator from '@/components/diagrams/icon/IconGenerator'
import CompanyIconGenerator from '@/components/diagrams/editor/template/icon/CompanyIconGenerator'
import ActorIconGenerator from '@/components/diagrams/editor/template/icon/ActorIconGenerator'
import RoomIconGenerator from '@/components/diagrams/editor/template/icon/RoomIconGenerator'
import BusinessIconGenerator from '@/components/diagrams/editor/template/icon/BusinessIconGenerator'
import GoodsIconGenerator from '@/components/diagrams/editor/template/icon/GoodsIconGenerator'
import ServiceIconGenerator from '@/components/diagrams/editor/template/icon/ServiceIconGenerator'
import FacilityIconGenerator from '@/components/diagrams/editor/template/icon/FacilityIconGenerator'
import ContractIconGenerator from '@/components/diagrams/editor/template/icon/ContractIconGenerator'
import InHouseSystemIconGenerator from '@/components/diagrams/editor/template/icon/InHouseSystemIconGenerator'
import OutsideSystemIconGenerator from '@/components/diagrams/editor/template/icon/OutsideSystemIconGenerator'
import InformationIconGenerator from '@/components/diagrams/editor/template/icon/InformationIconGenerator'

import Resource from '@/domain/resource/Resource'

@Component({
  components: {
    DiagramEditor,
  },
})
export default class InfomationModelEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagramId!: number

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
    new BusinessIconGenerator(),
    new CompanyIconGenerator(),
    new ActorIconGenerator(),
    new RoomIconGenerator(),
    new GoodsIconGenerator(),
    new FacilityIconGenerator(),
    new ServiceIconGenerator(),
    new ContractIconGenerator(),
    new InHouseSystemIconGenerator(),
    new OutsideSystemIconGenerator(),
    new InformationIconGenerator(),
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
