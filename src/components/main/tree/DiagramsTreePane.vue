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

    <DiagramRightClickMenu
      ref="diagramRightClickMenu"
      @onClickMenuAddDiagram="onClickMenuAddDiagram"
      @onClickMenuCopyDiagram="onClickMenuCopyDiagram"
      @onClickMenuRemoveDiagram="onClickMenuRemoveDiagram"
      @onClickMenuEditDiagramProperties="onClickMenuEditDiagramProperties"
      @onClickMenuExportDiagram="onClickMenuExportDiagram"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject, Emit } from 'nuxt-property-decorator'
import ViewOrFoldersTemplate from '../model/ViewOrFoldersTemplate'
import DiagramRightClickMenu from './DiagramRightClickMenu.vue'
import TreeWrapper from './TreeWrapper'
import FolderTreeFactory from './FolderTreeFactory'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import Prompts from '@/components/main/Prompts'
import DiagramExportService from '@/application/service/diagram/export/DiagramExportService'
import Diagram from '@/domain/diagram/Diagram'
import Product from '@/domain/product/Product'
import StorageRepository from '@/domain/storage/StorageRepository'

@Component({
  components: {
    DiagramRightClickMenu,
  },
})
export default class DiagramsTreePane extends Vue {
  treeItems: ViewOrFolder[] = []
  treeActiveItemIds: number[] = []
  treeOpenItemIds: number[] = []

  private tree = new TreeWrapper(this.treeItems)
  private readonly treeFactory = FolderTreeFactory.get()
  private readonly prompts = new Prompts()

  @Inject()
  private readonly repository!: StorageRepository

  @Inject()
  private readonly diagramExportService!: DiagramExportService

  // emits

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagram')
  onOpenDiagram(_treeItem: ViewOrFolder): void {}

  @Emit('onDeleteDiagram')
  onDeleteDiagram(_diagramId: number): void {}

  // this vue lyfecycle event.

  created(): void {
    const product = this.repository.getCurrentProduct()
    if (!product) return
    const viewOrFolders = ViewOrFoldersTemplate.build(product.diagrams)
    this.treeItems = viewOrFolders.values
    this.treeOpenItemIds.push(ViewOrFolder.RDRAM20_FOLDER.id)
    this.tree = new TreeWrapper(this.treeItems)
  }

  // component events.

  onClickTreeItem(treeItemIdText: string): void {
    if (treeItemIdText === '') return
    const diagramId = parseInt(treeItemIdText, 10)
    this.openDiagramEditorTabOf(diagramId)
  }

  onRightClickTreeItem(event: MouseEvent): void {
    if (!event.target) return
    const element = event.target as HTMLElement
    const data = element.getAttribute('data-item-id')
    if (!data) return
    const treeItemId = parseInt(data, 10)
    if (treeItemId <= 0) return
    const treeItem = this.tree.findTreeItemById(treeItemId)
    if (!treeItem) return

    const menu = this.$refs.diagramRightClickMenu as DiagramRightClickMenu
    menu.show(treeItem, event.clientX, event.clientY)
  }

  /// menu click events

  onClickMenuAddDiagram(treeItemId: number): void {
    const item = this.tree.findTreeItemById(treeItemId)
    if (!item) return
    const diagramType = item.rdra20DiagramType();

    const product = this.repository.getCurrentProduct()
    if (!product) return
    const diagrams = product.diagrams

    const name = this.prompts.promptNewDiagramName(diagramType, diagrams)
    if (!name) return

    const modifiedProduct = product.createAndAddDiagram(name, diagramType)
    const diagram = modifiedProduct.diagrams.last()
    this.repository.registerCurrentProduct(modifiedProduct)

    this.addDiagramView(diagram)
  }

  onClickMenuCopyDiagram(diagramId: number): void {
    const diagram = this.copyDiagram(diagramId)
    if (!diagram) return

    this.addDiagramView(diagram)
  }

