<template>
  <div class="tabview-container">
    <v-tabs
      v-show="openTabs.length > 0"
      v-model="currentTabIndex"
      background-color="primary"
      show-arrows
      dark
      @change="onChangeActiveTab"
    >
      <v-tab
        v-for="item in openTabs"
        :key="item.id"
        :data-item-id="item.id"
        @click.right.prevent="onRightClickTabItem"
        class="tab-title"
      >
        <v-tooltip bottom open-delay="1000">
          <template #activator="{ on, attrs }">
            <v-icon v-if="item.iconKey" v-bind="attrs" v-on="on">{{
              item.iconKey
            }}</v-icon>
          </template>
          <span>{{ item.iconCaption }}</span>
        </v-tooltip>
        {{ item.name }}
        <v-btn dark small icon @click="onClickCloseTab">
          <v-icon dark>mdi-close-box</v-icon>
        </v-btn>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTabIndex" class="dialog-editor-container">
      <v-tab-item
        v-for="item in openTabs"
        :key="item.id"
        class="dialog-editor-tab-item"
      >
        <Rdra20DiagramEditorContainer
          :diagram-id="item.id"
          :allResources="allResources"
          :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
          @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
          @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
          @onRenamedResource="onRenamedResource"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'
import Rdra20DiagramEditorContainer from '@/components/diagrams/Rdra20DiagramEditorContainer.vue'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'
import { assertBreakStatement } from '@babel/types'

@Component({
  components: {
    Rdra20DiagramEditorContainer,
  },
})
export default class DiagramRightClickMenu extends Vue {
  currentTabIndex: number | null = null

  // Props

  @Prop({ required: true })
  readonly openTabs!: ViewOrFolder[]

  @Prop({ required: true })
  readonly allResources?: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  // emits

  @Emit('onUpdateResoucesOnContainer')
  onUpdateResoucesOnContainer(): void {}

  // XXX なんとなく「無限ループの匂いがする」ので要確認
  @Emit('onUpdatedDiagramProperties')
  onUpdatedDiagramProperties(_diagram: Diagram): void {}

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  /// open/close editor.

  @Emit('onChangeCurrentDiagram')
  onChangeCurrentDiagram(_diagramId: number): void {}

  @Emit('onAllClosedDiagram')
  onAllClosedDiagram(): void {}

  /// click

  @Emit('onRightClick')
  onRightClick(_item: ViewOrFolder, _x: number, _y: number): void {}

  // component events.

  onChangeActiveTab(newTabIndex: number) {
    if (newTabIndex === undefined) return
    const currentTabItem = this.openTabs[newTabIndex]
    if (!currentTabItem) return

    this.onChangeCurrentDiagram(currentTabItem.id)
  }

  onClickCloseTab(event: MouseEvent) {
    const clickItem = this.itemOf(event)
    if (clickItem.isEmpty()) return
    this.closeTab(clickItem.id)
  }

  onRightClickTabItem(event: MouseEvent): void {
    const clickItem = this.itemOf(event)
    if (clickItem.isEmpty()) return
    this.onRightClick(clickItem, event.x, event.y)
  }

  // public methods.

  openDiagram(treeItem: ViewOrFolder): void {
    const diagramId = treeItem.id
    const exists = this.openTabs.some((tab) => tab.id === diagramId)
    if (!exists) this.openTabs.push(treeItem)
    const newTabIndex = this.openTabs.findIndex(
      (tabItem) => tabItem.id === diagramId
    )
    this.currentTabIndex = newTabIndex
    this.onChangeActiveTab(newTabIndex)
  }

  closeTab(tabItemId: number): boolean {
    const tabs = this.openTabs
    const tabIndex = tabs.findIndex((tabItem) => tabItem.id === tabItemId)
    if (tabIndex < 0) return false
    tabs.splice(tabIndex, 1)

    if (tabs.length === 0) this.onAllClosedDiagram()
    return true
  }

  // private methods.

  private itemOf(clickEvent: MouseEvent): ViewOrFolder {
    clickEvent.preventDefault()
    if (!clickEvent.target) return ViewOrFolder.EMPTY
    let element: HTMLElement | null = clickEvent.target as HTMLElement
    let data: string | null = null
    do {
      data = element!.getAttribute('data-item-id')
      if (data) break
    } while ((element = element.parentElement))
    if (!data) return ViewOrFolder.EMPTY
    const tabItemId = parseInt(data, 10)
    const foundItem = this.openTabs.find((tab) => tab.id === tabItemId)
    return foundItem ? foundItem : ViewOrFolder.EMPTY
  }
}
</script>
<style scoped>
.tabview-container {
  min-height: 0%;
  height: 100%;
}

.tab-title {
  text-transform: none;
}

.dialog-editor-container {
  position: relative;
  width: 100%;
  height: 97%;
}

.dialog-editor-tab-item {
  transition: none;
}
</style>
