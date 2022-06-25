import ViewOrFolder from "./ViewOrFolder";
import ViewOrFolders from "./ViewOrFolders";
import Range from "@/domain/basic/Range";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "@/domain/diagram/Diagrams";

export default class ViewOrFoldersTemplate {
    static readonly TREE = new ViewOrFolders([
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

    static readonly ALL: ViewOrFolder[] = ViewOrFoldersTemplate.TREE.uniqueAll();

    private static filterOfIdRange(idRange: Range, items: ViewOrFolder[]): ViewOrFolder[] {
        return items.filter(item => idRange.in(item.id));
    }

    static readonly TOP_FOLDERS: ViewOrFolder[] = ViewOrFoldersTemplate
        .filterOfIdRange(ViewOrFolder.TOP_FOLDER_IDS, ViewOrFoldersTemplate.ALL);

    static readonly ANALYSIS: ViewOrFolder[] = ViewOrFoldersTemplate
        .filterOfIdRange(ViewOrFolder.ANALYSIS_IDS, ViewOrFoldersTemplate.ALL);

    static readonly RDRA20_TYPE_FOLDERS: ViewOrFolder[] = ViewOrFoldersTemplate
        .filterOfIdRange(ViewOrFolder.RDRA20_TYPE_IDS, ViewOrFoldersTemplate.ALL);

    static build(diagrams: Diagrams): ViewOrFolders {
        const tree = ViewOrFoldersTemplate.TREE.clone();
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
        return tree;
    }
}
