<template>
  <v-layout>
    <TwoPainWithSlideBarLayout>
      <template v-slot:leftPain>
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
            <template v-slot:label="{item}">
              <div
                class="right-click-area"
                @click.right.prevent="onRightClickTreeItem"
                v-bind:data-item-id="item.id"
              >{{item.name}}</div>
            </template>
          </v-treeview>

          <v-menu
            :value="enableRightClickMenu"
            :close-on-click="true"
            :close-on-content-click="true"
            :offset-x="true"
            :rounded="true"
            :position-x="menuPositionX"
            :position-y="menuPositionY"
          >
            <v-list>
              <v-list-item link @click="onClickMenuAddDiagram">
                <v-list-item-title>ダイアグラムの追加...</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu
            :value="enableDiagramRightClickMenu"
            :close-on-click="true"
            :close-on-content-click="true"
            :offset-x="true"
            :rounded="true"
            :position-x="menuPositionX"
            :position-y="menuPositionY"
          >
            <v-list>
              <v-list-item link @click="onClickMenuCopyDiagram">
                <v-list-item-title>ダイアグラムのコピー...</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="onClickMenuRemoveDiagram">
                <v-list-item-title>ダイアグラムの削除</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <template v-slot:rightPain>
        <div class="tabview-container">
          <v-tabs
            v-model="currentTabIndex"
            v-show="openTabs.length > 0"
            background-color="primary"
            dark
            @change="onChangeActiveTab"
          >
            <v-tab class="tab-title" v-for="item in openTabs" :key="item.id">
              {{ item.name }}
              <v-btn dark small icon @click="onClickCloseTab" v-bind:data-item-id="item.id">
                <v-icon dark v-bind:data-item-id="item.id">mdi-close-box</v-icon>
              </v-btn>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="currentTabIndex" class="dialog-editor-container">
            <v-tab-item v-for="item in openTabs" :key="item.id" class="dialog-editor-tab-item">
              <DiagramEditorContainer
                :diagram-id="item.id"
                :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
                @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
                @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
              />
            </v-tab-item>
          </v-tabs-items>
        </div>
      </template>
    </TwoPainWithSlideBarLayout>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "nuxt-property-decorator";
