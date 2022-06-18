<template>
  <div>
    <SystemContextDiagramEditor
      v-if="is('システムコンテキスト図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <RequestModelDiagramEditor
      v-if="is('要求モデル図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <BusinessContextDiagramEditor
      v-if="is('ビジネスコンテキスト図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <BusinessUseCaseDiagramEditor
      v-if="is('ビジネスユースケース図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <BusinessFlowDiagramEditor
      v-if="is('業務フロー図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <UsageSceneDiagramEditor
      v-if="is('利用シーン図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <InfomationModelEditor
      v-if="is('情報モデル図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <StateModelEditor
      v-if="is('状態モデル図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <UseCaseCompositeDiagramEditor
      v-if="is('ユースケース複合図')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
    <VariationAndConditionDiagramEditor
      v-if="is('バリエーション・条件')"
      :diagramId="diagram.id"
      :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
      :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
      @onUpdateResources="onUpdateResoucesOnEditor"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject, Emit } from "nuxt-property-decorator";
import BusinessContextDiagramEditor from "@/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
import BusinessUseCaseDiagramEditor from "@/components/diagrams/editor/businessusecasediagram/BusinessUseCaseDiagramEditor.vue";
import BusinessFlowDiagramEditor from "@/components/diagrams/editor/businessflowdiagram/BusinessFlowDiagramEditor.vue";
import UsageSceneDiagramEditor from "@/components/diagrams/editor/usagescenediagram/UsageSceneDiagramEditor.vue";
import SystemContextDiagramEditor from "@/components/diagrams/editor/systemcontextdiagram/SystemContextDiagramEditor.vue";
import RequestModelDiagramEditor from "@/components/diagrams/editor/requrestmodel/RequestModelDiagramEditor.vue";
import InfomationModelEditor from "@/components/diagrams/editor/infomationmodel/InfomationModelEditor.vue";
import StateModelEditor from "@/components/diagrams/editor/statemodel/StateModelEditor.vue";
import UseCaseCompositeDiagramEditor from "@/components/diagrams/editor/usecasecompositediagram/UseCaseCompositeDiagramEditor.vue";
import VariationAndConditionDiagramEditor from "@/components/diagrams/editor/variationandcondition/VariationAndConditionDiagramEditor.vue";
import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";
import StorageRepository from "@/domain/storage/StorageRepository";

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
  }
})
export default class DiagramEditorContainer extends Vue {
  @Inject()
  private readonly repository!: StorageRepository;

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private allResourcesOnCurrentProduct?: Resource[];

  @Prop({ required: true })
  private lastPropertiesUpdatedDiagramId?: number;

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit("onOpenDiagramOfResourceRelate")
  private onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  private diagram?: Diagram;

  public created(): void {
    this.diagram = this.diagramOf(this.diagramId);
  }

  private onUpdateResoucesOnEditor(): void {
    console.log(`onUpdateResoucesOnEditor()`);
    this.onUpdateResoucesOnContainer();
  }

  @Emit("onUpdateResoucesOnContainer")
  private onUpdateResoucesOnContainer(): void {}

  private diagramOf(diagramId: number): Diagram | undefined {
    const product = this.repository.getCurrentProduct();
    if (!product) return undefined;
    return product.diagrams.of(diagramId);
  }

  public is(typeName: string): boolean {
    if (!this.diagram) return false;
    return this.diagram.type.name === typeName;
  }
}
</script>

<style>
</style>
