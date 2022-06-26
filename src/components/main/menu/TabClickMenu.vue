<template>
  <div>
    <v-list>
      <v-list-item link @click="onClickCloseTab">
        <v-list-item-title>このタブを閉じる</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'

@Component
export default class TabClickMenu extends Vue {
  @Prop({ required: true })
  item = ViewOrFolder.EMPTY

  tabItems: ViewOrFolder[] = []

  onClickCloseTab(): void {
    alert('閉じクリ。tab:' + this.item.id + ', タブ数:' + this.tabItems.length)
  }
}
</script>

<style scoped></style>
