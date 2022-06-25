import DiagramType from "@/domain/diagram/DiagramType";
import ViewOrFoldersTemplate from "@/components/main/model/ViewOrFoldersTemplate";

export default class FolderTreeFactory {
    public static get(): FolderTreeFactory {
        return new FolderTreeFactory();
    }
}
