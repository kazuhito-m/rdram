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

    lookUpRdraTopItem(): ViewOrFolder {
        return this.findTreeItemById(ViewOrFolder.RDRAM20_FOLDER.id) as ViewOrFolder;
    }
}
