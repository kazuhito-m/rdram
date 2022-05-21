<template lang="html">
  <v-dialog v-model="visible" persistent width="650" height="500">
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-sync-alert</v-icon> 図/アイコンの名前の重複
      </v-card-title>
      <v-card-text>
        インポートした内容に、名前の重複がありました。<br />
        どのように扱うかを指定してください。
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12">
            <v-card>
              <v-text-field label="インポートされた図の名前" filled readonly>
              </v-text-field>
              <v-card>
                <v-card-text>
                  <v-card-text> aaa </v-card-text>
                </v-card-text>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClickCancel"> キャンセル </v-btn>
        <v-btn text color="green darken-1" @click="onOkClick"> 実行 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserArrangeOfImportDiagram from '@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram'

@Component
export default class UserArrengeWhenNameConfrictDialog extends Vue {
  public visible = false
  private userArrange: UserArrangeOfImportDiagram =
    UserArrangeOfImportDiagram.empty()

  private resolve: any = null
  private reject: any = null

  public show(
    arrange: UserArrangeOfImportDiagram
  ): Promise<UserArrangeOfImportDiagram> {
    this.visible = true
    this.userArrange = arrange
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  public onOkClick(): void {
    this.resolve(this.userArrange)
    this.visible = false
  }

  public onClickCancel(): void {
    this.resolve(UserArrangeOfImportDiagram.empty())
    this.visible = false
  }
}
</script>
