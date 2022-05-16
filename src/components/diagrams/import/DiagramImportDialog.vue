<template lang="html">
  <v-dialog
    v-model="visible"
    :data-opend="onOpen()"
    persistent
    max-width="600"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-file-import</v-icon> 図のインポート
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
          @click="onClickImportDiagram"
        >
          実行
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject, Watch } from "vue-property-decorator";
import DiagramImportMessageConverter from "./DiagramImportMessageConverter";
import DiagramImportProgressEvent from "@/domain/diagram/import/progress/DiagramImportProgressEvent";
import DiagramImportService from "@/application/service/diagram/import/DiagramImportService";
import { DiagramImportError } from "@/domain/diagram/import/progress/DiagramImportError";
import RdramDiagramExportFileName from "@/domain/diagram/export/RdramDiagramExportFileName";
import UserArrangeOfImportDiagram from "~/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";

@Component
export default class DiagramImportDialog extends Vue {
  @Inject()
  private readonly diagramImportService?: DiagramImportService;

  private readonly messageConverter = new DiagramImportMessageConverter();

  @Prop()
  private visible?: boolean;

  private opend = false;

  private selectedFile: File | null = null;
  private preValidateError: boolean = false;

  private progressEnable: boolean = false;
  private progressPercentage: number = 0;
  private progressLogs: string = " ";

  private  readonly fileTypeDescription = RdramDiagramExportFileName.TYPE_DESCRIPTION;

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

  // FIXME バグ。Vue的には働いていない。Vuetify+非同期でRulesが反応する手段を考える。
  private async preValidate(file: File): Promise<string | boolean> {
    const service = this.diagramImportService as DiagramImportService;
    this.clearProgressArea();
    const result = await service.validateOf(file);
    if (result === DiagramImportError.なし) return true;
    return this.messageConverter.errorMessageOf(result);
  }

  private async onClickImportDiagram(): Promise<void> {
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
  }

  private async doImport(): Promise<void> {
    const service = this.diagramImportService as DiagramImportService;
    const imported = await service.importOf(
      this.selectedFile as File,
      this.notifyProgress,
      this.confirmeUserArrange
    );

    if (!imported) return;
    // TODO 外側へのリフレクション。開いてたらViewを書き換え、開いてなくてもツリーへ追加。
    console.log("インポートされた図:", imported.name);
  }

  private confirmeUserArrange(arrange: UserArrangeOfImportDiagram): UserArrangeOfImportDiagram {
    if (arrange.isEmpty()) console.log("別に重複は無かった。");
    // TODO ユーザーによる「重複時の振る舞い」を確認するダイアログを出す。
    return arrange;
  }

  private notifyProgress(event: DiagramImportProgressEvent): void {
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