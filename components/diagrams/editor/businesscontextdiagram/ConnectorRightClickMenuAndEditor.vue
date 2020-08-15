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
        <v-list-item link>
          <v-list-item-title @click="onClickChangeRouter">関連の線形(軌跡の形状)を変更...</v-list-item-title>
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
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Inject, Emit } from "nuxt-property-decorator";
import Relation from "~/domain/diagram/relation/Relation";
import RouterType from "~/domain/diagram/relation/RouterType";

@Component
export default class ConnectorRightClickMenuAndEditor extends Vue {
  private readonly routerTypes = RouterType.values();
  private visibleRouterSelector = false;

  @Prop({ required: true })
  private visibleConnectorRightClickMenu?: boolean;
  @Prop()
  private menuPositionX?: number;
  @Prop()
  private menuPositionY?: number;
  @Prop({ required: true })
  private relationId?: string;
  @Prop({ required: true })
  private selectedRouterTypeId: number = 0;

  private changedRouterTypeId: number = 0;

  private onClickChangeRouter(): void {
    this.visibleRouterSelector = false;
    this.changedRouterTypeId = this.selectedRouterTypeId;
    this.visibleRouterSelector = true;
  }

  @Emit("onChangeRouterType")
  private onChangeRouterType(routerType: RouterType) {
    this.visibleRouterSelector = false;
  }
}

export interface RelationContainer {
  relation?: Relation;
}
</script>

<style type="sass" scoped>
</style>