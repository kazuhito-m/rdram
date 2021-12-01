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

@Component
export default class ProducntImportDialog extends Vue {
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
    this.changeEnableProgressArea(true);
    this.doImport();
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

  private doImport(): void {
    let count = 0;
    const countUp = () =>{
      const e1 = new ImportProgressEvent(count * 10 , "インポート開始 " + count);
      this.noticeProgress(e1);
      count++;
    }
    const intervalId = setInterval(() =>{
      countUp();
      if(count > 10){　
        clearInterval(intervalId);　//intervalIdをclearIntervalで指定している      
        const e2 = new ImportProgressEvent(100, "終了。");
        this.noticeProgress(e2);
      }
    }, 1000);
  }

  private noticeProgress(event: ImportProgressEvent): void {
    this.progressPercentage = event.percentage;

    if (event.message.length === 0) return;
    
    if (this.progressLogs.trim().length === 0) this.progressLogs = "";
    else this.progressLogs+="\n";
    this.progressLogs+=event.message;
  }
}
</script>

<style scoped>
</style>