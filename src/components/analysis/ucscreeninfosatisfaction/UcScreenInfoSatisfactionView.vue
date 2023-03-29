<template>
  <div>
    <ColumnRightClickMenu
      ref="columnRightClickMenu"
      @onEditResource="onEditResource"
      @onOpenDiagram="onOpenDiagram"
      @onCreateRelateUcDiagram="onCreateRelateUcDiagram"
      @onRemoveUsecaseOnProduct="onRemoveUsecaseOnProduct"
      @onOpenRelateDiagram="onOpenRelateDiagram"
      @onRemoveRelation="onRemoveRelation"
      @onRemoveUseCaseOnDiagram="onRemoveUseCaseOnDiagram"
    />
    <ResourceEditDialog ref="resourceEditDialog" />
    <UcRelatedDiagramPropertiesEditDialog ref="diagraEditDialog" />
    <RelatedDiagramsSelector ref="relatedDiagramsSelector" />
    <v-card flat>
      <v-toolbar dense>
        <v-btn icon @click="reloadSatisfactions()">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        UCと画面/情報の充足
        <v-spacer></v-spacer>
        <v-checkbox
          v-model="onlyNotRelatedScreen"
          label="画面と未関連のみ"
          @click="reloadSatisfactions()"
        />
        <v-spacer></v-spacer>
        <v-checkbox
          v-model="onlyNotRelatedInfomation"
          label="情報と未関連のみ"
          @click="reloadSatisfactions()"
        />
        <v-spacer></v-spacer>
        <v-checkbox
          v-model="onlyNotUsedInDiagram"
          label="図で未使用のみ"
          @click="reloadSatisfactions()"
        />
        <v-spacer></v-spacer>
        <v-btn text tile link @click="onClickNewUseCaseButton">
          <v-icon>{{ ucIcon() }}</v-icon
          >ユースケースの新規作成
        </v-btn>
      </v-toolbar>
      <v-card class="main-area">
        <v-simple-table dense fixed-header :height="ucTableHeight">
          <thead>
            <tr>
              <th class="text-left">No.</th>
              <th class="text-left">
                <v-icon>{{ ucIcon() }}</v-icon>
                ユースケース
              </th>
              <th class="text-left" colspan="2">
                <v-icon>{{ screenIcon() }}</v-icon>
                関連している画面
              </th>
              <th class="text-left" colspan="2">
                <v-icon>{{ infoIcon() }}</v-icon>
                関連している情報
              </th>
              <th class="text-left" colspan="2">
                <v-icon>mdi-file</v-icon>
                UCが使われてる図
              </th>
              <th class="text-left">備考・メモ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(satisfaction, index) in satisfactions"
              :key="satisfaction.usecase.resourceId"
            >
              <td class="text-right">
                {{ index + 1 }}
              </td>
              <td class="text-left">
                <v-btn
                  text
                  tile
                  link
                  :data-uc-id="satisfaction.ucId"
                  @click="onClickUc"
                  @contextmenu.prevent="onRightClick"
                >
                  <v-icon>{{ ucIcon() }}</v-icon>
                  {{ satisfaction.usecase.name }}
                </v-btn>
              </td>
              <td class="count-column text-right">
                <v-avatar color="primary" size="18" tile>
                  {{ satisfaction.relatedScreens.length }}
                </v-avatar>
              </td>
              <td class="text-left">
                <span v-if="satisfaction.isNotRelatedScreen()">なし</span>
                <span v-else>
                  <span
                    v-for="screen in satisfaction.relatedScreens"
                    :key="screen.resource.resourceId"
                    class="chip-span"
                  >
                    <v-badge
                      color="primary"
                      overlap
                      bordered
                      :value="screen.relateCount > 1"
                      :content="screen.relateCount"
                    >
                      <v-chip
                        outlined
                        small
                        color="primary"
                        :data-uc-id="satisfaction.ucId"
                        :data-screen-id="screen.id"
                        @click="onClickRelateResource"
                        @contextmenu.prevent="onRightClick"
                      >
                        <v-icon small>{{
                          screen.resource.type.iconKey
                        }}</v-icon>
                        {{ screen.resource.name }}
                      </v-chip>
                    </v-badge>
                  </span>
                </span>
              </td>
              <td class="count-column text-right">
                <v-avatar color="success" size="18" tile>
                  {{ satisfaction.relatedInfomations.length }}
                </v-avatar>
              </td>
              <td class="text-left">
                <span v-if="satisfaction.isNotRelatedInfomation()">なし</span>
                <span v-else>
                  <span
                    v-for="info in satisfaction.relatedInfomations"
                    :key="info.resource.resourceId"
                    class="chip-span"
                  >
                    <v-badge
                      color="success"
                      overlap
                      bordered
                      :value="info.relateCount > 1"
                      :content="info.relateCount"
                    >
                      <v-chip
                        outlined
                        small
                        color="success"
                        :data-uc-id="satisfaction.ucId"
                        :data-infomation-id="info.id"
                        @click="onClickRelateResource"
                        @contextmenu.prevent="onRightClick"
                      >
                        <v-icon small>{{ info.resource.type.iconKey }}</v-icon>
                        {{ info.resource.name }}
                      </v-chip>
                    </v-badge>
                  </span>
                </span>
              </td>
              <td class="count-column text-right">
                <v-avatar color="info" size="18" tile>
                  {{ satisfaction.usedInDiagrams.length }}
                </v-avatar>
              </td>
              <td class="text-left">
                <span v-if="satisfaction.isNotUsedInDiagram()">
                  <v-btn
                    text
                    tile
                    link
                    color="orange"
                    :data-uc-id="satisfaction.ucId"
                    @click="onClickNotUserdInDiagramButton"
                  >
                    なし
                  </v-btn>
                </span>
                <span v-else>
                  <span
                    v-for="diagram in satisfaction.usedInDiagrams.map((r) => r)"
                    :key="diagram.id"
                    class="chip-span"
                  >
                    <v-chip
                      outlined
                      label
                      small
                      color="info"
                      :data-uc-id="satisfaction.ucId"
                      :data-diagram-id="diagram.id"
                      @click="onDoubleClickDiagram"
                      @contextmenu.prevent="onRightClick"
                    >
                      <v-icon small>{{ diagram.type.iconKey }}</v-icon>
                      {{ diagram.name }}
                    </v-chip>
                  </span>
                </span>
              </td>
              <td class="text-left">
                {{ satisfaction.usecase.description }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Vue } from 'nuxt-property-decorator'
