import TreeItem from "@/presentation/tree/TreeItem";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "~/domain/diagram/Diagrams";
import Diagram from "~/domain/diagram/Diagram";

export default class Folder {
    constructor(
        public readonly id: number,
        public readonly name: string
    ) { }

    public static readonly RDRAM20 = Folder.of(-1, "RDRA 2.0");
    private static readonly CUSTOM = Folder.of(-2, "カスタム");
    private static readonly ANALYZE = Folder.of(-3, "分析");
    private static readonly EMPTY = Folder.of(0, "(空)");

    private static readonly TOP_FOLDERS = [
        Folder.RDRAM20,
        Folder.CUSTOM,
        Folder.ANALYZE,
    ];

    public static EMPTY_TREE_ITEM = Folder.makeItem(Folder.EMPTY, true);

    private static readonly DIAGRAM_FOLDER_ID_MASK = 1000000;

    public equals(folder: Folder): boolean {
        return this.id === folder.id;
    }

    public static buildTree(diagrams: Diagrams): TreeItem[] {
        return Folder.TOP_FOLDERS
            .map(f => Folder.makeTreeTopFolder(f, diagrams));
    }

    private static makeTreeTopFolder(folder: Folder, diagrams: Diagrams): TreeItem {
        const item = this.makeItem(folder);
        item.children = folder.equals(Folder.RDRAM20)
            ? this.makeTreeRdram20Folders(diagrams)
            : [Folder.EMPTY_TREE_ITEM];
        return item;
    }

    private static makeTreeRdram20Folders(diagrams: Diagrams): TreeItem[] {
        const typeMap = diagrams.groupOfType();
        return DiagramType.values()
            .map(type => this.makeDiagramFolderOfGroupingType(type, typeMap))
    }

    private static makeDiagramFolderOfGroupingType(type: DiagramType, typeMap: Map<DiagramType, Diagram[]>): TreeItem {
        const folder = Folder.of(type.id + Folder.DIAGRAM_FOLDER_ID_MASK, type.name);
        const folderItem = this.makeItem(folder);
        folderItem.children = typeMap.get(type)?.map(d => this.makeDiagramItem(d))
            .filter(d => d)
            .map(d => d as TreeItem) as TreeItem[]
        if (folderItem.children.length === 0)
            folderItem.children = [Folder.EMPTY_TREE_ITEM];
        return folderItem;
    }

    private static makeItem(folder: Folder, disabled = false): TreeItem {
        return {
            id: folder.id,
            name: folder.name,
            children: [],
            disabled: disabled,
            iconKey: '',
            iconCaption: '',
        }
    }

    private static makeDiagramItem(diagram: Diagram): TreeItem {
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

    public static diagramTypeFrom(treeItem: TreeItem): DiagramType | undefined {
        const typeId = treeItem.id - Folder.DIAGRAM_FOLDER_ID_MASK;
        return DiagramType.ofId(typeId);
    }

    public static treeItemIdFrom(diagramType: DiagramType): number {
        return diagramType.id + Folder.DIAGRAM_FOLDER_ID_MASK;
    }

    private static of(id: number, name: string): Folder {
        return new Folder(id, name);
    }
}