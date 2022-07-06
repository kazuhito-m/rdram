<template>
  <v-menu
    :value="visible"
    :position-x="showPositionX"
    :position-y="showPositionY"
    close-on-click
    close-on-content-click
    offset-x
    rounded
    @input="close"
  >
    <v-list>
      <v-list-item link @click="onClickEdit">
        <v-list-item-title>編集...</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickOpenDiagram">
        <v-list-item-title>図を開く</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class ColumnRightClickMenu extends Vue {
  visible = false
  target: any

  enableEdit = false
  enableOpenDiagram = false
  enableDeleteOnDiagram = false
  enableDeleteOnProduct = false

  showPositionX = 0
  showPositionY = 0

  onClickEdit(): void {
    this.close()
    // this.onEditResource(this.resourceId)
  }

  onClickOpenDiagram(): void {
    this.close()
    // this.onOpenDiagramOfResourceRelate(this.resourceId)
  }

  show(target: any, x: number, y: number): void {
    this.target = target

    this.analyzeEnableMenu()

    this.showPositionX = x
    this.showPositionY = y
    this.visible = true
  }

  private analyzeEnableMenu(): void {
    console.log(this.target)
  }

  close(): void {
    this.visible = false
  }
}
</script>
