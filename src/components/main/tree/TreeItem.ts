export default interface TreeItem {
    id: number;
    name: string;
    children: TreeItem[];
    disabled: boolean | undefined;
    iconKey: string;
    iconCaption: string;
}
