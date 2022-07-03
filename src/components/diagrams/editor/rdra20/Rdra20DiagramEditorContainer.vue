<template>
  <div>
    <SystemContextDiagramEditor
      v-if="is('システムコンテキスト図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <RequestModelDiagramEditor
      v-if="is('要求モデル図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <BusinessContextDiagramEditor
      v-if="is('ビジネスコンテキスト図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <BusinessUseCaseDiagramEditor
      v-if="is('ビジネスユースケース図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <BusinessFlowDiagramEditor
      v-if="is('業務フロー図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <UsageSceneDiagramEditor
      v-if="is('利用シーン図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <InfomationModelEditor
      v-if="is('情報モデル図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <StateModelEditor
      v-if="is('状態モデル図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <UseCaseCompositeDiagramEditor
      v-if="is('ユースケース複合図')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
    <VariationAndConditionDiagramEditor
      v-if="is('バリエーション・条件')"
      :diagram="diagram"
      :allResources="allResources"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnContainer"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onRenamedResource="onRenamedResource"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Emit } from 'nuxt-property-decorator'
import BusinessContextDiagramEditor from '@/components/diagrams/editor/rdra20/businesscontextdiagram/BusinessContextDiagramEditor.vue'
import BusinessUseCaseDiagramEditor from '@/components/diagrams/editor/rdra20/businessusecasediagram/BusinessUseCaseDiagramEditor.vue'
import BusinessFlowDiagramEditor from '@/components/diagrams/editor/rdra20/businessflowdiagram/BusinessFlowDiagramEditor.vue'
import UsageSceneDiagramEditor from '@/components/diagrams/editor/rdra20/usagescenediagram/UsageSceneDiagramEditor.vue'
import SystemContextDiagramEditor from '@/components/diagrams/editor/rdra20/systemcontextdiagram/SystemContextDiagramEditor.vue'
import RequestModelDiagramEditor from '@/components/diagrams/editor/rdra20/requrestmodel/RequestModelDiagramEditor.vue'
import InfomationModelEditor from '@/components/diagrams/editor/rdra20/infomationmodel/InfomationModelEditor.vue'
import StateModelEditor from '@/components/diagrams/editor/rdra20/statemodel/StateModelEditor.vue'
import UseCaseCompositeDiagramEditor from '@/components/diagrams/editor/rdra20/usecasecompositediagram/UseCaseCompositeDiagramEditor.vue'
import VariationAndConditionDiagramEditor from '@/components/diagrams/editor/rdra20/variationandcondition/VariationAndConditionDiagramEditor.vue'
import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'

@Component({
  components: {
    SystemContextDiagramEditor,
    RequestModelDiagramEditor,
    BusinessContextDiagramEditor,
    BusinessUseCaseDiagramEditor,
    BusinessFlowDiagramEditor,
    UsageSceneDiagramEditor,
    InfomationModelEditor,
    StateModelEditor,
    UseCaseCompositeDiagramEditor,
    VariationAndConditionDiagramEditor,
  },
})
export default class Rdra20DiagramEditorContainer extends Vue {
  @Prop({ required: true })
  readonly diagram!: Diagram

  @Prop({ required: true })
  readonly allResources?: Resource[]

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId?: number

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onOpenDiagramOfResourceRelate')
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit('onRenamedResource')
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onUpdateResoucesOnContainer')
  onUpdateResoucesOnContainer(): void {}

  is(typeName: string): boolean {
    if (!this.diagram) return false
    return this.diagram.type.name === typeName
  }
}
</script>

<style></style>
