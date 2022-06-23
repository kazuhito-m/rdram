<template>
  <div>
    <v-menu
      :value="visible"
      :position-x="positionX"
      :position-y="positionY"
      close-on-click
      close-on-content-click
      offset-x
      rounded
      @input="close"
    >
      <v-list>
        <v-list-item
          link
          v-if="isFolder"
          @click="onClickMenuAddDiagram(diagramId)"
        >
          <v-list-item-title>図の追加...</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          v-if="isDiagram"
          @click="onClickMenuCopyDiagram(diagramId)"
        >
          <v-list-item-title>{{ diagramName }} のコピー...</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          v-if="isDiagram"
          @click="onClickMenuRemoveDiagram(diagramId)"
        >
          <v-list-item-title>{{ diagramName }} の削除</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          v-if="isDiagram"
          @click="onClickMenuEditDiagramProperties(diagramId)"
        >
          <v-list-item-title>{{ diagramName }} の設定...</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          v-if="isDiagram"
          @click="onClickMenuExportDiagram(diagramId)"
        >
          <v-list-item-title
            >{{ diagramName }} のエクスポート</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'
import TreeItem from '~/presentation/tree/TreeItem'
// import DiagramsTreePane from './DiagramsTreePane.vue'

@Component
export default class DiagramRightClickMenu extends Vue {
  visible = false
  positionX = 0
  positionY = 0

  diagramId = 0
  diagramName = ''

  isFolder = false
  isDiagram = false

  @Emit('onClickMenuAddDiagram')
  onClickMenuAddDiagram(_diagramId: number): void {
    this.close()
  }

  @Emit('onClickMenuCopyDiagram')
  onClickMenuCopyDiagram(_diagramId: number): void {
    this.close()
  }

  @Emit('onClickMenuRemoveDiagram')
  onClickMenuRemoveDiagram(_diagramId: number): void {
    this.close()
  }

  @Emit('onClickMenuEditDiagramProperties')
  onClickMenuEditDiagramProperties(_diagramId: number): void {
    this.close()
  }

  @Emit('onClickMenuExportDiagram')
  onClickMenuExportDiagram(_diagramId: number): void {
    this.close()
  }

  // public method

  show(treeItem: TreeItem, x: number, y: number): void {
    this.isFolder = treeItem.id > 1000000 // TOOD 定数
    this.isDiagram = !this.isFolder

    this.diagramId = treeItem.id
    this.diagramName = treeItem.name

    this.positionX = x
    this.positionY = y
    this.visible = true
  }

  close(): void {
    this.visible = false
  }
}
</script>

<style scoped></style>
