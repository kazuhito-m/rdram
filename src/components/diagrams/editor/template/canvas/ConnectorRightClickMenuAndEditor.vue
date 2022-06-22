<template>
  <div>
    <v-menu
      :value="visible"
      :position-x="menuPositionX"
      :position-y="menuPositionY"
      close-on-click
      close-on-content-click
      offset-x
      rounded
    >
      <v-list>
        <v-list-item link @click="onClickChangeRouter">
          <v-list-item-title>関連の線形(軌跡の形状)を変更...</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="onClickEditConnection">
          <v-list-item-title>関連の設定...</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="onClickDeleteConnection">
          <v-list-item-title>関連の削除</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-bottom-sheet v-model="visibleRouterSelector" inset open-on-hover>
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="normal"
          @click="visibleRouterSelector = !visibleRouterSelector"
          >close</v-btn
        >
        <div class="my-3">変更したい線形(軌跡の形状)を選択してください。</div>
        <v-btn-toggle
          v-model="changedRouterTypeId"
          tile
          color="deep-purple accent-3"
          group
        >
          <v-btn
            v-for="routerType in routerTypes"
            :key="routerType.id"
            :value="routerType.id"
            @click="onChangeRouterType(routerType)"
            >{{ routerType.name }}</v-btn
          >
        </v-btn-toggle>
      </v-sheet>
    </v-bottom-sheet>

    <RelationPropertiesEditDialog
      :relation="editTargetRelation"
      @onUpdateRelationProperties="onUpdateRelationProperties"
      @onClose="onClosePropertiesEditor"
    />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from 'nuxt-property-decorator'
import RelationPropertiesEditDialog from './RelationPropertiesEditDialog.vue'
import Relation from '@/domain/relation/Relation'
import RouterType from '@/domain/relation/RouterType'

@Component({
  components: {
    RelationPropertiesEditDialog,
  },
})
export default class ConnectorRightClickMenuAndEditor extends Vue {
  readonly routerTypes = RouterType.values()
  visibleRouterSelector = false

  @Prop({ required: true })
  visible?: boolean

  @Prop({ required: true })
  private relation!: Relation | null

  @Prop()
  menuPositionX?: number

  @Prop()
  menuPositionY?: number

  @Emit('onUpdateRelation')
  private onUpdateRelation(_relation: Relation): void {}

  @Emit('onDeleteRelation')
  private onDeleteRelation(_relation: Relation): void {}

  changedRouterTypeId: number = 0

  editTargetRelation: Relation | null = null

  onClickChangeRouter(): void {
    if (!this.relation) return
    this.visibleRouterSelector = false
    this.changedRouterTypeId = this.relation.routerType.id
    this.visibleRouterSelector = true
  }

  onChangeRouterType(routerType: RouterType): void {
    if (!this.relation) return
    this.visibleRouterSelector = false
    this.onUpdateRelation(this.relation.changeRouter(routerType))
  }

  onClickDeleteConnection(): void {
    if (!this.relation) return
    this.onDeleteRelation(this.relation)
  }

  onClickEditConnection(): void {
    this.editTargetRelation = this.relation
  }

  onUpdateRelationProperties(relation: Relation): void {
    this.onUpdateRelation(relation)
  }

  onClosePropertiesEditor(): void {
    this.editTargetRelation = null
  }
}

export interface RelationContainer {
  relation?: Relation
}
</script>

<style type="sass" scoped></style>
