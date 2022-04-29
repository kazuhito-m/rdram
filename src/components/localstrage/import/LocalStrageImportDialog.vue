<template lang="html">
  <v-dialog
    v-model="visible"
    :data-opend="onOpen()"
    persistent
    max-width="600"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-file-replace</v-icon> LocalStrageのインポート(全データ置換)
      </v-card-title>
      <v-card-text>
        LocalStrageのデータを破棄し、<br/>指定した{{ fileTypeDescription }}の内容で置き換えます。
      </v-card-text>
      <v-card-text>
        これは、<span class="red--text">全データの消去</span> や <span class="red--text">システムの初期化</span> と同様の操作です。<br>
        なお、安全措置として「実行」をクリックした際、現在のLocalStrageの内容のファイルが自動的にダウンロードされます。<br>
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
          @click="onClickImportLocalStrage"
        >
          実行
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject, Watch } from "vue-property-decorator";
import LocalStrageImportMessageConverter from "./LocalStrageImportMessageConverter";
import LocalStrageImportProgressEvent from "@/domain/strage/import/LocalStrageImportProgressEvent";
import LocalStrageImportService from "@/application/service/strage/import/LocalStrageImportService";
import { LocalStrageImportError } from "@/domain/strage/import/LocalStrageImportError";
import RdramLocalStrageExportFileName from "@/domain/strage/export/RdramLocalStrageExportFileName";

@Component
export default class LocalStrageImportDialog extends Vue {
  @Inject()
  private readonly localStrageImportService?: LocalStrageImportService;

  private readonly messageConverter = new LocalStrageImportMessageConverter();

  @Prop()
  private visible?: boolean;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private progressEnable: boolean = false;
  private progressPercentage: number = 0;
  private progressLogs: string = " ";
  private readonly importedLocalStrageIds: string[] = [];

  private readonly fileTypeDescription = RdramLocalStrageExportFileName.TYPE_DESCRIPTION;

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
    const service = this.localStrageImportService as LocalStrageImportService;
    this.clearProgressArea();
    const result = service.validateOf(file);
    if (result === LocalStrageImportError.なし) return true;
    return this.messageConverter.errorMessageOf(result);
  }

  private async onClickImportLocalStrage(): Promise<void> {
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
    if (this.localStrageImportService?.hitCurrentLocalStrageOf(this.importedLocalStrageIds)) {
      alert("現在開いているプロダクトがインポートにより書き換えられました。\nプロダクトを開きなおします。");
      location.reload();
    }

    this.selectedFile = null;
    this.preValidateError = false;
    this.importedLocalStrageIds.length = 0;
    this.clearProgressArea();
  }

  private async doImport(): Promise<void> {
    const service = this.localStrageImportService as LocalStrageImportService;
    const imported = await service.importOf(
      this.selectedFile as File,
      this.notifyProgress,
      this.confirmeLocalStrageName
    );
    if (imported) location.reload();
  }

  private confirmeLocalStrageName(originalLocalStrageName: string) : string {
      let message = "既に同一の名前のプロダクトが存在します。名前を変えてインポートしますか？\n\n";
      message+="名前を変更する場合は入力して下さい。\n";
      message+="変更がなければ既存のプロダクトを上書きして保存します。"

      const newName = prompt(message , originalLocalStrageName);

      if (newName === null) return "";
      return newName;
  }

  private notifyProgress(event: LocalStrageImportProgressEvent): void {
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