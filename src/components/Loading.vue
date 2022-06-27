<template lang="html">
  <v-overlay v-if="loading">
    <v-progress-circular size="140" width="14" indeterminate />
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  loading: boolean = false

  startTime: number = 0

  @Watch('loading')
  private onChangeVisible() {
    if (this.loading) {
      this.startTime = performance.now()
      console.log(`Loading表示開始。${new Date()}`)
      return
    }

    const time = performance.now() - this.startTime
    console.log(`Loading表示終了。${new Date()} 表示時間:${time.toFixed(3)} ms`)
    this.startTime = 0
  }

  start() {
    this.loading = true
  }

  finish() {
    this.loading = false
  }
}
</script>

<style lang="scss">
div.v-overlay__scrim {
  opacity: 0.5 !important;
  // background-color: white !important;
}
circle.v-progress-circular__overlay {
  color: green;
  caret-color: green;
  z-index: 9999;
}
</style>
