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
          <v-list-item-title @click="onClickChangeRouter">関連の線形(線の軌跡の形状)を変更...</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Inject } from "nuxt-property-decorator";
import Relation from "~/domain/diagram/relation/Relation";

@Component
export default class ConnectorRightClickMenuAndEditor extends Vue {
  // @Inject()
  // private repository!: Repository

  private relationContainer!: RelationContainer;

  @Prop()
  private visibleConnectorRightClickMenu = false;
  @Prop()
  private menuPositionX?: number;
  @Prop()
  private menuPositionY?: number;

  public created(): void {}

  public mounted() {}

  public onClickChangeRouter(): void {
    alert("祝！開通！");
  }
}

export interface RelationContainer {
  relation?: Relation;
}
</script>

<style type="sass" scoped>
</style>