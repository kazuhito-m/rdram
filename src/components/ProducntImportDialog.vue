<template lang="html">
  <v-dialog persistent max-width="600"
    v-model="visible"
    :data-opend="onOpen()"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-import</v-icon> プロダクトのインポート
      </v-card-title>
      <v-card-text>インポートする対象のファイルを指定してください。</v-card-text>

      <v-card-actions>
        <v-select
          :items="[]"
          item-text="name"
          label="Product"
          return-object
        >
        </v-select>
        <v-btn text color="primary" @click="onClickAddProduct">追加</v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text
          color="normal"
          @click="onClose"
        >
          キャンセル
        </v-btn>
        <v-btn text
          color="green darken-1"
          @click="onClickImportProduct"
        >
          インポート実行
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";
import MessageBox from "@/presentation/MessageBox";
import StrageRepository from "@/domain/strage/StrageRepository";

@Component
export default class ProducntImportDialog extends Vue {
  @Inject()
  private readonly repository?: StrageRepository;

  @Prop()
  private visible?: boolean;

  private onOpen(): string {
    if (!this.visible) return "";

    const strage = this.repository?.get();
    if (!strage) return "";

    return "";
  }

  private onClickAddProduct() {
    const messageBox = new MessageBox();
    const message = "追加するプロダクトの名前を入力してください。";
  }

  public onClickImportProduct(): void {
    alert("TODO インポート実行するところ。");
  }

  @Emit("onClose")
  public onClose(): void {
  }
}
</script>

<style scoped>
</style>