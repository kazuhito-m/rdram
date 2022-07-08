<template>
  <PropertiesSettingDialog
    v-if="visible"
    :id="diagramId"
    :consent="consent"
    :title="title"
    :subTitle="subTitle"
    :iconKey="iconKey"
    width="450"
    @onClose="onClose"
    @onClickOk="onClickUpdateExecute"
  >
    <template #inputPart>
      <slot name="headMessage"></slot>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              label="名前"
              counter
              autofocus
              :rules="[validateName]"
              :maxlength="nameMaxLength"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="w"
              label="横幅(px)"
              type="number"
              :rules="[validateWidith]"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="h"
              label="高さ(px)"
              type="number"
              :rules="[validateHeight]"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </PropertiesSettingDialog>
</template>

<script lang="ts">
import { Component, Vue, Inject, Emit } from 'nuxt-property-decorator'
import PropertiesSettingDialog from '@/components/PropertiesSettingDialog.vue'
import StorageRepository from '@/domain/storage/StorageRepository'
import Diagram from '@/domain/diagram/Diagram'
import Product from '@/domain/product/Product'

@Component({
  components: { PropertiesSettingDialog },
})
export default class DiagramPropertiesEditDialog extends Vue {
  private source!: Diagram
  private resolve: any = null
  visible = false

  consent = false
  subTitle = ''
  title = ''
  iconKey = ''

  diagramId: number = 0
  name = ''
  w = ''
  h = ''

  @Emit('onClose')
  onClose(): void {
    this.visible = false
    this.resolve(this.source)
  }

  @Inject()
  private repository?: StorageRepository

  // properties.

  get nameMaxLength(): number {
    return Diagram.NAME_MAX_LENGTH
  }

  get width(): number {
    return parseInt(this.w, 10)
  }

  get height(): number {
    return parseInt(this.h, 10)
  }

  // component events;

  onClickUpdateExecute(): void {
    if (!this.consent) return
    const diagram = this.registerDiagramProperties()
    if (!diagram) return
    this.visible = false
    this.resolve(diagram)
  }

  // public methods.

  showOf(diagram: Diagram): Promise<Diagram> {
    this.initializeOf(diagram)
    this.showProperties(diagram)
    this.visible = true
    return new Promise((resolve) => (this.resolve = resolve))
  }

  /// validations.

  validateName(): string | boolean {
    this.consent = false
    const name = this.name
    if (name.length === 0) return '入力してください。'
    const max = this.nameMaxLength
    if (name.length > max) return `${max}文字以内で入力してください。`
    this.consent = this.changed()
    return true
  }

  validateWidith(): string | boolean {
    return this.validateSize(this.w, Diagram.MAX_WIDTH)
  }

  validateHeight(): string | boolean {
    return this.validateSize(this.h, Diagram.MAX_HEIGHT)
  }

  private validateSize(value: string, max: number): string | boolean {
    this.consent = false
    if (!value) return '入力してください。'
    if (!Number.isInteger(Number(value))) return '数値を入力して下さい。'
    const widthNumber = Number(value)
    const min = 1
    if (widthNumber < min) return `${min} 以上で入力してください。`
    if (widthNumber > max) return `${max} 以下で入力してください。`
    this.consent = this.changed()
    return true
  }

  private logicalValidation(diagram: Diagram, product: Product): boolean {
    if (product.diagrams.existsSameOf(diagram)) {
      alert('既に重複した名前の図が在ります。')
      return false
    }
    if (diagram.existsStickOutPlacements()) {
      const message =
        'このサイズ変更を実行すると、はみ出すアイコンがあります。\n' +
        'はみ出したアイコンは、実行時に削除されます。\nよろしいですか。'
      if (!window.confirm(message)) return false
    }
    return true
  }

  // private methods.

  private initializeOf(diagram: Diagram): void {
    this.source = diagram
    this.diagramId = diagram.id
    this.title = diagram.isNotRegister()
      ? `${diagram.type.name} の新規作成`
      : `${diagram.name} の設定`
    this.subTitle = diagram.type.name
    this.iconKey = diagram.type.iconKey
  }

  private showProperties(diagram: Diagram): void {
    this.name = diagram.name
    this.w = diagram.width.toString()
    this.h = diagram.height.toString()
  }

  private changed(): boolean {
    const src = this.source!
    return (
      src.name !== this.name ||
      src.width !== this.width ||
      src.height !== this.height
    )
  }

  private registerDiagramProperties(): Diagram | null {
    const product = this.repository?.getCurrentProduct()
    if (!product) return null

    const diagram = this.source
    const modified = diagram.renameOf(this.name).resize(this.width, this.height)
    if (!this.logicalValidation(modified, product)) return null

    const fixed = modified.fixStickOuts()

    return this.register(fixed, product)
  }

  private register(diagram: Diagram, product: Product) {
    let modifiedProduct: Product
    let registerd = diagram
    if (this.source.isNotRegister()) {
      modifiedProduct = product.addDiagram(diagram)
      registerd = modifiedProduct.diagrams.last()
    } else {
      modifiedProduct = product.meageDiagramByIdOf(diagram)
    }
    this.repository!.registerCurrentProduct(modifiedProduct)
    return registerd
  }
}
</script>

<style scoped></style>
