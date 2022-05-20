<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel">
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message">{{ message }}</v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" @click.native="agree"> Yes </v-btn>
        <v-btn color="grey" @click.native="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Confirm extends Vue {
  private dialog = false
  private resolve: any = null
  private reject: any = null
  private message: string | null = null
  private title: string | null = null
  private options = {
    color: 'primary',
    width: 290,
  }

  public open(title: string, message: string, options: any): Promise<boolean> {
    this.dialog = true
    this.title = title
    this.message = message
    this.options = Object.assign(this.options, options)
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  private agree(): void {
    this.resolve(true)
    this.dialog = false
  }

  private cancel(): void {
    this.resolve(false)
    this.dialog = false
  }
}
</script>