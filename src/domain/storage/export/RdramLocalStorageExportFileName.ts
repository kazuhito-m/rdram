import RdramExportFileName from "@/domain/client/export/RdramExportFileName";

export default class RdramLocalStorageExportFileName extends RdramExportFileName {
    public static readonly TYPE_DESCRIPTION = "RDRAM LocalStorage exported file (json)";

    constructor() {
        super("localstorage-backup");
    }

    public static isApplicableOf(fileName: string): boolean {
        const pattern = new RdramLocalStorageExportFileName().toString()
            .replace(/\-/g, '\\-')
            .replace(/\-[0-9]+\./, '-[0-9]+\\.');
        const hitTest = new RegExp(pattern);
        return hitTest.test(fileName);
    }
}
