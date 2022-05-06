<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      stateless
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
    <v-app-bar clipped-left fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <TweetButton />
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
      width="320"
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

        <v-list-item link @click="onClickImportLocalStorage">
          <v-list-item-icon>
            <v-icon>mdi-file-replace</v-icon>
          </v-list-item-icon>
          <v-list-item-title>LocalStorageのインポート...</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="onClickDestryLocalStorage">
          <v-list-item-icon>
            <v-icon>mdi-delete-forever</v-icon>
          </v-list-item-icon>
          <v-list-item-title>LocalStorageの破棄...</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="onClickExportOfTangoRdraFile">
          <v-list-item-icon>
            <v-icon>mdi-alpha-t-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>tango/rdra形式エクスポート...</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-footer app>

      <span>
        <span @click="drawer = !drawer">&copy;</span> {{ new Date().getFullYear() }}
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

    <LocalStorageInitializeDialog
      :visible="visibleApplicationInitializationDialog"
      @onClose="onCloseApplicationInitializationDialog"
    />

    <LocalStorageImportDialog
      :visible="visibleLocalStorageImportDialog"
      @onClose="onCloseLocalStorageImportDialog"
    />

    <LocalStorageDestroyDialog
      :visible="visibleLocalStorageDestroyDialog"
      @onClose="onCloseLocalStorageDestroyDialog"
    />

    <TangoRdraFileExportDialog
      :visible="visibleExportTangoRdraFileDialog"
      @onClose="onCloseTangoRdraFileExportDialog"
    />

  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'nuxt-property-decorator'
import TweetButton from '@/components/other/sosial/TweetButton.vue';
import StorageRepository from '@/domain/storage/StorageRepository'
import StorageDatasource from '@/infrastructure/storage/StorageDatasource'
import ClientDownloadRepository from '@/domain/client/ClientDownloadRepository'
import ClientDownloadTransfar from '@/infrastructure/client/ClientDownloadTransfar'
import ProductSelectorDialog from '@/components/product/ProductSelectorDialog.vue'
import ProductImportDialog from  '@/components/product/import/ProductImportDialog.vue'
import LocalStorageImportDialog from  '@/components/localstorage/import/LocalStorageImportDialog.vue'
import LocalStorageInitializeDialog from '@/components/localstorage/LocalStorageInitializeDialog.vue'
import LocalStorageDestroyDialog from '@/components/localstorage/LocalStorageDestroyDialog.vue'
import TangoRdraFileExportDialog from '@/components/tangordra/TangoRdraFileExportDialog.vue'
import LocalStorageExportService from '@/application/service/storage/export/LocalStorageExportService'
import LocalStorageImportService from '@/application/service/storage/import/LocalStorageImportService'
import ProductExportService from '@/application/service/product/export/ProductExportService'
import ProductImportService from '@/application/service/product/import/ProductImportService'
import FileSystemRepository from '@/domain/filesystem/FileSystemRepository'
import FileSystemDatasouce from '@/infrastructure/filesystem/FileSystemDatasource'
import TangoRdraFileService from '@/application/service/tangordra/TangoRdraFileService'

@Component({
  components: {
    TweetButton,
    ProductSelectorDialog,
    ProductImportDialog,
    LocalStorageInitializeDialog,
    LocalStorageImportDialog,
    LocalStorageDestroyDialog,
    TangoRdraFileExportDialog
  },
})
export default class extends Vue {
  drawer = false

  right = true
  rightDrawer = false

  title = 'RDRA-M'
  selfVersion = "";

  private readonly items = [
    {
      icon: 'mdi-apps',
      title: 'ダイアグラム一覧',
      to: '/',
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
  private readonly repository: StorageRepository = new StorageDatasource();

  @Provide()
  private readonly clientDownloadRepository: ClientDownloadRepository = new ClientDownloadTransfar();
 
  @Provide()
  private readonly fileSystemRepository: FileSystemRepository = new FileSystemDatasouce();

  @Provide()
  private readonly localStorageExportService: LocalStorageExportService = new LocalStorageExportService(this.repository, this.clientDownloadRepository);

  @Provide()
  private readonly localStorageImportService: LocalStorageImportService = new LocalStorageImportService(this.repository, this.fileSystemRepository);

  @Provide()
  private readonly productExportService: ProductExportService = new ProductExportService(this.repository, this.clientDownloadRepository);

  @Provide()
  private readonly productImportService: ProductImportService = new ProductImportService(this.repository, this.fileSystemRepository);

  @Provide()
  private readonly tangoRdraFileService: TangoRdraFileService = new TangoRdraFileService(this.repository);

  // this classs property & functions.

  private visibleApplicationInitializationDialog = false;

  private visibleProductSelector = false;
  private productSelectorCancelable = false;

  private visibleProductImportDialog = false;

  private visibleLocalStorageImportDialog = false;

  private visibleLocalStorageDestroyDialog = false;

  private visibleExportTangoRdraFileDialog = false;

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
    const storage = this.repository.get();
    if (!storage || storage.isSelectedProduct()) return false;
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

  private onClickImportLocalStorage(): void {
    this.visibleLocalStorageImportDialog = true;
    this.rightDrawer = false;
  }

  private onCloseLocalStorageImportDialog(): void {
    this.visibleLocalStorageImportDialog = false;
  }

  private onClickExportOfTangoRdraFile(): void {
    this.visibleExportTangoRdraFileDialog = true;
    this.rightDrawer = false;
  }

  private onCloseTangoRdraFileExportDialog(): void {
    this.visibleExportTangoRdraFileDialog = false;
  }

  private onClickDestryLocalStorage(): void {
    this.visibleLocalStorageDestroyDialog = true;
    this.rightDrawer = false;
  }

  private onCloseLocalStorageDestroyDialog(): void {
    this.visibleLocalStorageDestroyDialog = false;
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
