<template lang="html">
  <v-dialog
    v-model="visibleProductSelectorDialog"
    :data-opend="onOpen()" 
    persistent max-width="600"
  >
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-account-switch-outline</v-icon> プロダクト切替え
      </v-card-title>
      <v-card-text>編集対象となるプロダクトを選択してください。</v-card-text>

      <v-card-actions>
        <v-select
          v-model="selectedProduct"
          :items="productsList()"
          item-text="name"
          label="Product"
          return-object
        >
        </v-select>
        <v-btn text color="primary" @click="onClickAddProduct">追加</v-btn>
      </v-card-actions>

      <v-card-actions>
        <v-btn
          v-if="cancelable"
          text
          :disabled="!selectedProduct"
          color="blue darken-1"
          @click="onClickExportProduct"
        >
          選択中のものをエクスポート
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="cancelable"
          text 
          color="normal" 
          @click="onClose"
        >
          キャンセル
        </v-btn>
        <v-btn
          text 
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
import MessageBox from "@/presentation/MessageBox";
import Product from "@/domain/product/Product";
import Products from "@/domain/product/Products";
import StrageRepository from "@/domain/strage/StrageRepository";
import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import DownloadFile from "@/domain/client/DownloadFile";
import RdramExportFileName from "@/domain/client/RdramExportFileName";

@Component
export default class ProductSelectorDialog extends Vue {
  @Inject()
  private readonly repository?: StrageRepository;

  @Inject()
  private clientDownloadRepository!: ClientDownloadRepository;

  @Prop()
  private visibleProductSelectorDialog?: boolean;

  @Prop()
  private cancelable = false;

  private selectedProduct: Product | null = null;
  private products: Products = Products.prototypeOf();

  private onOpen(): string {
    if (!this.visibleProductSelectorDialog) return "";

    const strage = this.repository?.get();
    if (!strage) return "";

    if (this.products.isEmpty()) this.products = strage.products;
    if (this.selectedProduct) return "";

    const product = strage.currentProduct();
    if (product) this.selectedProduct = product;

    return "";
  }

  private productsList(): Product[] {
    if (!this.products) return [];
    return this.products.list();
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
    this.products = this.products?.merge(product);
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

  public onClickExportProduct(): void {
    if (this.downloadProductExportFile()) return;
    alert("プロダクトのエクスポートダウンロードファイルの作成に失敗しました。");
  }

  @Emit("onClose")
  public onClose(): void {
    this.selectedProduct = null;
    this.products = Products.prototypeOf();
  }

  private saveAddProduct(product: Product): void {
    const strage = this.repository?.get();
    if (!strage) return;
    const added = strage.merge(product);
    this.repository?.register(added);
  }

  private saveCurrentProduct(): boolean {
    const strage = this.repository?.get();
    if (!strage || !this.selectedProduct) return false;
    if (strage.isCurrentProduct(this.selectedProduct)) return false;
    const changed = strage.changeCurrent(this.selectedProduct); 
    this.repository?.register(changed);
    return true;
  }

  private downloadProductExportFile(): boolean {
    const product = this.selectedProduct;
    if (!product) return true;
    const productJson = this.repository?.getProductJsonTextOf(product.id);
    if (!productJson) return false;

    const fileName = new RdramExportFileName(`product-${product.name}`);
    const file = new DownloadFile(fileName, fileName.contentType(), productJson);
    this.clientDownloadRepository.register(file);
    return true;
  }
}
</script>

<style scoped>
</style>