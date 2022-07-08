<template>
  <v-bottom-sheet v-model="visible" inset open-on-hover>
    <v-sheet class="text-center pb-6">
      <v-btn class="mt-6" text color="normal" @click="close">close</v-btn>
      <div class="my-3">以下の関連がある図を開きます。</div>
      <div class="my-3">
        <v-chip color="primary">
          <v-icon>{{ usecase().type.iconKey }}</v-icon>
          {{ usecase().name }}
        </v-chip>
        <v-icon>mdi-arrow-left-right-bold</v-icon>
        <v-chip color="primary">
          <v-icon>{{ related().type.iconKey }}</v-icon>
          {{ related().name }}
        </v-chip>
      </div>
      <div class="my-3">
        同じ関連が在る図が複数あります。どの図を開きますか？
      </div>
      <div class="my-3">
        <span
          v-for="diagram in diagrams()"
          :key="diagram.id"
          class="diagram-chip"
        >
          <v-chip outlined label color="info" @click="onClickDiagram(diagram)">
            <v-icon>{{ diagram.type.iconKey }}</v-icon>
            {{ diagram.name }}
          </v-chip>
        </span>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DiagramPropertiesEditDialog from '@/components/diagrams/editor/DiagramPropertiesEditDialog.vue'
import Diagram from '@/domain/diagram/Diagram'
import RelatedResource from '@/domain/analysis/ucscreeninfosatisfaction/RelatedResource'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import Resource from '@/domain/resource/Resource'

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
    this.visible = false
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
    this.resolve(null)
  }

  diagrams(): Diagram[] {
    return this.relatedResource ? this.relatedResource.relateOnDiagrams : []
  }

  usecase(): Resource {
    return this.sat ? this.sat.usecase : Resource.empty()
  }

  related(): Resource {
    return this.relatedResource
      ? this.relatedResource.resource
      : Resource.empty()
  }
}
</script>

<style scoped>
.diagram-chip {
  padding-right: 25px;
  padding-top: 10px;
}
</style>
