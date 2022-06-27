<template>
  <v-container light>
    <div>画面遷移</div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ScreenTransitionView extends Vue {
  // life cycle events.

  mounted(): void {
    console.log('初期表示')
  }
}
</script>

<style></style>
