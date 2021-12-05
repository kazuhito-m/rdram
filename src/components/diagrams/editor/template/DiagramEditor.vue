<template>
  <div class="diagram-pain-container">
    <TwoPainWithSlideBarLayout adsorptionLeftWhenDoubleClick="true" defaultLeftPainWidth="80%">
      <template v-slot:leftPain>
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
        />
      </template>
      <template v-slot:rightPain>
        <ResourceParet
          :diagramId="diagramId"
          :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
          :usedResouceIds="usedResouceIds"
          :product="product"
          @onDeleteResourceOnDiagram="onDeleteResourceOnDiagram"
          @onDeleteResourceOnProduct="onDeleteResourceOnProduct"
        />
      </template>
    </TwoPainWithSlideBarLayout>

    <v-snackbar v-model="warnBar" timeout="2000">
      {{ warnMessage }}
      <template v-slot:action="{ attrs }">
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
  Emit,
  Watch
} from "nuxt-property-decorator";
import TwoPainWithSlideBarLayout from "@/components/TwoPainWithSlideBarLayout.vue";
import DiagramCanvas from "@/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import ResourceParet from "@/components/diagrams/editor/template/paret/ResourceParet.vue";
import { ResizeObserver } from "resize-observer";
import { ResizeObserverEntry } from "resize-observer/lib/ResizeObserverEntry";

import draw2d, { Figure, command } from "draw2d";

import IconFontAndChar from "@/components/diagrams/icon/IconFontAndChar";
import EventAnalyzer from "@/components/diagrams/editor/template/event/EventAnalyzer";
import IconGenerator from "@/components/diagrams/icon/IconGenerator";

import StrageRepository from "@/domain/strage/StrageRepository";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Placement from "@/domain/diagram/placement/Placement";
import Relation from "@/domain/relation/Relation";

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    DiagramCanvas,
    ResourceParet
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
  private onOpendDiagramPropertiesEditor(diagramId: number): void {}

  public created(): void {
    this.product = this.getCurrentProduct();
    const diagramId = this.diagramId;
  }

  // this class properties

  @Inject()
  private repository!: StrageRepository;

  private readonly usedResouceIds: number[] = [];
  private readonly iconMap: { [key: string]: IconFontAndChar } = {};
  private product!: Product;

  private warnBar: boolean = false;
  private warnMessage: string = "";

  // Vue events(life cycle events)

  public mounted() {
    const diagram = this.product.diagrams.of(this.diagramId) as Diagram;
    this.intializeIconCharMap(diagram);
  }

  private onShowWarnBar(text: string): void {
    this.warnMessage = text;
    this.warnBar = true;
  }

  // children component events.

  private onDeleteResourceOnDiagram(resourceId: number): void {
    const diagram = this.deleteResourceOnDiagram(resourceId);
    if (!diagram) return;
    this.onMergePlacement(diagram.placements);
  }

  private onDeleteResourceOnProduct(resourceId: number): void {
    this.deleteResourceOnProduct(resourceId);
    this.onUpdateResources();
  }

  private onMergePlacement(diffTarget: Placement[]) {
    const usedResouceIds = this.usedResouceIds;
    const idSet = new Set(diffTarget.map(p => p.resourceId));
    for (let i = usedResouceIds.length - 1; i >= 0; i--) {
      const usedResouceId = usedResouceIds[i];
      if (idSet.has(usedResouceId)) idSet.delete(usedResouceId);
      else usedResouceIds.splice(i, 1);
    }
    idSet.forEach(id => usedResouceIds.push(id));
  }

  // private methods.

  private deleteResourceOnDiagram(resourceId: number): Diagram | null {
    const product = this.getCurrentProduct();
    const diagram = product.diagrams.of(this.diagramId) as Diagram;
    const resource = product.resources.of(resourceId);
    if (!resource) return null;

    if (!this.confirmResourceDelete([resourceId], diagram)) return null;

    const modifiedDiagram = diagram.removeResouceOf(resource);
    const diagrams = product.diagrams.meage(modifiedDiagram);
    const modifiedProduct = product.with(diagrams);

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
        `「${resource.name}」は、現在 ${usedCount}個 のダイアグラムで参照されています。\n` +
        "削除する場合、それらのダイアログのアイコンや関連のすべては削除されます。\n" +
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
    diagram.relations.forEach(i =>
      console.log(`線;${i.id}, from:${i.fromResourceId}, to:${i.toResourceId}`)
    );
    console.log(`---- ${prefix} Diagram情報 end ----`);
  }
}

interface Paret {
  resourceType: ResourceType;
  resources: Resource[];
}

interface CanvasSelections {
  figures: Figure[];
  connections: any[];
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