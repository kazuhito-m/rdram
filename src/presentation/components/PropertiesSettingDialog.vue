<template>
  <v-dialog
    persistent
    :max-width="width"
    :value="id"
    @keydown.esc="onClose"
    @keydown.enter="onClickLUpdateExecute"
  >
    <v-form>
      <v-card>
        <v-card-text class="bottom-padding-ignore">{{ categoryTitle }}</v-card-text>
        <v-card-title class="headline top-padding-ignore">「{{ nameForTitle }}の設定</v-card-title>
        <v-card-text>
          <slot name="inputPart"></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="normal" @click="onClose">キャンセル</v-btn>
          <v-btn text :disabled="!consent" color="primary" @click="onClickOk">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "nuxt-property-decorator";

@Component
export default class PropertiesSettingDialog extends Vue {
  @Prop({ required: true })
  private readonly id: any | null = null;
  @Prop({ required: true })
  private nameForTitle!: string;
  @Prop()
  private readonly consent = true;
  @Prop()
  private readonly categoryTitle = "";
  @Prop()
  private readonly width: number = 400;

  @Emit("onClose")
  private onClose(): void {}
  @Emit("onClickOk")
  private onClickOk(): void {}
  @Emit("onShow")
  private onShow(): void {}

  @Watch("id")
  private onChangeId(): void {
    if (this.id) this.onShow();
  }
}
</script>

<style scoped>
.bottom-padding-ignore {
  padding-bottom: 0px;
}
.top-padding-ignore {
  padding-top: 0px;
}
</style>
