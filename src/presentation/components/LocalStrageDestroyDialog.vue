<template lang="html">
  <v-dialog persistent max-width="500"
    v-model="visible"
  >
    <v-card>
      <v-card-title class="headline">LocalStrageの破棄</v-card-title>
      <v-card-text>
        LocalStrageからデータ破棄します。<br>
        これは、<span class="red--text">全データの消去</span> や <span class="red--text">システムの初期化</span> と同様の操作です。<br>
        なお、安全措置として「実行」をクリックした際、LocalStrageの内容のファイルが自動的にダウンロードされます。<br>
        LocalStrageを破棄してよろしいですか。
      </v-card-text>
      <v-card-text>
        <v-checkbox
        v-model="consent"
        label="上記内容に同意する。"
      ></v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text 
          color="normal" 
          @click="onClose"
        >
          キャンセル
        </v-btn>

        <v-btn text
          :disabled="!consent"
          color="green darken-1"
          @click="onClickDestroyExecute">
            実行
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";
import moment from 'moment/moment';
import StrageRepository from "@/domain/strage/StrageRepository";

@Component
export default class LocalStrageDestroyDialog extends Vue {
  @Inject()
  private readonly repository?: StrageRepository;

  @Prop()
  private visible?: boolean;

  private consent = false;

  @Emit("onClose")
  private onClose(): void {
    this.consent = false;
  }

  private onClickDestroyExecute(): void {
    if (!this.downloadNowLocalStrageDateFile()) {
      alert('ダウンロードファイルの作成に失敗しました。破棄処理を中段します。')
      return;
    }
    this.repository?.destroy();
    location.reload();
  }

  private downloadNowLocalStrageDateFile(): boolean {
    const json = this.repository?.getJsonText();
    if (!json) return false;
    let blob = new Blob([json], { type: "text/json" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    const ymdhms = moment().format('YYYYMMDDHHmmss');
    link.download = `rdram_backup_${ymdhms}.json`;
    link.click();
    return true;
  }
}
</script>

<style scoped>
</style>