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
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";
import DiagramEditor from "@/components/diagrams/editor/template/DiagramEditor.vue";

import EventAnalyzer from "@/components/diagrams/editor/template/event/EventAnalyzer";
import BusinessFlowConnectPortsEvents from "@/components/diagrams/editor/businessflowdiagram/event/BusinessFlowConnectPortsEvents";
import GemerocDeleteShapeEvents from "@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents";
import GenericMoveShapeEvents from "@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents";
import GenericResizeShapeEvents from "@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents";

import IconGenerator from "@/components/diagrams/icon/IconGenerator";
import ActorAndLaneIconGenerator from "@/components/diagrams/editor/template/icon/ActorAndLaneIconGenerator";
import ActivityForBusinessFlowIconGenerator from "@/components/diagrams/editor/template/icon/ActivityForBusinessFlowIconGenerator";
import UseCaseIconGenerator from "@/components/diagrams/editor/template/icon/UseCaseIconGenerator";
import StartOrEndPointIconGenerator from "@/components/diagrams/editor/template/icon/StartOrEndPointIconGenerator";

import Resource from "@/domain/resource/Resource";

@Component({
  components: {
    DiagramEditor
  }
})
export default class BusinessFlowDiagramEditor extends Vue {
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
    new BusinessFlowConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents()
  ]);

  private readonly iconGenerators: IconGenerator<Resource>[] = [
    new ActorAndLaneIconGenerator(),
    new ActivityForBusinessFlowIconGenerator(),
    new UseCaseIconGenerator(),
    new StartOrEndPointIconGenerator()
  ];

  // Emits

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit("onOpenDiagramOfResourceRelate")
  private onOpenDiagramOfResourceRelate(_resourceId: number): void {}
}
</script>

<style>
</style>
