export default class Folder {
    constructor(
        public readonly id: number,
        public readonly name: string
    ) { }

    public static readonly RDRAM20 = Folder.of(-1, "RDRA 2.0");
    private static readonly CUSTOM = Folder.of(-2, "カスタム");
    private static readonly ANALYZE = Folder.of(-3, "分析");
    public static readonly EMPTY = Folder.of(0, "(空)");

    public static readonly TOP_FOLDERS = [
        Folder.RDRAM20,
        Folder.CUSTOM,
        Folder.ANALYZE,
    ];

    public equals(folder: Folder): boolean {
        return this.id === folder.id;
    }

    public static of(id: number, name: string): Folder {
        return new Folder(id, name);
    }
}