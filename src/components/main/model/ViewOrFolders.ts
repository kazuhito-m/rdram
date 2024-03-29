import ViewOrFolder from "./ViewOrFolder";
import Diagram from "@/domain/diagram/Diagram";
import CustomDiagramType from "~/domain/diagram/custom/CustomDiagramType";

export default class ViewOrFolders {
    constructor(public readonly values: ViewOrFolder[]) { }

    addOf(diagram: Diagram): void {
        const fodlers = CustomDiagramType.as(diagram.type)
            ? this.customDiagramFolders()
            : this.rdra20DiagramFolders();
        const folder = fodlers
            .find(f => f.diagramType().equals(diagram.type));
        if (!folder) return;
        const items = folder.children

        if (items.length === 1 && items[0].equals(ViewOrFolder.EMPTY))
            items.splice(0);

        const item = ViewOrFolder.diagramOf(diagram);
        items.push(item);
    }

    removeOf(id: number, items: ViewOrFolder[] = this.values): boolean {
        const index = items.findIndex(item => item.id === id);
        if (index < 0) return items.some(item => this.removeOf(id, item.children));

        items.splice(index, 1)
        if (items.length === 0) items.push(ViewOrFolder.EMPTY)
        return true
    }

    findOf(id: number, items: ViewOrFolder[] = this.values): ViewOrFolder | null {
        for (const item of items) {
            if (item.id === id) return item;
            const found = this.findOf(id, item.children);
            if (found) return found;
        }
        return null;
    }

    uniqueAll(items: ViewOrFolder[] = this.values): ViewOrFolder[] {
        const uniqueMap = new Map<number, ViewOrFolder>();
        for (const i of items) {
            uniqueMap.set(i.id, i);
            for (const j of this.uniqueAll(i.children)) {
                uniqueMap.set(j.id, j);
            }
        }
        return Array.from(uniqueMap.values());
    }

    rdra20DiagramFolders(): ViewOrFolder[] {
        const rdra20 = this.findOf(ViewOrFolder.RDRAM20_FOLDER.id);
        if (!rdra20) return [];
        return rdra20.children;
    }

    customDiagramFolders(): ViewOrFolder[] {
        const custom = this.findOf(ViewOrFolder.CUSTOM_FOLDER.id);
        if (!custom) return [];
        return custom.children;
    }

    rdra20Folder(): ViewOrFolder {
        return this.findOf(ViewOrFolder.RDRAM20_FOLDER.id) as ViewOrFolder;
    }

    findParentFolderOf(id: number, folders = this.values): ViewOrFolder | undefined {
        for (const item of folders) {
            const childFound = item.children
                .some(child => child.id === id);
            if (childFound) return item;

            const found = this.findParentFolderOf(id , item.children);
            if (found) return found;
        }
        return undefined;
    }

    clone(): ViewOrFolders {
        const values = this.values.map(i => i.clone());
        return new ViewOrFolders(values);
    }
}
