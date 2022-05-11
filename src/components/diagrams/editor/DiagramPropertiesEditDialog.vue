<template>
  <PropertiesSettingDialog
    :id="diagramId"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    :iconKey="iconKey"
    width="400"
    @onClose="onClose"
    @onClickOk="onClickUpdateExecute"
    @onShow="onShow"
  >
    <template #inputPart>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              label="名前"
              counter
              autofocus
              :rules="[validateName]"
              :maxlength="nameMaxLength"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="width"
              label="横幅(px)"
              type="number"
              :rules="[validateWidith]"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="height"
              label="高さ(px)"
              type="number"
              :rules="[validateHeight]"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </PropertiesSettingDialog>
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
import PropertiesSettingDialog from "@/components/PropertiesSettingDialog.vue";
import StorageRepository from "@/domain/storage/StorageRepository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";

@Component({
  components: { PropertiesSettingDialog }
})
export default class DiagramPropertiesEditDialog extends Vue {
  @Prop({ required: true })
  private readonly diagramId!: number;

  @Emit("onUpdatedDiagramProperties")
  private onUpdatedDiagramProperties(_diagram: Diagram): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Watch("diagramId")
  private onChangeDiagramId(): void {
    if (!Number.isInteger(this.diagramId)) return;
    const id = Number(this.diagramId);
    if (id > 0) this.onShow();
  }

  @Inject()
  private repository?: StorageRepository;

  private consent = false;
  private subTitle = "";
  private title = "";
  private iconKey = "";
  private old!: Diagram;

  private name = "";
  private width = "";
  private height = "";

  private onShow(): void {
    this.consent = false;
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    if (!diagram) return;
    this.old = diagram;
    this.title = `${diagram.name} の設定`;
    this.subTitle = diagram.type.name;
    this.iconKey = diagram.type.iconKey;
    this.showProperties(diagram);
  }

  private showProperties(diagram: Diagram): void {
    this.name = diagram.name;
    this.width = diagram.width.toString();
    this.height = diagram.height.toString();
  }

  private changed(): boolean {
    const old = this.old!;
    return (
      old.name !== this.name ||
      old.width !== this.getWidth() ||
      old.height !== this.getHeight()
    );
  }

  private get nameMaxLength(): number {
    return Diagram.NAME_MAX_LENGTH;
  }

  private getWidth(): number {
    return Number(this.width);
  }

  private getHeight(): number {
    return Number(this.height);
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

  private validateSize(value: string, max: number): string | boolean {
    this.consent = false;
    if (!value) return "入力してください。";
    if (!Number.isInteger(Number(value))) return "数値を入力して下さい。";
    const widthNumber = Number(value);
    const min = 1;
    if (widthNumber < min) return `${min} 以上で入力してください。`;
    if (widthNumber > max) return `${max} 以下で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private onClickUpdateExecute(): void {
    if (!this.consent) return;
    const diagram = this.registerDiagramProperties();
    if (!diagram) return;
    this.onUpdatedDiagramProperties(diagram);
    this.onClose();
  }

  private registerDiagramProperties(): Diagram | null {
    const product = this.repository?.getCurrentProduct();
    const diagram = product?.diagrams.of(this.diagramId);
    if (!product || !diagram) return null;

    const modified = diagram
      .with(this.name)
      .resize(this.getWidth(), this.getHeight());
    if (!this.logicalValidation(modified, product)) return null;

    const registerd = modified.fixStickOuts();
    const modifiedProduct = product.meageDiagramByIdOf(registerd);
    this.repository?.registerCurrentProduct(modifiedProduct);

    return registerd;
  }

  private logicalValidation(diagram: Diagram, product: Product): boolean {
    if (product.diagrams.existsSameOf(diagram)) {
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
