<template lang="html">
  <v-dialog v-model="visible" persistent max-width="600">
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-selection-multiple</v-icon> 関連する新しい図の種類の選択
      </v-card-title>
      <v-card-text>
        アイコンに対応する図を新たに作成します。<br />
        新規作成する図の種類を選択してください。
      </v-card-text>

      <v-card-actions>
        <v-text-field
          v-model="resourceName"
          label="アイコンの名前"
          outlined
        ></v-text-field>
        <v-radio-group v-model="diagramTypeId" mandatory>
          <v-radio v-for="diagramType in diagramTypes" :value="diagramType.id">
            <template v-slot:label>
              <div>
                <v-icon>{{ diagramType.iconKey }}</v-icon>
                {{ diagramType.name }}
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-card-actions>

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

  resourceName: string = ''
  diagramTypes: DiagramType[] = []

  resourceId = 0
  isRelateDiagramExists = false
  diagramTypeId = 0

  @Inject()
  private readonly repository?: StorageRepository

  onClickCancel(): void {
    this.close()
  }

  onClickOk(): void {
    this.close()
  }

  show(resourceId: number): void {
    this.initializeOf(resourceId)
    this.visible = true
  }

  private initializeOf(resourceId: number) {
    this.resourceId = resourceId;
    // TODO 本実装。以下は仮。
    this.resourceName = 'リソースの名前'
    this.diagramTypes = [
      DiagramType.利用シーン図,
      DiagramType.ユースケース複合図,
    ]
    this.diagramTypeId = DiagramType.利用シーン図.id
  }

  private close() {
    this.resourceName = ''
    this.diagramTypes = []
    this.resourceId = 0
    this.isRelateDiagramExists = false
    this.diagramTypeId = 0

    this.visible = false
  }
}
</script>

<style scoped></style>