import ColumnRightClickMenu from './ColumnRightClickMenu.vue'
import UcRelatedDiagramPropertiesEditDialog from './UcRelatedDiagramPropertiesEditDialog.vue'
import RelatedDiagramsSelector from './RelatedDiagramsSelector.vue'
import ResourceEditDialog from '@/components/resource/ResourceEditDialog.vue'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import UcScreenInfoSatisfactionsFactory from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfactionsFactory'
import ResourceType from '@/domain/resource/ResourceType'
import StorageRepository from '@/domain/storage/StorageRepository'
import Resource from '@/domain/resource/Resource'
import Product from '@/domain/product/Product'
import Diagram from '@/domain/diagram/Diagram'
import Prompts from '@/components/main/Prompts'
import RelatedResource from '@/domain/analysis/ucscreeninfosatisfaction/RelatedResource'

@Component({
  components: {
    ColumnRightClickMenu,
    ResourceEditDialog,
    UcRelatedDiagramPropertiesEditDialog,
    RelatedDiagramsSelector,
  },
})
export default class UcScreenInfoSatisfactionView extends Vue {
  satisfactions: UcScreenInfoSatisfaction[] = []

  onlyNotRelatedScreen = false
  onlyNotRelatedInfomation = false
  onlyNotUsedInDiagram = false

  private readonly factory = UcScreenInfoSatisfactionsFactory.get()
  private readonly prompts = new Prompts()

  ucTableHeight = ''

  @Inject()
  readonly repository!: StorageRepository

  // emits.

  @Emit('onRenamedResource')
  private onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onOpenDiagram')
  onOpenDiagram(_diagramId: number): void {}

  @Emit('onUpdateResources')
  onUpdateResources(): void {}

  @Emit('onRemovedRelations')
  onRemovedRelations(_relationIds: string[]):void {}

  @Emit('onRemovedUseCaseOnDiagram')
  onRemovedUseCaseOnDiagram(_useCaseResouceId: number, _diagramId: number): void {  }

  // properties.

  ucIcon = () => ResourceType.ユースケース.iconKey
  screenIcon = () => ResourceType.画面.iconKey
  infoIcon = () => ResourceType.情報.iconKey

  // life cycle events.

  mounted(): void {
    this.reloadSatisfactions()

    this.calcTableHeight()
    window.addEventListener('resize', this.calcTableHeight)
  }

  onActive() {
    this.reloadSatisfactions()
  }

