<template>
  <div class="treeview-container">
    <v-treeview
      :items="treeItems"
      activatable
      open-on-click
      :active.sync="treeActiveItemIds"
      :open.sync="treeOpenItemIds"
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

    <v-menu
      :value="enableRightClickMenu"
      :position-x="menuPositionX"
      :position-y="menuPositionY"
      close-on-click
      close-on-content-click
      offset-x
      rounded
    >
      <v-list>
        <v-list-item link @click="onClickMenuAddDiagram">
          <v-list-item-title>図の追加...</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      :value="enableDiagramRightClickMenu"
      :position-x="menuPositionX"
      :position-y="menuPositionY"
      close-on-click
      close-on-content-click
      offset-x
      rounded
    >
      <v-list>
        <v-list-item link @click="onClickMenuCopyDiagram">
          <v-list-item-title
            >{{ menuTargetTreeItemName }}コピー...</v-list-item-title
          >
        </v-list-item>
        <v-list-item link @click="onClickMenuRemoveDiagram">
          <v-list-item-title
            >{{ menuTargetTreeItemName }}削除</v-list-item-title
          >
        </v-list-item>
        <v-list-item link @click="onClickMenuEditDiagramProperties">
          <v-list-item-title
            >{{ menuTargetTreeItemName }}設定...</v-list-item-title
          >
        </v-list-item>
        <v-list-item link @click="onClickMenuExportDiagram">
          <v-list-item-title
            >{{ menuTargetTreeItemName }}エクスポート</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject, Emit, Prop } from 'nuxt-property-decorator'
import DiagramExportService from '~/application/service/diagram/export/DiagramExportService'
import Diagram from '~/domain/diagram/Diagram'
import Diagrams from '~/domain/diagram/Diagrams'
import DiagramType from '~/domain/diagram/DiagramType'
import Product from '~/domain/product/Product'
import StorageRepository from '~/domain/storage/StorageRepository'
import MessageBox from '~/presentation/MessageBox'
import TreeItem from '~/presentation/tree/TreeItem'

@Component
export default class DiagramsTreePane extends Vue {
  @Prop()
  treeItems: TreeItem[] = []

  @Prop()
  treeActiveItemIds: number[] = []

  @Prop()
  treeOpenItemIds: number[] = []

  @Inject()
  private readonly repository!: StorageRepository

  @Inject()
  private readonly diagramExportService!: DiagramExportService

  // 上(index.vue)と共有すべきもの

  /// タブ関係
  @Prop()
  currentTabIndex: number | null = null

  @Prop()
  openTabs: TreeItem[] = []

  /// menu関係
  enableRightClickMenu = false
  enableDiagramRightClickMenu = false
  menuTargetTreeItemId: number = 0
  menuTargetTreeItemName = ''
  menuPositionX = 0
  menuPositionY = 0

  // constants

  private readonly TOP_FOLDERS: { [key: string]: number } = {
    'RDRA 2.0': -1,
    カスタム: -2,
    分析: -3,
  }

  private readonly EMPTY_ITEMS: TreeItem = {
    id: 0,
    name: '(空)',
    children: [],
    disabled: true,
    iconKey: '',
    iconCaption: '',
  }

  private readonly DIAGRAM_FOLDER_ID_MASK: number = 1000000

  // emits

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  // this vue lyfecycle event.

  created(): void {
    const product = this.repository.getCurrentProduct()
    if (!product) return
    this.treeItems = this.buildTreeItems(product)
  }

  // component events.

  onClickTreeItem(treeItemIdText: string): void {
    if (treeItemIdText === '') return
    const diagramId = parseInt(treeItemIdText, 10)
    this.openDiagramEditorTabOf(diagramId)
  }

  onRightClickTreeItem(event: MouseEvent) {
    if (!event.target) return
    const element = event.target as HTMLElement
    const data = element.getAttribute('data-item-id')
    if (!data) return
    const treeItemId = parseInt(data, 10)
    if (treeItemId <= 0) return
    const treeItem = this.findTreeItemById(treeItemId, this.treeItems)
    if (!treeItem) return

    this.menuTargetTreeItemId = treeItemId
    this.menuTargetTreeItemName = `${treeItem.name} の`

    this.enableRightClickMenu = false
    this.enableDiagramRightClickMenu = false

    this.menuPositionX = event.clientX
    this.menuPositionY = event.clientY
    this.$nextTick(() => {
      const isFolder = treeItemId > this.DIAGRAM_FOLDER_ID_MASK
      this.enableRightClickMenu = isFolder
      this.enableDiagramRightClickMenu = !isFolder
    })
  }

