<template>
  <div>
    <p>これが表示サれていれば、大成功です！</p>
    <p>id:{{ diagram.id }}</p>
    <p>name:{{ diagram.name }}</p>
    <p>type:{{ typeName() }}</p>
    <p>作成時刻:{{ createDateTime }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "nuxt-property-decorator";
import Repository from "@/infrastructure/Repository";
import Diagram from "@/domain/diagram/Diagram";
import DiagramType from "@/domain/diagram/DiagramType";

@Component
export default class DiagramEditorContainer extends Vue {
  @Inject()
  private readonly repository!: Repository;

  @Prop({ required: true })
  private readonly diagramId!: number;

  private createDateTime: Date = new Date();
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

  public typeName(): string{
    if (!this.diagram) return '';
    const type = DiagramType.ofId(this.diagram.typeId);
    if (!type) return '';
    return type.name;
  }
}
</script>

<style>
</style>
