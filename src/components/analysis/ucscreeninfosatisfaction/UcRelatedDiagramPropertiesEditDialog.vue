<template>
  <DiagramPropertiesEditDialog ref="dialog">
    <template #headMessage>
      <v-alert border="bottom" colored-border type="info" elevation="2">
        <v-container>
          <v-row>
            <v-col class="pt-1 pb-1">
              {{ usecase.type.name }}
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-1 pb-1">
              <v-chip color="primary">
                <v-icon>{{ usecase.type.iconKey }}</v-icon>
                {{ usecase.name }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-1 pb-1"> が初期配置された図</v-col>
          </v-row>
          <v-row>
            <v-col class="pt-1 pb-1">
              <v-chip outlined label color="info">
                <v-icon>{{ diagram.type.iconKey }}</v-icon>
                {{ diagram.type.name }}
              </v-chip>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-1 pb-1"> を新たに作成します。 </v-col>
          </v-row>
        </v-container>
      </v-alert>
    </template>
  </DiagramPropertiesEditDialog>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DiagramPropertiesEditDialog from '@/components/diagrams/editor/DiagramPropertiesEditDialog.vue'
import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'
import UcScreenInfoSatisfaction from '@/domain/analysis/ucscreeninfosatisfaction/UcScreenInfoSatisfaction'
import UseCaseCompositeDiagram from '@/domain/diagram/rdra20/usecasecomposite/UseCaseCompositeDiagram'
import Placement from '@/domain/diagram/placement/Placement'

@Component({
  components: { DiagramPropertiesEditDialog },
})
export default class UcRelatedDiagramPropertiesEditDialog extends Vue {
  usecase!: Resource
  diagram!: Diagram

  // public methods.

  showOf(sat: UcScreenInfoSatisfaction): Promise<Diagram> {
    this.usecase = sat.usecase
    this.diagram = this.makeDiagram()

    const dialog = this.$refs.dialog as DiagramPropertiesEditDialog
    return dialog.showOf(this.diagram)
  }

  // private method.

  private makeDiagram(): Diagram {
    const diagram = UseCaseCompositeDiagram.prototypeOf(Number.MAX_VALUE, '')
    const placemnt = diagram.createPlacementAtCenter(this.usecase) as Placement
    return diagram.addPlacement(placemnt)
  }
}
</script>

<style scoped></style>