  public onClickMenuAddDiagram(): void {
    const item = this.findTreeItemById(
      this.menuTargetTreeItemId,
      this.treeItems
    )
    if (!item) return
    const diagramType = DiagramType.ofId(item.id - this.DIAGRAM_FOLDER_ID_MASK)
    if (!diagramType) return

    const product = this.repository.getCurrentProduct()
    if (!product) return
    const diagrams = product.diagrams

    const message = `追加する ${diagramType.name} の名前を入力してください。`
    const name = this.promptNewDiagramName(message, '', diagramType, diagrams)
    if (!name) return

    const modifiedProduct = product.createAndAddDiagram(name, diagramType)
    const diagram = modifiedProduct.diagrams.last()

    this.repository.registerCurrentProduct(modifiedProduct)

    this.addDiagramView(diagram)
  }

  /// menu click events

  onClickMenuCopyDiagram(): void {
    const diagramId = this.menuTargetTreeItemId

    const diagram = this.copyDiagram(diagramId)
    if (!diagram) return

    this.addDiagramView(diagram)
  }

  onClickMenuRemoveDiagram(): void {
    const diagramId = this.menuTargetTreeItemId

    if (!this.removeDiagram(diagramId)) return

    this.closeTab(diagramId)
    this.removeTreeItem(diagramId, this.treeItems)
  }

  onClickMenuEditDiagramProperties(): void {
    const diagramId = this.menuTargetTreeItemId
    this.onOpendDiagramPropertiesEditor(diagramId)
  }

  onClickMenuExportDiagram(): void {
    const diagramId = this.menuTargetTreeItemId
    this.diagramExportService!.downloadExportFileOnClient(diagramId)
  }

  // private method

  private findTreeItemById(
    treeItemId: number,
    treeItems: TreeItem[] = this.treeItems
  ): TreeItem | null {
    for (const item of treeItems) {
      if (item.id === treeItemId) return item
      const child = this.findTreeItemById(treeItemId, item.children)
      if (child) return child
    }
    return null
  }

  private buildTreeItems(product: Product): TreeItem[] {
    const items: TreeItem[] = []
    let rdraTop: TreeItem
    Object.keys(this.TOP_FOLDERS).forEach((tfName) => {
      const id = this.TOP_FOLDERS[tfName]
      const item = {
        id,
        name: tfName,
        children: [] as TreeItem[],
        disabled: false,
        iconKey: '',
        iconCaption: '',
      }
      if (tfName === 'RDRA 2.0') {
        rdraTop = item
        this.treeOpenItemIds.push(rdraTop.id)
      } else item.children.push(this.EMPTY_ITEMS)
      items.push(item)
    })

    DiagramType.values()
      .map((type) => {
        return {
          id: type.id + this.DIAGRAM_FOLDER_ID_MASK,
          name: type.name,
          children: [this.EMPTY_ITEMS],
        } as TreeItem
      })
      .forEach((item) => rdraTop.children.push(item))

    product.diagrams.forEach((diagram) =>
      this.addDiagramTreeItem(diagram, items)
    )
    return items
  }

  private openDiagramEditorTabOf(diagramId: number): void {
    const exists = this.openTabs.some((tab) => tab.id === diagramId)
    if (!exists) {
      const clickedItem = this.findTreeItemById(diagramId, this.treeItems)
      if (!clickedItem) return
      this.openTabs.push(clickedItem)
    }

    const newTabIndex = this.openTabs.findIndex(
      (tabItem) => tabItem.id === diagramId
    )
    this.currentTabIndex = newTabIndex
    this.onChangeActiveTab(newTabIndex)
  }

  onChangeActiveTab(newTabIndex: number) {
    if (newTabIndex === undefined) return
    const currentTabItem = this.openTabs[newTabIndex]
    if (!currentTabItem) return
    this.activeTreeItemOf(currentTabItem.id)
    this.openParentTreeItem(currentTabItem.id)
  }

  private activeTreeItemOf(treeItemId: number): void {
    this.treeActiveItemIds.length = 0
    this.treeActiveItemIds.push(treeItemId)
  }

