<template>
  <v-layout>
    <TwoPainWithSlideBarLayout>
      <template #leftPain>
        <DiagramsTreePane
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onOpenDiagram="onOpenDiagram"
          @onDeleteDiagram="onDeleteDiagram"
        />
      </template>
      <template #rightPain>
        <div class="tabview-container">
          <v-tabs
            v-show="openTabs.length > 0"
            v-model="currentTabIndex"
            background-color="primary"
            show-arrows
            dark
            @change="onChangeActiveTab"
          >
            <v-tab
              v-for="item in openTabs"
              :key="item.id"
              class="tab-title"
            >
              <v-tooltip bottom open-delay="1000">
                <template #activator="{ on, attrs }">
                  <v-icon v-if="item.iconKey" v-bind="attrs" v-on="on">{{ item.iconKey }}</v-icon>
                </template>
                <span>{{ item.iconCaption }}</span>
              </v-tooltip>
              {{ item.name }}
              <v-btn
                :data-item-id="item.id"
                dark
                small
                icon
                @click="onClickCloseTab"
              >
                <v-icon
                  dark
                  :data-item-id="item.id"
                >mdi-close-box</v-icon>
              </v-btn>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="currentTabIndex" class="dialog-editor-container">
            <v-tab-item v-for="item in openTabs" :key="item.id" class="dialog-editor-tab-item">
              <DiagramEditorContainer
                :diagram-id="item.id"
                :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
                :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
                @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
                @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
                @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
                @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
                @onRenamedResource="onRenamedResource"
              />
            </v-tab-item>
          </v-tabs-items>

          <DiagramPropertiesEditDialog
            :diagramId="propertiesEditorDiagramId"
            @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
            @onClose="onCloseDiagramPropertiesEditDialog"
          />
        </div>
      </template>
    </TwoPainWithSlideBarLayout>
    <DiagramTypeSelectorDialog ref="diagramTypeSelectorDialog"/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "nuxt-property-decorator";
import TwoPainWithSlideBarLayout from "@/components/TwoPainWithSlideBarLayout.vue";
import DiagramsTreePane from "@/components/main/tree/DiagramsTreePane.vue";
import DiagramEditorContainer from "@/components/diagrams/DiagramEditorContainer.vue";
import DiagramPropertiesEditDialog from "@/components/diagrams/editor/DiagramPropertiesEditDialog.vue";
import DiagramTypeSelectorDialog from "@/components/diagrams/open/DiagramTypeSelectorDialog.vue";
import TreeItem from "@/presentation/tree/TreeItem"; 
import MessageBox from "@/presentation/MessageBox";
import DiagramType from "@/domain/diagram/DiagramType";
import Product from "@/domain/product/Product";
import Diagrams from "@/domain/diagram/Diagrams";
import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";
import StorageRepository from "@/domain/storage/StorageRepository";
import DiagramExportService from "@/application/service/diagram/export/DiagramExportService";

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    DiagramsTreePane,
    DiagramEditorContainer,
    DiagramPropertiesEditDialog,
    DiagramTypeSelectorDialog
  }
})
export default class extends Vue {
  private readonly TOP_FOLDERS: { [key: string]: number } = {
    "RDRA 2.0": -1,
    カスタム: -2,
    分析: -3
  };

  private readonly EMPTY_ITEMS: TreeItem = {
    id: 0,
    name: "(空)",
    children: [],
    disabled: true,
    iconKey: "",
    iconCaption: "",
  };

  private readonly DIAGRAM_FOLDER_ID_MASK: number = 1000000;

  @Inject()
  private readonly repository!: StorageRepository;

  @Inject()
  private readonly diagramExportService! : DiagramExportService;

  treeItems: TreeItem[] = [];
  treeActiveItemIds: number[] = [];
  treeOpenItemIds: number[] = [];

  enableRightClickMenu = false;
  enableDiagramRightClickMenu = false;
  menuTargetTreeItemId: number = 0;
  menuTargetTreeItemName = "";
  menuPositionX = 0;
  menuPositionY = 0;

  propertiesEditorDiagramId = 0;
  lastPropertiesUpdatedDiagramId = 0;

  currentTabIndex: number | null = null;
  openTabs: TreeItem[] = [];

  allResourcesOnCurrentProduct: Resource[] = [];

