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
import ProductImportService from "@/application/service/product/import/ProductImportService";

@Component
export default class ProductImportDialog extends Vue {
  @Inject()
  private readonly productImportService?: ProductImportService;

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
    const service = this.productImportService as ProductImportService;
    this.clearProgressArea();
    const result = service.validateOf(file);
    return result.length === 0 ? true : result;
  }

  private async onClickImportProduct(): Promise<void> {
    this.changeEnableProgressArea(true);
    await this.doImport();
    this.changeEnableProgressArea(false);
  }

  private changeEnableProgressArea(enable: boolean) {
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

  private async doImport(): Promise<void> {
    const service = this.productImportService as ProductImportService;
    await service.importOf(
      this.selectedFile as File,
      this.notifyProgress,
      this.confirmeProductName
    );
  }

  private confirmeProductName(originalProductName: string) : string {
      let message = "既に同一の名前のプロダクトが存在します。名前を変えてインポートしますか？\n\n";
      message+="名前を変更する場合は入力して下さい。\n";
      message+="変更がなければ既存のプロダクトを上書きして保存します。"

      const newName = prompt(message , originalProductName);

      if (newName === null) return "";
      return newName;
  }

  private notifyProgress(event: ImportProgressEvent): void {
    this.progressPercentage = event.percentage;

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