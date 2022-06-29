import Range from "@/domain/basic/Range";
import Diagram from "@/domain/diagram/Diagram";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import DiagramType from "~/domain/diagram/type/DiagramType";
import DiagramTypes from "~/domain/diagram/type/DiagramTypes";

export default class ViewOrFolder {
    constructor(
        public readonly id: number,
        public name: string, // TODO イミュータブルで行けるようにしたい
        public readonly children: ViewOrFolder[],
        public readonly disabled: boolean,
        public readonly folder: boolean,
        public readonly iconKey: string = "",
        public readonly iconCaption: string,
    ) { }

    static readonly RDRAM20_FOLDER = of(-1, "RDRA 2.0", true);
    static readonly CUSTOM_FOLDER = of(-2, "カスタム", true);
    static readonly ANALYSIS_FOLDER = of(-3, "分析", true);

    static readonly ICON_LIST = of(3000000000000001, "アイコン一覧", false, "mdi-format-list-bulleted-type", '分析:アイコン一覧');
    static readonly SCREEN_TRANSITION = of(3000000000000002, "画面遷移", false, "mdi-file-tree-outline", '分析:画面遷移');

    static readonly EMPTY = new ViewOrFolder(0, "(空)", [], true, false, "", "");

    static TOP_FOLDER_IDS = Range.of(-3, 0);
    private static RDRA20_DIAGRAM_IDS = ViewOrFolder.TOP_FOLDER_IDS.nextTo(1000000000000000);
    static RDRA20_TYPE_IDS = ViewOrFolder.RDRA20_DIAGRAM_IDS.nextTo(2000000000000000);
    private static CUSTOM_IDS = ViewOrFolder.RDRA20_TYPE_IDS.nextTo(3000000000000000);
    static ANALYSIS_IDS = ViewOrFolder.CUSTOM_IDS.nextTo(4000000000000000);

    isRdra20Diagram(): boolean {
        return ViewOrFolder.RDRA20_DIAGRAM_IDS.in(this.id);
    }

    isAnalysis(): boolean {
        return ViewOrFolder.ANALYSIS_IDS.in(this.id);
    }

    isRdra20DiagramTypeFolder(): boolean {
        return ViewOrFolder.RDRA20_TYPE_IDS.in(this.id);
    }

    isEmpty(): boolean {
        return this.equals(ViewOrFolder.EMPTY);
    }

    rdra20DiagramType(): Rdra20DiagramType {
        const range = ViewOrFolder.RDRA20_TYPE_IDS;
        if (!range.in(this.id))
            throw new Error("図フォルダじゃないのにType取得を呼びだした。");
        return DiagramTypes.byId(this.id - range.start) as Rdra20DiagramType;
    }

    equals(value: ViewOrFolder): boolean {
        return this.id === value.id;
    }

    with(...children: ViewOrFolder[]): ViewOrFolder {
        return new ViewOrFolder(
            this.id,
            this.name,
            children,
            this.disabled,
            this.folder,
            this.iconKey,
            this.iconCaption
        );
    }

    clone(): ViewOrFolder {
        const newChildren = this.children.map(i => i.clone());
        return this.with(...newChildren);
    }

    static rdra20DiagramTypeFolderOf(type: DiagramType): ViewOrFolder {
        return of(
            this.RDRA20_TYPE_IDS.startTo(type.id),
            type.name,
            true
        );
    }

    static rdra20DiagramOf(diagram: Diagram): ViewOrFolder {
        const type = diagram.type
        return of(
            diagram.id,
            diagram.name,
            false,
            type.iconKey,
            type.name
        );
    }
}

function of(id: number, name: string, folder = false, iconKey = "", iconCaption = ""): ViewOrFolder {
    return new ViewOrFolder(
        id,
        name,
        [],
        false,
        folder,
        iconKey,
        iconCaption,
    );
}
