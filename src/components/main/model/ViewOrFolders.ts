import ViewOrFolder from "./ViewOrFolder";
import Range from "@/domain/basic/Range";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "~/domain/diagram/Diagrams";

export default class ViewOrFolders {
    constructor(public readonly values: ViewOrFolder[]) { }

    // constant and static methods.

    static TREE_TEMPLATE = new ViewOrFolders([
        ViewOrFolder.RDRAM20_FOLDER
            .with(...
                DiagramType.values()
                    .map(type => ViewOrFolder.rdra20DiagramTypeFolderOf(type))
                    .map(vof => vof.with(ViewOrFolder.EMPTY))
            ),
        ViewOrFolder.CUSTOM_FOLDER
            .with(ViewOrFolder.EMPTY),
        ViewOrFolder.ANALYSIS_FOLDER
            .with(
                ViewOrFolder.ICON_LIST,
                ViewOrFolder.SCREEN_TRANSITION
            ),
    ]);

    private static uniqueAllViewOrFolder(items: ViewOrFolder[]): ViewOrFolder[] {
        const uniqueMap = new Map<number, ViewOrFolder>();
        for (const i of items) {
            uniqueMap.set(i.id, i);
            for (const j of ViewOrFolders.uniqueAllViewOrFolder(i.children)) {
                uniqueMap.set(j.id, j);
            }
        }
        return Array.from(uniqueMap.values());
    }

    static ALL: ViewOrFolder[] = ViewOrFolders
        .uniqueAllViewOrFolder(ViewOrFolders.TREE_TEMPLATE.values);

    private static filterOfIdRange(idRange: Range, items: ViewOrFolder[]): ViewOrFolder[] {
        return items.filter(item => idRange.in(item.id));
    }

    static TOP_FOLDERS: ViewOrFolder[] = ViewOrFolders
        .filterOfIdRange(ViewOrFolder.TOP_FOLDER_IDS, ViewOrFolders.ALL);

    static ANALYSIS: ViewOrFolder[] = ViewOrFolders
        .filterOfIdRange(ViewOrFolder.ANALYSIS_IDS, ViewOrFolders.ALL);

    static RDRA20_TYPE_FOLDERS: ViewOrFolder[] = ViewOrFolders
        .filterOfIdRange(ViewOrFolder.RDRA20_TYPE_IDS, ViewOrFolders.ALL);

    static build(diagrams: Diagrams): ViewOrFolder[] {
        const tree = ViewOrFolders.TREE_TEMPLATE.clone();
        const diagramFolders = tree.rdra20DiagramFolders();
        const typeMap = diagrams.groupOfType();
        for (const folder of diagramFolders) {
            const diagramsOfType = typeMap.get(folder.rdra20DiagramType());
            if (!diagramsOfType || diagramsOfType.length === 0) continue;

            const children = folder.children;
            children.splice(0);
            diagramsOfType
                .map(d => ViewOrFolder.rdra20DiagramOf(d))
                .forEach(vof => children.push(vof));
        }
        return tree.values;
    }

    // normarl methods.

    rdra20DiagramFolders(): ViewOrFolder[] {
        const rdra20 = this.findOf(ViewOrFolder.RDRAM20_FOLDER.id);
        if (!rdra20) return [];
        return rdra20.children;
    }

    findOf(id: number): ViewOrFolder | undefined {
        return this.values.find(i => i.id === id);
    }

    clone(): ViewOrFolders {
        const values = this.values.map(i => i.clone());
        return new ViewOrFolders(values);
    }

    idOf(id: number): ViewOrFolder | undefined {
        return ViewOrFolders.ALL
            .find(item => item.id === id);
    }
}
