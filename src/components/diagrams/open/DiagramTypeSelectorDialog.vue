<template lang="html">
  <v-dialog v-model="visible" @keydown.esc="close()" persistent max-width="400">
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-selection-multiple</v-icon> 新しい図の種類の選択
      </v-card-title>
      <v-card-text>
        アイコンに対応する図を新たに作成します。<br />
        新規作成する図の種類を選択してください。
      </v-card-text>
      <v-card-text>
        アイコン(図の名前) :
        <v-chip color="primary" dark draggable>
          <v-icon>mdi-selection-multiple</v-icon>
          アイコン名
        </v-chip>
        <v-radio-group v-model="diagramTypeId">
          <template v-slot:label> 図の種類 </template>
          <v-radio v-for="diagramType in diagramTypes" :value="diagramType.id">
            <template v-slot:label>
              <div>
                <v-icon>{{ diagramType.iconKey }}</v-icon>
                {{ diagramType.name }}
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClickCancel"> キャンセル </v-btn>
        <v-btn text color="green darken-1" @click="onClickOk"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'
import StorageRepository from '@/domain/storage/StorageRepository'
import DiagramType from '@/domain/diagram/DiagramType'

@Component
export default class DiagramTypeSelectorDialog extends Vue {
  visible = false
  private resolve: any = null
  private reject: any = null

  resourceName: string = ''
  diagramTypes: DiagramType[] = []

  resourceId = 0
  isRelateDiagramExists = false
  diagramTypeId = 0

  static NOTHING_DIAGRAM_ID = 0

  @Inject()
  private readonly repository?: StorageRepository

  onClickCancel(): void {
    this.close()
    this.resolve(DiagramTypeSelectorDialog.NOTHING_DIAGRAM_ID)
  }

  onClickOk(): void {
    const diagramId = this.analyzeDiagramId()
    this.close()
    this.resolve(diagramId)
  }

  show(resourceId: number): Promise<number> {
    if (!this.initializeOf(resourceId)) {
      return new Promise((resolve) =>
        resolve(DiagramTypeSelectorDialog.NOTHING_DIAGRAM_ID)
      )
    }

    this.visible = true
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  private initializeOf(resourceId: number): boolean {
    this.resourceId = resourceId
    // TODO 本実装。以下は仮。
    this.resourceName = 'リソースの名前'
    this.diagramTypes = [
      DiagramType.利用シーン図,
      DiagramType.ユースケース複合図,
    ]
    this.diagramTypeId = DiagramType.利用シーン図.id
    return false
  }

  private analyzeDiagramId(): number {
    return 1
  }

  close() {
    this.visible = false
  }
}
</script>

<style scoped></style>
