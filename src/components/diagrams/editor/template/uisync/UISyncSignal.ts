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
        public readonly id: string,
        public readonly diagramId: number
    ) { }

    public static readonly ALL_DIAGRAM_ID = -1;

    public static deleteConnectionsOf = (relationIds: string[]) =>
        relationIds.map(UISyncSignal.deleteConnectionOf);

    private static deleteConnectionOf = (relationId: string) =>
        new UISyncSignal("connection", "delete", relationId, UISyncSignal.ALL_DIAGRAM_ID);

    public static deleteIconOf = (resourceId: number, diagramId: number) =>
        new UISyncSignal("icon", "delete", resourceId.toString(), diagramId);

    public isTargetAllDiagram(): boolean {
        return this.diagramId === UISyncSignal.ALL_DIAGRAM_ID;
    }

    public get resourceId(): number {
        if (this.target !== 'icon') return 0;
        return parseInt(this.id, 10);
    }
} 
