<template lang="html">
  <v-dialog v-model="visible" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">LocalStorageの初期化</v-card-title>
      <v-card-text>LocalStorageが初期化されていません。<br>このWebアプリケーションは、ブラウザ固有のストレージ(LocalStarage)を使用します。<br>LocalStorageを初期化し、データを保存してよろしいですか。</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="onClickAcceptUseLocalStorage">許可する</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";
import StorageRepository from "@/domain/storage/StorageRepository";

@Component
export default class LocalStorageInitializeDialog extends Vue {
  @Inject()
  private readonly repository?: StorageRepository;

  @Prop()
  private visible?: boolean;

  @Emit("onClose")
  private onClose(): void {}

  private onClickAcceptUseLocalStorage() {
    this.repository?.initialize();
    this.onClose();
  }
}
</script>

<style scoped>
</style>