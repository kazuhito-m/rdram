<template>
  <div>
    <v-list dence>
      <v-list-item v-if="visibleOtherClose" @click="onClickOtherClose" link>
        <v-list-item-title>他のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="visibleLeftClose" @click="onClickLeftClose" link>
        <v-list-item-title>左のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="visibleRightClose" @click="onClickRightClose" link>
        <v-list-item-title>右のタブをすべて閉じる</v-list-item-title>
      </v-list-item>
      <v-list-item @click="onClickAllClose" link>
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
