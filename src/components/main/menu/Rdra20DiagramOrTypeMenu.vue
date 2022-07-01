<template>
  <div>
    <v-list dence>
      <v-list-item v-if="isFolder" link @click="onClickMenuAddDiagram">
        <v-list-item-title>図の追加...</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="isDiagram"
        link
        @click="onClickMenuEditDiagramProperties"
      >
        <v-list-item-title>{{ diagramName }} の設定...</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isDiagram" link @click="onClickMenuCopyDiagram">
        <v-list-item-title>{{ diagramName }} のコピー...</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isDiagram" link @click="onClickMenuRemoveDiagram">
        <v-list-item-title>{{ diagramName }} の削除</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isDiagram" link @click="onClickMenuExportDiagram">
        <v-list-item-title>{{ diagramName }} のエクスポート</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject, Emit } from 'nuxt-property-decorator'
import ViewOrFolder from '@/components/main/model/ViewOrFolder'
import Prompts from '@/components/main/Prompts'
import StorageRepository from '@/domain/storage/StorageRepository'
import Diagram from '@/domain/diagram/Diagram'
import DiagramType from '@/domain/diagram/type/DiagramType'
import Product from '@/domain/product/Product'
import DiagramExportService from '@/application/service/diagram/export/DiagramExportService'

@Component
export default class Rdra20DiagramOrTypeMenu extends Vue {
  private readonly prompts = new Prompts()

  @Inject()
  private readonly repository!: StorageRepository

  @Inject()
  private readonly diagramExportService!: DiagramExportService

  @Prop()
  readonly item!: ViewOrFolder

  @Emit('onAddedDiagram')
  private onAddedDiagram(_diagram: Diagram): void {}

  @Emit('onRemovedDiagram')
  private onRemovedDiagram(_diagramId: number): void {}

  @Emit('onOpendDiagramPropertiesEditor')
  private onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  onClickMenuAddDiagram(): void {
    const item = this.item
    const diagramType = item.isCustomDiagramTypeFolder()
      ? item.customDiagramType()
      : item.rdra20DiagramType()
    const diagram = this.addDiagram(diagramType)
    if (!diagram) return
    this.onAddedDiagram(diagram)
  }

  onClickMenuCopyDiagram(): void {
    const diagram = this.copyDiagram(this.item.id)
    if (!diagram) return
    this.onAddedDiagram(diagram)
  }

  onClickMenuRemoveDiagram(): void {
    if (!this.removeDiagram(this.item.id)) return
    this.onRemovedDiagram(this.item.id)
  }

  onClickMenuEditDiagramProperties(): void {
    this.onOpendDiagramPropertiesEditor(this.item.id)
  }

  onClickMenuExportDiagram(): void {
    this.diagramExportService!.downloadExportFileOnClient(this.item.id)
  }

  get diagramName(): string {
    return this.item.name
  }

  get isFolder(): boolean {
    const item = this.item
    return item.isRdra20DiagramTypeFolder() || item.isCustomDiagramTypeFolder()
  }

  get isDiagram(): boolean {
    return this.item.isDiagram()
  }

  // private method

  private addDiagram(diagramType: DiagramType): Diagram | null {
    const product = this.repository.getCurrentProduct()
    if (!product) return null
    const diagrams = product.diagrams

    const name = this.prompts.promptNewDiagramName(diagramType, diagrams)
    if (!name) return null

    const modifiedProduct = product.createAndAddDiagram(name, diagramType)
    const diagram = modifiedProduct.diagrams.last()
    this.repository.registerCurrentProduct(modifiedProduct)

    return diagram
  }

  private copyDiagram(diagramId: number): Diagram | null {
    let distDiagram = null
    const result = this.modifyDiagram(diagramId, (srcDiagram, product) => {
      const diagrams = product.diagrams
      const name = this.prompts.promptCopyDiagramName(srcDiagram, diagrams)
      if (!name) return null

      distDiagram = srcDiagram.cloneWith(diagrams.generateDiagramId(), name)
      const addedDiagrams = diagrams.add(distDiagram)
      return product.withDiagrams(addedDiagrams)
    })
    return result ? distDiagram : null
  }

  private removeDiagram(diagramId: number): boolean {
    return this.modifyDiagram(diagramId, (diagram, product) => {
      if (diagram.placements.length > 0) {
        if (!this.prompts.confirmDeleteDiagramWithIcon(diagram)) return null
      }
      const removedDiagrams = product.diagrams.remove(diagram)
      return product.withDiagrams(removedDiagrams)
    })
  }

  private modifyDiagram(
    diagramId: number,
    func: (diagram: Diagram, product: Product) => Product | null
  ): boolean {
    const product = this.repository.getCurrentProduct()
    if (!product) return true
    const diagrams = product.diagrams
    const diagram = diagrams.of(diagramId)
    if (!diagram) return true

    const modifedProduct = func(diagram, product)

    if (!modifedProduct) return false
    this.repository.registerCurrentProduct(modifedProduct)
    return true
  }
}
</script>

<style scoped></style>
