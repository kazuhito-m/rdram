<template>
  <div>
    <v-list dence>
      <v-list-item v-if="visibleOtherClose" link @click="onClickOtherClose">
        <v-list-item-title>他のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="visibleSideClose" link @click="onClickLeftClose">
        <v-list-item-title>左のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="visibleSideClose" link @click="onClickRightClose">
        <v-list-item-title>右のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item link @click="onClickAllClose">
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
    return this.openTabs.length > 1
  }

  get visibleSideClose(): boolean {
    const item = this.item
    const tabs = this.openTabs
    if (tabs.length < 3) return false
    return !tabs[0].equals(item) && !tabs[tabs.length - 1].equals(item)
  }

  onClickOtherClose(): void {
    this.onClickLeftClose()
    this.onClickRightClose()
  }

  onClickLeftClose(): void {
    const index = this.selectedIndex()
    if (index < 0) return
    this.openTabs.splice(0, index)
  }

  onClickRightClose(): void {
    const index = this.selectedIndex()
    if (index < 0) return
    this.openTabs.splice(index + 1)
  }

  onClickAllClose(): void {
    this.openTabs.splice(0)
  }

  private selectedIndex(): number {
    const t = this.item
    return this.openTabs.findIndex((i) => i.equals(t))
  }
}
</script>

<style scoped></style>
