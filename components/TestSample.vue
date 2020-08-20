<template lang="html">
  <v-dialog persistent max-width="500"
    v-model="visibleTest"
    :data-loaded="onVisible()"
  >
    <v-card>
      <v-card-text>これが表示されたらそういうこと。</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text 
          color="green darken-1" 
          @click="onClose"
        >
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class TestSample extends Vue {
  @Prop()
  private visibleTest: boolean = false;

  private onVisible(): boolean {
    if (!this.visibleTest) return false;

    alert('ここで表示');    
    
    return true;
  }

  @Emit("onCloseTest")
  private onClose(): void {}
}
</script>

<style scoped>
</style>