<template>
  <v-bottom-sheet v-model="visible" inset open-on-hover>
    <v-sheet class="text-center" height="200px">
      <v-btn class="mt-6" text color="normal" @click="close">close</v-btn>
      <div class="my-3">
        同じ関連が在る図が複数あります。どの図を開きますか？
      </div>
      <v-chip
        v-for="(diagram, index) in relatedResource.relateOnDiagrams"
        :key="diagram.id"
        outlined
        label
        color="info"
        @click="onClickDiagram(diagram)"
      >
        <v-icon>{{ diagram.type.iconKey }}</v-icon>
        {{ diagram.type.name }}
      </v-chip>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DiagramPropertiesEditDialog from '@/components/diagrams/editor/DiagramPropertiesEditDialog.vue'
import Diagram from '@/domain/diagram/Diagram'
import RelatedResource from '@/domain/analysis/ucscreeninfosatisfaction/RelatedResource'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'

@Component({
  components: { DiagramPropertiesEditDialog },
})
export default class RelatedDiagramsSelector extends Vue {
  visible = false
  relatedResource!: RelatedResource
  sat!: UcScreenInfoSatisfaction

  private resolve: any = null

  // component events.

  onClickDiagram(diagram: Diagram): void {
    this.close()
    this.resolve(diagram)
  }

  // public methods.

  showOf(
    relatedResource: RelatedResource,
    sat: UcScreenInfoSatisfaction
  ): Promise<Diagram> {
    this.relatedResource = relatedResource
    this.sat = sat

    this.visible = true
    return new Promise((resolve) => (this.resolve = resolve))
  }

  close(): void {
    this.visible = false
  }

  // private method.
}
</script>

<style scoped></style>
