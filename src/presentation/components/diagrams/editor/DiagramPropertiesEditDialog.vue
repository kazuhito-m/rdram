<template>
  <v-dialog persistent max-width="500" v-model="diagramId">
    <v-card>
      <v-card-title class="headline">「{{ title }}」図の設定</v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClose">キャンセル</v-btn>
        <v-btn text :disabled="!consent" color="green darken-1" @click="onClickLUpdateExecute">更新</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Inject,
  Emit,
  Watch
} from "nuxt-property-decorator";
import Uuid from "@/domain/world/Uuid";
import StrageRepository from "@/domain/strage/StrageRepository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";

@Component
export default class DiagramPropertiesEditDialog extends Vue {
  @Prop({ required: true })
  private readonly diagramId!: number;

  @Emit("onUpdatedDiagramProperties")
  private onUpdatedDiagramProperties(diagram: Diagram): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Watch("diagramId")
  private onChangeDiagramId(): void {
    if (this.diagramId && Number.isInteger(this.diagramId)) this.onShow();
  }

  @Inject()
  private repository?: StrageRepository;
  private consent = false;

  private title = "";
  private name = "";

  private onShow(): void {
    this.consent = false;
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    if (!diagram) return;
    this.showProperties(diagram);
  }

  private loadDiagram(): Diagram | null {
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    return diagram ? diagram : null;
  }

  private showProperties(diagram: Diagram): void {
    this.title = diagram.name;
    this.name = diagram.name;
  }

  private onClickLUpdateExecute(): void {
    const diagram = this.registerDiagramProperties();
    if (!diagram) return;
    this.onUpdatedDiagramProperties(diagram);
    this.onClose();
  }

  private registerDiagramProperties(): Diagram | null {
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    if (!product || !diagram) return null;

    const modified = diagram.with(this.title);
    if (!this.logicalValidation(modified, product)) return null;

    const modifiedProduct = product.replaceOf(modified);
    this.repository?.registerCurrentProduct(modifiedProduct);
    return diagram;
  }

  private logicalValidation(diagram: Diagram, product: Product): boolean {
    if (product.diagrams.eixistsSomeName(diagram)) {
      alert("既に重複した名前の図が在ります。");
      return false;
    }
    return true;
  }
}
</script>

<style scoped>
</style>