  onClickMenuRemoveDiagram(diagramId: number): void {
    if (!this.removeDiagram(diagramId)) return
    this.onDeleteDiagram(diagramId)
    this.tree.removeTreeItem(diagramId)
  }

  onClickMenuEditDiagramProperties(diagramId: number): void {
    this.onOpendDiagramPropertiesEditor(diagramId)
  }

  onClickMenuExportDiagram(diagramId: number): void {
    this.diagramExportService!.downloadExportFileOnClient(diagramId)
  }

  // public method

  activeItemAndFolderOpen(diagramId: number): void {
    if (!this.findAndReflectDiagramToTreeOf(diagramId)) return
    this.activeTreeItemOf(diagramId)
    this.openParentTreeItem(diagramId)
  }

  openDiagramEditorTabOf(diagramId: number): void {
    const clickedItem = this.tree.findTreeItemById(diagramId)
    if (!clickedItem) return
    this.onOpenDiagram(clickedItem)
  }

  reflectTreeAndTabOf(diagrams: Diagram[]): void {
    for (const diagram of diagrams) {
      const item = this.tree.findTreeItemById(diagram.id)
      if (item) item.name = diagram.name
    }
  }

  clearSelected(): void {
    this.treeActiveItemIds.splice(0, 1)
  }

  // private method

  private activeTreeItemOf(treeItemId: number): void {
    this.treeActiveItemIds.length = 0
    this.treeActiveItemIds.push(treeItemId)
  }

  private openParentTreeItem(treeItemId: number): void {
    const rdraTop = this.tree.lookUpRdraTopItem()
    const parentTreeItem = rdraTop.children.find((folderItem) =>
      folderItem.children.some((item) => item.id === treeItemId)
    )
    if (!parentTreeItem) return
    const parentId = parentTreeItem.id
    const openIds = this.treeOpenItemIds
    if (openIds.includes(parentId)) openIds.splice(openIds.indexOf(parentId), 1)
    openIds.push(parentId)
  }

  private addDiagramView(diagram: Diagram): void {
    this.tree.addDiagramTreeItem(diagram)
    this.activeTreeItemOf(diagram.id)
    this.openParentTreeItem(diagram.id)
  }

  private copyDiagram(diagramId: number): Diagram | null {
    let distDiagram = null
    const result = this.modifyDiagram(diagramId, (srcDiagram, product) => {
      const diagrams = product.diagrams
      const name = this.prompts.promptCopyDiagramName(srcDiagram, diagrams)
      if (!name) return null

      distDiagram = srcDiagram.cloneWith(diagrams.generateDiagramId(), name)
      const addedDiagrams = diagrams.add(distDiagram)
      return product.withDiagrams(addedDiagrams)
    })
    return result ? distDiagram : null
  }

  private modifyDiagram(
    diagramId: number,
    func: (diagram: Diagram, product: Product) => Product | null
  ): boolean {
    const product = this.repository.getCurrentProduct()
    if (!product) return true
    const diagrams = product.diagrams
    const diagram = diagrams.of(diagramId)
    if (!diagram) return true

    const modifedProduct = func(diagram, product)

    if (!modifedProduct) return false
    this.repository.registerCurrentProduct(modifedProduct)
    return true
  }

  private removeDiagram(diagramId: number): boolean {
    return this.modifyDiagram(diagramId, (diagram, product) => {
      if (diagram.placements.length > 0) {
        if (!this.prompts.confirmDeleteDiagramWithIcon(diagram)) return null
      }
      const removedDiagrams = product.diagrams.remove(diagram)
      return product.withDiagrams(removedDiagrams)
    })
  }

  private findAndReflectDiagramToTreeOf(diagramId: number): boolean {
    const existsItem = this.tree.findTreeItemById(diagramId)
    if (existsItem) return true

    const diagram = this.repository.getCurrentProduct()?.diagrams.of(diagramId)
    if (!diagram) return false

    this.addDiagramView(diagram)
    return true
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
