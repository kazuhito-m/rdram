import Folder from "./Folder";
import TreeItem from "@/components/main/tree/TreeItem";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "@/domain/diagram/Diagrams";
import Diagram from "@/domain/diagram/Diagram";
import ViewOrFolders from "../ViewOrFolders";
import ViewOrFolder from "../ViewOrFolder";

export default class FolderTreeFactory {
    public buildTree(diagrams: Diagrams): TreeItem[] {
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
