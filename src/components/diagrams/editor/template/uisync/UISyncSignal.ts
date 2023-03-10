type SyncOperation = "delete";
type SyncTarget = "icon" | "connection";

/**
 * UIの整合性をとるだけの信号。
 * 
 * 「UI操って何かやらせる」のではなく、
 * あくまでも「モデルが変更されたのを他のUIに伝播する」だけの用途。
 */
export default class UISyncSignal {
    constructor(
        public readonly target: SyncTarget,
        public readonly operation: SyncOperation,
        public readonly id: string
    ) { }

    public static deleteConnectionOf = (id: string) =>
        new UISyncSignal("connection", "delete", id);

    public static deleteIconOf = (id: string) =>
        new UISyncSignal("icon", "delete", id);
} 