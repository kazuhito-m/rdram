import TreeItem from "@/presentation/tree/TreeItem";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagram from "@/domain/diagram/Diagram";
import Folder from "./Folder";
import FolderTreeFactory from "./FolderTreeFactory";

export default class TreeWrapper {
    constructor(public readonly treeItems: TreeItem[]) { }

    private readonly factory = FolderTreeFactory.get();

    public findTreeItemById(treeItemId: number, treeItems: TreeItem[] = this.treeItems): TreeItem | null {
        for (const item of treeItems) {
            if (item.id === treeItemId) return item;
            const child = this.findTreeItemById(treeItemId, item.children);
            if (child) return child;
        }
        return null;
    }

    public removeTreeItem(treeItemId: number, treeItems: TreeItem[] = this.treeItems): boolean {
        const foundIndex = treeItems.findIndex((item) => item.id === treeItemId)
        if (foundIndex >= 0) {
            treeItems.splice(foundIndex, 1)
            if (treeItems.length === 0) treeItems.push(FolderTreeFactory.EMPTY_TREE_ITEM)
            return true
        }
        return treeItems.some((item) =>
            this.removeTreeItem(treeItemId, item.children)
        )
    }

    public folderItemOf(diagramType: DiagramType): TreeItem | null {
        const rdraTop = this.lookUpRdraTopItem();
        const treeItemId = this.factory.treeItemIdFrom(diagramType)
        const folderItem = rdraTop.children.find((i) => i.id === treeItemId)
        if (!folderItem) return null
        return folderItem
    }

    public addDiagramTreeItem(diagram: Diagram): TreeItem | null {
        const folderItem = this.folderItemOf(diagram.type)
        if (!folderItem) return null
        const children = folderItem.children

        if (children.length === 1 && children[0] === FolderTreeFactory.EMPTY_TREE_ITEM)
            children.length = 0

        const diagramTreeItem = this.factory.makeDiagramItem(diagram)
        children.push(diagramTreeItem)

        return diagramTreeItem
    }

    public lookUpRdraTopItem(): TreeItem {
        return this.findTreeItemById(Folder.RDRAM20.id) as TreeItem;
    }
}
