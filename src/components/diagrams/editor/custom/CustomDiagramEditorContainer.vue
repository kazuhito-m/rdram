<template>
  <div>
    <FreestyleDiagramEditor
      v-if="is('フリースタイル図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      :removedRelationIdsForNotify="removedRelationIdsForNotify"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'nuxt-property-decorator'
import FreestyleDiagramEditor from '@/components/diagrams/editor/custom/freestyle/FreestyleDiagramEditor.vue'
import UISyncSignal from '@/components/diagrams/editor/template/uisync/UISyncSignal'
import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'

@Component({
  components: {
    FreestyleDiagramEditor,
  },
})
export default class CustomDiagramEditorContainer extends Vue {
  @Prop({ required: true })
  readonly diagram!: Diagram

  @Prop({ required: true })
  readonly allResources?: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  @Prop({ required: true })
  readonly removedRelationIdsForNotify!: UISyncSignal[]

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onUpdateResoucesOnContainer')
  onUpdateResoucesOnContainer(): void {}

  is(typeName: string): boolean {
    return this.diagram.type.name === typeName
  }
}
</script>

<style></style>
