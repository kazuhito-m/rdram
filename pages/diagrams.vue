<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="pain-container">
        <div id="leftPain" class="leftpain">
          <div class="treeview-container">
            <v-treeview
              :items="treeItems"
              activatable="true"
              open-on-click="true"
              :active.sync="treeActiveItemIds"
              :open.sync="treeOpenItemIds"
              transition
              dark
              @update:active="onClickTreeItem"
            >
              <template v-slot:label="{item}">
                <div class="right-click-area"
                  @click.right.prevent="onRightClickTreeItem"
                  v-bind:data-item-id="item.id"
                >
                 {{item.name}}
                </div>
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
                <v-list-item link>
                  <v-list-item-title @click="onClickMenu">ダイアグラムを追加する...</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </div>
        </div>
        <div id="slideBar" class="slidebar"></div>
        <div class="rightpain">
          <div class="tabview-container">

            <v-tabs
              v-model="currentTabIndex"
              background-color="primary"
              dark
              @change="onChangeActiveTab"
            >
              <v-tab
                v-for="item in openTabs"
                :key="item.id"
              >
                {{ item.name }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="currentTabIndex" class="dialog-editor-container">
              <v-tab-item
                v-for="item in openTabs"
                :key="item.id"
              >
                <v-card
                  color="basil"
                  flat
                >
                    {{ item.name }}
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import DiagramType from "@/domain/diagram/DiagramType"
import Repository from "@/infrastructure/Repository";
import Product from "@/domain/product/Product";
import Diagram from "@/domain/diagram/Diagram";

@Component
export default class extends Vue {
  private readonly EMPTY_ITEMS: TreeItem = { id: 0, name: "(空)", children: [], disabled: true};
  private readonly DIAGRAM_ID_MASK: number = 1000000;

  private readonly repository = new Repository();

  private treeItems:TreeItem[] = [];
  private treeActiveItemIds: number[] = [];
  private treeOpenItemIds: number[] = [];

  private enableRightClickMenu = false;
  private menuTargetTreeItemId:number = 0;
  private menuPositionX = 0;
  private menuPositionY = 0

  private currentTabIndex: number | null = null;
  private openTabs:TreeItem[] = [];

  public created():void {
    const items = this.treeItems;
    const currentProductDiagrams = this.currentProductDiagrams();
    DiagramType.values()
      .map(type => {
        const diagramsByType = this.filterDiagramType(type, currentProductDiagrams);
        const treeItemsByType = this.createDiagramTreeItems(diagramsByType);
        return {
          id: type.id + this.DIAGRAM_ID_MASK,
          name: type.name,
          children: treeItemsByType
        } as TreeItem;
      })
      .forEach(item => items.push(item));
    items.forEach(item => {
      if (item.children.length === 0) item.children.push(this.EMPTY_ITEMS)
    });
  }

  private currentProductDiagrams(): Diagram[] {
    const currentProduct = this.repository.getCurrentProduct();
    if (!currentProduct) return [];
    return currentProduct.diagrams;
  }

  private createDiagramTreeItems(diagrams: Diagram[]): TreeItem[] {
    return diagrams.map(diagram => {
        return {
          id: diagram.id,
          name: diagram.name,
          children: [] as TreeItem[],
        } as TreeItem;
    });
  }

  private filterDiagramType(diagramType: DiagramType, daigrams: Diagram[]): Diagram[] {
    return daigrams.filter(diagram => diagram.typeId === diagramType.id);
  }

  public onClickTreeItem(treeItemIdText: string): void {
    if (treeItemIdText === '') return;
    const treeItemId = parseInt(treeItemIdText, 10);

    const exists = this.openTabs
      .some(tab => tab.id === treeItemId);
    if (!exists) {
      const clickedItem = this.findTreeItemById(treeItemId, this.treeItems);
      if (!clickedItem) return;
      this.openTabs.push(clickedItem);
    }

    const newTabIndex = this.openTabs
      .findIndex(tabItem => tabItem.id === treeItemId);
    this.currentTabIndex = newTabIndex;
  }

  private findTreeItemById(treeItemId: number, treeItems: TreeItem[]): TreeItem | null {
    for (let item of treeItems) {
      if (item.id === treeItemId) return item;
      const child = this.findTreeItemById(treeItemId, item.children);
      if (child) return child;
    }
    return null;
  }

  public onRightClickTreeItem(event: any) {
    const treeItemId = parseInt(event.srcElement.getAttribute('data-item-id'), 10);
    if (treeItemId <= this.DIAGRAM_ID_MASK) return;
    this.menuTargetTreeItemId = treeItemId;

    this.enableRightClickMenu = false;
    this.menuPositionX = event.clientX;
    this.menuPositionY = event.clientY;
    this.$nextTick(() => {
      this.enableRightClickMenu = true
    });
  }

  public onClickMenu() {
    const item = this.treeItems
      .find(item => item.id === this.menuTargetTreeItemId);
    if (!item) return;
    alert(item.name + ' を追加します。');
  }

  public onChangeActiveTab(newTabIndex: number) {
    const currentTabItem = this.openTabs[newTabIndex];
    // TreeにActiveを設定
    this.treeActiveItemIds.length = 0;
    this.treeActiveItemIds.push(currentTabItem.id);
    // 親がOpenしてなければ、強制的に開ける
    const parentTreeItem = this.treeItems
      .find(folderItem => 
        folderItem.children.some(item => item.id === currentTabItem.id));
    if (!parentTreeItem) return;
    const parentTreeItemId = parentTreeItem.id;
    const openIds = this.treeOpenItemIds;
    if (openIds.some(id => id === parentTreeItemId))
      openIds.splice(openIds.indexOf(parentTreeItemId), 1);
    openIds.push(parentTreeItemId);
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

.leftpain {
  /* 水平垂直方向にリサイズ可能 */
  resize: horizontal;
  /* resizeを指定するため 'visible'以外を指定 */
  width: 20%;
  overflow: auto;
  text-align: left;
}

.rightpain {
  flex-grow: 1;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: move;
}

.treeview-container {
  min-height: 0%;
  height: 100%;
  width: 100%;
  overflow:auto;
}

.tabview-container {
  min-height: 0%;
  height: 100%;
}

.right-click-area {
  user-select: none
}

.dialog-editor-container {
  position: relative;
  width: 100%;
  height: 95%; /* 苦肉の策。 TODO スクロールバーの出方が不安定なので、根本解決が必要。 */
  background-color: gray;
  overflow: auto;
}
</style>
