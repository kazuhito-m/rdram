<template>
  <v-menu
    :value="resourceId"
    close-on-click
    close-on-content-click
    offset-x
    rounded
    :position-x="showPositionX"
    :position-y="showPositionY"
  >
    <v-list>
      <v-list-item v-if="false" link>
        <v-list-item-title>編集...</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="enableOpenDiagram" link @click="onClickOpenDiagram">
        <v-list-item-title>対応する図を開く</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="enableDeleteOnDiagram"
        link
        @click="onClickDeleteOnDiagram"
      >
        <v-list-item-title>この図から削除</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="enableDeleteOnProduct"
        link
        @click="onClickDeleteOnProduct"
      >
        <v-list-item-title>プロダクト全体から削除</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'

@Component
export default class ResourceRightClickMenu extends Vue {
  visible = false
  resourceId = 0
  diagramId = 0

  enableOpenDiagram = false
  enableDeleteOnDiagram = false
  enableDeleteOnProduct = false

  showPositionX = 0
  showPositionY = 0

  onClickOpenDiagram(): void {
    this.close()
  }

  onClickDeleteOnDiagram(): void {
    this.close()
  }

  onClickDeleteOnProduct(): void {
    this.close()
  }

  show(resource: Resource, diagram: Diagram, x: number, y: number): void {
    this.showPositionX = x
    this.showPositionY = y
    this.visible = true
  }

  private close(): void {
    this.visible = false
  }
}
</script>
