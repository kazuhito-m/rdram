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
      @input="close"
    >
      <TabClickMenu v-if="tabClick" :item="item" :openTabs="openTabs" />
      <Rdra20DiagramOrTypeMenu :item="item" />
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import TabClickMenu from './TabClickMenu.vue'
import Rdra20DiagramOrTypeMenu from './Rdra20DiagramOrTypeMenu.vue'

@Component({
  components: {
    TabClickMenu,
    Rdra20DiagramOrTypeMenu,
  },
})
export default class DiagramRightClickMenu extends Vue {
  visible = false
  positionX = 0
  positionY = 0
  tabClick = false

  item = ViewOrFolder.EMPTY

  @Prop({ required: true })
  readonly openTabs!: ViewOrFolder[]

  // public method

  show(item: ViewOrFolder, x: number, y: number, tabClick: boolean): void {
    this.positionX = x
    this.positionY = y
    this.tabClick = tabClick

    console.log('openTabs:', this.openTabs)

    this.item = item

    this.visible = true
  }

  close(): void {
    this.visible = false
  }
}
</script>

<style scoped></style>
