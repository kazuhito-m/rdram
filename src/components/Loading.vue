<template lang="html">
  <v-overlay v-if="loading" id="loading">
    <v-progress-circular indeterminate />
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

<style lang="scss" scoped>
.dialog.centered-dialog {
  background: #282c2dad;
  box-shadow: none;
  border-radius: 6px;
  width: auto;
  color: whitesmoke;
}
</style>