  // component events.

  onRightClick(event: PointerEvent): void {
    const element = event.currentTarget as HTMLElement
    const sat = this.analyzeSatisfaction(element)
    const target = this.analyzeTargetOf(element)
    if (!target) return
    this.showMenu(target, sat, event.x, event.y)
  }

  async onEditResource(resourceId: number): Promise<void> {
    await this.showResourceDialog(resourceId)
  }

  async onClickUc(event: MouseEvent): Promise<void> {
    const element = event.currentTarget as HTMLElement
    const sat = this.analyzeTargetOf(element) as UcScreenInfoSatisfaction

    if (sat.isNotUsedInDiagram()) {
      await this.showNewUseCaseCompositeDiagramDialog(sat)
      return
    }

    await this.showResourceDialog(sat.ucId)
  }

  async onCreateRelateUcDiagram(sat: UcScreenInfoSatisfaction): Promise<void> {
    await this.showNewUseCaseCompositeDiagramDialog(sat)
  }

  onRemoveUsecaseOnProduct(sat: UcScreenInfoSatisfaction): void {
    this.deleteResourceOnProduct(sat)
  }

  async onOpenRelateDiagram(relate: RelatedResource, sat: UcScreenInfoSatisfaction): Promise<void> {
    await this.openRelateDiagram(relate, sat)
  }

  onClickRelateResource(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement
    const sat = this.analyzeSatisfaction(element)
    const target = this.analyzeTargetOf(element)
    this.openRelateDiagram(target, sat)
  }

  onDoubleClickDiagram(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement
    const diagram = this.analyzeTargetOf(element) as Diagram
    this.onOpenDiagram(diagram.id)
  }

  async onClickNewUseCaseButton(): Promise<void> {
    await this.showNewUseCaseDialog()
  }

  async onClickNotUserdInDiagramButton(event: MouseEvent): Promise<void> {
    const element = event.currentTarget as HTMLElement
    const sat = this.analyzeTargetOf(element) as UcScreenInfoSatisfaction
    await this.showNewUseCaseCompositeDiagramDialog(sat)
  }

  onRemoveRelation(relate: RelatedResource): void {
    this.removeRelation(relate)
  }

  async onRemoveUseCaseOnDiagram(useCase: Resource, diagram: Diagram): Promise<void> {
    await this.removeUseCaseOnDiagram(useCase, diagram)
  }

  dummyClickEvent(): void {}

  // public method.

  reloadSatisfactions(): void {
    this.withLoadingScreen(() => this.drawTable())
  }

  // private method.

  private drawTable(): void {
    const product = this.repository.getCurrentProduct()
    if (!product) return

    const results = this.factory.createOf(product)
    this.satisfactions = results.find(
      this.onlyNotRelatedScreen,
      this.onlyNotRelatedInfomation,
      this.onlyNotUsedInDiagram
    )
  }

  private withLoadingScreen(actions: () => void) {
    this.$nuxt.$loading.start()
    const timer = setInterval(() => {
      clearInterval(timer)
      actions()
      this.$nuxt.$loading.finish()
    }, 1)
  }

  private analyzeSatisfaction(element: HTMLElement): UcScreenInfoSatisfaction {
    const dataSet = element.dataset as DOMStringMap
    const ucId = Number(dataSet.ucId)
    const sat = this.satisfactions.find((s) => s.ucId === ucId)
    return sat as UcScreenInfoSatisfaction
  }

  private analyzeTargetOf(element: HTMLElement): any {
    const sat = this.analyzeSatisfaction(element)
    if (!sat) return

    let target = null
    target = sat
    const dataSet = element.dataset as DOMStringMap
    if (dataSet.screenId) {
      const id = Number(dataSet.screenId)
      const screen = sat.relatedScreens.find((s) => s.id === id)
      if (!screen) return
      target = screen
    }
    if (dataSet.infomationId) {
      const id = Number(dataSet.infomationId)
      const infomation = sat.relatedInfomations.find((s) => s.id === id)
      if (!infomation) return
      target = infomation
    }
    if (dataSet.diagramId) {
      const id = Number(dataSet.diagramId)
      const infomation = sat.usedInDiagrams.of(id)
      if (!infomation) return
      target = infomation
    }
    return target
  }

  private showMenu(
    target: any,
    sat: UcScreenInfoSatisfaction,
    x: number,
    y: number
  ): void {
    const menu = this.$refs.columnRightClickMenu as ColumnRightClickMenu
    menu.show(target, sat, x, y)
  }

