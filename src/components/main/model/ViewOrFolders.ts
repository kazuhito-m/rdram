import ViewOrFolder from "./ViewOrFolder";

export default class ViewOrFolders {
    constructor(public readonly values: ViewOrFolder[]) { }

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
