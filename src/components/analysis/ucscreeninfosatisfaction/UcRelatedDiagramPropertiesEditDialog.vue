<template>
  <DiagramPropertiesEditDialog ref="dialog">
    <template #headMessage>
        ※建設予定地
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
  // public methods.

  showOf(diagram: Diagram, _usecase: Resource): Promise<Diagram> {
    const dialog = this.$refs.dialog as DiagramPropertiesEditDialog
    return dialog.showOf(diagram)
  }
}
</script>

<style scoped></style>
