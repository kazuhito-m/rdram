<template>
  <div class="tabview-container">
    <v-tabs
      v-show="openTabs.length > 0"
      v-model="currentTabIndex"
      background-color="primary"
      show-arrows
      dark
    >
      <v-tab
        v-for="item in openTabs"
        :key="item.id"
        :data-item-id="item.id"
        class="tab-title"
        @click.right.prevent="onRightClickTabItem"
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
        <DiagramEditorContainer
          v-if="item.isDiagram()"
          :diagramId="item.id"
          :allResources="allResources"
          :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
          :catchedUISyncSignals="catchedUISyncSignals"
          @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
          @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
          @onRenamedResource="onRenamedResource"
        />

        <AnalysisContainer
          v-if="item.isAnalysis()"
          :analysisViewId="item.id"
          :activeViewId="activeViewId"
          @onRenamedResource="onRenamedResource"
          @onOpenDiagram="onOpenDiagram"
          @onUpdateResources="onUpdateResoucesOnContainer"
          @onRemovedRelations="onRemovedRelations"
          @onRemovedResourceOnDiagram="onRemovedResourceOnDiagram"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'nuxt-property-decorator'
import DiagramEditorContainer from '@/components/diagrams/editor/DiagramEditorContainer.vue'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'
import AnalysisContainer from '@/components/analysis/AnalysisContainer.vue'
import UISyncSignal from '~/components/diagrams/editor/template/uisync/UISyncSignal'

@Component({
  components: {
    DiagramEditorContainer,
    AnalysisContainer,
  },
})
export default class DiagramsTabPane extends Vue {
  currentTabIndex: number | null = null
  activeViewId: number = 0
  readonly catchedUISyncSignals: UISyncSignal[] = [];

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

  @Emit('onOpenDiagram')
  onOpenDiagram(_diagramId: number): void {}

  /// open/close editor.

  @Emit('onChangeCurrentDiagram')
  onChangeCurrentDiagram(_diagramId: number): void {}

  /// click

  @Emit('onRightClick')
  onRightClick(_item: ViewOrFolder, _x: number, _y: number): void {}

  // component events.

  @Watch('currentTabIndex')
  onChangeActiveTab() {
    const newTabIndex = this.currentTabIndex
    if (newTabIndex === null) return
    const currentTabItem = this.openTabs[newTabIndex]
    if (!currentTabItem) return

    this.activeViewId = currentTabItem.id
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

  onRemovedRelations(relationIds: string[]):void {
    relationIds.forEach(i => console.log('削除された関連ID:' + i))

    this.catchedUISyncSignals.length = 0
    const signals = UISyncSignal.deleteConnectionsOf(relationIds);
    this.catchedUISyncSignals.push(...signals)
  }

  onRemovedResourceOnDiagram(resourceId: number, diagramId: number): void {
    this.catchedUISyncSignals.length = 0
    const signal = UISyncSignal.deleteIconOf(resourceId, diagramId);
    this.catchedUISyncSignals.push(signal)
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
  }

  closeTab(tabItemId: number): boolean {
    const tabs = this.openTabs
    const tabIndex = tabs.findIndex((tabItem) => tabItem.id === tabItemId)
    if (tabIndex < 0) return false
    tabs.splice(tabIndex, 1)
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
    return foundItem || ViewOrFolder.EMPTY
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
