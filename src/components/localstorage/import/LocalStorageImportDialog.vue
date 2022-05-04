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
import { LocalStorageImportError } from "@/domain/storage/import/LocalStorageImportError";
import RdramLocalStorageExportFileName from "@/domain/storage/export/RdramLocalStorageExportFileName";

@Component
export default class LocalStorageImportDialog extends Vue {
  @Inject()
  private readonly localStorageImportService?: LocalStorageImportService;

  private readonly messageConverter = new LocalStorageImportMessageConverter();

  @Prop()
  private visible?: boolean;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private progressEnable: boolean = false;
  private progressPercentage: number = 0;
  private progressLogs: string = " ";

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

  private onOpen(): string {
    if (!this.visible) return "";
    return "";
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
    const service = this.localStorageImportService as LocalStorageImportService;
    const imported = await service.importOf(
      this.selectedFile as File,
      this.notifyProgress
    );
    if (imported) location.reload();
  }

  private notifyProgress(event: LocalStorageImportProgressEvent): void {
    this.progressPercentage = event.percentage();

    const message = this.messageConverter?.makeMessage(event);

    if (message && message.length === 0) return;
    
    if (this.progressLogs.trim().length === 0) this.progressLogs = "";
    else this.progressLogs+="\n";
    this.progressLogs+=message;
    this.$nextTick(() => console.log(`UIが変更されたはず。progress:${event.percentage()}%, message:${message}`));
  }
}
</script>

<style scoped>
</style>