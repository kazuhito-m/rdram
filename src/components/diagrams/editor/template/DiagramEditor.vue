<template>
  <div class="diagram-pane-container">
    <!-- editor or menu parts -->
    <ResourceEditDialog
      ref="resourceEditDialog"
      :diagramId="diagram.id"
      @onUpdatedResource="onUpdatedResource"
    />
    <ResourceRightClickMenu 
      ref="resourceRightClickMenu"
      @onEditResource="onEditResource"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onDeleteResourceOnDiagram="onDeleteResourceOnDiagram"
      @onDeleteResourceOnProduct="onDeleteResourceOnProduct"
    />
    <!-- main pane -->
    <TwoPaneWithSlideBarLayout adsorptionRightWhenDoubleClick="true" defaultLeftPaneWidth="80%">
      <template #leftPane>
        <DiagramCanvas
          ref="diagramCanvas"
          :diagram="diagram"
          :usedResouceIds="usedResouceIds"
          :allResources="allResources"
          :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
          :removedRelationIdsForNotify="removedRelationIdsForNotify"
          :iconMap="iconMap"
          :eventAnalyzer="eventAnalyzer"
          :iconGenerators="iconGenerators"
          @onUpdateResources="onUpdateResources"
          @onMergePlacement="onMergePlacement"
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onShowWarnBar="onShowWarnBar"
          @onEditResource="onEditResource"
          @onShowResourceMenu="onShowResourceMenu"
          @onOpenResourceEditorWhenCreate="onOpenResourceEditorWhenCreate"
          @onShowConnectorMenu="onShowConnectorMenu"
        />
      </template>
      <template #rightPane>
        <AllOpenCloseOperationBar
          @onOpenAll="onOpenAllParet"
          @onCloseAll="onCloseAllParet"
        />
        <ResourceParet
          ref="resourceParet"
          :diagram="diagram"
          :allResources="allResources"
          :usedResouceIds="usedResouceIds"
          @onShowResourceMenu="onShowResourceMenu"
        />
      </template>
    </TwoPaneWithSlideBarLayout>
    <v-snackbar v-model="warnBar" timeout="2000">
      {{ warnMessage }}
      <template #action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="warnBar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import {
  Prop,
  Component,
  Vue,
  Inject,
  Emit
} from "nuxt-property-decorator";

import ResourceRightClickMenu from "./ResourceRightClickMenu.vue";
import TwoPaneWithSlideBarLayout from "@/components/twopane/TwoPaneWithSlideBarLayout.vue";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import ResourceParet from "@/components/diagrams/editor/template/paret/ResourceParet.vue";
import AllOpenCloseOperationBar from "@/components/main/tool/AllOpenCloseOperationBar.vue";
import ResourceEditDialog from "@/components/resource/ResourceEditDialog.vue";

import IconFontAndChar from "@/components/diagrams/icon/IconFontAndChar";
import EventAnalyzer from "@/components/diagrams/editor/template/event/EventAnalyzer";
import IconGenerator from "@/components/diagrams/icon/IconGenerator";

import StorageRepository from "@/domain/storage/StorageRepository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Placement from "@/domain/diagram/placement/Placement";
import Prompts from "~/components/main/Prompts";

