# テスト仕様

プロトタイプの間だけ…手動でやる大体のテストの手順。

## ツリーまわり

- 初期表示
  - RDRA2.0 が開いていること
- 図のフォルダクリック
  - 登録されている図がリスト表示される
- 図のフォルダの右クリック
  - メニューが表示される
- 右クリックメニューから「ダイアグラムの追加」をクリック
  - 名前を入力するダイアログが表示される
  - 名前入力後、エディタペインに図のタブが表示され、その下にエディタが表示される
- タブの「X」ボタンをクリック
  - タブがなくなり、エディタペインからも図が消える
  - ツリー側の図がアクティブではなくなる
- ツリーから依存の図のクリック
  - 右のエディタペインに表示される

## エディタまわり

- 右ペインからの「新規作成」ドラッグ
  - 名前入力が開く
  - 入力後アイコンがキャンバスペインに出る
  - パレットペインの「この図で使用済み」に追加したものが表示される
  - 一度図を閉じて、再度開いても、同じ状況が再現される
- 「新規作成」ドラッグを復数別の種類繰り返す
  - 上記の挙動が繰り返される
- アイコンをドラッグ&ドロップで移動
  - アイコンが移動される
  - 一度図を閉じて、再度開いても、同じ状況が再現される
- 復数のアイコンを選択し、ドラッグ&ドロップで移動
  - アイコンが一括して移動される
  - 一度図を閉じて、再度開いても、同じ状況が再現される
- アイコンからアイコンへ線を引く
  - アイコン間に線がひかれる
  - 一度閉じて、再度開いても、同じ状況が再現される
- 既に線が引かれているアイコン間に再度線を引く
  - 「すでに関連が存在します。」と画面下部に表示される
- 関連線を右クリック
  - メニューが表示される
- 関連線右クリックメニューからの削除
  - 線が削除される
  - 一度図を閉じて、再度開いても、同じ状況が再現される
- 関連線右クリックメニューからの「関連の線形変更」
  - 下から、線種を変えられるメニューがせり上がってくる
  - 4種類の線種が選択できる
- 「関連の線形変更」ダイアログから、線種を変更する
  - ダイアログは閉じられる
  - 先の形状が指定したものに変わる
  - 一度図を閉じて、再度開いても、同じ状況が再現される
- アイコンを選択し、Deleteキーをタイプ
  - アイコンが消える
  - 右パレットの同一アイコン種類のパレットに削除したアイコンが現れる
  - 一度閉じて、再度開いても、同じ状況が再現される
- 線が引かれているアイコンを選択し、Deleteキーをタイプ
  - 「関連があるが、削除してよいか？」的なメッセージが表示され、Okキャンセルが選べる
  - キャンセルクリックでオペをとめ何も起こらないようにできる
  - OKでアイコンが消える
  - 右パレットの同一アイコン種類のパレットに削除したアイコンが現れる
  - 一度閉じて、再度開いても、同じ状況が再現される
- パレットの(すでに追加された)アイコンをキャンバスにドラッグドロップ
  - アイコンがキャンバスに現れる
  - パレットのアイコンが、「この図で使用済み」に移動する
- 線の右クリック
  - メニューが表示される


## エディタのツールバーまわり

- エディタ初期表示時の初期表示
  - キャンバスの右下に表示されている
- 左端のボタンをクリック
  - 「設定」ダイアログがモーダルで開く
- 右端の「縮める」っぽいアイコンクリック
  - ツールバーを小さくしたモードになる
  - 右側へ縮こまり、右に縮小されたバーになる
- 縮んだ状態から、「広げる」ようなアイコンをクリック
  - ツールバーが通常モードにもどる
  - 左側に伸び、右端座標は変化しない
- 電卓みたいなアイコンのクリック
  - グリッド形状の選択メニューが出る
- ズームスライダーを移動させる
  - 右側のパーセント表示が更新される
  - キャンバスのズーム比率が変更される
- 左右の虫眼鏡アイコンのクリック
  - ズームバーを10%ずつ移動させる
  - ズームスライダーを移動させるのと同じ効果となる

## 図の「設定」ダイアログ