<template lang="html">
  <v-dialog
    v-model="visible"
    persistent
    max-width="500"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-delete-forever</v-icon> tango/rdra形式エクスポート
      </v-card-title>
      <v-card-text>
        現在のプロダクト<br/>
        XXX<br/>
        を、tango/rdra 形式のYAMLファイルに出力します。<br/>
        よろしいですか。
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text 
          color="normal" 
          @click="onClose"
        >
          キャンセル
        </v-btn>

        <v-btn
          text
          color="green darken-1"
          @click="onClickDestroyExecute">
            実行
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from 'vue-property-decorator'
import TangoRdraFileService from '@/application/service/tangordra/TangoRdraFileService'
import ClientDownloadRepository from '@/domain/client/ClientDownloadRepository'
import DownloadFile from '@/domain/client/DownloadFile'
import RdramExportFileName from '@/domain/client/RdramExportFileName'

@Component
export default class TangoRdraFileExportDialog extends Vue {
  @Inject()
  private readonly tangoRdraFileService?: TangoRdraFileService

  @Inject()
  private clientDownloadRepository!: ClientDownloadRepository

  @Prop()
  private visible?: boolean;

  @Emit('onClose')
  private onClose(): void {}

  private onClickDestroyExecute(): void {
    if (!this.downloadTangoRdraFile()) {
      alert('ダウンロードファイルの作成に失敗しました。処理を中断します。')
      return
    }
    this.onClose();
  }

  private downloadTangoRdraFile(): boolean {
    // const json = this.repository?.getJsonText()
    // if (!json) return false

    // const fileName = new RdramExportFileName('localstrage-backup')
    // const file = new DownloadFile(fileName, fileName.contentType(), json)
    // this.clientDownloadRepository.register(file)
    return true
  }
}
</script>

<style scoped>
</style>