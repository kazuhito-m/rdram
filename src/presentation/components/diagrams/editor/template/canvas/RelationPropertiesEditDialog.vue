<template>
  <PropertiesSettingDialog
    :id="relation"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    iconKey="mdi-vector-line"
    width="490"
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
              v-model="meaning"
              autofocus
              :rules="[validateMeaning]"
              :maxlength="meaningMaxLength"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>線形(軌跡の形状)</p>
            <v-btn-toggle v-model="routerType.id" tile color="deep-purple accent-3" group>
              <v-btn
                v-for="itemRouterType in routerTypes"
                v-bind:key="itemRouterType.id"
                :value="itemRouterType.id"
                @click="onChangeRouterType(itemRouterType)"
              >{{ itemRouterType.name }}</v-btn>
            </v-btn-toggle>
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
import PropertiesSettingDialog from "@/presentation/components/PropertiesSettingDialog.vue";
import StrageRepository from "@/domain/strage/StrageRepository";
import Relation from "@/domain/relation/Relation";
import RouterType from "@/domain/relation/RouterType";

@Component({
  components: { PropertiesSettingDialog }
})
export default class RelationPropertiesEditDialog extends Vue {
  @Prop({ required: true })
  private readonly relation!: Relation | null;
  @Emit("onUpdateRelationProperties")
  private onUpdateRelationProperties(relation: Relation): void {}
  @Emit("onClose")
  private onClose(): void {}

  @Watch("relation")
  private onChangeRelation(): void {
    if (this.relation) this.onShow();
  }

  private consent = false;
  private readonly title = "関連 の設定";
  private readonly subTitle = "関連";
  private readonly routerTypes = RouterType.values();

  private meaning = "";
  private routerType: RouterType = RouterType.DIRECT;

  private onShow(): void {
    if (!this.relation) return;
    this.consent = false;
    this.showProperties(this.relation);
  }

  private showProperties(relation: Relation): void {
    this.meaning = relation.meaning;
    this.routerType = relation.routerType;
  }

  private changed(): boolean {
    if (!this.relation) return false;
    const old = this.relation;
    return (
      old.meaning !== this.meaning || !old.routerType.equals(this.routerType)
    );
  }

  private get meaningMaxLength(): number {
    return Relation.MEANING_MAX_LENGTH;
  }

  private validateMeaning(): string | boolean {
    this.consent = false;
    const meaning = this.meaning;
    const max = this.meaningMaxLength;
    if (meaning.length > max) return `${max}文字以内で入力してください。`;
    this.consent = this.changed();
    return true;
  }

  private onClickUpdateExecute(): void {
    if (!this.relation || !this.consent) return;
    const modified = this.relation.with(this.meaning, this.routerType);
    this.onUpdateRelationProperties(modified);
    this.onClose();
  }

  private onChangeRouterType(routerType: RouterType): void {
    this.routerType = routerType;
    this.consent = this.changed();
  }
}
</script>

<style scoped>
</style>