  currentProduct?: Product;

  // this vue lyfecycle event.

  created(): void {
    const product = this.repository.getCurrentProduct();
    if (!product) return;

    this.currentProduct = product;

    product.resources.forEach(resource =>
      this.allResourcesOnCurrentProduct.push(resource)
    );
  }

  // component events.

  onOpenDiagram(treeItem: TreeItem): void {
    const diagramId = treeItem.id;
    const exists = this.openTabs.some((tab) => tab.id === diagramId)
    if (!exists) this.openTabs.push(treeItem)
    const newTabIndex = this.openTabs.findIndex(
      (tabItem) => tabItem.id === diagramId
    )
    this.currentTabIndex = newTabIndex
    this.onChangeActiveTab(newTabIndex)
  }

  onDeleteDiagram(diagramId: number): void {
    const tabs = this.openTabs
    const tabIndex = tabs.findIndex((tabItem) => tabItem.id === diagramId)
    if (tabIndex < 0) return 
    tabs.splice(tabIndex, 1)

    if (tabs.length === 0) this.treeActiveItemIds.splice(0, 1)
  }

  onClickTreeItem(treeItemIdText: string): void {
    if (treeItemIdText === "") return;
    const diagramId = parseInt(treeItemIdText, 10);
    this.openDiagramEditorTabOf(diagramId);
  }

  openDiagramEditorTabOf(diagramId: number): void {
    const exists = this.openTabs
      .some(tab => tab.id === diagramId);
    if (!exists) {
      const clickedItem = this.findTreeItemById(diagramId, this.treeItems);
      if (!clickedItem) return;
      this.openTabs.push(clickedItem);
    }

    const newTabIndex = this.openTabs
      .findIndex(tabItem => tabItem.id === diagramId);
    this.currentTabIndex = newTabIndex;
    this.onChangeActiveTab(newTabIndex);
  }

  onRightClickTreeItem(event: MouseEvent) {
    if (!event.target) return;
    const element = event.target as HTMLElement;
    const data = element.getAttribute("data-item-id");
    if (!data) return;
    const treeItemId = parseInt(data, 10);
    if (treeItemId <= 0) return;
    const treeItem = this.findTreeItemById(treeItemId, this.treeItems);
    if (!treeItem) return;

    this.menuTargetTreeItemId = treeItemId;
    this.menuTargetTreeItemName = `${treeItem.name} の`;

    this.enableRightClickMenu = false;
    this.enableDiagramRightClickMenu = false;

    this.menuPositionX = event.clientX;
    this.menuPositionY = event.clientY;
    this.$nextTick(() => {
      const isFolder = treeItemId > this.DIAGRAM_FOLDER_ID_MASK;
      this.enableRightClickMenu = isFolder;
      this.enableDiagramRightClickMenu = !isFolder;
    });
  }

  onClickCloseTab(event: MouseEvent) {
    if (!event.target) return;
    const element = event.target as HTMLElement;
    const data = element.getAttribute("data-item-id");
    if (!data) return;
    const tabItemId = parseInt(data, 10);

    this.closeTab(tabItemId);
  }

  onClickMenuEditDiagramProperties(): void {
    const diagramId = this.menuTargetTreeItemId;
    this.onOpendDiagramPropertiesEditor(diagramId);
  }

  onClickMenuExportDiagram(): void {
    const diagramId = this.menuTargetTreeItemId;
    this.diagramExportService!.downloadExportFileOnClient(diagramId);
  }

  onUpdateResoucesOnContainer(): void {
    this.reloadAllResources();
  }

  onUpdatedDiagramProperties(diagram: Diagram): void {
    const foundItem = this.findTreeItemById(diagram.id, this.treeItems);
    if (!foundItem) return;
    foundItem.name = diagram.name;
    this.lastPropertiesUpdatedDiagramId = 0;
    this.$nextTick(() => {
      this.lastPropertiesUpdatedDiagramId = diagram.id;
    });
  }

  onCloseDiagramPropertiesEditDialog(): void {
    this.propertiesEditorDiagramId = 0;
  }

  onOpendDiagramPropertiesEditor(diagramId: number): void {
    this.propertiesEditorDiagramId = diagramId;
  }

