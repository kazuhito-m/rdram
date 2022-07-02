import ViewOrFoldersTemplate from "@/components/main/model/ViewOrFoldersTemplate";
import DiagramTypes from "@/domain/diagram/type/DiagramTypes";

describe('ViewOrFoldersTemplate', () => {
    test('テンプレートと成るツリーから「唯一」となる全件リストを取得できる', () => {
        const actual = ViewOrFoldersTemplate.ALL;

        expect(actual).toHaveLength(17);
    });

    test('フォルダや要素の各定数配列が期待通りである', () => {
        expect(ViewOrFoldersTemplate.TOP_FOLDERS).toHaveLength(3);
        expect(ViewOrFoldersTemplate.ANALYSIS).toHaveLength(2);
        expect(ViewOrFoldersTemplate.RDRA20_TYPE_FOLDERS).toHaveLength(DiagramTypes.RDRA20_TYPES.length);
    });
});
