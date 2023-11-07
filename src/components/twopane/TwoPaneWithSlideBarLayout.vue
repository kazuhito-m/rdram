<template>
  <v-flex class="text-center">
    <div
      ref="paneContainer"
      class="pane-container"
      @dragover="onDragOverMasterPaneSlideBar"
      @drop="onDropMasterPaneSlideBar"
    >
      <div ref="leftPane" class="left-pane">
        <slot name="leftPane"></slot>
      </div>
      <div
        id="slideBar"
        class="slidebar"
        draggable="true"
        @dblclick="onDoubleClickSlideBar"
        @dragstart="onDragStartMasterPaneSlideBar"
      ></div>
      <div ref="rightPane" class="right-pane">
        <slot name="rightPane"></slot>
      </div>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DragAndDropSlideBar from './DragAndDropSlideBarId'
import Uuid from '@/domain/world/Uuid'

@Component
export default class TwoPaneWithSlideBarLayout extends Vue {
  private dragId?: string

  private leftPaneDisplay = 'none'

  private adsorptionRight = false
  private leftPaneWidth = ''
  private rightPaneWidth = ''

  @Prop()
  private readonly adsorptionRightWhenDoubleClick?: boolean // 右に吸着モード(デフォルトは左吸着)

  @Prop()
  private readonly defaultLeftPaneWidth?: string

  mounted(): void {
    if (!this.defaultLeftPaneWidth) return
    const leftPane = this.$refs.leftPane as HTMLElement
    leftPane.style.width = this.defaultLeftPaneWidth
  }

  onDoubleClickSlideBar(): void {
    const leftPane = this.$refs.leftPane as HTMLElement
    const leftPaneStyle = leftPane.style
    if (!this.adsorptionRightWhenDoubleClick) {
      const last = leftPaneStyle.display
      leftPaneStyle.display = this.leftPaneDisplay
      this.leftPaneDisplay = last
      return
    }
    const rightPane = this.$refs.rightPane as HTMLElement
    const rightPaneStyle = rightPane.style

    this.adsorptionRight = !this.adsorptionRight

    if (this.adsorptionRight) {
      this.leftPaneWidth = leftPaneStyle.width
      this.rightPaneWidth = rightPaneStyle.width
      rightPaneStyle.width = '0%'
      leftPaneStyle.width = '100%'
    } else {
      rightPaneStyle.width = this.rightPaneWidth
      leftPaneStyle.width = this.leftPaneWidth
    }

    rightPaneStyle.display = this.adsorptionRight ? 'none' : 'inline'
  }

  onDragStartMasterPaneSlideBar(event: DragEvent): void {
    this.dragId = Uuid.generate()
    const ddv = DragAndDropSlideBar.prototypeOf().renew(this.dragId)
    event.dataTransfer?.setData('text/plain', ddv.toString())
  }

  onDragOverMasterPaneSlideBar(event: DragEvent): void {
    event?.preventDefault()
  }

  onDropMasterPaneSlideBar(event: DragEvent): void {
    event.preventDefault()
    const ddv = DragAndDropSlideBar.prototypeOf().parseOf(
      event.dataTransfer?.getData('text/plain')
    )
    if (ddv.isInvalid()) return
    if (ddv.id() !== this.dragId) return
    if (this.adsorptionLeft || this.adsorptionRight) return

    const paneContainer = this.$refs.paneContainer as HTMLElement
    const absoluteLeft = paneContainer.getBoundingClientRect().left

    const leftPane = this.$refs.leftPane as HTMLElement
    const style = leftPane.style

    style.width = event.pageX - absoluteLeft + 'px'
  }

  private get adsorptionLeft(): boolean {
    const leftPane = this.$refs.leftPane as HTMLElement
    return leftPane.style.display === 'none'
  }
}
</script>

<style scoped>
.pane-container {
  display: flex;
  height: 100%;
  width: 100%;
  max-width: initial;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: unset;
  margin-left: unset;
}

.left-pane {
  overflow: hidden;
  resize: none;
  text-align: left;
  width: 260px;
}

.right-pane {
  overflow: hidden;
  resize: none;
  flex-grow: 1;
  width: 0%;
  min-width: 0px;
}

.slidebar {
  width: 8px;
  background-color: #404040;
  cursor: col-resize;
  transition: 0.25s;
}

.slidebar:hover {
  background-color: #007acc;
  transition: 0.25s;
}
</style>
