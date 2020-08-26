<template>
  <v-dialog persistent max-width="500" :value="diagramId">
    <v-card>
      <v-card-title class="headline">「{{ nameForTitle }}」の設定</v-card-title>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="名前"
                  v-model="name"
                  :rules="[validateName]"
                  counter
                  :maxlength="nameMaxLength"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="横幅(px)"
                  v-model="width"
                  type="number"
                  :rules="[validateWidith]"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="高さ(px)"
                  v-model="height"
                  type="number"
                  :rules="[validateHeight]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClose">キャンセル</v-btn>
        <v-btn text :disabled="!consent" color="primary" @click="onClickLUpdateExecute">更新</v-btn>
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
    if (!Number.isInteger(this.diagramId)) return;
    const id = Number(this.diagramId);
    if (id > 0) this.onShow();
  }

  @Inject()
  private repository?: StrageRepository;
  private consent = false;
  private nameForTitle = "";
  private old!: Diagram;

  private name = "";
  private width = 0;
  private height = 0;

  private onShow(): void {
    this.consent = false;
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    if (!diagram) return;
    this.old = diagram;
    this.nameForTitle = diagram.name;
    this.showProperties(diagram);
  }

  private loadDiagram(): Diagram | null {
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    return diagram ? diagram : null;
  }

  private showProperties(diagram: Diagram): void {
    this.name = diagram.name;
    this.width = diagram.width;
    this.height = diagram.height;
  }

  private changed(): boolean {
    const old = this.old!;
    return (
      old.name !== this.name ||
      old.width !== this.width ||
      old.height !== this.height
    );
  }

  private get nameMaxLength(): number {
    return Diagram.NAME_MAX_LENGTH;
  }

  private validateName(): string | boolean {
    this.consent = false;
    const name = this.name;
    if (name.length === 0) return "入力してください。";
    const max = this.nameMaxLength;
    if (name.length > max) return `${max}文字以内で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private validateWidith(): string | boolean {
    return this.validateSize(this.width, Diagram.MAX_WIDTH);
  }

  private validateHeight(): string | boolean {
    return this.validateSize(this.height, Diagram.MAX_HEIGHT);
  }

  private validateSize(value: number, max: number): string | boolean {
    this.consent = false;
    if (!value) return "入力してください。";
    if (Number.isInteger(value)) return "数値を入力して下さい。";
    const widthNumber = Number(value);
    const min = 1;
    if (widthNumber < min) return `${min} 以上で入力してください。`;
    if (widthNumber > max) return `${max} 以下で入力してください。`;
    this.consent = this.changed();
    return true;
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

    const modified = diagram.with(this.name, this.width, this.height);
    if (!this.logicalValidation(modified, product)) return null;

    const modifiedProduct = product.replaceOf(modified);
    this.repository?.registerCurrentProduct(modifiedProduct);

    return modified;
  }

  private logicalValidation(diagram: Diagram, product: Product): boolean {
    if (product.diagrams.eixistsSomeName(diagram)) {
      alert("既に重複した名前の図が在ります。");
      return false;
    }
    if (diagram.existsStickOutPlacements()) {
      const message =
        "このサイズ変更を実行すると、はみ出すアイコンがあります。\n" +
        "はみ出したアイコンは、実行時に削除されます。\nよろしいですか。";
      if (!window.confirm(message)) return false;
    }

    return true;
  }
}
</script>

<style scoped>
</style>
