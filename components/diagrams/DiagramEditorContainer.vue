<template>
  <div>
    <BusinessContextDiagramEditor :diagram="diagram" v-if="is('ビジネスコンテキスト図')" />
    <StateModelEditor :diagram="diagram" v-if="is('状態モデル')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "nuxt-property-decorator";
import BusinessContextDiagramEditor from "@/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
import StateModelEditor from "@/components/diagrams/editor/statemodel/StateModelEditor.vue";
import Repository from "@/infrastructure/Repository";
import Diagram from "@/domain/diagram/Diagram";
import DiagramType from "@/domain/diagram/DiagramType";

@Component({
  components: {
    BusinessContextDiagramEditor,
    StateModelEditor
  }
})
export default class DiagramEditorContainer extends Vue {
  @Inject()
  private readonly repository!: Repository;

  @Prop({ required: true })
  private readonly diagramId!: number;

  private diagram: Diagram | null = null;

  public created(): void {
    this.diagram = this.diagramOf(this.diagramId);
  }

  private diagramOf(diagramId: number): Diagram | null {
    const product = this.repository.getCurrentProduct();
    if (!product) return null;
    const hitDiagram = product.diagrams
      .find(daigram => daigram.id === this.diagramId);
    return hitDiagram ? hitDiagram : null;
  }

  public is(typeName: string): boolean {
    if (!this.diagram) return false;
    const type = DiagramType.ofId(this.diagram.typeId);
    if (!type) return false;
    return type.name === typeName;
  }
}
</script>

<style>
</style>
