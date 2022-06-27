<template>
  <div>
    <Loading :visible="loading" />
    <v-card flat>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-subtitle>画面遷移</v-toolbar-subtitle>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card light class="main-area">
        <table>
          <tr>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト
              </v-sheet>
            </td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト2
              </v-sheet>
            </td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト3
              </v-sheet>
            </td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト4
              </v-sheet>
            </td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト5
              </v-sheet>
            </td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト6
              </v-sheet>
            </td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト7
              </v-sheet>
            </td>
          </tr>
          <tr>
            <td colspan="1"></td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト8
              </v-sheet>
            </td>
            <td>
              <v-icon x-large>mdi-forward</v-icon>
            </td>
            <td>
              <v-sheet
                class="rounded-lg cyan accent-2"
                elevation="3"
                height="64"
                width="128"
              >
                テスト9
              </v-sheet>
            </td>
          </tr>
        </table>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Loading from '~/components/Loading.vue'

@Component({
  components: {
    Loading,
  },
})
export default class ScreenTransitionView extends Vue {
  items = [
    {
      text: 'Dashboard',
      disabled: false,
      href: '',
    },
    {
      text: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      text: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]

  loading = false

  // life cycle events.

  mounted(): void {
    this.loading = true
    console.log('初期表示')
  }
}
</script>
<style lang="scss" scoped>
td {
  padding: 5px 1px;
}
table {
  padding: 5px 20px;
}
.main-area {
  overflow: auto;
}
</style>
