import ViewOrFolder from "@/components/main/model/ViewOrFolder";

export default class TreeWrapper {
    constructor(public readonly treeItems: ViewOrFolder[]) { }
}
