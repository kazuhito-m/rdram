<template>
  <div>
    <IconExplorerView v-if="is('アイコン一覧')" />
    <ScreenTransitionView v-if="is('画面遷移')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import IconExplorerView from '@/components/analysis/iconexplorer/IconExplorerView.vue'
import ScreenTransitionView from '@/components/analysis/screentransition/ScreenTransitionView.vue'
import ViewOrFoldersTemplate from '@/components/main/model/ViewOrFoldersTemplate'

@Component({
  components: {
    IconExplorerView,
    ScreenTransitionView,
  },
})
export default class AnalysisContainer extends Vue {
  @Prop({ required: true })
  readonly analysisViewId!: number

  is(typeName: string): boolean {
    const item = ViewOrFoldersTemplate.analysisNameOf(typeName)
    if (!item) return false
    return this.analysisViewId === item.id
  }
}
</script>

<style></style>
