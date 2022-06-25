import Range from "~/domain/basic/Range";
import DiagramType from "~/domain/diagram/DiagramType";

export default class ViewOrFolder {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly folder: boolean,
        public readonly iconKey: string = ""
    ) { }

    static readonly RDRAM20_FOLDER = of(-1, "RDRA 2.0", true);
    static readonly CUSTOM_FOLDER = of(-2, "カスタム", true);
    static readonly ANALYSIS_FOLDER = of(-3, "分析", true);

    static readonly ICON_LIST = of(3000000000000001, "アイコン一覧", false, "format-list-bulleted-type");
    static readonly SCREEN_TRANSITION = of(3000000000000002, "画面遷移", false, "file-tree-outline");

    static readonly EMPTY = of(0, "(空)");

    static TOP_FOLDER_IDS = Range.of(-3, 0);
    private static RDRA20_IDS = ViewOrFolder.TOP_FOLDER_IDS.nextTo(1000000000000000);
    private static CUSTOM_IDS = ViewOrFolder.RDRA20_IDS.nextTo(2000000000000000);
    static ANALYSIS_IDS = ViewOrFolder.CUSTOM_IDS.nextTo(3000000000000000);
    private static RDRA20_TYPE_IDS = ViewOrFolder.RDRA20_IDS.nextTo(4000000000000000);

    equals(value: ViewOrFolder): boolean {
        return this.id === value.id;
    }

    isAnalysis(): boolean {
        return ViewOrFolder.ANALYSIS_IDS.in(this.id);
    }

    static rdram20DiagramTypeFolderOf(type: DiagramType): ViewOrFolder {
        return of(
            this.RDRA20_TYPE_IDS.startTo(type.id),
            type.name,
            true,
            type.iconKey
        );
    }
}

function of(id: number, name: string, folder = false, iconKey: string = ""): ViewOrFolder {
    return new ViewOrFolder(id, name, folder);
}