@Component({
  components: {
    TwoPaneWithSlideBarLayout,
    DiagramCanvas,
    ResourceParet,
    AllOpenCloseOperationBar,
    ResourceEditDialog,
    ResourceRightClickMenu,
  }
})
export default class DiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagram!: Diagram;

  @Prop({ required: true })
  readonly allResources!: Resource[];

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId!: number;

  @Prop({ required: true })
  readonly removedRelationIdsForNotify!: string[]

  @Prop({ required: true })
  readonly eventAnalyzer!: EventAnalyzer;

  @Prop({ required: true })
  readonly iconGenerators!: IconGenerator<Resource>[];

  // Emits

  @Emit("onUpdateResources")
  onUpdateResources(): void {}

  @Emit("onOpendDiagramPropertiesEditor")
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit("onOpenDiagramOfResourceRelate")
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  @Emit("onRenamedResource")
  onRenamedResource(_src: Resource, _dest: Resource): void {}

  // this class properties

  @Inject()
  private repository!: StorageRepository;

  readonly usedResouceIds: number[] = [];
  readonly iconMap: { [key: string]: IconFontAndChar } = {};
  private readonly prompts = new Prompts();

  warnBar: boolean = false;
  warnMessage: string = "";

  // Vue events(life cycle events)

  created(): void {
  }

  mounted() {
    this.intializeIconCharMap();
  }

  // children component events.

  async onEditResource(resourceId: number): Promise<void> {
    const product = this.getCurrentProduct();
    const src = product.resources.of(resourceId);
    if (!src) return;

    const dest = await this.resourceEditDialog().showForModifyOf(resourceId);
    if (src.isEmpty()) return;

    this.onRenamedResource(src, dest);
  }

  onDeleteResourceOnDiagram(resourceId: number): void {
    const diagram = this.deleteResourceOnDiagram(resourceId);
    if (!diagram) return;
    this.onMergePlacement(diagram.placements);
  }

  onDeleteResourceOnProduct(resourceId: number): void {
    this.deleteResourceOnProduct(resourceId);
    this.onUpdateResources();
  }

  onMergePlacement(diffTarget: Placement[]) {
    const usedResouceIds = this.usedResouceIds;
    const idSet = new Set(diffTarget.map(p => p.resourceId));
    for (let i = usedResouceIds.length - 1; i >= 0; i--) {
      const usedResouceId = usedResouceIds[i];
      if (idSet.has(usedResouceId)) idSet.delete(usedResouceId);
      else usedResouceIds.splice(i, 1);
    }
    idSet.forEach(id => usedResouceIds.push(id));
  }

  onShowResourceMenu(resource: Resource, x: number, y: number): void {
    const diagramCanvas = this.$refs.diagramCanvas as DiagramCanvas;
    diagramCanvas.visibleConnectorMenu = false;

    const resourceMenu = this.$refs.resourceRightClickMenu as ResourceRightClickMenu;
    resourceMenu.show(resource, this.loadDiagram(), x, y); // TODO 右クリックメニューを表示する度にローカルストレージを呼ぶのをやめたい
  }

  onShowConnectorMenu(): void {
    const resourceMenu = this.$refs.resourceRightClickMenu as ResourceRightClickMenu;
    resourceMenu.close();
  }

  async onOpenResourceEditorWhenCreate(resourceType: ResourceType): Promise<void> {
    const resource = await this.resourceEditDialog().showForCreateNew(resourceType);
    if (resource.isEmpty()) return;
    this.onUpdatedResource(resource)
  }

  onUpdatedResource(resource: Resource): void {
    const diagramCanvas = this.$refs.diagramCanvas as DiagramCanvas;
    diagramCanvas.addPlacement(resource);
    this.onUpdateResources();
  }

  onShowWarnBar(text: string): void {
    this.warnMessage = text;
    this.warnBar = true;
  }

  /// All Open or Close operation bar.

  onOpenAllParet(): void {
    const resourceParet = this.$refs.resourceParet as ResourceParet;
    resourceParet.openAll();
  }

  onCloseAllParet(): void {
    const resourceParet = this.$refs.resourceParet as ResourceParet;
    resourceParet.closeAll();
  }

  // private methods.

  private getCurrentProduct(): Product {
    return this.repository.getCurrentProduct() as Product;
  }

  private loadDiagram(): Diagram {
    const product = this.getCurrentProduct();
    return product.diagrams.of(this.diagram.id) as Diagram;
  }

  private resourceEditDialog(): ResourceEditDialog {
    return this.$refs.resourceEditDialog as ResourceEditDialog;
  }

  private deleteResourceOnDiagram(resourceId: number): Diagram | null {
    const product = this.getCurrentProduct();
    const diagram = product.diagrams.of(this.diagram.id) as Diagram;
    const resource = product.resources.of(resourceId);
    if (!resource) return null;

    if (!this.confirmResourceDelete([resourceId], diagram)) return null;

    const modifiedDiagram = diagram.removeResouceOf(resource);
    const diagrams = product.diagrams.mergeByIdOf(modifiedDiagram);
    const modifiedProduct = product.withDiagrams(diagrams);

    this.repository.registerCurrentProduct(modifiedProduct);

    return modifiedDiagram;
  }

  private confirmResourceDelete(
    resourceIds: number[],
    diagram: Diagram
  ): boolean {
    const relationIds = diagram.relationIdsOfDeleteTargetResouce(resourceIds);
    if (relationIds.length === 0) return true;
    const message = `選択された要素には、他の要素への関連があります。それらを含め削除してよろしいですか。`;
    return confirm(message);
  }

  private deleteResourceOnProduct(resourceId: number): void {
    const product = this.getCurrentProduct();
    const resource = product.resources.of(resourceId);
    const thisDiagram = product.diagrams.of(this.diagram.id);
    if (!resource) return;

    const usings = product.diagrams.using(resource);
    const result = this.prompts.confirmDeleteResourceOnProduct(resource, usings, thisDiagram);
    if (!result) return;

    const modifiedProduct = product.removeOf(resource);

    this.repository.registerCurrentProduct(modifiedProduct);
  }

  private intializeIconCharMap(): void {
    this.diagram
      .availableResourceTypes()
      .map(resourceType => resourceType.iconKey)
      .forEach(i => (this.iconMap[i] = this.analyzeMdiIconCharOf(i)));
  }

  private analyzeMdiIconCharOf(iconKey: string): IconFontAndChar {
    const e = document.getElementById(iconKey) as HTMLDialogElement;
    const style = window.getComputedStyle(e, "::before") as CSSStyleDeclaration;
    const content = style.content;
    return {
      fontFamily: style.fontFamily,
      charactor: content.replace(/"/g, "")
    };
  }
}
</script>

<style type="sass" scoped>
.diagram-pane-container {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
