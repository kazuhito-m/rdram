<template>
  <div>
    <v-menu
      :value="visible"
      :position-x="positionX"
      :position-y="positionY"
      close-on-click
      close-on-content-click
      offset-x
      rounded
    >
      <v-list>
        <v-list-item link @click="onClickMenuCopyDiagram">
          <v-list-item-title
            >{{ itemName }}コピー...</v-list-item-title
          >
        </v-list-item>
        <v-list-item link @click="onClickMenuRemoveDiagram">
          <v-list-item-title
            >{{ itemName }}削除</v-list-item-title
          >
        </v-list-item>
        <v-list-item link @click="onClickMenuEditDiagramProperties">
          <v-list-item-title
            >{{ itemName }}設定...</v-list-item-title
          >
        </v-list-item>
        <v-list-item link @click="onClickMenuExportDiagram">
          <v-list-item-title
            >{{ itemName }}エクスポート</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DiagramRightClickMenu extends Vue {
  visible = false
  positionX = 0;
  positionY = 0;
  itemName = ''

  
}
</script>

<style scoped></style>
