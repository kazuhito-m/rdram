<template>
  <v-layout>
    <TwoPainWithSlideBarLayout>
      <template #leftPain>
        <DiagramsTreePane
          ref="diagramsTreePane"
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onOpenDiagram="onOpenDiagram"
          @onDeleteDiagram="onDeleteDiagram"
        />
      </template>
      <template #rightPain>
        <DiagramsTabPane 
          ref="diagramsTabPane"
          :allResources="allResources"
          :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
          @onUpdateResoucesOnContainer="onUpdateResoucesOnContainer"
          @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
          @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
          @onOpenDiagramOfResourceRelate="onOpenDiagramOfResourceRelate"
          @onRenamedResource="onRenamedResource"
          @onChangeCurrentDiagram="onChangeCurrentDiagram"
          @onAllClosedDiagram="onAllClosedDiagram"
        />
      </template>
    </TwoPainWithSlideBarLayout>
    <DiagramPropertiesEditDialog
      :diagramId="propertiesEditorDiagramId"
      @onUpdatedDiagramProperties="onUpdatedDiagramProperties"
      @onClose="onCloseDiagramPropertiesEditDialog"
    />
    <DiagramTypeSelectorDialog ref="diagramTypeSelectorDialog"/>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "nuxt-property-decorator";
import TwoPainWithSlideBarLayout from "@/components/twopain/TwoPainWithSlideBarLayout.vue";
import DiagramsTreePane from "@/components/main/tree/DiagramsTreePane.vue";
import DiagramsTabPane from "@/components/main/tab/DiagramsTabPane.vue";
import DiagramPropertiesEditDialog from "@/components/diagrams/editor/DiagramPropertiesEditDialog.vue";
import DiagramTypeSelectorDialog from "@/components/diagrams/open/DiagramTypeSelectorDialog.vue";
import ViewOrFolder from "@/components/main/model/ViewOrFolder";
import Product from "@/domain/product/Product";
import Diagrams from "@/domain/diagram/Diagrams";
import Diagram from "@/domain/diagram/Diagram";
import Resource from "@/domain/resource/Resource";
import StorageRepository from "@/domain/storage/StorageRepository";

@Component({
  components: {
    TwoPainWithSlideBarLayout,
    DiagramsTreePane,
    DiagramsTabPane,
    DiagramPropertiesEditDialog,
    DiagramTypeSelectorDialog
  }
})
export default class extends Vue {
  @Inject()
  private readonly repository!: StorageRepository;

  propertiesEditorDiagramId = 0;
  lastPropertiesUpdatedDiagramId = 0;

  allResources: Resource[] = [];
  currentProduct?: Product;

  // this vue lyfecycle event.

  created(): void {
    const product = this.repository.getCurrentProduct();
    if (!product) return;

    this.currentProduct = product;

    product.resources.forEach(resource =>
      this.allResources.push(resource)
    );
  }

  // component events.

  onOpenDiagram(treeItem: ViewOrFolder): void {
    const tabPane = this.$refs.diagramsTabPane as DiagramsTabPane;
    tabPane.openDiagram(treeItem);
  }

  onDeleteDiagram(diagramId: number): void {
    const tabPane = this.$refs.diagramsTabPane as DiagramsTabPane;
    tabPane.closeTab(diagramId);
  }

  onUpdateResoucesOnContainer(): void {
    this.reloadAllResources();
  }

  onUpdatedDiagramProperties(diagram: Diagram): void {
    this.reflectTreeAndTabOf([diagram]);

    this.lastPropertiesUpdatedDiagramId = 0;
    this.$nextTick(() => {
      this.lastPropertiesUpdatedDiagramId = diagram.id;
    });
  }

  onCloseDiagramPropertiesEditDialog(): void {
    this.propertiesEditorDiagramId = 0;
  }

  onOpendDiagramPropertiesEditor(diagramId: number): void {
    this.propertiesEditorDiagramId = diagramId;
  }