  async onOpenDiagramOfResourceRelate(resourceId: number): Promise<void> {
    const dialog = this.$refs.diagramTypeSelectorDialog as DiagramTypeSelectorDialog;
    const diagramId = await dialog.show(resourceId);

    if (diagramId === DiagramTypeSelectorDialog.NOTHING_DIAGRAM_ID) return;

    if (!this.findTreeItemById(diagramId)) {
      // UIのTree上に無いtreeItemIdが無かった場合、永続化されたものから探して、在ったらTreeに足す。
      const diagram = this.repository.getCurrentProduct()
        ?.diagrams
        .of(diagramId) as Diagram;
      this.addDiagramTreeItem(diagram, this.treeItems);
    }

    this.openDiagramEditorTabOf(diagramId);
  }

  onRenamedResource(src: Resource, dest: Resource): void {
    this.reflectResourceRenameToDiagrams(src, dest);
  }

  // private methods.

  private buildTreeItems(product: Product): TreeItem[] {
    const items: TreeItem[] = [];
    let rdraTop: TreeItem;
    Object.keys(this.TOP_FOLDERS).forEach(tfName => {
      const id = this.TOP_FOLDERS[tfName];
      const item = {
        id,
        name: tfName,
        children: [] as TreeItem[],
        disabled: false,
        iconKey: "",
        iconCaption: "",
      };
      if (tfName === "RDRA 2.0") {
        rdraTop = item;
        this.treeOpenItemIds.push(rdraTop.id);
      } else item.children.push(this.EMPTY_ITEMS);
      items.push(item);
    });

    DiagramType.values()
      .map(type => {
        return {
          id: type.id + this.DIAGRAM_FOLDER_ID_MASK,
          name: type.name,
          children: [this.EMPTY_ITEMS]
        } as TreeItem;
      })
      .forEach(item => rdraTop.children.push(item));

    product.diagrams.forEach(diagram =>
      this.addDiagramTreeItem(diagram, items)
    );
    return items;
  }

  private findTreeItemById(treeItemId: number, treeItems: TreeItem[] = this.treeItems): TreeItem | null {
    for (const item of treeItems) {
      if (item.id === treeItemId) return item;
      const child = this.findTreeItemById(treeItemId, item.children);
      if (child) return child;
    }
    return null;
  }

  private closeTab(tabItemId: number): boolean {
    const tabs = this.openTabs;
    const tabIndex = tabs.findIndex(tabItem => tabItem.id === tabItemId);
    if (tabIndex < 0) return false;
    tabs.splice(tabIndex, 1);

    if (tabs.length === 0) this.treeActiveItemIds.splice(0, 1);
    return true;
  }

  public onClickMenuAddDiagram(): void {
    const item = this.findTreeItemById(
      this.menuTargetTreeItemId,
      this.treeItems
    );
    if (!item) return;
    const diagramType = DiagramType.ofId(item.id - this.DIAGRAM_FOLDER_ID_MASK);
    if (!diagramType) return;

    const product = this.repository.getCurrentProduct();
    if (!product) return;
    const diagrams = product.diagrams;

    const message = `追加する ${diagramType.name} の名前を入力してください。`;
    const name = this.promptNewDiagramName(message, "", diagramType, diagrams);
    if (!name) return;

    const modifiedProduct = product.createAndAddDiagram(name, diagramType);
    const diagram = modifiedProduct.diagrams.last();

    this.repository.registerCurrentProduct(modifiedProduct);

    this.addDiagramView(diagram);
  }

  private addDiagramView(diagram: Diagram): void {
    this.addDiagramTreeItem(diagram, this.treeItems);
    this.activeTreeItemOf(diagram.id);
    this.openParentTreeItem(diagram.id);
  }

  public onClickMenuCopyDiagram(): void {
    const diagramId = this.menuTargetTreeItemId;

    const diagram = this.copyDiagram(diagramId);
    if (!diagram) return;

    this.addDiagramView(diagram);
  }

  private copyDiagram(diagramId: number): Diagram | null {
    let distDiagram = null;
    const result = this.modifyDiagram(diagramId, (srcDiagram, product) => {
      const diagrams = product.diagrams;

      const message =
        `${srcDiagram.name} をコピーします。` +
        `コピー後の ${srcDiagram.type.name} の名前を入力してください。`;
      const name = this.promptNewDiagramName(
        message,
        srcDiagram.defaultNameWhenCopy(),
        srcDiagram.type,
        diagrams
      );
      if (!name) return null;

      distDiagram = srcDiagram.cloneWith(diagrams.generateDiagramId(), name);
      const addedDiagrams = diagrams.add(distDiagram);
      return product.withDiagrams(addedDiagrams);
    });
    return result ? distDiagram : null;
  }

