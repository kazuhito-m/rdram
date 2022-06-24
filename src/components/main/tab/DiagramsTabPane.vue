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
      <v-tab v-for="item in openTabs" :key="item.id" class="tab-title">
        <v-tooltip bottom open-delay="1000">
          <template #activator="{ on, attrs }">
            <v-icon v-if="item.iconKey" v-bind="attrs" v-on="on">{{
              item.iconKey
            }}</v-icon>
          </template>
          <span>{{ item.iconCaption }}</span>
        </v-tooltip>
        {{ item.name }}
        <v-btn :data-item-id="item.id" dark small icon @click="onClickCloseTab">
          <v-icon dark :data-item-id="item.id">mdi-close-box</v-icon>
        </v-btn>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTabIndex" class="dialog-editor-container">
      <v-tab-item
        v-for="item in openTabs"
        :key="item.id"
        class="dialog-editor-tab-item"
      >
        <DiagramEditorContainer
          :diagram-id="item.id"
          :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
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
import Diagram from '~/domain/diagram/Diagram'
import Resource from '~/domain/resource/Resource'
import TreeItem from '~/presentation/tree/TreeItem'

@Component
export default class DiagramRightClickMenu extends Vue {
  currentTabIndex: number | null = null
  openTabs: TreeItem[] = []

  // Props

  @Prop({ required: true })
  allResourcesOnCurrentProduct: Resource[] = []

  @Prop({ required: true })
  lastPropertiesUpdatedDiagramId = 0

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

  // ----

  @Emit('onChangeCurrentDiagram')
  onChangeCurrentDiagram(_diagramId: number): void {}

  @Emit('onAllClosedDiagram')
  onAllClosedDiagram(): void {}

  // component events.

  onChangeActiveTab(newTabIndex: number) {
    if (newTabIndex === undefined) return
    const currentTabItem = this.openTabs[newTabIndex]
    if (!currentTabItem) return

    // const treePain = this.$refs.diagramsTreePane as DiagramsTreePane
    // treePain.activeItemAndFolderOpen(currentTabItem.id)

    this.onChangeCurrentDiagram(currentTabItem.id)
  }

  onClickCloseTab(event: MouseEvent) {
    if (!event.target) return
    const element = event.target as HTMLElement
    const data = element.getAttribute('data-item-id')
    if (!data) return
    const tabItemId = parseInt(data, 10)

    this.closeTab(tabItemId)
  }

  private closeTab(tabItemId: number): boolean {
    const tabs = this.openTabs
    const tabIndex = tabs.findIndex((tabItem) => tabItem.id === tabItemId)
    if (tabIndex < 0) return false
    tabs.splice(tabIndex, 1)
    // if (tabs.length === 0) this.clearSelectedOnTree()

    if (tabs.length === 0) this.onAllClosedDiagram()
    return true
  }

  // public method.

  public openDiagram(treeItem: TreeItem): void {
    const diagramId = treeItem.id
    const exists = this.openTabs.some((tab) => tab.id === diagramId)
    if (!exists) this.openTabs.push(treeItem)
    const newTabIndex = this.openTabs.findIndex(
      (tabItem) => tabItem.id === diagramId
    )
    this.currentTabIndex = newTabIndex
    this.onChangeActiveTab(newTabIndex)
  }
}
</script>
<style scoped></style>
