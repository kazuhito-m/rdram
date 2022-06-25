import ViewOrFolders from "@/components/main/model/ViewOrFolders";
import ViewOrFolder from "@/components/main/model//ViewOrFolder";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagrams from "@/domain/diagram/Diagrams";

export default class FolderTreeFactory {
    public buildTree(diagrams: Diagrams): ViewOrFolder[] {
        return ViewOrFolders.build(diagrams);
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
