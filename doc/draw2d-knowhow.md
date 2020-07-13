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