  private openParentTreeItem(treeItemId: number): void {
    const rdraTop = this.lookUpRdraTopItem()
    const parentTreeItem = rdraTop.children.find((folderItem) =>
      folderItem.children.some((item) => item.id === treeItemId)
    )
    if (!parentTreeItem) return
    const parentTreeItemId = parentTreeItem.id
    const openIds = this.treeOpenItemIds
    if (openIds.includes(parentTreeItemId))
      openIds.splice(openIds.indexOf(parentTreeItemId), 1)
    openIds.push(parentTreeItemId)
  }

  private lookUpRdraTopItem(): TreeItem {
    const rdraTopId = this.TOP_FOLDERS['RDRA 2.0']
    return this.treeItems.find((t) => t.id === rdraTopId) as TreeItem
  }

  private promptNewDiagramName(
    message: string,
    defaultName: string,
    diagramType: DiagramType,
    diagrams: Diagrams
  ): string {
    const messageBox = new MessageBox()
    const name = messageBox.prompt(message, defaultName, (inputText) => {
      if (inputText.length > Diagram.NAME_MAX_LENGTH) {
        alert(`${Diagram.NAME_MAX_LENGTH}文字以内で入力してください。`)
        return false
      }
      const exists = diagrams.existsSameTypeAndName(inputText, diagramType)
      if (exists) alert(`既に同名の ${diagramType.name} が在ります。`)
      return !exists
    })
    if (name) return name
    return ''
  }

  private addDiagramView(diagram: Diagram): void {
    this.addDiagramTreeItem(diagram, this.treeItems)
    this.activeTreeItemOf(diagram.id)
    this.openParentTreeItem(diagram.id)
  }

  private addDiagramTreeItem(
    diagram: Diagram,
    treeItems: TreeItem[]
  ): TreeItem | null {
    const folderItem = this.folderItemOf(diagram.type, treeItems)
    if (!folderItem) return null
    const children = folderItem.children

    if (children.length === 1 && children[0] === this.EMPTY_ITEMS)
      children.length = 0

    const diagramTreeItem = this.diagramToTreeItem(diagram)
    children.push(diagramTreeItem)

    return diagramTreeItem
  }

  private folderItemOf(
    diagramType: DiagramType,
    treeItems: TreeItem[]
  ): TreeItem | null {
    const rdraTopId = this.TOP_FOLDERS['RDRA 2.0']
    const rdraTop = treeItems.find((i) => i.id === rdraTopId)
    if (!rdraTop) return null
    const maskedDialogTypeId = diagramType.id + this.DIAGRAM_FOLDER_ID_MASK
    const folderItem = rdraTop.children.find((i) => i.id === maskedDialogTypeId)
    if (!folderItem) return null
    return folderItem
  }

  private diagramToTreeItem(diagram: Diagram): TreeItem {
    const type = diagram.type
    return {
      id: diagram.id,
      name: diagram.name,
      children: [],
      disabled: false,
      iconKey: type.iconKey,
      iconCaption: type.name,
    }
  }

  private copyDiagram(diagramId: number): Diagram | null {
    let distDiagram = null
    const result = this.modifyDiagram(diagramId, (srcDiagram, product) => {
      const diagrams = product.diagrams

      const message =
        `${srcDiagram.name} をコピーします。` +
        `コピー後の ${srcDiagram.type.name} の名前を入力してください。`
      const name = this.promptNewDiagramName(
        message,
        srcDiagram.defaultNameWhenCopy(),
        srcDiagram.type,
        diagrams
      )
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
        const message =
          '指定された図は編集されています。\n(アイコンが配置されています)\n' +
          `${diagram.name} を削除してもよろしいですか。`
        if (!window.confirm(message)) return null
      }
      const removedDiagrams = product.diagrams.remove(diagram)
      return product.withDiagrams(removedDiagrams)
    })
  }

  private closeTab(tabItemId: number): boolean {
    const tabs = this.openTabs
    const tabIndex = tabs.findIndex((tabItem) => tabItem.id === tabItemId)
    if (tabIndex < 0) return false
    tabs.splice(tabIndex, 1)

    if (tabs.length === 0) this.treeActiveItemIds.splice(0, 1)
    return true
  }

  private removeTreeItem(treeItemId: number, treeItems: TreeItem[]): boolean {
    const foundIndex = treeItems.findIndex((item) => item.id === treeItemId)
    if (foundIndex >= 0) {
      treeItems.splice(foundIndex, 1)
      if (treeItems.length === 0) treeItems.push(this.EMPTY_ITEMS)
      return true
    }
    return treeItems.some((item) =>
      this.removeTreeItem(treeItemId, item.children)
    )
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
