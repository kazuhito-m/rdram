<template>
  <CoreResourceEditDialog
    :resource="resource"
    :resources="resources"
    :diagram="diagram"
    :consent="consent"
    ignoreEscKey="true"
    ignoreEnterKey="true"
    dialogWidth="600"
    @onModifyResource="onModifyResourceInner"
    @onClose="onClose"
    @showCustomProperties="showCustomProperties"
    @changeConsent="changeConsent"
  >
    <template #customInputFields>
      <v-row>
        <v-col>
          条件
          <br />
          <div ref="valuesSpreadDiv" class="values-spread-headless"></div>
          ※tabキーで列追加、enterキーで行追加、右クリックでその他の操作
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
import TableTypeCondition from "@/domain/resource/TableTypeCondition";
import Condition from "@/domain/resource/Condition";
import Diagram from "@/domain/diagram/Diagram";

@Component({
  components: {
    CoreResourceEditDialog
  }
})
export default class TableTypeConditionEditDialog extends Vue {
  @Prop({ required: true })
  private readonly resource!: TableTypeCondition;

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

  private showCustomProperties(resource: TableTypeCondition): void {
    if (this.valuesSpread !== null) this.valuesSpread.destroy();

    this.values = resource.valuesOf();
    const div = this.$refs.valuesSpreadDiv as HTMLDivElement;
    this.valuesSpread = this.createSpread(this.values, div);
  }

  private createSpread(_values: string[][], div: HTMLDivElement): JExcelElement {
    const options = {
      data: this.values,
      allowToolbar: true,
      columnResize: true,
      columnSorting: false,
      rowResize: true,
      tableOverflow: true,
      tableHeight: "130px",
      tableWidth: "530px",
      defaultColWidth: "130px",
      defaultColAlign: "left",
      allowInsertColumn: true,
      onchange: this.onChangedCell
    } as any;
    const target = jexcel(div, options);
    target.hideIndex();
    this.hideRowHeader(div);
    return target;
  }

  private hideRowHeader(spreadTable: HTMLElement): void {
    const tHead = spreadTable
      .getElementsByTagName("thead")
      .item(0) as HTMLTableSectionElement;
    tHead.style.display = "none";
  }

  private onChangedCell(
    _instance: HTMLElement,
    cell: HTMLTableCellElement,
    columnIndex: string,
    rowIndex: string,
    value: CellValue
  ): void {
    const row = Number(rowIndex);
    const col = Number(columnIndex);

    const fixedValue = this.fixInputValue(value as string);

    this.values[row][col] = fixedValue;
    cell.textContent = fixedValue;
  }

  private fixInputValue(value: string): string {
    return value
      .trim()
      .substring(0, Condition.CONDITION_VALUE_MAX_LENGTH);
  }

  private onModifyResourceInner(resource: TableTypeCondition): void {
    const newValues = this.values.map(line => this.normalizeValues(line));
    const withContent = resource.withValues(newValues);
    this.onModifyResource(withContent);
  }

  private normalizeValues(values: string[]): string[] {
    return values.map(value => value.trim());
  }

  private changeConsent(newConsent: boolean): void {
    this.consent = newConsent;
  }
}
</script>

<style scoped>
.values-spread-headless {
  color: black;
}

.values-spread-headless > div > table > tbody > tr > td {
  min-height: 120px;
}
</style>
