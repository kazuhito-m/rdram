<template lang="html">
  <v-dialog v-model="visible" persistent width="800" height="600">
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
              <v-card-subtitle class="pa-0">
                インポートした図
              </v-card-subtitle>
              <v-card-text class="pa-1">
                <v-card class="pa-0">
                  <v-card-title class="py-0 px-2">
                <v-icon>{{ vm.diagramType.iconKey }}</v-icon>
                <v-text-field
                  v-model="vm.srcDiagramName"
                  label="図の名前"
                  dense
                  hide-details
                  filled
                  readonly
                />
                </v-card-title>
                </v-card>
                <v-card v-if="vm.isConfrictDiagramName" outlined class="pa-0">
                  <v-card-text class="py-0 px-2">
                    <v-radio-group
                      v-model="vm.behavior"
                      mandatory
                      row
                      class="pa-0"
                      @change="onChangeBehaviorRadio"
                    >
                      <v-tooltip
                        v-for="behavior in behaviors.behaviorsOfDiagramName"
                        :key="behavior.value"
                        bottom
                        :open-delay="tooltipOpenDelay"
                      >
                        <template #activator="{ on, attrs }">
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
                        v-model="vm.destDiagramName"
                        :rules="[validateDialogName]"
                        :placeholder="vm.srcDiagramName"
                        :disabled="vm.isNotAriasNameOfBehavior()"
                        :counter="vm.diagramNameMaxLength"
                        :maxlength="vm.diagramNameMaxLength"
                        leng
                        label="新しい名前"
                        dense
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
                  height="265px"
                  fixed-header
                >
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-right">#</th>
                        <th class="text-center">種</th>
                        <th class="text-left">アイコン名</th>
                        <th class="text-left">扱い</th>
                        <th class="text-left">新しいアイコン名</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(iconName, index) in vm.iconNames"
                        :key="iconName.sourceId"
                      >
                        <td class="text-right">
                          {{ index + 1 }}
                        </td>
                        <td class="text-center">
                          <v-icon>{{ iconName.resourceType.iconKey }}</v-icon>
                        </td>
                        <td>
                          <v-text-field
                            v-model="iconName.srcName"
                            label="元の名前"
                            dense
                            hide-details
                            filled
                            readonly
                          />
                        </td>
                        <td>
                          <v-radio-group
                            v-model="iconName.behavior"
                            mandatory
                            row
                            class="pa-0"
                            @change="onChangeBehaviorRadio"
                          >
                            <v-tooltip
                              v-for="behavior in behaviors.behaviorsOfResourceName"
                              :key="behavior.value"
                              bottom
                              :open-delay="tooltipOpenDelay"
                            >
                              <template #activator="{ on, attrs }">
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
                            v-model="iconName.destName"
                            :rules="[validateIconName]"
                            :disabled="iconName.isNotAriasNameOfBehavior()"
                            :placeholder="iconName.srcName"
                            label="新しい名前"
                            :counter="iconName.diagramNameMaxLength"
                            :maxlength="iconName.diagramNameMaxLength"
                            leng
                            dense
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
        <v-btn
          text
          color="green darken-1"
          :disabled="!validated"
          @click="onOkClick"
          >OK</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Behaviors from './Behaviors'
import UserArrangeVM from './UserArrangeVM'
import UserArrangeOfImportDiagram from '@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram'

@Component
export default class UserArrengeWhenNameConfrictDialog extends Vue {
  public vm = UserArrangeVM.empty()
  public validated = false

  public behaviors = new Behaviors()

  public visible = false

  private resolve: any = null
  private reject: any = null

  public readonly tooltipOpenDelay = 1000

  public show(
    arrange: UserArrangeOfImportDiagram
  ): Promise<UserArrangeOfImportDiagram> {
    this.visible = true
    this.vm = UserArrangeVM.of(arrange)
    this.validateAll()
    return new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  public onOkClick(): void {
    this.resolve(this.vm.toDomain())
    this.visible = false
  }

  public onClickCancel(): void {
    this.resolve(UserArrangeOfImportDiagram.empty())
    this.visible = false
  }

  public onChangeBehaviorRadio(): void {
    this.$nextTick(() => this.validateAll())
  }

  private validateAll(): void {
    this.validated = this.vm.validate()
  }

  public validateDialogName(value: string): string | boolean {
    const result = this.vm.validateDialogName(value)
    this.validateAll()
    return result
  }

  public validateIconName(value: string): string | boolean {
    // TODO 自身を指定したIconNameのバリデーション。
    console.log('IconNameのValidation予定地', value)
    this.validateAll()
    console.log('全体のValidatedは？', this.validated)
    return true
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
.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover {
  background-color: transparent !important;
}
.v-messages {
  min-height: 0px;
}
</style>
