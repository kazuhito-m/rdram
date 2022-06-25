import Range from "~/domain/basic/Range";
import DiagramType from "~/domain/diagram/DiagramType";
import ViewOrFolder from "./ViewOrFolder";

export default class ViewOrFolders {
    constructor(
        public readonly node: ViewOrFolder,
        public readonly reafs: ViewOrFolders[],
    ) { }

    static TREE = [
        of(ViewOrFolder.RDRAM20_FOLDER,
            DiagramType.values()
                .map(type => ViewOrFolder.rdram20DiagramTypeFolderOf(type))
                .map(vof => of(vof, [of(ViewOrFolder.EMPTY)]))
        ),
        of(ViewOrFolder.CUSTOM_FOLDER,
            [of(ViewOrFolder.EMPTY)]
        ),
        of(ViewOrFolder.ANALYSIS_FOLDER, [
            of(ViewOrFolder.ICON_LIST),
            of(ViewOrFolder.SCREEN_TRANSITION)
        ]),
    ];

    private static uniqueAllViewOrFolder(items: ViewOrFolders[]): ViewOrFolder[] {
        const uniqueSet = new Set<ViewOrFolder>();
        for (const i of items) {
            uniqueSet.add(i.node);
            for (const j of ViewOrFolders.uniqueAllViewOrFolder(i.reafs)) {
                uniqueSet.add(j);
            }
        }
        return Array.from(uniqueSet);
    }

    static ALL = ViewOrFolders
        .uniqueAllViewOrFolder(ViewOrFolders.TREE);

    private static filterOfIdRange(idRange: Range, items: ViewOrFolder[]): ViewOrFolder[] {
        return items.filter(item => idRange.in(item.id));
    }

    static TOP_FOLDERS = ViewOrFolders
        .filterOfIdRange(ViewOrFolder.TOP_FOLDER_IDS, ViewOrFolders.ALL);

    static ANALYSIS = ViewOrFolders
        .filterOfIdRange(ViewOrFolder.ANALYSIS_IDS, ViewOrFolders.ALL);

    idOf(id: number): ViewOrFolder | undefined {
        return ViewOrFolders.ALL
            .find(item => item.id === id);
    }
}

function of(node: ViewOrFolder, reafs: ViewOrFolders[] = []): ViewOrFolders {
    return new ViewOrFolders(node, reafs);
}
