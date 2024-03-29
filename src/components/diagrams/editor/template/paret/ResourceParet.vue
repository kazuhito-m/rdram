<template lang="html">
  <div class="paret-panel">
    <v-expansion-panels v-model="openParetIndexs" multiple focusable dark>
      <v-expansion-panel
        v-for="resourceType in availableResourceTypes"
        :key="resourceType.id"
      >
        <v-expansion-panel-header>
          <div class="omit-long-text">
            <v-icon :id="resourceType.iconKey">{{
              resourceType.iconKey
            }}</v-icon>
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
                    <v-icon>{{ resourceType.iconKey }}</v-icon
                    >新規追加
                  </v-chip>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              v-for="resource in allResources.filter((r) =>
                filterDisplayParet(r, resourceType, usedResouceIds)
              )"
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

      <v-expansion-panel key="0">
        <v-expansion-panel-header>
          <div class="omit-long-text">
            <v-icon>mdi-clipboard-check-multiple-outline</v-icon>この図で使用済
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list dark dence>
            <v-list-item
              v-for="usedResource in allResources.filter((r) =>
                filterUsedList(r, usedResouceIds)
              )"
              :key="usedResource.resourceId"
            >
              <v-list-item-content>
                <v-list-item-title class="chip-container">
                  <v-chip
                    dark
                    :data-resource-id="usedResource.resourceId"
                    data-resource-on-diagram="true"
                    @contextmenu="onRightClickResource"
                  >
                    <v-tooltip left open-delay="2000">
                      <template #activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on">
                          {{ usedResource.type.iconKey }}
                        </v-icon>
                      </template>
                      <span>{{ usedResource.type.name }}</span>
                    </v-tooltip>
                    {{ usedResource.name }}
                  </v-chip>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import DragAndDropResourceType from '@/components/diagrams/editor/template/dad/DragAndDropResourceType'
import DragAndDropResourceId from '@/components/diagrams/editor/template/dad/DragAndDropResourceId'
import ResourceType from '@/domain/resource/ResourceType'
import Resource from '@/domain/resource/Resource'
import Diagram from '@/domain/diagram/Diagram'

@Component
export default class ResourceParet extends Vue {
  readonly availableResourceTypes: ResourceType[] = []
  readonly openParetIndexs: number[] = []

  @Prop({ required: true })
  private readonly diagram!: Diagram // id以外は初期表示用にしか使わない前提。

  @Prop({ required: true })
  readonly allResources!: Resource[]

  @Prop({ required: true })
  readonly usedResouceIds!: number[]

  @Emit('onShowResourceMenu')
  private onShowResourceMenu(_r: Resource, _x: number, _y: number): void {}

  created(): void {
    console.log('initial-paretsOpen:', this.openParetIndexs.join(','))
    this.diagram
      .availableResourceTypes()
      .forEach((resourceType) => this.availableResourceTypes.push(resourceType))
  }

  onDragStartNewCompany(event: DragEvent): void {
    if (!event.target) return
    const target = event.target as HTMLElement
    const text = target.getAttribute('data-resource-type-id')
    if (!text) return
    const typeId = parseInt(text, 10)
    const resourceType = ResourceType.ofId(typeId)
    if (!resourceType) return
    const ddrt = DragAndDropResourceType.prototypeOf().renew(resourceType)
    event.dataTransfer?.setData('text/plain', ddrt.toString())
  }

  onDragStartResource(event: DragEvent): void {
    const chip = event.target as HTMLElement
    const id = this.resourceIdOf(chip)
    const ddri = DragAndDropResourceId.prototypeOf().renew(id)
    event.dataTransfer?.setData('text/plain', ddri.toString())
  }

  onRightClickResource(event: MouseEvent): void {
    event.preventDefault()
    const src = event.target as HTMLElement
    if (!src.parentElement) return
    const id = this.resourceIdOf(src.parentElement) // FIXME ちょっと「Veutifyの構造を知りすぎてる」気がする。手が在れば変えたい。
    if (id === 0) return
    const resource = this.allResources.find((r) => r.resourceId === id)
    if (!resource) return

    this.onShowResourceMenu(resource, event.x, event.y)
  }

  // public methods.

  filterDisplayParet(
    resource: Resource,
    resourceType: ResourceType,
    usedResouceIds: number[]
  ): boolean {
    if (!resource.type.equals(resourceType)) return false
    return !usedResouceIds.includes(resource.resourceId)
  }

  filterUsedList(resource: Resource, usedResouceIds: number[]): boolean {
    return usedResouceIds.includes(resource.resourceId)
  }

  closeAll() {
    console.log('openIds:', this.openParetIndexs)
    this.openParetIndexs.splice(0)
  }

  openAll() {
    console.log('openIds:', this.openParetIndexs)
    const text = this.availableResourceTypes.map((type) => type.id).join(',')
    console.log('availableResourceTypeIds:', text)

    const openIds = this.openParetIndexs
    for (let i = 0; i <= this.availableResourceTypes.length; i++) {
      this.reAddValueOnArray(i, openIds)
    }
  }

  private reAddValueOnArray(value: number, values: number[]): void {
    const existsIndex = values.indexOf(value)
    if (existsIndex >= 0) values.splice(existsIndex, 1)
    values.push(value)
  }

  private resourceIdOf(chip: HTMLElement): number {
    const resourceIdText = chip.getAttribute('data-resource-id') as string
    if (!resourceIdText) return 0
    return Number(resourceIdText)
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