import TwoPainWithSlideBarLayout from "@/presentation/components/TwoPainWithSlideBarLayout.vue";
import DiagramEditorContainer from "@/presentation/components/diagrams/DiagramEditorContainer.vue";
import DiagramType from "@/domain/diagram/DiagramType";
import Product from "@/domain/product/Product";
import Diagram from "@/domain/diagram/Diagram";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import MessageBox from "@/presentation/MessageBox";
import Resources from "@/domain/resource/Resources";
import BusinessContextDiagramEditor from "@/presentation/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
import StrageRepository from "../domain/strage/StrageRepository";

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    DiagramEditorContainer
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
    disabled: true
  };
  private readonly DIAGRAM_FOLDER_ID_MASK: number = 1000000;

  @Inject()
  private readonly repository!: StrageRepository;

  private treeItems: TreeItem[] = [];
  private treeActiveItemIds: number[] = [];
  private treeOpenItemIds: number[] = [];

  private enableRightClickMenu = false;
  private enableDiagramRightClickMenu = false;
  private menuTargetTreeItemId: number = 0;
  private menuPositionX = 0;
  private menuPositionY = 0;

  private currentTabIndex: number | null = null;
  private openTabs: TreeItem[] = [];

  private allResourcesOnCurrentProduct: Resource[] = [];

  private currentProduct?: Product;

  public created(): void {
    const product = this.repository.getCurrentProduct();
    if (!product) return;

    this.currentProduct = product;

    this.treeItems = this.buildTreeItems(product);

    product.resources.forEach(resource =>
      this.allResourcesOnCurrentProduct.push(resource)
    );
  }

  private buildTreeItems(product: Product): TreeItem[] {
    const items: TreeItem[] = [];
    let rdraTop: TreeItem;
    Object.keys(this.TOP_FOLDERS).forEach(tfName => {
      const id = this.TOP_FOLDERS[tfName];
      const item = {
        id: id,
        name: tfName,
        children: [] as TreeItem[],
        disabled: false
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

  public onClickTreeItem(treeItemIdText: string): void {
    if (treeItemIdText === "") return;
    const treeItemId = parseInt(treeItemIdText, 10);

    const exists = this.openTabs.some(tab => tab.id === treeItemId);
    if (!exists) {
      const clickedItem = this.findTreeItemById(treeItemId, this.treeItems);
      if (!clickedItem) return;
      this.openTabs.push(clickedItem);
    }

    const newTabIndex = this.openTabs.findIndex(
      tabItem => tabItem.id === treeItemId
    );
    this.currentTabIndex = newTabIndex;
    this.onChangeActiveTab(newTabIndex);
  }

  private findTreeItemById(
    treeItemId: number,
    treeItems: TreeItem[]
  ): TreeItem | null {
    for (let item of treeItems) {
      if (item.id === treeItemId) return item;
      const child = this.findTreeItemById(treeItemId, item.children);
      if (child) return child;
    }
    return null;
  }

  public onRightClickTreeItem(event: MouseEvent) {
    if (!event.target) return;
    const element = event.target as HTMLElement;
    const data = element.getAttribute("data-item-id");
    if (!data) return;
    const treeItemId = parseInt(data, 10);

    if (treeItemId <= 0) return;

    this.menuTargetTreeItemId = treeItemId;

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

  public onClickCloseTab(event: MouseEvent) {
    if (!event.target) return;
    const element = event.target as HTMLElement;
    const data = element.getAttribute("data-item-id");
    if (!data) return;
    const tabItemId = parseInt(data, 10);

    this.closeTab(tabItemId);
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

    const messageBox = new MessageBox();
    const name = messageBox.promptWith255Limit(
      `追加する ${diagramType.name} の名前を入力してください。`,
      "",
      inputText => {
        const exists = diagrams.existsSomeName(inputText, diagramType);
        if (exists) alert(`既に同一の${diagramType.name}名が在ります。`);
        return !exists;
      }
    );
    if (!name) return;

    const diagram = diagrams.createNewDiagram(name, diagramType);
    const addedDiagrams = diagrams.add(diagram);
    const addedProducts = product.with(addedDiagrams);

    this.repository.registerCurrentProduct(addedProducts);

    this.addDiagramTreeItem(diagram, this.treeItems);
    this.activeTreeItemOf(diagram.id);
    this.openParentTreeItem(diagram.id);
  }

  public onClickMenuCopyDiagram(): void {
    alert("onClickMenuCopyDiagram");
  }

  public onClickMenuRemoveDiagram(): void {
    const diagramId = this.menuTargetTreeItemId;

    if (!this.removeDiagram(diagramId)) return;

    this.closeTab(diagramId);
    this.removeTreeItem(diagramId, this.treeItems);
  }

  private addDiagramTreeItem(diagram: Diagram, treeItems: TreeItem[]): void {
    const folderItem = this.folderItemOf(diagram.type, treeItems);
    if (!folderItem) return;
    const children = folderItem.children;

    if (children.length === 1 && children[0] === this.EMPTY_ITEMS)
      children.length = 0;

    const diagramTreeItem = this.diagramToTreeItem(diagram);
    children.push(diagramTreeItem);
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
    return {
      id: diagram.id,
      name: diagram.name,
      children: [],
      disabled: false
    };
  }

  private removeDiagram(diagramId: number): boolean {
    const product = this.repository.getCurrentProduct();
    if (!product) return true;
    const diagrams = product.diagrams;
    const diagram = diagrams.of(diagramId);
    if (!diagram) return true;

    if (diagram.placements.length > 0) {
      const message =
        "指定された図は編集されています。\n(アイコンが配置されています)\n" +
        `${diagram.name} を削除してもよろしいですか。`;
      if (!window.confirm(message)) return false;
    }

    const removedDiagrams = diagrams.remove(diagram);
    const removedProducts = product.with(removedDiagrams);

    this.repository.registerCurrentProduct(removedProducts);
    return true;
  }

  private removeTreeItem(treeItemId: number, treeItems: TreeItem[]): boolean {
    const foundIndex = treeItems.findIndex(item => item.id === treeItemId);
    if (foundIndex >= 0) {
      treeItems.splice(foundIndex, 1);
      if (treeItems.length === 0) treeItems.push(this.EMPTY_ITEMS);
      return true;
    }
    for (let item of treeItems) {
      if (this.removeTreeItem(treeItemId, item.children)) return true;
    }
    return false;
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
    const rdraTop = this.lookUpRdraTopItem();
    const parentTreeItem = rdraTop.children.find(folderItem =>
      folderItem.children.some(item => item.id === treeItemId)
    );
    if (!parentTreeItem) return;
    const parentTreeItemId = parentTreeItem.id;
    const openIds = this.treeOpenItemIds;
    if (openIds.some(id => id === parentTreeItemId))
      openIds.splice(openIds.indexOf(parentTreeItemId), 1);
    openIds.push(parentTreeItemId);
  }

  private lookUpRdraTopItem(): TreeItem {
    const rdraTopId = this.TOP_FOLDERS["RDRA 2.0"];
    return this.treeItems.find(t => t.id === rdraTopId) as TreeItem;
  }

  private onUpdateResoucesOnContainer(): void {
    this.saveAllResources();
  }

  private saveAllResources(): void {
    console.log("トップ画面でのリソース全保存");
    const product = this.repository.getCurrentProduct();
    if (!product) return;
    const resources = new Resources(this.allResourcesOnCurrentProduct);
    const newProduct = product.withResources(resources);
    this.repository.registerCurrentProduct(newProduct);
  }

  private onUpdatedDiagramProperties(diagram: Diagram): void {
    const foundItem = this.findTreeItemById(diagram.id, this.treeItems);
    if (!foundItem) return;
    foundItem.name = diagram.name;
  }
}

interface TreeItem {
  id: number;
  name: string;
  children: TreeItem[];
  disabled: boolean | undefined;
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
