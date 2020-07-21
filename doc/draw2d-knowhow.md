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