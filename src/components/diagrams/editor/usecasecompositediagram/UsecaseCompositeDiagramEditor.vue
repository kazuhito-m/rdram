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
import UseCaseForStateModelIconGenerator from "@/components/diagrams/editor/template/icon/UseCaseForStateModelIconGenerator";

import Resource from "@/domain/resource/Resource";

@Component({
  components: {
    DiagramEditor
  }
})
export default class UsecaseCompositeDiagramEditor extends Vue {
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
    new UseCaseForStateModelIconGenerator(),
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
