<template lang="html">
  <v-dialog persistent max-width="600"
    v-model="visibleProductSelectorDialog"
    :data-opend="onOpen()" 
  >
    <v-card>
      <v-card-title class="headline">プロダクト選択</v-card-title>
      <v-card-text>編集対象となるプロダクトを選択してください。</v-card-text>

      <v-card-actions>
        <v-select
          v-model="selectedProduct"
          :items="products"
          item-text="name"
          label="Product"
          return-object
        >
        </v-select>
        <v-btn text color="primary" @click="onClickAddProduct">追加</v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text 
          v-if="cancelable"
          color="normal" 
          @click="onClose"
        >
          キャンセル
        </v-btn>
        <v-btn text 
          :disabled="!selectedProduct"
          color="green darken-1" 
          @click="onClickOpenProduct"
        >
          プロダクトを開く
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Inject } from "vue-property-decorator";
import Product from "@/domain/product/Product";
import ProductIdentifier from "@/domain/product/ProductIdentifier";
import Repository from "@/infrastructure/Repository";
import LocalStrage from "../domain/strage/LocalStrage";

@Component
export default class ProductSelectorDialog extends Vue {
  @Inject()
  private readonly repository?: Repository;

  @Prop()
  private visibleProductSelectorDialog?: boolean;
  @Prop()
  private cancelable = false;

  private selectedProduct: Product | null = null;
  private products?: Product[] | null = null;

  private onOpen(): string {
    if (!this.visibleProductSelectorDialog) return "";

    const starge = this.repository?.get();
    if (!starge) return "";

    if (!this.products) {
      this.products = starge.products;
    }
    if (!this.selectedProduct) {
      const strage = this.repository?.get() as LocalStrage;
      const currentId = strage.status.currentProductId;
      const selectd = this.products.find(product => product.id === currentId);
      this.selectedProduct = selectd ? selectd : null;
    }
    return "";
  }

  private onClickAddProduct() {
    const name = prompt("追加するプロダクトの名前を入力してください。");
    if (!name) return;
    if (!this.validateProductName(name)) return;
    const product = ProductIdentifier.prototypeProductOf(name);
    this.products?.push(product);
    if (this.products?.length === 1) this.selectedProduct = product;
    this.saveAddProduct(product);
  }

  public onClickOpenProduct(): void {
    const changeCurrent = this.saveCurrentProduct();
    if (!changeCurrent) {
      this.onClose();
      return;
    }
    location.reload();
  }

  @Emit("onClose")
  public onClose(): void {
    this.selectedProduct = null;
    this.products = null;
  }

  private validateProductName(productName: string): boolean {
    if (productName.length > 255) {
      alert("プロダクト名は255文字以内で入力してください。");
      return false;
    }
    const exists = this.products?.some(product => product.name === productName);
    if (exists) {
      alert("既に同一のプロダクト名が在ります。");
      return false;
    }
    return true;
  }

  private saveAddProduct(product: Product): void {
    const strage = this.repository?.get();
    if (!strage) return;
    strage.products.push(product);
    this.repository?.register(strage);
  }

  private saveCurrentProduct(): boolean {
    const strage = this.repository?.get();
    if (!strage || !this.selectedProduct) return false;
    if (strage.status.currentProductId === this.selectedProduct.id)
      return false;
    strage.status.currentProductId = this.selectedProduct.id;
    this.repository?.register(strage);
    return true;
  }
}
</script>

<style scoped>
</style>