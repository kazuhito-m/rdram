## Nust.js(Vue.js)ノウハウ

## Drag And Dropのサポートしている道具を使う(VueDraggable)

- 本家サイト(サンプルも置いてある)
  - https://github.com/SortableJS/Vue.Draggable#events
- Vue.jsでドラッグアンドドロップによる要素の並べ替えと移動を実装する
  - https://www.ritolab.com/entry/173
- drag-n-drop in Vuetify — Part II
  - https://medium.com/vuetify/drag-n-drop-in-vuetify-part-ii-2b07b4b27684

## DIをデコレータのみでやる

過去はいろいろあったようなのだが、最新では「Nuxt.jsでプロジェクト作った時点で、@Probide/@Injectが使えるし、どこかに一言的にnewするソース置いとく」のが定石みたい。

- はじめてのvue-property-decorator (nuxtにも対応）
  - https://qiita.com/simochee/items/e5b77af4aa36bd0f32e5
- Use Dependency Injection in Vue Using @Inject and @Provide Decorators with TypeScript
  - https://egghead.io/lessons/vue-js-use-dependency-injection-in-vue-using-inject-and-provide-decorators-with-typescript
- Vue.js でDIする。
  - https://qiita.com/kaorun343/items/397b1fa6afe96fa2b30f
- Vue Composition API + TypeScriptで DI(依存性の注入）, DIP（依存性逆転の原則） を実装してみる
  - https://qiita.com/ryo2132/items/03380df2df5b4b2933d7

## アプリケーションの初期化時に走らせる何か(ライフサイクルの定義)

- Vuexで最初の1回だけ行いたい処理のタイミングについて考えた
  - https://qiita.com/fukasawah/items/282aac6c101f0b8a49bd
- Vue、Vuetifyが正しく初期化されていません
  - https://www.it-swarm.dev/ja/javascript/vue%e3%80%81vuetify%e3%81%8c%e6%ad%a3%e3%81%97%e3%81%8f%e5%88%9d%e6%9c%9f%e5%8c%96%e3%81%95%e3%82%8c%e3%81%a6%e3%81%84%e3%81%be%e3%81%9b%e3%82%93/812576836/

## Component同士の値やり取り(忘れてたので)

- Nuxt + TypeScript で 2つ以上の値をコンポーネントに渡して変更を受け取る方法
  - https://qiita.com/TaskKAWAHARA/items/7279595a66c1734af0ce

## Vueで動的にコンポーネントを作成、画面にぶっこむ

調べたが…結局実現出来ていない。これから使うかも。

- Vue/Nuxt: How to make a component be truly dynamic?
  - https://stackoverflow.com/questions/58076195/vue-nuxt-how-to-make-a-component-be-truly-dynamic
- 【Nuxt.js】動的なコンポーネントでaタグとnuxt-linkタグを出し分ける
  - https://note.com/shimotsu_/n/nd8e0c27d8e7a
- Load component dynamically based on url parameters in nuxt
  - https://stackoverflow.com/questions/51358922/load-component-dynamically-based-on-url-parameters-in-nuxt
- VUE.JS(NUXT)でCOMPONENTを動的に追加する
  - https://uniblo.tech/?p=231
- Dynamically inserted:
  - https://codesandbox.io/embed/4l3w20zomw
- コンポーネントの基本
  - https://jp.vuejs.org/v2/guide/components.html
  - 「動的に…」ということは載っていないが、知ってないと行けないこととヒントが多くあるので。

## Nuxt(Vue)で「内側から」ではなく「ふつーのHTMLだけみたいにそのまま<script>タグで読み込む」したいなら

- 外部のJSスクリプトをVueJSコンポーネントに追加する方法
  - https://www.it-swarm.dev/ja/vue.js/%E5%A4%96%E9%83%A8%E3%81%AEjs%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92vuejs%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/833359190/