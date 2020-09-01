<template>
  <DiagramEditor
    :diagramId="diagramId"
    :allResourcesOnCurrentProduct="allResourcesOnCurrentProduct"
    :lastPropertiesUpdatedDiagramId="lastPropertiesUpdatedDiagramId"
    @onUpdateResources="onUpdateResources"
    @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
  />
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";
import DiagramEditor from "@/presentation/components/diagrams/editor/template/DiagramEditor.vue";
import Resource from "@/domain/resource/Resource";

@Component({
  components: {
    DiagramEditor
  }
})
export default class InfomationModelEditor extends Vue {
  // Props

  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private readonly allResourcesOnCurrentProduct!: Resource[];

  @Prop({ required: true })
  private readonly lastPropertiesUpdatedDiagramId?: number;

  // Emits

  @Emit("onUpdateResources")
  private onUpdateResources(): void {}

  @Emit("onOpendDiagramPropertiesEditor")
  private onOpendDiagramPropertiesEditor(diagramId: number): void {}

  // Vue events(Life cycle events)

  private created(): void {}
}
</script>

<style>
</style>
