# draw2dノウハウ

## まず、TypeScrip + Vue.js での例が無い！

### 参考

- Draw2d with VueJS app [SOLVED] #33
  - https://github.com/freegroup/draw2d/issues/33
- 有志の draw2d.d.ts 定義
  - https://github.com/freegroup/draw2d/blob/master/examples/galerie_shape_basic/index.html#L20
- 
 
### やったこと

基本は [ここ](https://github.com/freegroup/draw2d/issues/33) のとおりだが、'TypeScript','Nuxt.js(非Vue.js)' であることを考慮し、アレンジしている。

1. npm install --save jquery jquery-ui draw2d
0. nuxt.config.js の configwebpack:plugins のところに細工する

## 本家サイト

- オフィシャルサイト
  - http://www.draw2d.org/draw2d/
- ソース
  - https://github.com/freegroup/draw2d

## FontAwasamなど「アイコンとして使ってるフォント」を埋め込みたい時

drow2d のいろんなものは、ほぼ「HTML5のCanvasのラッパー」である。

これが解った時点で、「 `context` に生えてるプロパティと大体ニアリー」だと当たりが付く。

事前にCSS等で「@font-face が定義され、Fontファイルを落としてこれている」なら、「 `context.font` に、cssの `font-family` 指定と同じ書式で設定」すれば、その要素を追加する際のFontは指定できている。

転じて、draw2dの場合、「 `Figure.fontFamiry` が大体定義されている」ので、上記と同じような指定で出来る。

- External Font on HTML5 Canvas
  - https://stackoverflow.com/questions/6117553/external-font-on-html5-canvas
- canvasで複数のfont-familyを指定するとき
  - https://qiita.com/nabe_kurage/items/bf822979f311204842e4
- How to render icon fonts on HTML canvas and Material Design icon fonts in particular?
  - https://stackoverflow.com/questions/59013793/how-to-render-icon-fonts-on-html-canvas-and-material-design-icon-fonts-in-partic
- draw2d.shape.basic.Label
  - http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/api/draw2d.shape.basic.Label
  - fontFamiryとtextの指定で、フォント系アイコン指定が出来る

## 必要そうなサンプル

自分の機能に「コレ使いそうだな」という内容のショートカット(サンプルサイトが良く出来すぎている)

### 汎用ポート(方向性のないもの)

http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/port_locator


### 「線引くだけの時」モード

http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/policy_canvas_decoration

### いわゆる「方眼紙」モード

http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/policy_snap_to

### 画像ファイルエクスポート

- http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/io_svg_basic
- http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/io_png_overview

### 線割り込み

利用するか否かはは別として「こういうことが出来る」を覚えておきたい

http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/connection_drop

### 線の途中折り曲げ

利用するかは別として(ry

http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/connection_vertex

### 線の曲げ方アルゴリズム

コネクタの位置の影響を受けないのは「Direct」だけだが…スタンダードなポートの場合はどうなるのだろう？

http://www.draw2d.org/draw2d_touch/jsdoc_6/#!/example/connection_router