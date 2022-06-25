import FolderTreeFactory from "./FolderTreeFactory";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagram from "@/domain/diagram/Diagram";
import ViewOrFolder from "@/components/main/ViewOrFolder";

export default class TreeWrapper {
    constructor(public readonly treeItems: ViewOrFolder[]) { }

    private readonly factory = FolderTreeFactory.get();

    findTreeItemById(treeItemId: number, treeItems: ViewOrFolder[] = this.treeItems): ViewOrFolder | null {
        for (const item of treeItems) {
            if (item.id === treeItemId) return item;
            const child = this.findTreeItemById(treeItemId, item.children);
            if (child) return child;
        }
        return null;
    }

    removeTreeItem(treeItemId: number, treeItems: ViewOrFolder[] = this.treeItems): boolean {
        const foundIndex = treeItems.findIndex((item) => item.id === treeItemId)
        if (foundIndex >= 0) {
            treeItems.splice(foundIndex, 1)
            if (treeItems.length === 0) treeItems.push(ViewOrFolder.EMPTY)
            return true
        }
        return treeItems.some((item) =>
            this.removeTreeItem(treeItemId, item.children)
        )
    }

    folderItemOf(diagramType: DiagramType): ViewOrFolder | null {
        const rdraTop = this.lookUpRdraTopItem();
        const treeItemId = this.factory.treeItemIdFrom(diagramType)
        const folderItem = rdraTop.children.find((i) => i.id === treeItemId)
        if (!folderItem) return null
        return folderItem
    }

    addDiagramTreeItem(diagram: Diagram): ViewOrFolder | null {
        const folderItem = this.folderItemOf(diagram.type)
        if (!folderItem) return null
        const children = folderItem.children

        if (children.length === 1 && children[0].equals(ViewOrFolder.EMPTY))
            children.length = 0

        const diagramViewOrFolder = ViewOrFolder.rdra20DiagramOf(diagram)
        children.push(diagramViewOrFolder)

        return diagramViewOrFolder
    }

    lookUpRdraTopItem(): ViewOrFolder {
        return this.findTreeItemById(ViewOrFolder.RDRAM20_FOLDER.id) as ViewOrFolder;
    }
}
