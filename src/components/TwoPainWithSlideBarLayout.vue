<template>
  <v-flex class="text-center">
    <div
      class="pain-container"
      @dragover="onDragOverMasterPainSlideBar"
      @drop="onDropMasterPainSlideBar"
    >
      <div ref="leftPain" class="left-pain">
        <slot name="leftPain"></slot>
      </div>
      <div
        id="slideBar"
        class="slidebar"
        draggable="true"
        @dblclick="onDoubleClickSlideBar"
        @dragstart="onDragStartMasterPainSlideBar"
      ></div>
      <div ref="rightPain" class="right-pain">
        <slot name="rightPain"></slot>
      </div>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Uuid from '@/domain/world/Uuid'

@Component
export default class TwoPainWithSlideBarLayout extends Vue {
  private dragId?: string

  private leftPainDisplay = 'none'

  private adsorptionRight = false
  private leftPainWidth = ''
  private rightPainWidth = ''

  @Prop()
  private readonly adsorptionRightWhenDoubleClick?: boolean // 右に吸着モード(デフォルトは左吸着)

  @Prop()
  private readonly defaultLeftPainWidth?: string

  mounted(): void {
    if (!this.defaultLeftPainWidth) return
    const leftPain = this.$refs.leftPain as HTMLElement
    leftPain.style.width = this.defaultLeftPainWidth
  }

  onDoubleClickSlideBar(): void {
    const leftPain = this.$refs.leftPain as HTMLElement
    const leftPainStyle = leftPain.style
    if (!this.adsorptionRightWhenDoubleClick) {
      const last = leftPainStyle.display
      leftPainStyle.display = this.leftPainDisplay
      this.leftPainDisplay = last
      return
    }
    const rightPain = this.$refs.rightPain as HTMLElement
    const rightPainStyle = rightPain.style

    this.adsorptionRight = !this.adsorptionRight

    if (this.adsorptionRight) {
      this.leftPainWidth = leftPainStyle.width
      this.rightPainWidth = rightPainStyle.width
      rightPainStyle.width = '0%'
      leftPainStyle.width = '100%'
    } else {
      rightPainStyle.width = this.rightPainWidth
      leftPainStyle.width = this.leftPainWidth
    }

    rightPainStyle.display = this.adsorptionRight ? 'none' : 'inline'
  }

  onDragStartMasterPainSlideBar(event: DragEvent): void {
    this.dragId = Uuid.generate()
    event.dataTransfer?.setData('text', this.dragId)
  }

  onDragOverMasterPainSlideBar(event: DragEvent): void {
    event?.preventDefault()
  }

  onDropMasterPainSlideBar(event: DragEvent): void {
    event.preventDefault()
    if (event.dataTransfer?.getData('text') !== this.dragId) return
    if (this.adsorptionLeft || this.adsorptionRight) return

    const leftPain = this.$refs.leftPain as HTMLElement
    const style = leftPain.style
    let painLeft = 0
    if (style.left) {
      const left = style.left
      if (left.match('px$')) painLeft = parseInt(left.replace('px', ''), 10)
    }
    style.width = event.x - painLeft + 'px'
  }

  private get adsorptionLeft(): boolean {
    const leftPain = this.$refs.leftPain as HTMLElement
    return leftPain.style.display === 'none'
  }
}
</script>

<style scoped>
.pain-container {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: initial;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: unset;
  margin-left: unset;
}

.left-pain {
  overflow: hidden;
  resize: none;
  text-align: left;
  width: 250px;
}

.right-pain {
  overflow: hidden;
  resize: none;
  flex-grow: 1;
  width: 0%;
  min-width: 0px;
}

.slidebar {
  width: 8px;
  background-color: gray;
  cursor: col-resize;
}
</style>
