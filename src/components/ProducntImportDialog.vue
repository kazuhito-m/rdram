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
        <v-file-input
          v-model="selectedFile"
          :rules="[preValidate]"
          @update:error="onChangeErrorState"
          accept="application/json"
          label="RDRAM product exported file (json)"
          truncate-length="50"
        >
        </v-file-input>
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
          :disabled="notImportable()"
          @click="onClickImportProduct"
        >
          実行
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";

@Component
export default class ProducntImportDialog extends Vue {
  @Prop()
  private visible?: boolean;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private onOpen(): string {
    if (!this.visible) return "";
    return "";
  }

  private preValidate(file: File): string | boolean {
    const MAX_MB = 100 * 1024 * 1024;
    const NAME_PATTERN = /^rdram-product-.*\.json$/;

    if (!file) return true;
    if (!NAME_PATTERN.test(file.name)) return "RDRAMシステムからエクスポートされたものではないファイル名です。";
    if (file.size > MAX_MB) return "ファイルが大きすぎます。";
    if (!this.isJsonFile(file)) return "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。"

    return true;
  }

  private async isJsonFile(file: File) {
    try {
      const text = await this.readFile(file);
      if (!text) return false;
      JSON.parse(text as string);
      return true;
    } catch (e) {
      return false;
    }
  }

  private readFile(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = res => {
        if  (!res.target) return; 
        resolve(res.target.result);
      };
      reader.onerror = err => reject(err);
      reader.readAsText(file);
    });
  }

  private onClickImportProduct(): void {
    alert("TODO インポート実行するところ。");
  }

  private onChangeErrorState(error: boolean): void {
    this.preValidateError = error;
  }

  private notImportable(): boolean {
    return this.preValidateError || !this.selectedFile;
  }

  @Emit("onClose")
  public onClose(): void {
    this.selectedFile = null;
    this.preValidateError = false;
  }
}
</script>

<style scoped>
</style>