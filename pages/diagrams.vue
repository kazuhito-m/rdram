<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="pain-container">
        <div id="leftPain" class="leftpain">
          <div class="treeview-container">
            <v-treeview
              :items="DIAGRAM_FOLDERS"
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
        <div class="rightpain">b</div>
      </div>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  private readonly EMPTY_ITEMS = [{ id: 0, name: "(空)", disabled: true }];

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

  private enableRightClickMenu = false;
  private menuTargetTreeItemId:number = 0;
  private menuPositionX = 0;
  private menuPositionY = 0

  public onClickTreeItem(item: any): void {
    alert("ここまできたよ！");
    alert(item);
  }

  public onRightClickTreeItem(event: any) {
    const treeItemId = parseInt(event.srcElement.getAttribute('data-item-id'), 10);
    if (treeItemId <= 1000000) return;
    this.menuTargetTreeItemId = treeItemId;

    this.enableRightClickMenu = false;
    this.menuPositionX = event.clientX;
    this.menuPositionY = event.clientY;
    this.$nextTick(() => {
      this.enableRightClickMenu = true
    });
  }

  public onClickMenu() {
    const item = this.DIAGRAM_FOLDERS
      .find(item => item.id === this.menuTargetTreeItemId);
    if (!item) return;
    alert(item.name + ' を追加します。');
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

.leftpain {
  /* 水平垂直方向にリサイズ可能 */
  resize: horizontal;
  /* resizeを指定するため 'visible'以外を指定 */
  width: 30%;
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
  overflow:auto;
}

.right-click-area {
  user-select: none
}
</style>
