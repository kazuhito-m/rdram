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