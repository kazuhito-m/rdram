<template>
  <v-dialog
    persistent
    :max-width="width"
    :value="id"
    @keydown.esc="onKeyEsc"
    @keydown.enter="onKeyEnter"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>{{ iconKey }}</v-icon>
        {{ title }}
      </v-card-title>
      <v-card-subtitle class="text-right">{{ subTitle }}</v-card-subtitle>
      <v-card-text>
        <slot name="inputPart"></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClose">キャンセル</v-btn>
        <v-btn text :disabled="!consent" color="primary" @click="onClickOk">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'nuxt-property-decorator'

@Component
export default class PropertiesSettingDialog extends Vue {
  @Prop({ required: true })
  readonly id: any | null

  @Prop({ required: true })
  title!: string

  @Prop()
  readonly iconKey!: string

  @Prop()
  readonly consent!: boolean

  @Prop()
  readonly subTitle!: string

  @Prop()
  readonly width!: number

  @Prop()
  private readonly ignoreEscKey!: boolean

  @Prop()
  private readonly ignoreEnterKey!: boolean

  @Emit('onClose')
  onClose(): void {}

  @Emit('onClickOk')
  onClickOk(): void {}

  // TODO この下二つは「show()パターン」なら要らないはず。このコンポーネントを使ってるものを点検し、できれば削除。
  @Emit('onShow')
  private onShow(): void {}

  @Watch('id')
  private onChangeId(): void {
    if (this.id) this.onShow()
  }

  onKeyEsc(): void {
    if (this.ignoreEscKey) return
    this.onClose()
  }

  onKeyEnter(): void {
    if (this.ignoreEnterKey) return
    this.onClickOk()
  }
}
</script>

<style type="sass" scoped></style>
