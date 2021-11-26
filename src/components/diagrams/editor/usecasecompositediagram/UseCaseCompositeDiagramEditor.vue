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
import DiagramEditor from "@/components/diagrams/editor/template/DiagramEditor.vue";

import EventAnalyzer from "@/components/diagrams/editor/template/event/EventAnalyzer";
import GenericConnectPortsEvents from "@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents";
import GenericDeleteShapeEvents from "@/components/diagrams/editor/template/event/events/GenericDeleteShapeEvents";
import GenericMoveShapeEvents from "@/components/diagrams/editor/template/event/events/GenericMoveShapeEvents";
import GenericResizeShapeEvents from "@/components/diagrams/editor/template/event/events/GenericResizeShapeEvents";

import IconGenerator from "@/components/diagrams/icon/IconGenerator";
import ActorIconGenerator from "@/components/diagrams/editor/template/icon/ActorIconGenerator";
import ActivityIconGenerator from "@/components/diagrams/editor/template/icon/ActivityIconGenerator";
import UseCaseIconGenerator from "@/components/diagrams/editor/template/icon/UseCaseIconGenerator";
import InformationIconGenerator from "@/components/diagrams/editor/template/icon/InformationIconGenerator";
import ScreenIconGenerator from "@/components/diagrams/editor/template/icon/ScreenIconGenerator";
import EventIconGenerator from "@/components/diagrams/editor/template/icon/EventIconGenerator";
import VariationIconGenerator from "@/components/diagrams/editor/template/icon/VariationIconGenerator";
import ConditionIconGenerator from "@/components/diagrams/editor/template/icon/ConditionIconGenerator";
import TableTypeConditionIconGenerator from "@/components/diagrams/editor/template/icon/TableTypeConditionIconGenerator";

EventIconGenerator

import Resource from "@/domain/resource/Resource";

@Component({
  components: {
    DiagramEditor
  }
})
export default class UseCaseCompositeDiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  private readonly diagramId!: number;
  @Prop({ required: true })
  private readonly allResourcesOnCurrentProduct!: Resource[];
  @Prop({ required: true })
  private readonly lastPropertiesUpdatedDiagramId?: number;

  // This class fields;

  private readonly eventAnalyzer = new EventAnalyzer([
    new GenericDeleteShapeEvents(),
    new GenericConnectPortsEvents(),
    new GenericMoveShapeEvents(),
    new GenericResizeShapeEvents()
  ]);

  private readonly iconGenerators: IconGenerator<Resource>[] = [
    new ActorIconGenerator(),
    new ActivityIconGenerator(),
    new UseCaseIconGenerator(),
    new InformationIconGenerator(),
    new ScreenIconGenerator(),
    new EventIconGenerator(),
    new VariationIconGenerator(),
    new ConditionIconGenerator(),
    new TableTypeConditionIconGenerator()
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
