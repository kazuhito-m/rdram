<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="pain-container">
        <div id="leftPain" class="leftpain">
          <v-treeview
            :items="items"
            :activatable="true"
            :open-on-click="true"
            transition
            @update:active="onClickTreeItem"
          ></v-treeview>
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

  private items = [
    { id: 1000001, name: "ビジネスコンテキスト図", children: this.EMPTY_ITEMS },
    { id: 1000002, name: "システムコンテキスト図", children: this.EMPTY_ITEMS },
    { id: 1000003, name: "要求モデル図", children: this.EMPTY_ITEMS },
    { id: 1000004, name: "ビジネスユースケース図", children: this.EMPTY_ITEMS },
    { id: 1000005, name: "情報モデル図", children: this.EMPTY_ITEMS },
    { id: 1000006, name: "状態モデル", children: this.EMPTY_ITEMS },
    { id: 1000007, name: "ユースケース複合図", children: this.EMPTY_ITEMS },
    { id: 1000008, name: "バリエーション", children: this.EMPTY_ITEMS }
  ];

  public onClickTreeItem(item: any): void {
    alert("ここまできたよ！");
    alert(item);
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

.v-treeview {
  min-height: 0%;
  height: 100%;
  overflow:auto;
}
</style>
