<template lang="html">
  <v-dialog v-model="visible" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">LocalStragenoの初期化</v-card-title>
      <v-card-text>LocalStrageが初期化されていません。<br>このWebアプリケーションは、ブラウザ固有のストレージ(LocalStarage)を使用します。<br>LocalStrageを初期化し、データを保存してよろしいですか。</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="onClickAcceptUseLocalStrage">許可する</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";
import Repository from "@/infrastructure/Repository";

@Component
export default class LocalStrageInitializeDialog extends Vue {
  @Inject()
  private readonly repository?: Repository;

  @Prop()
  private visible?: boolean;

  @Emit("onClose")
  private onClose(): void {}

  private onClickAcceptUseLocalStrage() {
    this.repository?.initialize();
    this.onClose();
  }
}
</script>

<style scoped>
</style>