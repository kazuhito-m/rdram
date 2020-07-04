<template>
  <div>
    <p>これが表示サれていれば、大成功です！</p>
    <p>作成時刻:{{ createDateTime }}</p>
    <p>伝播されてくるID:{{ diagramId }}</p>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class DiagramEditorContainer extends Vue {
  @Prop({ required: true})
  private diagramId?: number;

  private createDateTime: Date = new Date();
}
</script>

<style>
</style>
