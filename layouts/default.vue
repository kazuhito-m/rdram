<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-dialog v-model="visibleApplicationInitializationDialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">LocalStrageが初期化されていません。</v-card-title>
        <v-card-text>このWebアプリケーションは、ブラウザ固有のストレージ(LocalStarage)を使用します。<br>LocalStrageを初期化し、データを保存してよろしいですか。</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="onAcceptUseLocalStrage">許可する</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="visibleProductSelectorDialog" persistent max-width="600">
      <v-card>
        <v-card-title class="headline">プロダクトを選択してください。</v-card-title>
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
            :disabled="!selectedProduct"
            color="green darken-1" 
            @click="onOpenProduct"
          >
            プロダクトを開く
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>

</template>

<script lang="ts">
import { Component, Vue, Provide } from "nuxt-property-decorator";
import Repository from "@/infrastructure/Repository";
import Product from "@/domain/product/Product";
import ProductIdentifier from "@/domain/product/ProductIdentifier";

@Component
export default class extends Vue {
  clipped = false;
  drawer = false;
  fixed = false;
  miniVariant = false;
  right = true;
  rightDrawer = false;
  title = "RDRA-M";

  private readonly items = [
    {
      icon: "mdi-apps",
      title: "Welcome",
      to: "/"
    },
    {
      icon: "mdi-chart-bubble",
      title: "Inspire",
      to: "/inspire"
    },
    {
      icon: "mdi-apps",
      title: "ダイアグラム一覧",
      to: "/diagrams"
    },
     {
      icon: "mdi-apps",
      title: "レイアウトのテスト",
      to: "/layouttest"
    }
  ];

  // DI difinitions.

  @Provide()
  private readonly repository = new Repository();

  public created() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });

    if (this.showApplicationInitialization()) return;
    this.showProductSelectorWhenNotSelected();
  }
  private visibleApplicationInitializationDialog = false;

  private showApplicationInitialization(): boolean {
    if (this.repository.isInitialized()) return false;
    this.visibleApplicationInitializationDialog = true;    
    return true;
  }

  public onAcceptUseLocalStrage() {
    this.repository.initialize();
    this.visibleApplicationInitializationDialog = false;
    this.showProductSelectorWhenNotSelected();
  }

  private visibleProductSelectorDialog = false;
  private products: Product[] = [];
  private selectedProduct: Product | null = null;

  public showProductSelectorWhenNotSelected() {
    const strage = this.repository.get();
    if (!strage || strage.status.currentProductId) return;
    this.products = strage.products;
    this.visibleProductSelectorDialog = true;
  }

  public onOpenProduct() {
    this.saveCurrentProduct();
    this.visibleProductSelectorDialog = false;
    location.reload();  // FIXME コレしか無かった…が、きっとPage側のメソッド(呼びたいのはcreated())呼べるはず。
  }

  public onClickAddProduct() {
    const name = prompt("追加するプロダクトの名前を入力してください。");
    if (!name) return;
    if (!this.validateProductName(name)) return;
    const product = ProductIdentifier.prototypeProductOf(name);
    this.products.push(product);
    this.saveProducts();
  }

  private validateProductName(productName: string): boolean {
    if (productName.length > 255) {
      alert('プロダクト名は255文字以内で入力してください。');
      return false;
    }
    const exists = this.products
      .some(product => product.name === productName);
    if (exists) {
      alert('既に同一のプロダクト名が在ります。');
      return false;
    }
    return true;
  }

  private saveProducts(): void {
    const strage = this.repository.get();
    if (!strage) return;
    strage.products = this.products;
    this.repository.register(strage);
  }

  private saveCurrentProduct(): void {
    const strage = this.repository.get();
    if (!strage) return;
    if (!this.selectedProduct) return;
    strage.status.currentProductId = this.selectedProduct.id;
    this.repository.register(strage);
  }
}
</script>

<style scoped>
.container {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: initial;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: unset;
    margin-left: unset;
    position: absolute;
}
</style>

<style>
/* Global */
html {
  overflow-y:hidden;
}
</style>
