<template>
  <DiagramPropertiesEditDialog ref="dialog">
    <template #headMessage>
      <v-alert border="left" elevation="2" colored-border>
        {{ usecase.type.name }}
        <v-chip color="primary" dark draggable>
          <v-icon>{{ usecase.type.iconKey }}</v-icon>
          {{ usecase.name }}
        </v-chip>

        を初期配置した、{{ diagram.type.name }}

        <v-chip
          outlined
          label
          color="info"
        >
          <v-icon>{{ diagram.type.iconKey }}</v-icon>
          {{ diagram.name }}
        </v-chip>

        を作成します。
      </v-alert>
    </template>
  </DiagramPropertiesEditDialog>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import DiagramPropertiesEditDialog from '@/components/diagrams/editor/DiagramPropertiesEditDialog.vue'
import Diagram from '@/domain/diagram/Diagram'
import Resource from '@/domain/resource/Resource'

@Component({
  components: { DiagramPropertiesEditDialog },
})
export default class UcRelatedDiagramPropertiesEditDialog extends Vue {
  usecase!: Resource
  diagram!: Diagram

  // public methods.

  showOf(diagram: Diagram, usecase: Resource): Promise<Diagram> {
    this.usecase = usecase
    this.diagram = diagram

    const dialog = this.$refs.dialog as DiagramPropertiesEditDialog
    return dialog.showOf(diagram)
  }
}
</script>

<style scoped></style>
