<template>
  <div>
    <v-menu
      :value="visibleConnectorRightClickMenu"
      :close-on-click="true"
      :close-on-content-click="true"
      :offset-x="true"
      :rounded="true"
      :position-x="menuPositionX"
      :position-y="menuPositionY"
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
        >close</v-btn>
        <div class="my-3">変更したい線形(軌跡の形状)を選択してください。</div>
        <v-btn-toggle v-model="changedRouterTypeId" tile color="deep-purple accent-3" group>
          <v-btn
            v-for="routerType in routerTypes"
            v-bind:key="routerType.id"
            :value="routerType.id"
            @click="onChangeRouterType(routerType)"
          >{{ routerType.name }}</v-btn>
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
import { Prop, Component, Vue, Inject, Emit } from "nuxt-property-decorator";
import RelationPropertiesEditDialog from "./RelationPropertiesEditDialog.vue";
import Relation from "@/domain/relation/Relation";
import RouterType from "@/domain/relation/RouterType";

@Component({
  components: {
    RelationPropertiesEditDialog
  }
})
export default class ConnectorRightClickMenuAndEditor extends Vue {
  private readonly routerTypes = RouterType.values();
  private visibleRouterSelector = false;

  @Prop({ required: true })
  private visibleConnectorRightClickMenu?: boolean;
  @Prop({ required: true })
  private relation!: Relation | null;
  @Prop()
  private menuPositionX?: number;
  @Prop()
  private menuPositionY?: number;

  @Emit("onUpdateRelation")
  private onUpdateRelation(relation: Relation): void {}
  @Emit("onDeleteRelation")
  private onDeleteRelation(relation: Relation): void {}

  private changedRouterTypeId: number = 0;

  private editTargetRelation: Relation | null = null;

  private onClickChangeRouter(): void {
    if (!this.relation) return;
    this.visibleRouterSelector = false;
    this.changedRouterTypeId = this.relation.routerType.id;
    this.visibleRouterSelector = true;
  }

  private onChangeRouterType(routerType: RouterType): void {
    if (!this.relation) return;
    this.visibleRouterSelector = false;
    this.onUpdateRelation(this.relation.changeRouter(routerType));
  }

  private onClickDeleteConnection(): void {
    if (!this.relation) return;
    this.onDeleteRelation(this.relation);
  }

  private onClickEditConnection(): void {
    this.editTargetRelation = this.relation;
  }

  private onUpdateRelationProperties(relation: Relation): void {
    this.onUpdateRelation(relation);
  }

  private onClosePropertiesEditor(): void {
    this.editTargetRelation = null;
  }
}

export interface RelationContainer {
  relation?: Relation;
}
</script>

<style type="sass" scoped>
</style>