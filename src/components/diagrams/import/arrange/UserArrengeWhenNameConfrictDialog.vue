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
                  v-model="userArrange.sourceDiagramName"
                  label="図の名前"
                  dense
                  hide-details
                  filled
                  readonly
                />
                <v-card outlined class="pa-0">
                  <v-card-text class="py-0 px-2">
                    <v-radio-group
                      v-model="userArrange.conflictDiagramName.behavior"
                      mandatory
                      row
                      class="pa-0"
                    >
                      <v-tooltip
                        v-for="behavior in behaviors.behaviorsOfDiagramName"
                        bottom
                        :open-delay="tooltipOpenDelay"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-radio
                            :label="behavior.name"
                            :value="behavior.value"
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <span>{{ behavior.description }}</span>
                      </v-tooltip>
                      <v-text-field
                        v-model="
                          userArrange.conflictDiagramName.destinationName
                        "
                        :placeholder="
                          userArrange.conflictDiagramName.sourceName
                        "
                        :disabled="
                          userArrange.conflictDiagramName.isNotAriasNameOfBehavior()
                        "
                        label="新しい名前"
                        dense
                        hide-details
                      />
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
              <v-card-subtitle class="pa-0"
                >インポートしたアイコン</v-card-subtitle
              >
              <v-card-text class="py-0 px-2">
                <v-simple-table
                  ref="resultList"
                  dense
                  height="225px"
                  fixed-header
                  @scroll="alert('test')"
                >
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">アイコン名</th>
                        <th class="text-left">扱い</th>
                        <th class="text-left">新しいアイコン名</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="conflictResourceName in userArrange.conflictResourceNames"
                        :key="conflictResourceName.sourceId"
                      >
                        <td>
                          <v-text-field
                            v-model="conflictResourceName.sourceName"
                            label="元の名前"
                            dense
                            hide-details
                            readonly
                          />
                        </td>
                        <td>
                          <v-radio-group
                            v-model="conflictResourceName.behavior"
                            mandatory
                            row
                            class="pa-0"
                          >
                            <v-tooltip
                              v-for="behavior in behaviors.behaviorsOfResourceName"
                              bottom
                              :open-delay="tooltipOpenDelay"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-radio
                                  :label="behavior.name"
                                  :value="behavior.value"
                                  v-bind="attrs"
                                  v-on="on"
                                />
                              </template>
                              <span>{{ behavior.description }}</span>
                            </v-tooltip>
                          </v-radio-group>
                        </td>
                        <td>
                          <v-text-field
                            v-model="conflictResourceName.destinationName"
                            :disabled="
                              conflictResourceName.isNotAriasNameOfBehavior()
                            "
                            :placeholder="conflictResourceName.sourceName"
                            label="新しい名前"
                            dense
                            hide-details
                          />
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="normal" @click="onClickCancel">キャンセル</v-btn>
        <v-btn text color="green darken-1" @click="onOkClick">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserArrangeOfImportDiagram from '@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram'
import Behaviors from './Behaviors'

@Component
export default class UserArrengeWhenNameConfrictDialog extends Vue {
  public visible = false
  public userArrange: UserArrangeOfImportDiagram =
    UserArrangeOfImportDiagram.empty()
  public behaviors = new Behaviors()

  private resolve: any = null
  private reject: any = null

  public readonly tooltipOpenDelay = 1000

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

<style type="sass">
.v-input--selection-controls__input {
  height: 12px;
  width: 12px;
  margin-right: 4px;
}
div.v-input--selection-controls__ripple {
  height: 22px;
  width: 22px;
  top: calc(50% - 18px);
}
.v-input--radio-group.v-input--radio-group--row .v-radio {
  margin-right: 8px;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  padding-left: 4px;
  padding-right: 4px;
}
input[type='text'] {
  min-width: 250px;
}
</style>
