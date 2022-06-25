import DiagramType from "@/domain/diagram/DiagramType";
import ViewOrFoldersTemplate from "@/components/main/model/ViewOrFoldersTemplate";

export default class FolderTreeFactory {
    public treeItemIdFrom(diagramType: DiagramType): number {
        const folder = ViewOrFoldersTemplate.RDRA20_TYPE_FOLDERS
            .find(f => diagramType.equals(f.rdra20DiagramType()));
        return folder ? folder.id : 0;
    }

    public static get(): FolderTreeFactory {
        return new FolderTreeFactory();
    }
}
