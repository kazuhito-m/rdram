import ViewOrFolders from "@/components/main/model/ViewOrFolders";
import ViewOrFolder from "@/components/main/model//ViewOrFolder";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "@/domain/diagram/Diagrams";

export default class FolderTreeFactory {
    public buildTree(diagrams: Diagrams): ViewOrFolder[] {
        const tree = ViewOrFolders.TREE.clone();
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

        return tree.values;
    }

    public diagramTypeFrom(item: ViewOrFolder): DiagramType | undefined {
        return item.rdra20DiagramType();
    }

    public treeItemIdFrom(diagramType: DiagramType): number {
        const folder = ViewOrFolders.RDRA20_TYPE_FOLDERS
            .find(f => diagramType.equals(f.rdra20DiagramType()));
        return folder ? folder.id : 0;
    }

    public isDiagramTypeFolder(item: ViewOrFolder): boolean {
        return item.isRdra20DiagramTypeFolder();
    }

    public static get(): FolderTreeFactory {
        return new FolderTreeFactory();
    }
}
