import RdramExportFileName from "@/domain/client/export/RdramExportFileName";

export default class RdramLocalStrageExportFileName extends RdramExportFileName {
    public static readonly TYPE_DESCRIPTION = "RDRAM LocalStrage exported file (json)";

    constructor() {
        super("localstrage-backup");
    }

    public static isApplicableOf(fileName: string): boolean {
        const pattern = new RdramLocalStrageExportFileName().toString()
            .replace(/\-/g, '\\-')
            .replace(/\-[0-9]+\./, '-[0-9]+\\.');
        const hitTest = new RegExp(pattern);
        return hitTest.test(fileName);
    }
}
