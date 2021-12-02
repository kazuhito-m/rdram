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
          :disabled="progressEnable"
          :rules="[preValidate]"
          @update:error="onChangeErrorState"
          accept="application/json"
          label="RDRAM product exported file (json)"
          truncate-length="50"
        >
        </v-file-input>
      </v-card-actions>

      <v-card-actions>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-progress-linear 
                v-model="progressPercentage"
                value="15"
                :disabled="!progressEnable"
              >
              </v-progress-linear>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                v-model="progressLogs"
                :disabled="!progressEnable"
                @input="onChangeProgressLogs"
                ref="progressLogsTextarea"
                label="インポート状況"
                readonly
                outlined
                no-resize
              ></v-textarea>        
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text
          color="normal"
          :disabled="progressEnable"
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
import { Component, Prop, Vue, Emit, Inject, Watch } from "vue-property-decorator";
import ImportProgressEvent from "@/domain/product/import/ImportProgressEvent";
import Product from "@/domain/product/Product";
import StrageRepository from "@/domain/strage/StrageRepository";
import LocalStrage from "@/domain/strage/LocalStrage";
import StrageDatasource from "~/infrastructure/strage/StrageDatasource";

@Component
export default class ProducntImportDialog extends Vue {
  @Inject()
  private readonly repository?: StrageRepository;

  @Prop()
  private visible?: boolean;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private progressEnable: boolean = false;
  private progressPercentage: number = 0;
  private progressLogs: string = " ";

  @Watch('progressLogs')
  private onChangeProgressLogs() {
    const ta =  this.progressLogsTextarea;
    ta.value = this.progressLogs;  // FIXME ライフサイクルを無視してHTMLElementに二重で設定してるのでやめたい。
    ta.scrollTop = ta.scrollHeight;
  }

  private get progressLogsTextarea(): HTMLTextAreaElement {
    const vuePart = this.$refs.progressLogsTextarea as Vue;
    return vuePart.$el.querySelector('textarea') as HTMLTextAreaElement;
  }

  private onOpen(): string {
    if (!this.visible) return "";
    return "";
  }

  private preValidate(file: File): string | boolean {
    this.clearProgressArea();
    const result = this.validateOf(file);
    return result.length === 0 ? true : result;
  }

  private validateOf(file: File): string {
    const MAX_MB = 100 * 1024 * 1024;
    const NAME_PATTERN = /^rdram-product-.*\.json$/;

    if (!file) return "";
    if (!NAME_PATTERN.test(file.name)) return "RDRAMシステムからエクスポートされたものではないファイル名です。";
    if (file.size > MAX_MB) return "ファイルが大きすぎます。";
    if (!this.isJsonFile(file)) return "ファイル形式がRDRAMシステムのプロダクトエクスポートファイルではありません。";

    return "";
  }

  private async isJsonFile(file: File) {
    try {
      const json = await this.parseJson<Product>(file);
      if (!json) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  private async parseJson<T>(file: File): Promise<T | null> {
      const text = await this.readFile(file);
      if (!text) return null;
      return JSON.parse(text as string) as T;
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

  private async onClickImportProduct(): Promise<void> {
    this.changeEnableProgressArea(true);
    await this.doImport();
    this.changeEnableProgressArea(false);
  }

  private changeEnableProgressArea(enable: boolean) {
    console.log("changeEnableProgressArea()が呼ばれました。" + enable);
    if (enable) this.clearProgressArea();
    this.progressEnable = enable;
  }

  private clearProgressArea(): void {
    this.progressPercentage = 0;
    this.progressLogs = " ";    
  }

  private onChangeErrorState(error: boolean): void {
    this.preValidateError = error;
  }

  private notImportable(): boolean {
    return this.preValidateError || !this.selectedFile || this.progressEnable;
  }

  @Emit("onClose")
  public onClose(): void {
    this.selectedFile = null;
    this.preValidateError = false;
    this.clearProgressArea();
  }

  private static readonly PROGRESS_END_STEP = 6;

  private async doImport(): Promise<void> {
    const repository = this.repository as StrageRepository;
    const file = this.selectedFile as File;

    this.stepUpProgress(`インポートを開始します。ファイル:${file.name}`);

    this.stepUpProgress("ファイルの読み込み。");

    const result = this.validateOf(file);
    if (result.length > 0) {
      this.stepUpProgress(result);
      this.errorEndProgress(`インポートが失敗しました。ファイル:${file.name}`);
      return;
    }

    const jsonText = await this.readFile(file) as string;
    let product = repository.createProductByJsonOf(jsonText);

    this.stepUpProgress("ファイル内容・形式のチェック。");

    if (product.name.trim().length === 0) {
      this.stepUpProgress("形式が不正です。プロダクト名が設定されていません。");
      this.errorEndProgress(`インポートが失敗しました。ファイル:${file.name}`);
    }

    const strage = repository.get() as LocalStrage;

    if (strage.existsProductNameOf(product.name)) {
      let message = "既に同一の名前のプロダクトが存在します。名前を変えてインポートしますか？\n\n";
      message+="名前を変更する場合は入力して下さい。\n";
      message+="変更がなければ既存のプロダクトを上書きして保存します。"
      const newName = prompt(message , product.name);

      if (newName === null) {
        this.errorEndProgress(`インポートがキャンセルされました。ファイル:${file.name}`);
        return;
      }

      product = product.renameOf(newName.trim());
    }

    this.stepUpProgress("プロダクトの追加・置き換え。");

    const updatedStrage = strage.mergeByProductName(product);

    this.stepUpProgress("LocalStrageへの保存。");

    repository.register(updatedStrage);

    this.stepUpProgress(`インポートが成功しました。\n  ファイル: "${file.name}"\n  プロダクト名: "${product.name}"`);
}

  private stepUpProgress(message: string) {
    const percentage = this.progressPercentage + 100 / ProducntImportDialog.PROGRESS_END_STEP;
    const event = new ImportProgressEvent(percentage, message);
    this.noticeProgress(event);
  }

  private errorEndProgress(message: string) {
    const event = new ImportProgressEvent(0, message);
    this.noticeProgress(event);
  }

  private noticeProgress(event: ImportProgressEvent): void {
    this.progressPercentage = event.percentage;
    this.$nextTick(() => console.log(`UIが変更されたはず。%:${event.percentage}, message:${event.message}`));

    if (event.message.length === 0) return;
    
    if (this.progressLogs.trim().length === 0) this.progressLogs = "";
    else this.progressLogs+="\n";
    this.progressLogs+=event.message;
    this.$nextTick(() => console.log(`UIが変更されたはず。%:${event.percentage}, message:${event.message}`));
  }
}
</script>

<style scoped>
</style>