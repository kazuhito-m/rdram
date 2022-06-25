import ViewOrFoldersTemplate from "../model/ViewOrFoldersTemplate";
import DiagramType from "@/domain/diagram/DiagramType";
import ViewOrFolder from "@/components/main/model/ViewOrFolder";

export default class TreeWrapper {
    constructor(public readonly treeItems: ViewOrFolder[]) { }

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
        const treeItemId = ViewOrFoldersTemplate.idOf(diagramType)
        const folderItem = rdraTop.children.find((i) => i.id === treeItemId)
        if (!folderItem) return null
        return folderItem
    }

    lookUpRdraTopItem(): ViewOrFolder {
        return this.findTreeItemById(ViewOrFolder.RDRAM20_FOLDER.id) as ViewOrFolder;
    }
}
