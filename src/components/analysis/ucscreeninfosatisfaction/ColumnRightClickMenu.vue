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
    <v-list v-if="isUseCase">
      <v-list-item v-if="isNotUsedInDiagram" link @click="onClickNotImplement">
        <v-list-item-title>このUCを配置したユースケース複合図を作成...</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickEditUsecase">
        <v-list-item-title>編集...</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickNotImplement">
        <v-list-item-title>プロダクト全体から削除</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list v-if="isScreen || isInfomation">
      <v-list-item link @click="onClickNotImplement">
        <v-list-item-title>この関連がある図を開く</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickNotImplement">
        <v-list-item-title>この関連を削除</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickEditRelate">
        <v-list-item-title>編集...</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list v-if="isDiagram">
      <v-list-item link @click="onClickOpenDiagram">
        <v-list-item-title>この図を開く</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickNotImplement">
        <v-list-item-title>ユースケースをこの図から削除</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import RelatedResource from '@/domain/analysis/ucscreeninfosatisfaction/RelatedResource'
import Diagram from '@/domain/diagram/Diagram'
import ResourceType from '@/domain/resource/ResourceType'

@Component
export default class ColumnRightClickMenu extends Vue {
  visible = false
  target: any

  isUseCase = false
  isScreen = false
  isInfomation = false
  isDiagram = false

  isNotUsedInDiagram = false

  showPositionX = 0
  showPositionY = 0

  // emits.

  @Emit('onEditResource')
  private onEditResource(_resourceId: number): void {}

  @Emit('onOpenDiagram')
  private onOpenDiagram(_diagramId: number): void {}

  onClickEditUsecase(): void {
    const sat = this.target as UcScreenInfoSatisfaction
    this.onEditResource(sat.ucId)
  }

  onClickEditRelate(): void {
    const relate = this.target as RelatedResource
    this.onEditResource(relate.id)
  }

  onClickOpenDiagram(): void {
    const diagram = this.target as Diagram
    this.onOpenDiagram(diagram.id)
  }

  onClickNotImplement(): void {
    alert('Not implement!')
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
    this.isScreen = false
    this.isInfomation = false
    this.isNotUsedInDiagram = false

    this.isUseCase = target instanceof UcScreenInfoSatisfaction
    if (this.isUseCase) {
      const sat = target as UcScreenInfoSatisfaction
      this.isNotUsedInDiagram = sat.isNotUsedInDiagram()
    }
    if (target instanceof RelatedResource) {
      const related = target as RelatedResource
      const type = related.resource.type
      this.isScreen = type === ResourceType.画面
      this.isInfomation = type === ResourceType.情報
    }
    this.isDiagram = target instanceof Diagram
  }

  close(): void {
    this.visible = false
  }
}
</script>
