<template>
  <v-dialog
    persistent
    :max-width="width"
    :value="id"
    @keydown.esc="onClose"
    @keydown.enter="onClickOk"
  >
    <v-card>
      <v-card-title class="headline"><v-icon>{{ iconKey }}</v-icon>{{ title }}</v-card-title>
      <v-card-subtitle class="text-right">{{ subTitle }}</v-card-subtitle>
      <v-card-text>
        <slot name="inputPart"></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClose">キャンセル</v-btn>
        <v-btn text :disabled="!consent" color="primary" @click="onClickOk">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "nuxt-property-decorator";

@Component
export default class PropertiesSettingDialog extends Vue {
  @Prop({ required: true })
  private readonly id: any | null;
  @Prop({ required: true })
  private title!: string;
  @Prop()
  private readonly iconKey!: string;
  @Prop()
  private readonly consent!: boolean;
  @Prop()
  private readonly subTitle!: string;
  @Prop()
  private readonly width!: number;

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

<style type="sass" scoped>
</style>
