<template>
  <div class="diagram-pain-container">
    <ResourceRightClickMenu 
      ref="resourceRightClickMenu"
      @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
      @onDeleteResourceOnDiagram="onDeleteResourceOnDiagram"
      @onDeleteResourceOnProduct="onDeleteResourceOnProduct"
    />
    <TwoPainWithSlideBarLayout adsorptionLeftWhenDoubleClick="true" defaultLeftPainWidth="80%">
      <template #leftPain>
        <DiagramCanvas
          :diagramId="diagramId"
          :product="product"
          :usedResouceIds="usedResouceIds"
          :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
          :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
          :iconMap="iconMap"
          :eventAnalyzer="eventAnalyzer"
          :iconGenerators="iconGenerators"
          @onUpdateResources="onUpdateResources"
          @onMergePlacement="onMergePlacement"
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onShowWarnBar="onShowWarnBar"
          @onShowResourceMenu="onShowResourceMenu"
        />
      </template>
      <template #rightPain>
        <ResourceParet
          :diagramId="diagramId"
          :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
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
import TwoPainWithSlideBarLayout from "@/components/TwoPainWithSlideBarLayout.vue";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import ResourceParet from "@/components/diagrams/editor/template/paret/ResourceParet.vue";

import IconFontAndChar from "@/components/diagrams/icon/IconFontAndChar";
import EventAnalyzer from "@/components/diagrams/editor/template/event/EventAnalyzer";
import IconGenerator from "@/components/diagrams/icon/IconGenerator";

import StorageRepository from "@/domain/storage/StorageRepository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import Resource from "@/domain/resource/Resource";
import Placement from "@/domain/diagram/placement/Placement";

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    DiagramCanvas,
    ResourceParet,
    ResourceRightClickMenu,
  }
})
export default class DiagramEditor extends Vue {
  // Props

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private readonly allResourcesOnCurrentProduct!: Resource[];

  @Prop({ required: true })
  private readonly lastPropertiesUpdatedDiagramId!: number;

  @Prop({ required: true })
  private readonly eventAnalyzer!: EventAnalyzer;

  @Prop({ required: true })
  private readonly iconGenerators!: IconGenerator<Resource>[];

  // Emits

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit("onOpenDiagramOfResourceRelate")
  onOpenDiagramOfResourceRelate(_resourceId: number): void {}

  public created(): void {
    this.product = this.getCurrentProduct();
  }

  // this class properties

  @Inject()
  private repository!: StorageRepository;

  private readonly usedResouceIds: number[] = [];
  private readonly iconMap: { [key: string]: IconFontAndChar } = {};
  private product!: Product;

  private warnBar: boolean = false;
  private warnMessage: string = "";

  // Vue events(life cycle events)

  public mounted() {
    this.intializeIconCharMap(this.diagram());
  }

  private onShowWarnBar(text: string): void {
    this.warnMessage = text;
    this.warnBar = true;
  }

  // children component events.

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
    const menu = this.$refs.resourceRightClickMenu as ResourceRightClickMenu;
    menu.show(resource, this.diagram(), x, y); // TODO 右クリックメニューを表示する度にローカルストレージを呼ぶのをやめたい
  }

  // private methods.

  private diagram(): Diagram {
    const product = this.getCurrentProduct();
    return product.diagrams.of(this.diagramId) as Diagram;
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

  public confirmResourceDelete(
    resourceIds: number[],
    diagram: Diagram
  ): boolean {
    const relationIds = diagram.relationIdsOfDeleteTargetResouce(resourceIds);
    if (relationIds.length === 0) return true;
    const message = `選択された要素には、他の要素への関連があります。それらを含め削除してよろしいですか。`;
    return confirm(message);
  }

  private getCurrentProduct(): Product {
    return this.repository.getCurrentProduct() as Product;
  }

  private deleteResourceOnProduct(resourceId: number): void {
    const product = this.getCurrentProduct();
    const resource = product.resources.of(resourceId);
    if (!resource) return;

    const usedCount = product.diagrams.countOfUsingOf(resource);
    if (usedCount > 0) {
      const message =
        `「${resource.name}」は、現在 ${usedCount}個 の図で参照されています。\n` +
        "削除する場合、それらの図のアイコンや関連のすべては削除されます。\n" +
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