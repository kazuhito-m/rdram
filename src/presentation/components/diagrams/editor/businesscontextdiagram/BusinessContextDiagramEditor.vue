<template>
  <DiagramEditor
    :diagramId="diagramId"
    :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
    :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
    :eventAnalyzer="eventAnalyzer"
    :iconGenerators="iconGenerators"
    @onUpdateResources="onUpdateResources"
    @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";
import DiagramEditor from "@/presentation/components/diagrams/editor/template/DiagramEditor.vue";

import EventAnalyzer from "@/presentation/components/diagrams/editor/template/event/EventAnalyzer";
import GenericConnectPortsEvents from "@/presentation/components/diagrams/editor/template/event/events/GenericConnectPortsEvents";
import GemerocDeleteShapeEvents from "@/presentation/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents";
import GenericMoveShapeEvents from "@/presentation/components/diagrams/editor/template/event/events/GenericMoveShapeEvents";
import GenericResizeShapeEvents from "@/presentation/components/diagrams/editor/template/event/events/GenericResizeShapeEvents";

import IconGenerator from "@/presentation/components/diagrams/icon/IconGenerator";
import CompanyIconGenerator from "@/presentation/components/diagrams/editor/template/icon/CompanyIconGenerator";
import ActorIconGenerator from "@/presentation/components/diagrams/editor/template/icon/ActorIconGenerator";
import RoomIconGenerator from "@/presentation/components/diagrams/editor/template/icon/RoomIconGenerator";
import BusinessIconGenerator from "@/presentation/components/diagrams/editor/template/icon/BusinessIconGenerator";
import GoodsIconGenerator from "@/presentation/components/diagrams/editor/template/icon/GoodsIconGenerator";
import ServiceIconGenerator from "@/presentation/components/diagrams/editor/template/icon/ServiceIconGenerator";
import FacilityIconGenerator from "@/presentation/components/diagrams/editor/template/icon/FacilityIconGenerator";
import ContractIconGenerator from "@/presentation/components/diagrams/editor/template/icon/ContractIconGenerator";
import InHouseSystemIconGenerator from "@/presentation/components/diagrams/editor/template/icon/InHouseSystemIconGenerator";
import OutsideSystemIconGenerator from "@/presentation/components/diagrams/editor/template/icon/OutsideSystemIconGenerator";
import InformationIconGenerator from "@/presentation/components/diagrams/editor/template/icon/InformationIconGenerator";

import Resource from "@/domain/resource/Resource";

@Component({
  components: {
    DiagramEditor
  }
})
export default class InfomationModelEditor extends Vue {
  // Props

  @Prop({ required: true })
  private readonly diagramId!: number;
  @Prop({ required: true })
  private readonly allResourcesOnCurrentProduct!: Resource[];
  @Prop({ required: true })
  private readonly lastPropertiesUpdatedDiagramId?: number;

  // This class fields;

  private readonly eventAnalyzer = new EventAnalyzer([
    new GemerocDeleteShapeEvents(),
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents()
  ]);

  private readonly iconGenerators: IconGenerator<Resource>[] = [
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
  ];

  // Emits

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(diagramId: number): void {}
}
</script>

<style>
</style>
