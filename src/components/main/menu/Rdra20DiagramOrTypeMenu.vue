<template>
  <div>
    <v-list dence>
      <v-list-item v-if="isFolder" link @click="onClickMenuAddDiagram">
        <v-list-item-title>図の追加...</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isDiagram" link @click="onClickMenuCopyDiagram">
        <v-list-item-title>{{ diagramName }} のコピー...</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isDiagram" link @click="onClickMenuRemoveDiagram">
        <v-list-item-title>{{ diagramName }} の削除</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="isDiagram"
        link
        @click="onClickMenuEditDiagramProperties"
      >
        <v-list-item-title>{{ diagramName }} の設定...</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isDiagram" link @click="onClickMenuExportDiagram">
        <v-list-item-title>{{ diagramName }} のエクスポート</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'

@Component
export default class Rdra20DiagramOrTypeMenu extends Vue {
  isFolder = false
  isDiagram = false

  @Prop()
  readonly item!: ViewOrFolder

  onClickMenuAddDiagram(): void {
    this.addDiagram()
  }

  onClickMenuCopyDiagram(): void {}

  onClickMenuRemoveDiagram(): void {}

  onClickMenuEditDiagramProperties(): void {}

  onClickMenuExportDiagram(): void {}

  get diagramName(): string {
    return this.item.name
  }

  // public method

  mounted(): void {
    this.isFolder = this.item.isRdra20DiagramTypeFolder()
    this.isDiagram = !this.isFolder
  }

  // private method

  private addDiagram(): void {}
}
</script>

<style scoped></style>
