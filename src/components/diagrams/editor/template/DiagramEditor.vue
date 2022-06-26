<template>
  <div class="diagram-pain-container">
    <!-- editor or menu parts -->
    <ResourceEditDialog
      ref="resourceEditDialog"
      :diagramId="diagramId"
      @onUpdatedResource="onUpdatedResource"
    />
    <ResourceRightClickMenu 
      ref="resourceRightClickMenu"
      @onEditResource="onEditResource"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onDeleteResourceOnDiagram="onDeleteResourceOnDiagram"
      @onDeleteResourceOnProduct="onDeleteResourceOnProduct"
    />
    <!-- main pain -->
    <TwoPainWithSlideBarLayout adsorptionRightWhenDoubleClick="true" defaultLeftPainWidth="80%">
      <template #leftPain>
        <DiagramCanvas
          ref="diagramCanvas"
          :diagramId="diagramId"
          :product="product"
          :usedResouceIds="usedResouceIds"
          :allResources="allResources"
          :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
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
      <template #rightPain>
        <ResourceParet
          :diagramId="diagramId"
          :allResources="allResources"
          :usedResouceIds="usedResouceIds"
          :product="product"
          @onShowResourceMenu="onShowResourceMenu"
        />
      </template>
    </TwoPainWithSlideBarLayout>
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
import TwoPainWithSlideBarLayout from "@/components/twopain/TwoPainWithSlideBarLayout.vue";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import ResourceParet from "@/components/diagrams/editor/template/paret/ResourceParet.vue";
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

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    DiagramCanvas,
    ResourceParet,
    ResourceEditDialog,
    ResourceRightClickMenu,
  }
})
export default class DiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  readonly diagramId!: number;

  @Prop({ required: true })
  readonly allResources!: Resource[];

  @Prop({ required: true })
  readonly lastPropertiesUpdatedDiagramId!: number;

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
  product!: Product;

  warnBar: boolean = false;
  warnMessage: string = "";

  // Vue events(life cycle events)

  created(): void {
    this.product = this.getCurrentProduct();
  }

  mounted() {
    this.intializeIconCharMap(this.diagram());
  }

  // children component events.

  async onEditResource(resourceId: number): Promise<void> {
    const resource = await this.resourceEditDialog().showForModifyOf(resourceId);
    if (resource.isEmpty()) return;

    const srcResource = this.reflectResourcesOnViewModel(resource);
    if (!srcResource) return;

    this.onRenamedResource(srcResource, resource);
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
    resourceMenu.show(resource, this.diagram(), x, y); // TODO 右クリックメニューを表示する度にローカルストレージを呼ぶのをやめたい
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

  // private methods.

  private getCurrentProduct(): Product {
    return this.repository.getCurrentProduct() as Product;
  }

  private diagram(): Diagram {
    const product = this.getCurrentProduct();
    return product.diagrams.of(this.diagramId) as Diagram;
  }

  private resourceEditDialog(): ResourceEditDialog {
    return this.$refs.resourceEditDialog as ResourceEditDialog;
  }

  private deleteResourceOnDiagram(resourceId: number): Diagram | null {
    const product = this.getCurrentProduct();
    const diagram = product.diagrams.of(this.diagramId) as Diagram;
    const resource = product.resources.of(resourceId);
    if (!resource) return null;

    if (!this.confirmResourceDelete([resourceId], diagram)) return null;

    const modifiedDiagram = diagram.removeResouceOf(resource);
    const diagrams = product.diagrams.mergeByIdOf(modifiedDiagram);
    const modifiedProduct = product.withDiagrams(diagrams);

    this.repository.registerCurrentProduct(modifiedProduct);
    this.product = modifiedProduct;

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
    const thisDiagram = product.diagrams.of(this.diagramId);
    if (!resource) return;

    const usings = product.diagrams.using(resource);
    if (usings.length > 0) {
      let diagramInfo = `${usings.length}個の図`;
      if (usings.length === 1) {
        const diagram = usings.last();
        diagramInfo = diagram.id === thisDiagram?.id
          ? "この図のみ"
          : `「${diagram.name}(${diagram.type.name})」`
      }
      const message =
        `「${resource.name}」は現在、${diagramInfo}で参照されています。\n` +
        "削除する場合、図のアイコンや関連のすべては削除されます。\n" +
        `${resource.name} を削除してもよろしいですか。`;
      if (!window.confirm(message)) return;
    }

    const modifiedProduct = product.removeOf(resource);

    this.repository.registerCurrentProduct(modifiedProduct);
    this.product = modifiedProduct;
  }

  private intializeIconCharMap(diagram: Diagram): void {
    diagram
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

  private reflectResourcesOnViewModel(resource: Resource): Resource | null {
    const resources = this.allResources;
    const i = resources
      .findIndex(r => r.resourceId === resource.resourceId);
    if (i < 0) return null;

    const beforeResoruce = resources[i];
    resources.splice(i, 1);
    resources.push(resource);
    return beforeResoruce;
  }

  private dumpDiagram(diagram: Diagram, prefix: string) {
    console.log(`---- ${prefix} Diagram情報 start ----`);
    diagram.placements.forEach(i => console.log(`位置;${i.resourceId}`));
    diagram.allRelations().forEach(i =>
      console.log(`線;${i.id}, from:${i.fromResourceId}, to:${i.toResourceId}`)
    );
    console.log(`---- ${prefix} Diagram情報 end ----`);
  }
}
</script>

<style type="sass" scoped>
.diagram-pain-container {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>