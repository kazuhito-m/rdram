<template>
  <div>
    <CoreResourceEditDialog
      :resource="resource"
      :resources="resources"
      @onModifyResource="onModifyResource"
      @onClose="onClose"
    >
      <template v-slot:customInputFields>
        ここに表示されたら、CoreResourceEditDialogですね。
      </template>
    </CoreResourceEditDialog>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Inject,
  Emit,
  Watch
} from "nuxt-property-decorator";
import PropertiesSettingDialog from "@/presentation/components/PropertiesSettingDialog.vue";
import StrageRepository from "@/domain/strage/StrageRepository";
import ResourceType from "@/domain/resource/ResourceType";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class HasContentResourceEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Resource;
  @Prop({ required: true })
  private readonly resources!: Resources;

  @Emit("onUpdatedResource")
  private onUpdatedResource(resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}
}
</script>

<style scoped>
</style>
