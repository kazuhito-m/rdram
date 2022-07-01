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
      <TabClickMenu
       v-if="tabClick && openTabs.length > 1" 
       :item="item"
        :openTabs="openTabs" />
      <DiagramOrTypeMenu
        :item="item"
        @onAddedDiagram="onAddedDiagram"
        @onRemovedDiagram="onRemovedDiagram"
        @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      />
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'
import TabClickMenu from './TabClickMenu.vue'
import DiagramOrTypeMenu from './DiagramOrTypeMenu.vue'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import Diagram from '@/domain/diagram/Diagram'

@Component({
  components: {
    TabClickMenu,
    DiagramOrTypeMenu,
  },
})
export default class ItemRightClickMenu extends Vue {
  visible = false
  positionX = 0
  positionY = 0
  tabClick = false

  item = ViewOrFolder.EMPTY

  @Prop({ required: true })
  readonly openTabs!: ViewOrFolder[]

  @Emit('onAddedDiagram')
  onAddedDiagram(_diagram: Diagram): void {}

  @Emit('onRemovedDiagram')
  onRemovedDiagram(_diagramId: number): void {}

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

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