  async onOpenDiagramOfResourceRelate(resourceId: number): Promise<void> {
    const dialog = this.$refs.diagramTypeSelectorDialog as DiagramTypeSelectorDialog;
    const diagramId = await dialog.show(resourceId);

    if (diagramId === DiagramTypeSelectorDialog.NOTHING_DIAGRAM_ID) return;

    const treePain = this.$refs.diagramsTreePane as DiagramsTreePane;
    treePain.activeItemAndFolderOpen(diagramId);
  }

  onRenamedResource(src: Resource, dest: Resource): void {
    this.reflectResourceRenameToDiagrams(src, dest);
  }

  onChangeCurrentDiagram(diagramId: number): void {
    const treePain = this.$refs.diagramsTreePane as DiagramsTreePane
    treePain.activeItemAndFolderOpen(diagramId)
  }

  onAllClosedDiagram(): void {
    this.clearSelectedOnTree()
  }

  // private methods.

  private reloadAllResources(): void {
    const product = this.repository.getCurrentProduct();
    if (!product) return;
    // 削除されていないか確認。
    const nowIdDictionary = product.resources.map(r => r.resourceId);
    const alreadyResources = this.allResources;
    for (let i = alreadyResources.length - 1; i >= 0; i--) {
      const alredy = alreadyResources[i];
      const foundIndex = nowIdDictionary.indexOf(alredy.resourceId);
      if (foundIndex < 0) {
        alreadyResources.splice(i, 1);
      } else {
        nowIdDictionary.splice(foundIndex, 1);
      }
    }

    // 残ったものは追加なので、追加する。
    product.resources
      .filter(r => nowIdDictionary.includes(r.resourceId))
      .forEach(r => alreadyResources.push(r));
  }

  private reflectResourceRenameToDiagrams(src: Resource, dest: Resource): void {
    if (src.name === dest.name) return;
    if (!Product.hasCorrespondingDiagramTypeOf(src)) return;

    const product = this.repository.getCurrentProduct();
    if (!product) return;

    const relateDaigrams = product.relateDiagramsOf(src);
    if (relateDaigrams.isEmpty()) return;

    if (!this.confirmDiagramRename(src, dest, relateDaigrams)) return;

    const renameDiagrams = relateDaigrams
      .map(diagram => diagram.renameOf(dest.name))
      .filter(d => {
        const exists = product.diagrams.existsSameOf(d);
        if (exists) alert(`名前を変更しようとした図\n  [${d.type.name}]:${d.name}\nが存在したため変更できませんでした。`)
        return !exists;
      });

    const upProduct = product.meageDiagramsByIdOf(renameDiagrams);
    this.repository.registerCurrentProduct(upProduct);

    this.reflectTreeAndTabOf(renameDiagrams);
  }

  private confirmDiagramRename(src: Resource, dest: Resource, relateDaigrams: Diagrams): boolean {
    let message = `変更前の名前 [${src.name}] に関連する図があります。\n\n`
    message+=relateDaigrams.map(d => `  [${d.type.name}]:${d.name}`).join("\n")
    message+=`\n\n合わせて名前を [${dest.name}] 変更しますか？`
    return confirm(message);
  }

  private reflectTreeAndTabOf(diagrams: Diagram[]): void {
    const treePain = this.$refs.diagramsTreePane as DiagramsTreePane;
    treePain.reflectTreeAndTabOf(diagrams);
  }

  private clearSelectedOnTree(): void {
    const treePain = this.$refs.diagramsTreePane as DiagramsTreePane;
    treePain.clearSelected();
  }
}
</script>


<style scoped>
.pain-container {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: initial;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: unset;
  margin-left: unset;
}

.left-pain {
  /* resizeを指定するため 'visible'以外を指定 */
  width: 20%;
  overflow: auto;
  text-align: left;
}

.right-pain {
  flex-grow: 1;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: col-resize;
}
</style>
