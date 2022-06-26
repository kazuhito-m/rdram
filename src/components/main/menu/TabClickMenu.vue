<template>
  <div>
    <v-list dence>
      <v-list-item v-if="visibleOtherClose" @click="onClickCloseTab" link>
        <v-list-item-title>他のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="visibleLeftClose" @click="onClickCloseTab" link>
        <v-list-item-title>左のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="visibleRightClose" @click="onClickCloseTab" link>
        <v-list-item-title>右のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item @click="onClickCloseTab" link>
        <v-list-item-title>タブをすべて閉じる</v-list-item-title>
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
  readonly item!: ViewOrFolder

  @Prop({ required: true })
  readonly openTabs!: ViewOrFolder[]

  get visibleOtherClose(): boolean {
    return this.visibleLeftClose && this.visibleRightClose
  }

  get visibleLeftClose(): boolean {
    const tabs = this.openTabs
    if (tabs.length < 2) return false
    return !tabs[0].equals(this.item)
  }

  get visibleRightClose(): boolean {
    const tabs = this.openTabs
    if (tabs.length < 2) return false
    return !tabs[tabs.length - 1].equals(this.item)
  }

  onClickCloseTab(): void {
    alert('閉じクリ。tab:' + this.item.id + ', タブ数:' + this.openTabs.length)
  }
}
</script>

<style scoped></style>
