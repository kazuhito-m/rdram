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
      <v-list-item v-if="enableEdit" link @click="onClickEdit">
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
import { Component, Vue, Emit } from 'vue-property-decorator'
import Product from '@/domain/product/Product'
import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'

@Component
export default class ResourceRightClickMenu extends Vue {
  visible = false
  resourceId = 0

  enableEdit = false
  enableOpenDiagram = false
  enableDeleteOnDiagram = false
  enableDeleteOnProduct = false

  showPositionX = 0
  showPositionY = 0

  onClickEdit(): void {
    this.close()
    this.onEditResource(this.resourceId)
  }

  onClickOpenDiagram(): void {
    this.close()
    this.onOpenDiagramOfResourceRelate(this.resourceId)
  }

  onClickDeleteOnDiagram(): void {
    this.close()
    this.onDeleteResourceOnDiagram(this.resourceId)
  }

  onClickDeleteOnProduct(): void {
    this.close()
    this.onDeleteResourceOnProduct(this.resourceId)
  }

  @Emit('onEditResource')
  private onEditResource(_resourceId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  private onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit('onDeleteResourceOnDiagram')
  private onDeleteResourceOnDiagram(_resourceId: number): void {}

  @Emit('onDeleteResourceOnProduct')
  private onDeleteResourceOnProduct(_resourceId: number): void {}

  show(resource: Resource, diagram: Diagram, x: number, y: number): void {
    this.resourceId = resource.resourceId

    this.analyzeEnableMenu(resource, diagram)

    this.showPositionX = x
    this.showPositionY = y
    this.visible = true
  }

  private analyzeEnableMenu(resource: Resource, diagram: Diagram): void {
    const onDiagram = diagram.existsResourceOnPlacementOf(resource.resourceId)
    this.enableEdit = resource.deletable
    this.enableOpenDiagram = Product.hasCorrespondingDiagramTypeOf(resource)
    this.enableDeleteOnDiagram = onDiagram
    this.enableDeleteOnProduct = resource.deletable
  }

  close(): void {
    this.visible = false
  }
}
</script>
