# CSSノウハウ

## offset,client,scrollなど領域について

- 要素サイズとスクローリング
  - https://ja.javascript.info/size-and-scroll
- Element.offsetWidth - 全体の横幅を取得する
  - https://syncer.jp/javascript-reference/element/offsetwidth


## Resizeイベントが「起きない」エレメントへのリサイズ監視

- 要素のサイズ変化を監視するResizeObserver
  - https://1000ch.net/posts/2017/resize-observer.html
- div のリサイズイベントを拾う方法（メモ）
  - https://qiita.com/morozumi_h/items/ba8c1e474e86ef7ef950
  - MutationObserver じゃ出来なかった…

## 角丸

- 角を丸くする方法をコードを交えて詳しく解説
  - https://blog.codecamp.jp/css-rounded-corners

## 影

「filter: drop-shadow()（ドロップシャドウ）」が最新型で、「box-shadow（ボックスシャドウ）」は旧型らしい。

- box-shadow（ボックスシャドウ）はもう古い？CSS新時代の「影（シャドウ）の落とし方」
  - https://ferret-plus.com/8961

## 継承とか

今のところ、「目的は達せた」ものの、全くメカニズムが解っていない。

- CSSクラス間の継承方法を現役エンジニアが解説【初心者向け】
  - https://techacademy.jp/magazine/38031

## 文字がはみ出した時に、三点リーダとかにして省略するヤーツ

- 【複数行にも対応】長過ぎる文字列を省略して末尾を三点リーダー（…）にする方法いろいろ
  - https://tech.recruit-mp.co.jp/front-end/tips-ellipsis/


## sassとかscssとか

- スコープ付き CSS
  - https://vue-loader-v14.vuejs.org/ja/features/scoped-css.html
- 元にあったCSSを置き換えて、上書き乗っ取りする方法(Override SASS class)
  - https://stackoverflow.com/questions/45374926/override-sass-class

## HTML5においてのDaD

これは、cssというよりhtmlの範疇だが、まあここに。

- 第1回 Drag & Drop APIとは
  - https://app.codegrid.net/entry/dnd-api-1

## Font Awasomeとか「文字でアイコン作る系」のやつのフォントファミリーと文字を取り出す方法

結局、「 `::before` の擬似要素にフォントと文字が設定してある」ということがわかり、それの取り出し方さえわかれば、VuetifyのMaterialDesignIconとかの「素の文字」を割り出す事が可能。

```TypeScript
const iconTag = document.getElementById("icon") as HTMLDivElement;
const style = window.getComputedStyle(iconTag, "::before");

const fontFamily = style.fontFamily;
const text = style.content.replace(/"/g, ""); // ダブルクオート付きでくるため
```

- jQueryでCSSの擬似要素:beforeや:afterのプロパティを変更する方法３種類
  - http://ithat.me/2015/11/30/jquery-css-pseudo-before-after-change
- getComputedStyle について調べてたら深みにハマったのでメモ
  - https://amachang.hatenablog.com/entry/20070611/1181554170
  - 「計算された後の状態を取得」するには、要るので覚えとけば良い感じ
- How to get CSS class property in Javascript?
  - https://stackoverflow.com/questions/20377835/how-to-get-css-class-property-in-javascript

