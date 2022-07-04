<template>
  <div>
    <v-card flat>
      <v-toolbar dense>
        <v-btn icon>
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        UCと画面/情報の充足
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-checkbox v-model="onlyNotRelatedScreen" label="画面と未関連のみ" />
        <v-spacer></v-spacer>
        <v-checkbox
          v-model="onlyNotRelatedInfomation"
          label="情報と未関連のみ"
        />
        <v-spacer></v-spacer>
        <v-checkbox v-model="onlyNotUsedInDiagram" label="図で未使用のみ" />
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
              <th class="text-left">
                <v-icon>{{ screenIcon() }}</v-icon>
                関連している画面
              </th>
              <th class="text-left">
                <v-icon>{{ infoIcon() }}</v-icon>
                関連している情報
              </th>
              <th class="text-left">
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
                {{ satisfaction.usecase.name }}
              </td>
              <td class="text-left">
                <span v-if="satisfaction.isNotRelatedScreen()">なし</span>
                <span v-else>{{ satisfaction.relatedScreens.length }}</span>
              </td>
              <td class="text-left">
                <span v-if="satisfaction.isNotRelatedInfomation()">なし</span>
                <span v-else>{{ satisfaction.relatedInfomations.length }}</span>
              </td>
              <td class="text-left">
                <span v-if="satisfaction.isNotUsedInDiagrams()">なし</span>
                <span v-else>{{ satisfaction.usedInDiagrams.length }}</span>
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
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import UcScreenInfoSatisfactionsFactory from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfactionsFactory'
import ResourceType from '@/domain/resource/ResourceType'
import StorageRepository from '@/domain/storage/StorageRepository'

@Component
export default class UcScreenInfoSatisfactionView extends Vue {
  satisfactions: UcScreenInfoSatisfaction[] = []

  onlyNotRelatedScreen = false
  onlyNotRelatedInfomation = false
  onlyNotUsedInDiagram = false

  private factory = UcScreenInfoSatisfactionsFactory.get()

  @Inject()
  readonly repository!: StorageRepository

  // Properties.

  ucIcon = () => ResourceType.ユースケース.iconKey
  screenIcon = () => ResourceType.画面.iconKey
  infoIcon = () => ResourceType.情報.iconKey

  // life cycle events.

  mounted(): void {
    this.reloadSatisfactions()
  }

  // private method.

  private reloadSatisfactions(): void {
    this.withLoadingScreen(() => this.drawTable())
  }

  private drawTable(): void {
    const product = this.repository.getCurrentProduct()
    if (!product) return
    this.satisfactions = this.factory.createOf(product)
  }

  private withLoadingScreen(actions: () => void) {
    this.$nuxt.$loading.start()
    const timer = setInterval(() => {
      clearInterval(timer)
      actions()
      this.$nuxt.$loading.finish()
    }, 1)
  }
}
</script>
<style lang="scss" scoped></style>
