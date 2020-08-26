<template>
  <div>
    <BusinessContextDiagramEditor
      v-if="is('ビジネスコンテキスト図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
    />
    <SystemContextDiagramEditor
      v-if="is('システムコンテキスト図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
    />
    <StateModelEditor
      v-if="is('状態モデル')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Emit } from "nuxt-property-decorator";
import BusinessContextDiagramEditor from "@/presentation/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
import SystemContextDiagramEditor from "@/presentation/components/diagrams/editor/systemcontextdiagram/SystemContextDiagramEditor.vue";
import StateModelEditor from "@/presentation/components/diagrams/editor/statemodel/StateModelEditor.vue";
import Diagram from "@/domain/diagram/Diagram";
import DiagramType from "@/domain/diagram/DiagramType";
import Resource from "@/domain/resource/Resource";
import StrageRepository from "@/domain/strage/StrageRepository";

@Component({
  components: {
    BusinessContextDiagramEditor,
    StateModelEditor
  }
})
export default class DiagramEditorContainer extends Vue {
  @Inject()
  private readonly repository!: StrageRepository;

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private allResourcesOnCurrentProduct?: Resource[];

  @Emit("onUpdatedDiagramProperties")
  private onUpdatedDiagramProperties(diagram: Diagram): void {}

  private diagram: Diagram | null = null;

  public created(): void {
    this.diagram = this.diagramOf(this.diagramId);
  }

  private onUpdateResoucesOnEditor(): void {
    console.log(`onUpdateResoucesOnEditor()`);
    this.onUpdateResoucesOnContainer();
  }

  @Emit("onUpdateResoucesOnContainer")
  private onUpdateResoucesOnContainer(): void {}

  private diagramOf(diagramId: number): Diagram | null {
    const product = this.repository.getCurrentProduct();
    if (!product) return null;
    const hitDiagram = product.diagrams.of(diagramId);
    return hitDiagram ? hitDiagram : null;
  }

  public is(typeName: string): boolean {
    if (!this.diagram) return false;
    return this.diagram.type.name === typeName;
  }
}
</script>

<style>
</style>
