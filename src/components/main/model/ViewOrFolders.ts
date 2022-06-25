import ViewOrFolder from "./ViewOrFolder";
import Diagram from "@/domain/diagram/Diagram";

export default class ViewOrFolders {
    constructor(public readonly values: ViewOrFolder[]) { }

    addOf(diagram: Diagram): void {
        const folder = this.rdra20DiagramFolders()
            .find(f => f.rdra20DiagramType().equals(diagram.type));
        if (!folder) return;
        const items = folder.children

        if (items.length === 1 && items[0].equals(ViewOrFolder.EMPTY))
            items.splice(0);

        const item = ViewOrFolder.rdra20DiagramOf(diagram);
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

    clone(): ViewOrFolders {
        const values = this.values.map(i => i.clone());
        return new ViewOrFolders(values);
    }
}