  private resourceEditDialog(): ResourceEditDialog {
    return this.$refs.resourceEditDialog as ResourceEditDialog
  }

  private async showResourceDialog(resourceId: number): Promise<void> {
    const product = this.repository.getCurrentProduct() as Product
    const src = product.resources.of(resourceId)
    if (!src) return

    const dest = await this.resourceEditDialog().showForModifyOf(resourceId)
    if (dest.isEmpty()) return

    this.reloadSatisfactions()
    this.onRenamedResource(src, dest)
  }

  async showNewUseCaseDialog(): Promise<void> {
    const type = ResourceType.ユースケース
    const resource = await this.resourceEditDialog().showForCreateNew(type)

    if (resource.isEmpty()) return

    this.reloadSatisfactions()
    this.onUpdateResources()
  }

  async showNewUseCaseCompositeDiagramDialog(
    sat: UcScreenInfoSatisfaction
  ): Promise<void> {
    const dialog = this.$refs
      .diagraEditDialog as UcRelatedDiagramPropertiesEditDialog
    const modified = await dialog.showOf(sat)

    if (modified.isNotRegister()) return

    this.reloadSatisfactions()
    this.onOpenDiagram(modified.id)
  }

  private deleteResourceOnProduct(sat: UcScreenInfoSatisfaction): void {
    const resource = sat.usecase
    const product = this.repository.getCurrentProduct() as Product

    const usings = product.diagrams.using(resource)
    const result = this.prompts.confirmDeleteResourceOnProduct(resource, usings)
    if (!result) return

    const modifiedProduct = product.removeOf(resource)
    this.repository.registerCurrentProduct(modifiedProduct)

    this.reloadSatisfactions()
    this.onUpdateResources()
  }

  private async openRelateDiagram(
    relatedResource: RelatedResource,
    sat: UcScreenInfoSatisfaction
  ) {
    const diagram = await this.cursoredDiagramOf(relatedResource, sat)
    this.onOpenDiagram(diagram.id)
  }

  private async cursoredDiagramOf(relatedResource: RelatedResource, sat: UcScreenInfoSatisfaction): Promise<Diagram> {
    if (relatedResource.relateCount === 1) return relatedResource.diagrams[0]

    const selector = this.$refs
      .relatedDiagramsSelector as RelatedDiagramsSelector
    return await selector.showOf(relatedResource, sat)
  }

  private removeRelation(relate: RelatedResource): void {
    const relates = relate.relateOnDiagrams
    const modifiedDiagrams = relates.map(r => r.diagram.removeRelationsOf([r.relationId]))

    this.registerCurrentProduct(product => product.meageDiagramsByIdOf(modifiedDiagrams))

    this.reloadSatisfactions()
    this.onRemovedRelations(relates.map(r => r.relationId))
  }

  private async removeUseCaseOnDiagram(useCase: Resource, diagram: Diagram): Promise<void> {
    const useCaseResouceId = useCase.resourceId
    const diagramId = diagram.id

    this.registerCurrentProduct(product => {
      // TODO Produc側にロジックを持っていきたい
      if (!product.diagrams.existsIdOf(diagramId)) return null;
      const diagram = product.diagrams.of(diagramId) as Diagram
      const modified = diagram.removeResourcesOf([useCaseResouceId])
      return product.meageDiagramByIdOf(modified)
    })

    this.reloadSatisfactions()
    this.onRemovedUseCaseOnDiagram(useCaseResouceId, diagramId);
  }

  private registerCurrentProduct(editAction: (product: Product) => Product | null): void {
    const product = this.repository.getCurrentProduct() as Product

    const modifiedProduct = editAction(product)
    if (!modifiedProduct) return

    this.repository.registerCurrentProduct(modifiedProduct)
  }

  /**
   * Layoutの最大値からv-simple-tableのheightを計算し設定する。
   *
   * 本来css等で設定するべきものなのだが、
   * クライアント領域だけにスクロールバーを表示する方法が無いので、
   * 強制的に計算して設定する。
   */
  private calcTableHeight(): void {
    const layout = document.getElementsByClassName('layout')[0] as HTMLElement
    const absLayout = layout.getBoundingClientRect()
    const clientHeight = absLayout.height - 96
    this.ucTableHeight = `${clientHeight}px`
  }
}
</script>
<style lang="scss" scoped>
.chip-span {
  padding-right: 5px;
}

.count-column {
  width: 30px;
}
</style>
