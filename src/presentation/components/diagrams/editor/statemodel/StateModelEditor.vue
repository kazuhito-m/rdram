<template>
  <div class="mainpain">
    <p>StateModelEditor</p>
    <p>id:{{ diagram.id }}</p>
    <p>name:{{ diagram.name }}</p>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "nuxt-property-decorator";
import Diagram from "@/domain/diagram/Diagram";

@Component
export default class StateModelEditor extends Vue {
  @Prop({ required: true })
  private readonly diagram!: Diagram;

  public created(): void {
    console.log("StateModelEditor:" + this.diagram.name);
  }

  @Emit("onUpdateResources")
  private onUpdateResources(diagramId: number): void {}
}
</script>

<style>
.mainpain {
  background-color: aqua;
}
</style>
