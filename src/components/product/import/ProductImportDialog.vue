<template lang="html">
  <v-dialog
    v-model="visible"
    :data-opend="onOpen()"
    persistent
    max-width="600"
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
          :label="fileTypeDescription"
          accept="application/json"
          truncate-length="50"
          @update:error="onChangeErrorState"
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
                ref="progressLogsTextarea"
                v-model="progressLogs"
                :disabled="!progressEnable"
                label="インポート状況"
                readonly
                outlined
                no-resize
                @input="onChangeProgressLogs"
              ></v-textarea>        
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="normal"
          :disabled="progressEnable"
          @click="onClose"
        >
          キャンセル
        </v-btn>
        <v-btn
          text
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
import ProductImportMessageConverter from "./ProductImportMessageConverter";
import ProductImportProgressEvent from "@/domain/product/import/ProductImportProgressEvent";
import ProductImportService from "@/application/service/product/import/ProductImportService";
import { ProductImportError } from "@/domain/product/import/ProductImportError";
import RdramProductExportFileName from "@/domain/product/export/RdramProductExportFileName";

@Component
export default class ProductImportDialog extends Vue {
  @Inject()
  private readonly productImportService?: ProductImportService;

  private readonly messageConverter = new ProductImportMessageConverter();

  @Prop()
  private visible?: boolean;

  private opend = false;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private progressEnable: boolean = false;
  private progressPercentage: number = 0;
  private progressLogs: string = " ";
  private readonly importedProductIds: string[] = [];

  private  readonly fileTypeDescription = RdramProductExportFileName.TYPE_DESCRIPTION;

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

  private onOpen(): void {
    if (!this.visible || this.opend) return;
    this.clearAllState();
    this.opend = true;
  }

  private preValidate(file: File): string | boolean {
    const service = this.productImportService as ProductImportService;
    this.clearProgressArea();
    const result = service.validateOf(file);
    if (result === ProductImportError.なし) return true;
    return this.messageConverter.errorMessageOf(result);
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

  private clearAllState() {
    this.selectedFile = null;
    this.preValidateError = false;
    this.importedProductIds.length = 0;
    this.clearProgressArea();
  }

  private clearProgressArea(): void {
    this.progressPercentage = 0;
    this.progressLogs = " ";    
  }

  private onChangeErrorState(error: boolean): void {
    this.preValidateError = error;
  }

  private notImportable(): boolean {
    return this.preValidateError
      || !this.selectedFile
      || this.progressEnable;
  }

  @Emit("onClose")
  public onClose(): void {
    this.opend = false;
    if (!this.productImportService?.hitCurrentProductOf(this.importedProductIds)) return;
    alert("現在開いているプロダクトがインポートにより書き換えられました。\nプロダクトを開きなおします。");
    location.reload();
  }

  private async doImport(): Promise<void> {
    const service = this.productImportService as ProductImportService;
    const imported = await service.importOf(
      this.selectedFile as File,
      this.notifyProgress,
      this.confirmeProductName
    );
    if (imported) this.importedProductIds.push(imported.id);
  }

  private confirmeProductName(originalProductName: string): string {
      let message = "既に同一の名前のプロダクトが存在します。名前を変えてインポートしますか？\n\n";
      message+="名前を変更する場合は入力して下さい。\n";
      message+="変更がなければ既存のプロダクトを上書きして保存します。"

      const newName = prompt(message , originalProductName);
      return newName === null ? "" : newName;
  }

  private notifyProgress(event: ProductImportProgressEvent): void {
    this.progressPercentage = event.percentage();
    const message = this.messageConverter?.makeMessage(event);
    this.appendPrograssLogs(message);
  }

  private appendPrograssLogs(message: string): void {
    if (message && message.length === 0) return;
    
    if (this.progressLogs.trim().length === 0) this.progressLogs = "";
    else this.progressLogs+="\n";

    this.progressLogs+=message;
    this.$nextTick(() => console.log(`UIが変更されたはず。message:${message}`));
  }
}
</script>

<style scoped>
</style>