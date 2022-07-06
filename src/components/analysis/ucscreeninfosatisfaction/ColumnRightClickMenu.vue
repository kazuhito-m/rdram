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
import { Component, Vue } from 'vue-property-decorator'
import RelatedResource from '~/domain/analysis/ucscreeninfosatisfaction/RelatedResource'
import UcScreenInfoSatisfaction from '~/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import Diagram from '~/domain/diagram/Diagram'
import ResourceType from '~/domain/resource/ResourceType'

@Component
export default class ColumnRightClickMenu extends Vue {
  visible = false
  target: any

  isUseCase = false
  isScreen = false
  isInfomation = false
  isDiagram = false

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
    const target = this.target
    this.isUseCase = target instanceof UcScreenInfoSatisfaction
    if (target instanceof RelatedResource) {
      const related = target as RelatedResource
      const type = related.resource.type
      this.isScreen = type === ResourceType.画面
      this.isInfomation = type === ResourceType.情報
    }
    this.isDiagram = target instanceof Diagram
    console.log("isUseCase", this.isUseCase)
    console.log("isScreen", this.isScreen)
    console.log("isInfomation", this.isInfomation)
    console.log("isDiagram", this.isDiagram)
  }

  close(): void {
    this.visible = false
  }
}
</script>
