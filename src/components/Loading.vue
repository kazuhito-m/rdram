<template lang="html">
  <v-overlay v-if="visible">
    <v-progress-circular size="200" width="300" color="white" indeterminate />
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  visible: boolean = false

  startTime: number = 0

  @Watch('visible')
  private onChangeVisible() {
    if (this.visible) {
      this.startTime = performance.now()
      console.log(`Loading表示開始。${new Date()}`)
      return
    }

    const time = performance.now() - this.startTime
    console.log(`Loading表示終了。${new Date()} 表示時間:${time.toFixed(3)} ms`)
    this.startTime = 0
  }

  start() {
    this.visible = true
  }

  finish() {
    this.visible = false
  }
}
</script>

<style scoped></style>
