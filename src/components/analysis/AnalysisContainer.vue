<template>
  <div>
    <IconExplorerView v-if="is('アイコン一覧')" />
    <ScreenTransitionView v-if="is('画面遷移')" />
    <UcScreenInfoSatisfactionView
      v-if="is('UCと画面/情報の充足')"
      @onRenamedResource="onRenamedResource"
      @onOpenDiagram="onOpenDiagram"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
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

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onOpenDiagram')
  onOpenDiagram(_diagramId: number): void {}

  is(typeName: string): boolean {
    const item = ViewOrFoldersTemplate.analysisNameOf(typeName)
    if (!item) return false
    return this.analysisViewId === item.id
  }
}
</script>

<style></style>
