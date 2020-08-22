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
import MessageBox from "@/presentation/MessageBox.ts";
import Product from "@/domain/product/Product";
import Products from "@/domain/product/Products";
import ProductIdentifier from "@/domain/product/ProductIdentifier";
import Repository from "@/infrastructure/Repository";
import LocalStrage from "@/domain/strage/LocalStrage";

@Component
export default class ProductSelectorDialog extends Vue {
  @Inject()
  private readonly repository?: Repository;

  @Prop()
  private visibleProductSelectorDialog?: boolean;
  @Prop()
  private cancelable = false;

  private selectedProduct: Product | null = null;
  private products?: Products | null = null;

  private onOpen(): string {
    if (!this.visibleProductSelectorDialog) return "";

    const starge = this.repository?.get();
    if (!starge) return "";

    if (!this.products) {
      this.products = starge.products;
    }
    if (!this.selectedProduct) {
      const strage = this.repository?.get() as LocalStrage;
      this.selectedProduct = strage.currentProduct();
    }
    return "";
  }

  private onClickAddProduct() {
    const messageBox = new MessageBox();
    const message = "追加するプロダクトの名前を入力してください。";
    const name = messageBox.promptWith255Limit(message, "", inputText => {
      const exists = this.products?.existsSomeName(inputText);
      if (exists) alert("既に同一のプロダクト名が在ります。");
      return !exists;
    });
    if (!name) return;
    const product = Product.prototypeOf(name);
    this.products = this.products?.add(product);
    this.selectedProduct = product;
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

  private saveAddProduct(product: Product): void {
    const strage = this.repository?.get();
    if (!strage) return;
    const added = strage.add(product);
    this.repository?.register(added);
  }

  private saveCurrentProduct(): boolean {
    const strage = this.repository?.get();
    if (!strage || !this.selectedProduct) return false;
    const a: boolean = strage.isCurrentProduct(this.selectedProduct);
    if (strage.isCurrentProduct(this.selectedProduct)) return false;
    const changed = strage.changeCurrent(this.selectedProduct); 
    this.repository?.register(strage);
    return true;
  }
}
</script>

<style scoped>
</style>