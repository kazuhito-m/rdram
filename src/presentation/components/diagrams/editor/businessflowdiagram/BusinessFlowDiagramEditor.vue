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
import ActorIconGenerator from "@/presentation/components/diagrams/editor/template/icon/ActorIconGenerator";
import UsageSceneIconGenerator from "@/presentation/components/diagrams/editor/template/icon/UsageSceneIconGenerator";
import ScenarioIconGenerator from "@/presentation/components/diagrams/editor/template/icon/ScenarioIconGenerator";
import UseCaseIconGenerator from "@/presentation/components/diagrams/editor/template/icon/UseCaseIconGenerator";

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
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents()
  ]);

  private readonly iconGenerators: IconGenerator<Resource>[] = [
    new ActorIconGenerator(),
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
