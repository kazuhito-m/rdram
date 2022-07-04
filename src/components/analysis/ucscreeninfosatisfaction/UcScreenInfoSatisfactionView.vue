<template>
  <div>
    <v-card flat>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        UCと画面/情報の充足
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="main-area">
        <v-simple-table dense fixed-header>
          <thead>
            <tr>
              <th class="text-left">No.</th>
              <th class="text-left">
                <v-icon>{{ ucIcon() }}</v-icon
                >ユースケース
              </th>
              <th>
                <v-icon>mdi-file</v-icon>
                UCが使われてる図
              </th>
              <th class="text-left">
                <v-icon>{{ screenIcon() }}</v-icon>
                関連している画面
              </th>
              <th class="text-left">
                <v-icon>{{ infoIcon() }}</v-icon>
                関連している情報
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="password in passwords" :key="password.no">
              <td>{{ password.no }}</td>
              <td>{{ password.password }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Loading from '@/components/Loading.vue'
import ResourceType from '~/domain/resource/ResourceType'

@Component
export default class UcScreenInfoSatisfactionView extends Vue {
  // Properties.

  ucIcon = () => ResourceType.ユースケース.iconKey
  screenIcon = () => ResourceType.画面.iconKey
  infoIcon = () => ResourceType.情報.iconKey

  // life cycle events.

  mounted(): void {
    console.log('初期表示')
  }
}
</script>
<style lang="scss" scoped></style>
