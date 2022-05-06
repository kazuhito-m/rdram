<template lang="html">
  <v-dialog
    v-model="visible"
    :data-opend="onOpen()"
    persistent
    max-width="600"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-file-replace</v-icon> LocalStorageのインポート(全データ置換)
      </v-card-title>
      <v-card-text>
        LocalStorageのデータを破棄し、<br/>指定した{{ fileTypeDescription }}の内容で置き換えます。
      </v-card-text>
      <v-card-text>
        これは、<span class="red--text">全データの消去</span> や <span class="red--text">システムの初期化</span> と同様の操作です。<br>
        なお「実行」クリック時、安全措置として「現在のLocalStorage内容」のファイルが自動的にダウンロードされます。<br>
      </v-card-text>
      <v-card-text>インポートする対象のファイルを指定してください。</v-card-text>

      <v-card-actions>
        <v-file-input
          v-model="selectedFile"
          :disabled="progressEnable || alreadyImported"
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
          @click="onClickImportLocalStorage"
        >
          実行
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject, Watch } from "vue-property-decorator";
import LocalStorageImportMessageConverter from "./LocalStorageImportMessageConverter";
import LocalStorageImportProgressEvent from "@/domain/storage/import/LocalStorageImportProgressEvent";
import LocalStorageImportService from "@/application/service/storage/import/LocalStorageImportService";
import LocalStorageExportService from "@/application/service/storage/export/LocalStorageExportService";
import { LocalStorageImportError } from "@/domain/storage/import/LocalStorageImportError";
import RdramLocalStorageExportFileName from "@/domain/storage/export/RdramLocalStorageExportFileName";

@Component
export default class LocalStorageImportDialog extends Vue {
  @Inject()
  private readonly localStorageImportService?: LocalStorageImportService;

  @Inject()
  private readonly localStorageExportService?: LocalStorageExportService;

  private readonly messageConverter = new LocalStorageImportMessageConverter();

  @Prop()
  private visible?: boolean;

  private opend = false;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private progressEnable: boolean = false;
  private progressPercentage: number = 0;
  private progressLogs: string = " ";

  private alreadyImported = false;

  private readonly fileTypeDescription = RdramLocalStorageExportFileName.TYPE_DESCRIPTION;

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

  private onOpen():void {
    if (!this.visible || this.opend) return;
    this.clearAllState();
    this.opend = true;
  }

  private async preValidate(file: File): Promise<string | boolean> {
    const service = this.localStorageImportService as LocalStorageImportService;
    this.clearProgressArea();
    const result = await service.validateOf(file);
    if (result === LocalStorageImportError.なし) return true;
    return this.messageConverter.errorMessageOf(result);
  }

  private async onClickImportLocalStorage(): Promise<void> {
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
    this.alreadyImported = false;
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
      || this.progressEnable
      || this.alreadyImported;
  }

  @Emit("onClose")
  public onClose(): void {
    this.opend = false;
    if (!this.alreadyImported) return;
    alert("LocalStrageがインポート内容で置き換えられたため、\nアプリケーションを再起動します。");
    location.reload();
  }

  private async doImport(): Promise<void> {
    const exportFile = this.localStorageExportService?.makeExportFile();
    if (!exportFile) {
      this.appendProgressLogs("事前準備(バックアップファイルのデータ取得)に失敗。");
      return;
    }

    const service = this.localStorageImportService as LocalStorageImportService;
    const imported = await service.importOf(
      this.selectedFile as File,
      this.notifyProgress
    );
    if (!imported) return;
    
    this.appendProgressLogs(`インポート前の状態をバックアップファイルとしてダウンロードします。\n${exportFile.clientFileName}`);
    this.localStorageExportService?.downloadOnClientOf(exportFile);
    this.alreadyImported = true;
  }

  private notifyProgress(event: LocalStorageImportProgressEvent): void {
    this.progressPercentage = event.percentage();
    const message = this.messageConverter?.makeMessage(event);
    this.appendProgressLogs(message);
  }

  private appendProgressLogs(message: string): void {
    if (message && message.length === 0) return;

    if(this.progressLogs.trim().length === 0) this.progressLogs="";
    else this.progressLogs+="\n";

    this.progressLogs+=message;
    this.$nextTick(() => console.log(`UIが変更されたはず。message:${message}`));
  }
}
</script>

<style scoped>
</style>