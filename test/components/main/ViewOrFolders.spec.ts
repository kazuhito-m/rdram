import ViewOrFolders from "@/components/main/model/ViewOrFolders";
import DiagramType from "@/domain/diagram/DiagramType";

describe('ViewOrFolders', () => {
    test('テンプレートと成るツリーから「唯一」となる全件リストを取得できる', () => {
        const actual = ViewOrFolders.ALL;

        expect(actual).toHaveLength(16);
    });

    test('フォルダや要素の各定数配列が期待通りである', () => {
        expect(ViewOrFolders.TOP_FOLDERS).toHaveLength(3);
        expect(ViewOrFolders.ANALYSIS).toHaveLength(2);
        expect(ViewOrFolders.RDRA20_TYPE_FOLDERS).toHaveLength(DiagramType.values().length);
    });
});
