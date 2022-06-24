import Folder from "./Folder";
import TreeItem from "@/components/main/tree/TreeItem";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "@/domain/diagram/Diagrams";
import Diagram from "@/domain/diagram/Diagram";

export default class FolderTreeFactory {
    public static readonly EMPTY_TREE_ITEM = FolderTreeFactory.get().makeItem(Folder.EMPTY, true);
    private static readonly DIAGRAM_FOLDER_ID_MASK = 1000000;

    public buildTree(diagrams: Diagrams): TreeItem[] {
        return Folder.TOP_FOLDERS
            .map(f => this.makeTreeTopFolder(f, diagrams));
    }

    private makeTreeTopFolder(folder: Folder, diagrams: Diagrams): TreeItem {
        const item = this.makeItem(folder);
        item.children = folder.equals(Folder.RDRAM20)
            ? this.makeTreeRdram20Folders(diagrams)
            : [FolderTreeFactory.EMPTY_TREE_ITEM];
        return item;
    }

    private makeTreeRdram20Folders(diagrams: Diagrams): TreeItem[] {
        const typeMap = diagrams.groupOfType();
        return DiagramType.values()
            .map(type => this.makeDiagramFolderOfGroupingType(type, typeMap))
    }

    private makeDiagramFolderOfGroupingType(type: DiagramType, typeMap: Map<DiagramType, Diagram[]>): TreeItem {
        const folder = Folder.of(type.id + FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK, type.name);
        const folderItem = this.makeItem(folder);
        folderItem.children = typeMap.get(type)?.map(d => this.makeDiagramItem(d))
            .filter(d => d)
            .map(d => d as TreeItem) as TreeItem[]
        if (folderItem.children.length === 0)
            folderItem.children = [FolderTreeFactory.EMPTY_TREE_ITEM];
        return folderItem;
    }

    private makeItem(folder: Folder, disabled = false): TreeItem {
        return {
            id: folder.id,
            name: folder.name,
            children: [],
            disabled,
            iconKey: '',
            iconCaption: '',
        }
    }

    public makeDiagramItem(diagram: Diagram): TreeItem {
        const type = diagram.type
        return {
            id: diagram.id,
            name: diagram.name,
            children: [],
            disabled: false,
            iconKey: type.iconKey,
            iconCaption: type.name,
        }
    }

    public diagramTypeFrom(treeItem: TreeItem): DiagramType | undefined {
        const typeId = treeItem.id - FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK;
        return DiagramType.ofId(typeId);
    }

    public treeItemIdFrom(diagramType: DiagramType): number {
        return diagramType.id + FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK;
    }

    public isDiagramTypeFolder(treeItem: TreeItem): boolean {
        return treeItem.id > FolderTreeFactory.DIAGRAM_FOLDER_ID_MASK;
    }

    public static get(): FolderTreeFactory {
        return new FolderTreeFactory();
    }
}
