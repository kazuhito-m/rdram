<template>
  <div>
    <v-tooltip
      v-model="visible"
      top
      absolute
      z-index="3"
      :position-x="positionX"
      :position-y="positionY"
    >
      <span @click="close()">
        <div>種類 : {{ type.name }}</div>
        <div v-if="description.length > 0">
          <!-- eslint-disable-next-line vue/no-v-html -->
          備考・メモ : <span v-html="description"></span>
        </div>
      </span>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Resource from '@/domain/resource/Resource'
import ResourceType from '@/domain/resource/ResourceType'

@Component
export default class IconToolTip extends Vue {
  visible = false
  positionX = 0
  positionY = 0

  timer: any = -1

  type = ResourceType.アクター
  description = ''

  private static SHOW_DELAY_MS = 2500

  show(resource: Resource, x: number, y: number): void {
    this.timer = setTimeout(() => {
      this.timer = -1
      this.doShow(resource, x, y)
    }, IconToolTip.SHOW_DELAY_MS)
  }

  private doShow(resource: Resource, x: number, y: number) {
    this.type = resource.type
    this.description = this.repCr(resource.description)

    this.positionX = x
    this.positionY = y
    this.visible = true
  }

  close(): void {
    if (this.timer !== -1) {
      clearTimeout(this.timer)
      this.timer = -1
      return
    }
    this.doClose()
  }

  private doClose(): void {
    this.visible = false
  }

  move(x: number, y: number): void {
    this.positionX = x
    this.positionY = y
  }

  private repCr(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/\r\n|\r|\n/g, '<br>')
  }
}
</script>

<style type="sass" scoped></style>
