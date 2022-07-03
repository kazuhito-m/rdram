<template>
  <div class="treeview-container">
    <v-treeview
      :items="treeItems"
      :active.sync="treeActiveItemIds"
      :open.sync="treeOpenItemIds"
      item-key="id"
      activatable
      open-on-click
      transition
      dark
      dense
      @update:active="onClickTreeItem"
    >
      <template #label="{ item }">
        <div
          :data-item-id="item.id"
          class="right-click-area"
          @click.right.prevent="onRightClickTreeItem"
        >
          <v-icon v-if="item.iconKey">{{ item.iconKey }}</v-icon>
          {{ item.name }}
        </div>
      </template>
    </v-treeview>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject, Emit } from 'nuxt-property-decorator'
import ViewOrFoldersTemplate from '@/components/main/model/ViewOrFoldersTemplate'
import ViewOrFolders from '@/components/main/model/ViewOrFolders'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import Diagram from '@/domain/diagram/Diagram'
import StorageRepository from '@/domain/storage/StorageRepository'

@Component
export default class DiagramsTreePane extends Vue {
  treeItems: ViewOrFolder[] = []
  treeActiveItemIds: number[] = []
  treeOpenItemIds: number[] = []

  private tree = new ViewOrFolders([])

  @Inject()
  private readonly repository!: StorageRepository

  // emits

  @Emit('onOpenDiagram')
  onOpenDiagram(_treeItem: ViewOrFolder): void {}

  @Emit('onDeleteDiagram')
  onDeleteDiagram(_diagramId: number): void {}

  /// click

  @Emit('onRightClick')
  onRightClick(_item: ViewOrFolder, _x: number, _y: number): void {}

  // this vue lyfecycle event.

  created(): void {
    const product = this.repository.getCurrentProduct()
    if (!product) return
    const tree = ViewOrFoldersTemplate.build(product.diagrams)
    this.treeItems = tree.values
    this.treeOpenItemIds.push(ViewOrFolder.RDRAM20_FOLDER.id)
    this.tree = tree
  }

  // component events.

  onClickTreeItem(treeItemIdText: string): void {
    if (treeItemIdText === '') return
    const diagramId = parseInt(treeItemIdText, 10)
    this.openDiagramEditorTabOf(diagramId)
  }

  onRightClickTreeItem(event: MouseEvent): void {
    const item = this.treeItemByClickEventOf(event)
    if (!item) return
    this.onRightClick(item, event.x, event.y)
  }

  // public method

  activeItemAndFolderOpen(diagramId: number): void {
    if (!this.findAndReflectDiagramToTreeOf(diagramId)) return
    this.activeTreeItemOf(diagramId)
    this.openParentTreeItem(diagramId)
  }

  openDiagramEditorTabOf(diagramId: number): void {
    const clickedItem = this.tree.findOf(diagramId)
    if (!clickedItem) return
    this.onOpenDiagram(clickedItem)
  }

  reflectTreeAndTabOf(diagrams: Diagram[]): void {
    for (const diagram of diagrams) {
      const item = this.tree.findOf(diagram.id)
      if (item) item.name = diagram.name
    }
  }

  clearSelected(): void {
    this.treeActiveItemIds.splice(0)
  }

  addDiagramView(diagram: Diagram): void {
    this.tree.addOf(diagram)
    this.activeTreeItemOf(diagram.id)
    this.openParentTreeItem(diagram.id)
  }

  removeDiagramView(diagramId: number): void {
    this.onDeleteDiagram(diagramId)
    this.tree.removeOf(diagramId)
  }

  openAll() {
    this.treeOpenItemIds.splice(0)
    ViewOrFoldersTemplate.allFolderIds().forEach((id) =>
      this.treeOpenItemIds.push(id)
    )
  }

  closeAll() {
    this.treeOpenItemIds.splice(0)
  }

  // private method

  private activeTreeItemOf(treeItemId: number): void {
    this.clearSelected()
    this.treeActiveItemIds.push(treeItemId)
  }

  private openParentTreeItem(treeItemId: number): void {
    const parentTreeItem = this.tree.findParentFolderOf(treeItemId)
    if (!parentTreeItem) return

    const parentId = parentTreeItem.id
    this.reAddValueOnArray(parentId, this.treeOpenItemIds)

    this.openParentTreeItem(parentId)
  }

  private reAddValueOnArray(value: number, values: number[]): void {
    const existsIndex = values.indexOf(value)
    if (existsIndex >= 0) values.splice(existsIndex, 1)
    values.push(value)
  }

  private findAndReflectDiagramToTreeOf(diagramId: number): boolean {
    const existsItem = this.tree.findOf(diagramId)
    if (existsItem) return true

    const diagram = this.repository.getCurrentProduct()?.diagrams.of(diagramId)
    if (!diagram) return false

    this.addDiagramView(diagram)
    return true
  }

  private treeItemByClickEventOf(event: MouseEvent): ViewOrFolder | null {
    if (!event.target) return null
    const element = event.target as HTMLElement
    const data = element.getAttribute('data-item-id')
    if (!data) return null
    const itemId = parseInt(data, 10)
    if (itemId <= 0) return null
    return this.tree.findOf(itemId)
  }
}
</script>

<style scoped>
.treeview-container {
  min-height: 0%;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.right-click-area {
  user-select: none;
}
</style>
