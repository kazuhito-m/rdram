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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      width="280"
    >
      <v-list>

        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>システムメニュー</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="onChangeProduct">
          <v-list-item-icon>
            <v-icon>mdi-account-switch-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>プロダクト切替え...</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="onClickImportProduct">
          <v-list-item-icon>
            <v-icon>mdi-import</v-icon>
          </v-list-item-icon>
          <v-list-item-title>プロダクトのインポート...</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="onClickDestryLocalStrage">
          <v-list-item-icon>
            <v-icon>mdi-delete-forever</v-icon>
          </v-list-item-icon>
          <v-list-item-title>LocalStrageの破棄...</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>

      <span>
        &copy; {{ new Date().getFullYear() }}
        <a
          class="no-efect-link"
          target="_new"
          href="https://kazuhito-m.github.io/rdram"
        >rdram</a>
      </span>
      <a class="auther-link" target="_new" href="https://twitter.com/kazuhito_m">
        <v-icon>mdi-twitter</v-icon>kazuhito_m
      </a>
      <v-spacer></v-spacer>
      <a class="no-efect-link" target="_new" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fkazuhito-m.github.io%2Frdram&hashtags=rdram">
        <v-icon>mdi-share</v-icon>
      </a>
      <a
        class="no-efect-link"
        target="_new"
        href="https://github.com/kazuhito-m/rdram/releases"
      >ver. {{ selfVersion }}</a>

    </v-footer>

    <ProductSelectorDialog
      :visibleProductSelectorDialog="visibleProductSelector"
      :cancelable="productSelectorCancelable"
      @onClose="onCloseChangeProduct"
    />

    <ProductImportDialog
      :visible="visibleProductImportDialog"
      @onClose="onCloseProductImportDialog"
    />

    <LocalStrageInitializeDialog
      :visible="visibleApplicationInitializationDialog"
      @onClose="onCloseApplicationInitializationDialog"
    />

    <LocalStrageDestroyDialog
      :visible="visibleLocalStrageDestroyDialog"
      @onClose="onCloseLocalStrageDestroyDialog"
    />

  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'nuxt-property-decorator'
import StrageRepository from '@/domain/strage/StrageRepository'
import StrageDatasource from '@/infrastructure/strage/StrageDatasource'
import ClientDownloadRepository from '@/domain/client/ClientDownloadRepository'
import ClientDownloadTransfar from '@/infrastructure/client/ClientDownloadTransfar'
import ProductSelectorDialog from '@/components/ProductSelectorDialog.vue'
import ProductImportDialog from  '@/components/product/import/ProductImportDialog.vue'
import LocalStrageInitializeDialog from '@/components/LocalStrageInitializeDialog.vue'
import LocalStrageDestroyDialog from '@/components/LocalStrageDestroyDialog.vue'
import ProductImportService from '~/application/service/product/import/ProductImportService'
import FileSystemRepository from '~/domain/filesystem/FileSystemRepository'
import FileSystemDatasouce from '~/infrastructure/filesystem/FileSystemDatasource'

@Component({
  components: {
    ProductSelectorDialog,
    ProductImportDialog,
    LocalStrageInitializeDialog,
    LocalStrageDestroyDialog,
  },
})
export default class extends Vue {
  clipped = false
  drawer = false
  fixed = false

  miniVariant = false
  right = true
  rightDrawer = false

  title = 'RDRA-M'
  selfVersion = "";

  private readonly items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'mdi-apps',
      title: 'ダイアグラム一覧',
      to: '/diagrams',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'draw2dのテスト',
      to: '/layouttest',
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'canbasのテスト',
      to: '/canvastest',
    }
  ];

  // DI difinitions.

  @Provide()
  private readonly repository: StrageRepository = new StrageDatasource();

  @Provide()
  private readonly clientDownloadRepository: ClientDownloadRepository = new ClientDownloadTransfar();
 
  @Provide()
  private readonly fileSystemRepository: FileSystemRepository = new FileSystemDatasouce();
 
  @Provide()
  private readonly productImportService: ProductImportService = new ProductImportService(this.repository, this.fileSystemRepository);

  // this classs property & functions.

  private visibleApplicationInitializationDialog = false;

  private visibleProductSelector = false;
  private productSelectorCancelable = false;

  private visibleProductImportDialog = false;

  private visibleLocalStrageDestroyDialog = false;

  public created() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });

    const head = this.$store?.app?.head as any;
    this.title = head.title;
    this.selfVersion = head.selfVersion;

    if (this.showApplicationInitialization()) return;

    if (this.showProductSelectorWhenNotSelected()) return;

    const product = this.repository.getCurrentProduct();
    this.title += ` - [${product?.name}]`;
  }

  private showApplicationInitialization(): boolean {
    if (this.repository.isInitialized()) return false;
    this.visibleApplicationInitializationDialog = true;
    return true;
  }

  public onCloseApplicationInitializationDialog() {
    this.visibleApplicationInitializationDialog = false;
    this.showProductSelectorWhenNotSelected();
  }

  public showProductSelectorWhenNotSelected(): boolean {
    this.visibleProductSelector = false;
    const strage = this.repository.get();
    if (!strage || strage.status.currentProductId) return false;
    this.productSelectorCancelable = false;
    this.$nextTick(() => {
      this.visibleProductSelector = true;
    });
    return true;
  }

  private onChangeProduct(): void {
    this.visibleProductSelector = false;
    this.rightDrawer = false;
    this.productSelectorCancelable = true;
    this.visibleProductSelector = true;
  }

  private onCloseChangeProduct(): void {
    this.visibleProductSelector = false;
  }

  private onClickImportProduct(): void {
    this.visibleProductImportDialog = true;
    this.rightDrawer = false;
  }

  private onCloseProductImportDialog(): void {
    this.visibleProductImportDialog = false;
  }

  private onClickDestryLocalStrage(): void {
    this.visibleLocalStrageDestroyDialog = true;
    this.rightDrawer = false;
  }

  private onCloseLocalStrageDestroyDialog(): void {
    this.visibleLocalStrageDestroyDialog = false;
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
  overflow-y: hidden;
}

.auther-link {
  text-decoration: none;
}

.no-efect-link ,
.no-efect-link:link,
.no-efect-link:visited,
.no-efect-link:hover,
.no-efect-link:active
{
  text-decoration: none;
  color: white;
}
</style>