  private promptNewDiagramName(
    message: string,
    defaultName: string,
    diagramType: DiagramType,
    diagrams: Diagrams
  ): string {
    const messageBox = new MessageBox();
    const name = messageBox.prompt(message, defaultName, inputText => {
      if (inputText.length > Diagram.NAME_MAX_LENGTH) {
        alert(`${Diagram.NAME_MAX_LENGTH}文字以内で入力してください。`);
        return false;
      }
      const exists = diagrams.existsSameTypeAndName(inputText, diagramType);
      if (exists) alert(`既に同名の ${diagramType.name} が在ります。`);
      return !exists;
    });
    if (name) return name;
    return "";
  }

  public onClickMenuRemoveDiagram(): void {
    const diagramId = this.menuTargetTreeItemId;

    if (!this.removeDiagram(diagramId)) return;

    this.closeTab(diagramId);
    this.removeTreeItem(diagramId, this.treeItems);
  }

  private addDiagramTreeItem(diagram: Diagram, treeItems: TreeItem[]): TreeItem | null {
    const folderItem = this.folderItemOf(diagram.type, treeItems);
    if (!folderItem) return null;
    const children = folderItem.children;

    if (children.length === 1 && children[0] === this.EMPTY_ITEMS)
      children.length = 0;

    const diagramTreeItem = this.diagramToTreeItem(diagram);
    children.push(diagramTreeItem);

    return diagramTreeItem;
  }

  private folderItemOf(
    diagramType: DiagramType,
    treeItems: TreeItem[]
  ): TreeItem | null {
    const rdraTopId = this.TOP_FOLDERS["RDRA 2.0"];
    const rdraTop = treeItems.find(i => i.id === rdraTopId);
    if (!rdraTop) return null;
    const maskedDialogTypeId = diagramType.id + this.DIAGRAM_FOLDER_ID_MASK;
    const folderItem = rdraTop.children.find(i => i.id === maskedDialogTypeId);
    if (!folderItem) return null;
    return folderItem;
  }

  private diagramToTreeItem(diagram: Diagram): TreeItem {
    const type = diagram.type;
    return {
      id: diagram.id,
      name: diagram.name,
      children: [],
      disabled: false,
      iconKey: type.iconKey,
      iconCaption: type.name
    };
  }

  private removeDiagram(diagramId: number): boolean {
    return this.modifyDiagram(diagramId, (diagram, product) => {
      if (diagram.placements.length > 0) {
        const message =
          "指定された図は編集されています。\n(アイコンが配置されています)\n" +
          `${diagram.name} を削除してもよろしいですか。`;
        if (!window.confirm(message)) return null;
      }
      const removedDiagrams = product.diagrams.remove(diagram);
      return product.withDiagrams(removedDiagrams);
    });
  }

  private modifyDiagram(
    diagramId: number,
    func: (diagram: Diagram, product: Product) => Product | null
  ): boolean {
    const product = this.repository.getCurrentProduct();
    if (!product) return true;
    const diagrams = product.diagrams;
    const diagram = diagrams.of(diagramId);
    if (!diagram) return true;

    const modifedProduct = func(diagram, product);

    if (!modifedProduct) return false;
    this.repository.registerCurrentProduct(modifedProduct);
    return true;
  }

  private removeTreeItem(treeItemId: number, treeItems: TreeItem[]): boolean {
    const foundIndex = treeItems.findIndex(item => item.id === treeItemId);
    if (foundIndex >= 0) {
      treeItems.splice(foundIndex, 1);
      if (treeItems.length === 0) treeItems.push(this.EMPTY_ITEMS);
      return true;
    }
    return treeItems.some(item => this.removeTreeItem(treeItemId, item.children));
  }

  private activeTreeItemOf(treeItemId: number): void {
    this.treeActiveItemIds.length = 0;
    this.treeActiveItemIds.push(treeItemId);
  }

