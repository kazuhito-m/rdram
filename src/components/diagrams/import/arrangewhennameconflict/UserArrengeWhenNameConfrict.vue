<template>
  <v-dialog v-model="visible" width="400" height="400">
    <v-card>
      <v-toolbar dark dense flat>
        <v-toolbar-title class="white--text">タイトル</v-toolbar-title>
      </v-toolbar>
      <v-card-text>ここに本文</v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" @click.native="onOkClick">OK</v-btn>
        <v-btn color="grey" @click.native="onClickCancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UserArrengeWhenNameConfrict extends Vue {
  public visible = false
  private resolve: any = null
  private reject: any = null

  public show(): Promise<boolean> {
    this.visible = true
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  public onOkClick(): void {
    this.resolve(true)
    this.visible = false
  }

  public onClickCancel(): void {
    this.resolve(false)
    this.visible = false
  }
}
</script>
