# TypeScriptノウハウ

## typingsのファイル(*.d.ts)まわり

- typeRootsの誤解 -- TypeScriptで、npmからインストールしたパッケージに型定義ファイル (*.d.ts) が存在しない場合の正しい対処方法
  - https://qiita.com/tetradice/items/b89a5dd41fcebf96379e
- TypeScript で型定義ファイル( d.ts )がないときの対処法
  - https://qiita.com/Nossa/items/726cc3e67527e896ed1e
- ３分でTypeScriptの定義ファイルの作成方法を覚えよう
  - https://kou-yeung.hatenablog.com/entry/2014/12/09/012014

## 特定の箇所を一時的に「TypeScriptのトランスパイル」から逃れたい

- 今こそ伝えたい！@ts-ignoreの魅力
  - https://scrapbox.io/terrierscript/%E4%BB%8A%E3%81%93%E3%81%9D%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%84%EF%BC%81@ts-ignore%E3%81%AE%E9%AD%85%E5%8A%9B

## TypeScriptでの「class情報を含めた」シリアライズとデシリアライズ

※継続調査中。なんか…いいのがない

- TypeScriptのDecoratorを使ってserializableを実現する
  - https://qiita.com/tkrkt/items/a806d6c80d69b52af1b8
  - 結局自力かー、ってハナシ
- typescript-json-serializer
  - https://www.npmjs.com/package/typescript-json-serializer
  - まだためしていないが、使えそうならこれでもいい(でもなんとなく使われていないっぽくみえたり)

## FontAwasamとかを「直接文字コードで指定したい」場合

- 文字列(JavaScriptの書き方)
  - http://www.tohoho-web.com/js/string.htm
  - CSS等から文字コードがわかれば、ここの「サロゲートペアを含むUnicode文字」の指定方法で実際に埋め込むことが可能


## 文字列のByteSizeを知る

- JavaScriptで文字列のバイト数を得るにはどーする？
  - https://takamints.hatenablog.jp/entry/measure-a-byte-length-of-a-string-in-javascript
  
## シリアライズ(出来なかった)

できなかった。以下は使ってない。

- TypeScriptのDecoratorを使ってserializableを実現する
  - https://qiita.com/tkrkt/items/a806d6c80d69b52af1b8
- class-transformerでpureなjsオブジェクトとクラスとの変換が便利だった
  - https://qiita.com/NaotoFushimi/items/ff42888d4ebb1b6a667f
- class-transformer
  - https://github.com/typestack/class-transformer
- TypeScriptによるデコレータの基礎と実践
  - https://qiita.com/taqm/items/4bfd26dfa1f9610128bc

## オブジェクトのクラス名を得る

- Get an object's class name at runtime
  - https://stackoverflow.com/questions/13613524/get-an-objects-class-name-at-runtime

## プロパティ(フィールド変数)のコピー

- Object.assign()を使ったコピーいろいろ
  - https://qiita.com/SE-studying-now/items/ecdbc0317ba1806aed61

## クラス名(文字列)からインスタンス生成

下の例が多く載ってるが、これは出来なかった

- Creating Instance Of Class Based On ClassName : string
  - https://stackoverflow.com/questions/38137840/creating-instance-of-class-based-on-classname-string

## 数値チェック

- JavaScriptの数値チェックについてハマったのでメモ
  - https://qiita.com/taku-0728/items/329e0bee1c49b7ce7cd1