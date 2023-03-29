<template>
  <div>
    <IconExplorerView v-if="is('アイコン一覧')" />
    <ScreenTransitionView v-if="is('画面遷移')" />
    <UcScreenInfoSatisfactionView
      v-if="is('UCと画面/情報の充足')"
      ref="ucSatisfactionView"
      @onRenamedResource="onRenamedResource"
      @onOpenDiagram="onOpenDiagram"
      @onUpdateResources="onUpdateResources"
      @onRemovedRelations="onRemovedRelations"
      @onRemovedResourceOnDiagram="onRemovedResourceOnDiagram"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'nuxt-property-decorator'
import IconExplorerView from '@/components/analysis/iconexplorer/IconExplorerView.vue'
import ScreenTransitionView from '@/components/analysis/screentransition/ScreenTransitionView.vue'
import UcScreenInfoSatisfactionView from '@/components/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfactionView.vue'
import ViewOrFoldersTemplate from '@/components/main/model/ViewOrFoldersTemplate'
import Resource from '@/domain/resource/Resource'

@Component({
  components: {
    IconExplorerView,
    ScreenTransitionView,
    UcScreenInfoSatisfactionView,
  },
})
export default class AnalysisContainer extends Vue {
  @Prop({ required: true })
  readonly analysisViewId!: number

  @Prop()
  readonly activeViewId!: number

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onUpdateResources')
  onUpdateResources(): void {}

  @Emit('onOpenDiagram')
  onOpenDiagram(_diagramId: number): void {}

  @Emit('onRemovedRelations')
  onRemovedRelations(_relationIds: string[]):void {}

  @Emit('onRemovedResourceOnDiagram')
  onRemovedResourceOnDiagram(_resouceId: number, _diagramId: number): void {}

  @Watch('activeViewId')
  onChangeActiveView(): void {
    if (this.analysisViewId !== this.activeViewId) return
    if (!this.is('UCと画面/情報の充足')) return

    const view = this.$refs.ucSatisfactionView as UcScreenInfoSatisfactionView
    view.onActive()
  }

  is(typeName: string): boolean {
    const item = ViewOrFoldersTemplate.analysisNameOf(typeName)
    if (!item) return false
    return this.analysisViewId === item.id
  }
}
</script>

<style></style>
