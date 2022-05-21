<template lang="html">
  <v-dialog v-model="visible" persistent width="800" height="600" light>
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-sync-alert</v-icon> 図/アイコンの名前の重複
      </v-card-title>
      <v-card-text>
        インポートした内容に「名前の重複」がありました。どのように扱うかを指定してください。
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12" class="py-1">
            <v-card outlined class="pa-1">
              <v-card-subtitle class="pa-0">インポートした図</v-card-subtitle>
              <v-card-text class="pa-1">
                <v-text-field
                  label="図の名前"
                  dense
                  hide-details
                  filled
                  readonly
                  disabled
                />
                <v-card outlined class="pa-0">
                  <v-card-text class="py-0 px-2">
                    <v-radio-group row class="pa-0">
                      <v-radio label="上書" value="radio-1"></v-radio>
                      <v-radio label="別名" value="radio-2"></v-radio>
                      <v-text-field
                        label="新しい名前"
                        dense
                        hide-details
                      ></v-text-field>
                    </v-radio-group>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" class="py-1">
            <v-card outlined class="pa-1">
              <v-card-subtitle class="pa-0">インポートしたアイコン</v-card-subtitle>
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
