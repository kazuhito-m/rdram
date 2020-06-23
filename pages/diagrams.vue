<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="pain-container">
        <div id="leftPain" class="leftpain">
          <div class="treeview-container">
            <v-treeview
              :items="treeItems"
              :activatable="true"
              :open-on-click="true"
              transition
              item-key="name"
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
              v-model="currentTab"
              background-color="primary"
              dark
            >
              <v-tab
                v-for="item in openTabs"
                :key="item.id"
              >
                {{ item.name }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="currentTab" class="dialog-editor-container">
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

@Component
export default class extends Vue {
  private readonly EMPTY_ITEMS: TreeItem = { id: 0, name: "(空)", children: [], disabled: true};
  private readonly DIAGRAM_ID_MASK: number = 1000000;

  private DIAGRAM_FOLDERS = [
    { id: 1000001, name: "ビジネスコンテキスト図", children: this.EMPTY_ITEMS },
    { id: 1000002, name: "システムコンテキスト図", children: this.EMPTY_ITEMS },
    { id: 1000003, name: "要求モデル図", children: this.EMPTY_ITEMS },
    { id: 1000004, name: "ビジネスユースケース図", children: this.EMPTY_ITEMS },
    { id: 1000005, name: "情報モデル図", children: this.EMPTY_ITEMS },
    { id: 1000006, name: "状態モデル", children: this.EMPTY_ITEMS },
    { id: 1000007, name: "ユースケース複合図", children: this.EMPTY_ITEMS },
    { id: 1000008, name: "バリエーション", children: this.EMPTY_ITEMS }
  ];

  private treeItems:TreeItem[] = [];

  private enableRightClickMenu = false;
  private menuTargetTreeItemId:number = 0;
  private menuPositionX = 0;
  private menuPositionY = 0

  private currentTab = null;
  private openTabs = [
    { id: 1, name: 'Tab 1 Content' },
    { id: 2, name: 'Tab 2 Content' },
    { id: 3, name: '日本語でめちゃくちゃながーいやつを、タイトルにした場合はどうしたらいいのかなっと' }
  ];

  public created():void {
    const items = this.treeItems;
    DiagramType.values()
      .map(type => {
        return { id: type.id + this.DIAGRAM_ID_MASK,name: type.name , children: [] as TreeItem[] } as TreeItem;
      })
      .forEach(item => items.push(item));
    items.forEach(item => {
      if (item.children.length === 0) item.children.push(this.EMPTY_ITEMS)
    });
  }

  public onClickTreeItem(item: any): void {
    alert("ここまできたよ！");
    alert(item);
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
