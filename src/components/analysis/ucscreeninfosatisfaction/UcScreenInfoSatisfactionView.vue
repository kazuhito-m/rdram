<template>
  <div>
    <ColumnRightClickMenu
      ref="columnRightClickMenu"
      @onEditResource="onEditResource"
      @onOpenDiagram="onOpenDiagram"
    />
    <ResourceEditDialog ref="resourceEditDialog" />
    <v-card flat>
      <v-toolbar dense>
        <v-btn icon @click="reloadSatisfactions()">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        UCと画面/情報の充足
        <v-spacer></v-spacer>
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
      </v-toolbar>
      <v-card class="main-area">
        <v-simple-table dense fixed-header>
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
                  @dblclick="onDoubleClickUc"
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
                        @click="dummyClickEvent"
                        @dblclick="onDoubleClickScreen"
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
                        @click="dummyClickEvent"
                        @dblclick="onDoubleClickInfomation"
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
                <span v-if="satisfaction.isNotUsedInDiagram()">なし</span>
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
                      @click="dummyClickEvent"
                      @dblclick="onDoubleClickDiagram"
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
import ResourceEditDialog from '@/components/resource/ResourceEditDialog.vue'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import UcScreenInfoSatisfactionsFactory from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfactionsFactory'
import ResourceType from '@/domain/resource/ResourceType'
import StorageRepository from '@/domain/storage/StorageRepository'
import Resource from '~/domain/resource/Resource'
import Product from '~/domain/product/Product'
import Diagram from '~/domain/diagram/Diagram'

@Component({
  components: {
    ColumnRightClickMenu,
    ResourceEditDialog,
  },
})
export default class UcScreenInfoSatisfactionView extends Vue {
  satisfactions: UcScreenInfoSatisfaction[] = []

  onlyNotRelatedScreen = false
  onlyNotRelatedInfomation = false
  onlyNotUsedInDiagram = false

  private factory = UcScreenInfoSatisfactionsFactory.get()

  @Inject()
  readonly repository!: StorageRepository

  // emits.

  @Emit('onRenamedResource')
  private onRenamedResource(_src: Resource, _dest: Resource): void {}

  @Emit('onOpenDiagram')
  onOpenDiagram(_diagramId: number): void {}

  // properties.

  ucIcon = () => ResourceType.ユースケース.iconKey
  screenIcon = () => ResourceType.画面.iconKey
  infoIcon = () => ResourceType.情報.iconKey

  // life cycle events.

  mounted(): void {
    this.reloadSatisfactions()
  }

  // component events.

  onRightClick(event: PointerEvent): void {
    const element = event.currentTarget as HTMLElement
    const target = this.analyzeTargetOf(element)
    if (!target) return
    this.showMenu(target, event.x, event.y)
  }

  async onEditResource(resourceId: number): Promise<void> {
    await this.showResourceDialog(resourceId)
  }

  async onDoubleClickUc(event: MouseEvent): Promise<void> {
    const element = event.currentTarget as HTMLElement
    const sat = this.analyzeTargetOf(element) as UcScreenInfoSatisfaction
    await this.showResourceDialog(sat.ucId)
  }

  onDoubleClickScreen(): void {
    alert('onDoubleClickScreen')
  }

  onDoubleClickInfomation(): void {
    alert('onDoubleClickInfomation')
  }

  onDoubleClickDiagram(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement
    const diagram = this.analyzeTargetOf(element) as Diagram
    this.onOpenDiagram(diagram.id)
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

  private analyzeTargetOf(element: HTMLElement): any {
    const e = element
    const dataSet = element.dataset as DOMStringMap
    let target = null
    const ucId = Number(dataSet.ucId)
    const sat = this.satisfactions.find((s) => s.ucId === ucId)
    if (!sat) return
    target = sat
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

  private showMenu(target: any, x: number, y: number): void {
    const menu = this.$refs.columnRightClickMenu as ColumnRightClickMenu
    menu.show(target, x, y)
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