  public onChangeActiveTab(newTabIndex: number) {
    if (newTabIndex === undefined) return;
    const currentTabItem = this.openTabs[newTabIndex];
    if (!currentTabItem) return;
    this.activeTreeItemOf(currentTabItem.id);
    this.openParentTreeItem(currentTabItem.id);
  }

  private openParentTreeItem(treeItemId: number): void {
    // const rdraTop = this.lookUpRdraTopItem();
    // const parentTreeItem = rdraTop.children.find(folderItem =>
    //   folderItem.children.some(item => item.id === treeItemId)
    // );
    // if (!parentTreeItem) return;
    // const parentTreeItemId = parentTreeItem.id;
    // const openIds = this.treeOpenItemIds;
    // if (openIds.includes(parentTreeItemId))
    //   openIds.splice(openIds.indexOf(parentTreeItemId), 1);
    // openIds.push(parentTreeItemId);
  }

  private lookUpRdraTopItem(): TreeItem {
    const rdraTopId = this.TOP_FOLDERS["RDRA 2.0"];
    return this.treeItems.find(t => t.id === rdraTopId) as TreeItem;
  }

  private reloadAllResources(): void {
    const product = this.repository.getCurrentProduct();
    if (!product) return;
    // 削除されていないか確認。
    const nowIdDictionary = product.resources.map(r => r.resourceId);
    const alreadyResources = this.allResourcesOnCurrentProduct;
    for (let i = alreadyResources.length - 1; i >= 0; i--) {
      const alredy = alreadyResources[i];
      const foundIndex = nowIdDictionary.indexOf(alredy.resourceId);
      if (foundIndex < 0) {
        alreadyResources.splice(i, 1);
      } else {
        nowIdDictionary.splice(foundIndex, 1);
      }
    }

    // 残ったものは追加なので、追加する。
    product.resources
      .filter(r => nowIdDictionary.includes(r.resourceId))
      .forEach(r => alreadyResources.push(r));
  }

  private reflectResourceRenameToDiagrams(src: Resource, dest: Resource): void {
    if (src.name === dest.name) return;
    if (!Product.hasCorrespondingDiagramTypeOf(src)) return;

    const product = this.repository.getCurrentProduct();
    if (!product) return;

    const relateDaigrams = product.relateDiagramsOf(src);
    if (relateDaigrams.isEmpty()) return;

    if (!this.confirmDiagramRename(src, dest, relateDaigrams)) return;

    const renameDiagrams = relateDaigrams
      .map(diagram => diagram.renameOf(dest.name))
      .filter(d => {
        const exists = product.diagrams.existsSameOf(d);
        if (exists) alert(`名前を変更しようとした図\n  [${d.type.name}]:${d.name}\nが存在したため変更できませんでした。`)
        return !exists;
      });

    const upProduct = product.meageDiagramsByIdOf(renameDiagrams);
    this.repository.registerCurrentProduct(upProduct);

    this.reflectTreeAndTabOf(renameDiagrams);
  }

  private confirmDiagramRename(src: Resource, dest: Resource, relateDaigrams: Diagrams): boolean {
    let message = `変更前の名前 [${src.name}] に関連する図があります。\n\n`
    message+=relateDaigrams.map(d => `  [${d.type.name}]:${d.name}`).join("\n")
    message+=`\n\n合わせて名前を [${dest.name}] 変更しますか？`
    return confirm(message);
  }

  private reflectTreeAndTabOf(diagrams: Diagram[]): void {
    for (const diagram of diagrams) {
      const item = this.findTreeItemById(diagram.id);
      if (item) item.name = diagram.name;
    }
  }
}
</script>


<style scoped>
.pain-container {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: initial;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: unset;
  margin-left: unset;
}

.left-pain {
  /* resizeを指定するため 'visible'以外を指定 */
  width: 20%;
  overflow: auto;
  text-align: left;
}

.right-pain {
  flex-grow: 1;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: col-resize;
}

.treeview-container {
  min-height: 0%;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.tabview-container {
  min-height: 0%;
  height: 100%;
}

.right-click-area {
  user-select: none;
}

.dialog-editor-container {
  position: relative;
  width: 100%;
  height: 97%;
}

.dialog-editor-tab-item {
  transition: none;
}

.tab-title {
  text-transform: none;
}
</style>
