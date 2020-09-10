<template>
  <PropertiesSettingDialog
    :id="relationId"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    :iconKey="iconKey"
    width="450"
    @onClose="onClose"
    @onClickOk="onClickUpdateExecute"
    @onShow="onShow"
  >
    <template v-slot:inputPart>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              label="意味(関連に表示されるラベル)"
              counter
              v-model="name"
              :autofocus="!enableContent"
              :rules="[validateName]"
              :maxlength="meaningMaxLength"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>予定地</v-col>
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
import PropertiesSettingDialog from "@/presentation/components/PropertiesSettingDialog.vue";
import StrageRepository from "@/domain/strage/StrageRepository";
import Relation from "@/domain/relation/Relation";
import RouterType from "@/domain/relation/RouterType";

@Component({
  components: { PropertiesSettingDialog }
})
export default class RelationPropertiesEditDialog extends Vue {
  @Prop({ required: true })
  private readonly relationId!: string;
  @Prop({ required: true })
  private readonly diagramId!: number;

  @Emit("onUpdatedRelationProperties")
  private onUpdatedRelationProperties(relation: Relation): void {}

  @Emit("onClose")
  private onClose(): void {}

  @Watch("relationId")
  private onChangeRelationId(): void {
    if (this.relationId.length > 0) this.onShow();
  }

  @Inject()
  private repository?: StrageRepository;
  private consent = false;
  private readonly title = "関連 の設定";
  private readonly subTitle = "関連";
  private old!: Relation;

  private meaning = "";
  private routerType: RouterType = RouterType.DIRECT;

  private onShow(): void {
    this.consent = false;
    const product = this.repository?.getCurrentProduct();
    const diagram = product!.diagrams.of(this.diagramId);
    const relation = diagram!.relationOf(this.relationId);
    if (!product || !diagram || !relation) return;

    this.old = relation;
    this.showProperties(relation);
  }

  private showProperties(relation: Relation): void {
    this.meaning = relation.meaning;
    this.routerType = relation.routerType;
  }

  private changed(): boolean {
    const old = this.old;
    return (
      old.meaning !== this.meaning || !old.routerType.equals(this.routerType)
    );
  }

  private get meaningMaxLength(): number {
    return Relation.MEANING_MAX_LENGTH;
  }

  private validateName(): string | boolean {
    this.consent = false;
    const meaning = this.meaning;
    const max = this.meaningMaxLength;
    if (meaning.length > max) return `${max}文字以内で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private onClickUpdateExecute(): void {
    if (!this.consent) return;
    const relation = this.registerRelationProperties();
    if (relation === null) return;
    this.onUpdatedRelationProperties(relation);
    this.onClose();
  }

  private registerRelationProperties(): Relation | null {
    const product = this.repository?.getCurrentProduct();
    const diagram = product!.diagrams.of(this.diagramId);
    const relation = diagram!.relationOf(this.relationId);
    if (!product || !diagram || !relation) return null;

    const changed: Relation = relation.with(this.meaning, this.routerType);

    const updatedDiagram = diagram.modifyRelationOf(changed);
    const updatedProduct = product.replaceOf(diagram);
    this.repository?.registerCurrentProduct(product);

    return relation;
  }
}
</script>

<style scoped>
</style>
