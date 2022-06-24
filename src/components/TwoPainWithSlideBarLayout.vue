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
  private leftPainWidth = ''

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
      leftPainStyle.display = this.adsorptionLeft() ? 'inline' : 'none'
      return
    }
    const rightPain = this.$refs.rightPain as HTMLElement
    const rightPainStyle = rightPain.style

    if (this.adsorptionRight()) {
      leftPainStyle.width = this.leftPainWidth
      this.leftPainWidth = ''
    } else {
      this.leftPainWidth = leftPainStyle.width
      leftPainStyle.width = '100%'
    }

    rightPainStyle.display = this.adsorptionRight() ? 'none' : 'inline'

    console.log('leftPainWidth:', this.leftPainWidth)
    console.log('leftPainStyle.width:', leftPainStyle.width)
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
    if (this.adsorptionLeft()) return

    if (event.dataTransfer?.getData('text') !== this.dragId) return
    const leftPain = this.$refs.leftPain as HTMLElement
    const style = leftPain.style
    let painLeft = 0
    if (style.left) {
      const left = style.left
      if (left.match('px$')) painLeft = parseInt(left.replace('px', ''), 10)
    }
    style.width = event.x - painLeft + 'px'
  }

  private adsorptionLeft(): boolean {
    const leftPain = this.$refs.leftPain as HTMLElement
    return leftPain.style.display === 'none'
  }

  private adsorptionRight(): boolean {
    return this.leftPainWidth !== ''
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
