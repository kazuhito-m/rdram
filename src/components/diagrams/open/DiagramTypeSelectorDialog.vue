<template lang="html">
  <v-dialog v-model="visible" @keydown.esc="close()" persistent max-width="400">
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-selection-multiple</v-icon> 新しい図の種類の選択
      </v-card-title>
      <v-card-text>
        アイコンに対応する図を新たに作成します。<br />
        新規作成する図の種類を選択してください。
      </v-card-text>
      <v-card-text>
        アイコン(図の名前) :
        <v-chip color="primary" dark draggable>
          <v-icon>{{ resource.type.iconKey }}</v-icon>
          {{ resource.name }}
        </v-chip>
        <v-radio-group v-model="diagramTypeId">
          <template v-slot:label> 図の種類 </template>
          <v-radio v-for="diagramType in diagramTypes" :value="diagramType.id">
            <template v-slot:label>
              <div>
                <v-icon>{{ diagramType.iconKey }}</v-icon>
                {{ diagramType.name }}
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClickCancel"> キャンセル </v-btn>
        <v-btn text color="green darken-1" @click="onClickOk"> OK </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'
import StorageRepository from '@/domain/storage/StorageRepository'
import DiagramType from '@/domain/diagram/DiagramType'
import Resource from '~/domain/resource/Resource'
import Product from '~/domain/product/Product'
import CorrespondResourceTypes from '~/domain/diagram/correspond/CorrespondResourceTypes'
import Diagram from '~/domain/diagram/Diagram'
import Diagrams from '~/domain/diagram/Diagrams'

@Component
export default class DiagramTypeSelectorDialog extends Vue {
  visible = false
  private resolve: any = null
  private reject: any = null

  resourceName: string = ''
  diagramTypes: DiagramType[] = []

  resource: Resource = Resource.empty()
  isRelateDiagramExists = false
  diagramTypeId = 0

  static NOTHING_DIAGRAM_ID = 0

  @Inject()
  private readonly repository?: StorageRepository

  onClickCancel(): void {
    this.close()
    console.log('closeには来ているみたいだけど…。')
    this.resolve(DiagramTypeSelectorDialog.NOTHING_DIAGRAM_ID)
  }

  onClickOk(): void {
    const diagramId = this.fixedDiagramId()
    this.close()
    console.log('okに来ている:', diagramId)
    this.resolve(diagramId)
  }

  show(resourceId: number): Promise<number> {
    console.log('show() resourceId:' + resourceId)
    const diagramIds = this.findRelateDiagramIdsOf(resourceId)
    console.log('diagramsIds:', diagramIds)
    if (diagramIds.length === 1)
      return new Promise((resolve) => resolve(diagramIds[0]))

    this.diagramTypeId = this.diagramTypes[0].id

    this.visible = true
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  private findRelateDiagramIdsOf(resourceId: number): number[] {
    const diagrams = this.findRelateDiagrams(resourceId)
    if (diagrams.length === 1) return diagrams.map((diagram) => diagram.id)

    this.isRelateDiagramExists = diagrams.length > 1

    if (!this.isRelateDiagramExists) {
      const dic = new CorrespondResourceTypes()
      this.diagramTypes = dic.correspondingDiagramTypesOf(this.resource.type)
      return []
    }

    this.diagramTypes = diagrams.map((diagram) => diagram.type)
    return diagrams.map((diagram) => diagram.id)
  }

  private findRelateDiagrams(resourceId: number): Diagrams {
    const product = this.repository?.getCurrentProduct() as Product
    this.resource = product.resources.of(resourceId) as Resource
    return product.diagramOfResourceRelate(resourceId)
  }

  private fixedDiagramId(): number {
    const diagramType = DiagramType.ofId(this.diagramTypeId) as DiagramType

    const diagrams = this.findRelateDiagrams(this.resource.resourceId)
    if (diagrams.length === 0)
      return this.createAndAddDiagram(this.resource.name, diagramType).id

    const diagram = diagrams.typeOf(diagramType).last()
    return diagram.id
  }

  private createAndAddDiagram(name: string, diagramType: DiagramType): Diagram {
    const repository = this.repository as StorageRepository
    const product = repository.getCurrentProduct() as Product
    const modifiedProduct = product.createAndAddDiagram(name, diagramType)
    const diagram = modifiedProduct.diagrams.last()
    repository.registerCurrentProduct(modifiedProduct)
    return diagram
  }

  close() {
    this.visible = false
  }
}
</script>

<style scoped></style>
