import ViewOrFolders from "@/components/main/ViewOrFolders";

describe('ViewOrFolders', () => {
    test('テンプレートと成るツリーから「唯一」となる全件リストを取得できる', () => {
        const actual = ViewOrFolders.ALL;

        expect(actual).toHaveLength(16);
    });

    test('フォルダや要素の各定数配列が期待通りである', () => {
        expect(ViewOrFolders.TOP_FOLDERS).toHaveLength(3);
        expect(ViewOrFolders.ANALYSIS).toHaveLength(2);
    });
});
