<template lang="html">
  <div class="paret-panel">
  <v-expansion-panels  v-model="paretsOpen" multiple focusable dark>
    <v-expansion-panel
      v-for="resourceType in availableResourceTypes"
      :key="resourceType.id"
    >
      <v-expansion-panel-header>
        <div class="omit-long-text">
          <v-icon :id="resourceType.iconKey">{{ resourceType.iconKey }}</v-icon>
          {{ resourceType.name }}
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list dark dence>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="chip-container">
                <v-chip
                  color="primary"
                  dark
                  outlined
                  draggable
                  :data-resource-type-id="resourceType.id"
                  @dragstart="onDragStartNewCompany"
                >
                  <v-icon>{{ resourceType.iconKey }}</v-icon>新規追加
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="resource in allResourcesOnCurrentProduct.filter(r => filterDisplayParet(r, resourceType, usedResouceIds))"
            :key="resource.resourceId"
          >
            <v-list-item-content>
              <v-list-item-title class="chip-container">
                <v-chip
                  :data-resource-id="resource.resourceId"
                  color="primary"
                  dark
                  draggable
                  @dragstart="onDragStartResource"
                  @contextmenu="onRightClickResource"
                >
                  <v-icon>{{ resourceType.iconKey }}</v-icon>
                  {{ resource.name }}
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <div class="omit-long-text">
          <v-icon>mdi-clipboard-check-multiple-outline</v-icon>この図で使用済
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list dark dence>
          <v-list-item
            v-for="usedResource in allResourcesOnCurrentProduct.filter(r => filterUsedList(r, usedResouceIds))"
            :key="usedResource.id"
          >
            <v-list-item-content>
              <v-list-item-title class="chip-container">
                <v-chip
                  dark
                  :data-resource-id="usedResource.resourceId"
                  data-resource-on-diagram="true"
                  @contextmenu="onRightClickResource"
                >
                  <v-icon>{{ iconKeyOf(usedResource) }}</v-icon>
                  {{ usedResource.name }}
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-menu
      :value="rightClickedResourceId"
      :close-on-click="true"
      :close-on-content-click="true"
      :offset-x="true"
      :rounded="true"
      :position-x="rightClickedResourceX"
      :position-y="rightClickedResourceY"
    >
      <v-list>
        <v-list-item
          v-if="false"
          link
        >
          <v-list-item-title>編集...</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-if="true"
          link
          @click="onClickMenuOpenDiagramOfResourcePair"
        >
          <v-list-item-title>対応する図を開く</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-if="rightClickedResourceOnDiagram"
          link
          @click="onClickMenuDeleteResourceOnDiagram"
        >
          <v-list-item-title>この図から削除</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-if="rightClickedResourceOnProduct"
          link
          @click="onClickMenuDeleteResourceOnProduct"
        >
          <v-list-item-title>プロダクト全体から削除</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Product from "@/domain/product/Product";

@Component
export default class ResourceParet extends Vue {
  @Prop({ required: true })
  private readonly diagramId!: number;

  @Prop({ required: true })
  private readonly allResourcesOnCurrentProduct!: Resource[];

  @Prop({ required: true })
  private readonly usedResouceIds!: number;

  @Prop({ required: true })
  private readonly product!: Product;

  private readonly availableResourceTypes: ResourceType[] = [];
  private readonly paretsOpen: number[] = [];

  private rightClickedResourceId = 0;
  private rightClickedResourceOnDiagram = false;
  private rightClickedResourceOnProduct = false;
  private rightClickedResourceX = 0;
  private rightClickedResourceY = 0;

  @Emit("onOpenDiagramOfResourcePair")
  private onOpenDiagramOfResourcePair(_resourceId: number): void {}

  @Emit("onDeleteResourceOnDiagram")
  private onDeleteResourceOnDiagram(_resourceId: number): void {}

  @Emit("onDeleteResourceOnProduct")
  private onDeleteResourceOnProduct(_resourceId: number): void {}

  public created(): void {
    const diagram = this.product.diagrams.of(this.diagramId);
    if (!diagram) return;

    diagram
      .availableResourceTypes()
      .forEach(resourceType => this.availableResourceTypes.push(resourceType));
  }

  public onDragStartNewCompany(event: DragEvent): void {
    if (!event.target) return;
    const target = event.target as HTMLElement;
    const text = target.getAttribute("data-resource-type-id");
    if (!text) return;
    const resourceTypeId = parseInt(text, 10);
    event.dataTransfer?.setData("text", "-" + resourceTypeId);
  }

  public onDragStartResource(event: DragEvent): void {
    const chip = event.srcElement as HTMLElement;
    const resourceIdText = chip.getAttribute("data-resource-id") as string;
    event.dataTransfer?.setData("text", resourceIdText);
  }

  private onRightClickResource(event: MouseEvent): void {
    event.preventDefault();
    const src = event.srcElement as HTMLElement;
    let resourceIdText = src.getAttribute("data-resource-id") as string;
    const chip = src.parentElement as HTMLElement; // FIXME ちょっと「Veutifyの構造を知りすぎてる」気がする。手が在れば変えたい。
    resourceIdText = chip.getAttribute("data-resource-id") as string;
    if (!resourceIdText) return;
    const resourceId = Number(resourceIdText);
    const onDinagram = chip.getAttribute("data-resource-on-diagram") as string;

    const resource = this.allResourcesOnCurrentProduct.find(
      r => r.resourceId === resourceId
    );
    if (!resource) return;

    this.rightClickedResourceOnDiagram = onDinagram === "true";
    this.rightClickedResourceOnProduct = resource.deletable;
    this.rightClickedResourceId = 0;
    this.rightClickedResourceX = event.x;
    this.rightClickedResourceY = event.y;
    this.$nextTick(() => {
      this.rightClickedResourceId = resourceId;
    });
  }

  private onClickMenuOpenDiagramOfResourcePair(): void {
    const resourceId = Number(this.rightClickedResourceId);
    this.onOpenDiagramOfResourcePair(resourceId);
  }

  private onClickMenuDeleteResourceOnDiagram(): void {
    const resourceId = Number(this.rightClickedResourceId);
    this.onDeleteResourceOnDiagram(resourceId);
  }

  private onClickMenuDeleteResourceOnProduct(): void {
    const resourceId = Number(this.rightClickedResourceId);
    this.onDeleteResourceOnProduct(resourceId);
  }

  private filterDisplayParet(
    resource: Resource,
    resourceType: ResourceType,
    usedResouceIds: number[]
  ): boolean {
    const diagram = this.product.diagrams.of(this.diagramId);
    if (!diagram) return false;
    if (!resource.type.equals(resourceType)) return false;
    return !usedResouceIds.includes(resource.resourceId);
  }

  private filterUsedList(
    resource: Resource,
    usedResouceIds: number[]
  ): boolean {
    return usedResouceIds.includes(resource.resourceId);
  }

  private iconKeyOf(resource: Resource): string {
    if (!resource) return "";
    return resource.type.iconKey;
  }
}
</script>

<style>
.paret-panel {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.omit-long-text {
  position: absolute;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 0px;
}

.ignore-padding {
  padding: 0 0px 0px;
}

.chip-container {
  position: absolute;
  text-align: left;
  width: 100%;
}

.v-expansion-panel-content__wrap {
  padding: 0 0px 0px;
  flex: auto;
}

.v-expansion-panel--next-active {
  padding: 0 0px 0px;
}
</style>