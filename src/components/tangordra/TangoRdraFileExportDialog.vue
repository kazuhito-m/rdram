<template lang="html">
  <v-dialog
    v-model="visible"
    persistent
    max-width="500"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-alpha-t-circle</v-icon> tango/rdra形式エクスポート
      </v-card-title>
      <v-card-text>
        現在のプロダクト<br/>
        <div class="text-md-body-1" v-text="productName"></div> 
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

@Component
export default class TangoRdraFileExportDialog extends Vue {
  @Inject()
  private readonly tangoRdraFileService?: TangoRdraFileService

  @Inject()
  private clientDownloadRepository!: ClientDownloadRepository

  @Prop()
  private visible?: boolean

  @Emit('onClose')
  private onClose(): void {}

  private onClickDestroyExecute(): void {
    if (!this.downloadTangoRdraFile()) {
      alert('ダウンロードファイルの作成に失敗しました。処理を中断します。')
      return
    }
    this.onClose()
  }

  private downloadTangoRdraFile(): boolean {
    const service = this.tangoRdraFileService as TangoRdraFileService
    const exportFile = service.generateExportFile()
    if (exportFile.isEmpty()) return false

    this.clientDownloadRepository.register(exportFile)
    return true
  }

  private get productName(): string {
    const service = this.tangoRdraFileService as TangoRdraFileService
    return service.currentProductName()
  }
}
</script>

<style scoped>
</style>