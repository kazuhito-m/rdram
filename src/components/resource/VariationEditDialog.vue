<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :diagram="diagram"
    :consent="consent"
    dialogWidth="450"
    ignoreEscKey="true"
    ignoreEnterKey="true"
    @onModifyResource="onModifyResourceInner"
    @onClose="onClose"
    @showCustomProperties="showCustomProperties"
    @changeConsent="changeConsent"
  >
    <template #customInputFields>
      <v-row>
        <v-col>
          <div ref="valuesSpreadDiv" class="values-spread"></div>
        </v-col>
      </v-row>
    </template>
  </CoreResourceEditDialog>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit
} from "nuxt-property-decorator";
import jexcel, { JExcelElement, CellValue } from "jexcel";
import "jexcel/dist/jexcel.css";

import CoreResourceEditDialog from "./CoreResourceEditDialog.vue";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import Variation from "@/domain/resource/Variation";
import Diagram from "@/domain/diagram/Diagram";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class VariationEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: Variation;

  @Prop({ required: true })
  private readonly resources!: Resources;

  @Prop({ required: true })
  private readonly diagram!: Diagram;

  @Emit("onModifyResource")
  private onModifyResource(_resource: Resource): void {}

  @Emit("onClose")
  private onClose(): void {}

  private values: string[][] = [];
  private valuesSpread: JExcelElement | null = null;
  private consent: boolean = false;

  private showCustomProperties(resource: Variation): void {
    if (this.valuesSpread !== null) this.valuesSpread.destroy();

    this.values = resource.valuesOf().map(value => [value]);
    const div = this.$refs.valuesSpreadDiv as HTMLDivElement;
    this.valuesSpread = this.createSpread(this.values, div);
  }

  private createSpread(_values: string[][], div: HTMLDivElement): JExcelElement {
    const options = {
      data: this.values,
      allowToolbar: true,
      columnResize: false,
      columnSorting: false,
      tableOverflow: true,
      tableHeight: "130px",
      allowInsertColumn: false,
      onchange: this.onChangedCell,
      columns: [
        { type: "text", title: "値の種類", width: "325px", align: "left" }
      ] as any
    };
    return jexcel(div, options);
  }

  private onChangedCell(
    _instance: HTMLElement,
    cell: HTMLTableCellElement,
    _columnIndex: string,
    rowIndex: string,
    value: CellValue
  ): void {
    const rowIndexNumber = Number(rowIndex);
    const changeValue = value as string;
    const fixedValue = changeValue
      .trim()
      .substring(0, Variation.CONDITION_VALUE_MAX_LENGTH);
    this.values[rowIndexNumber][0] = fixedValue;
    cell.textContent = fixedValue;
  }

  private onModifyResourceInner(resource: Variation): void {
    const newValues = this.values
      .map(line => line[0])
      .map(value => value.trim())
      .filter(value => value.length > 0);
    const withContent = resource.withValues(newValues);
    this.onModifyResource(withContent);
  }

  private changeConsent(newConsent: boolean): void {
    this.consent = newConsent;
  }
}
</script>

<style scoped>
.values-spread {
  color: black;
}
</style>
