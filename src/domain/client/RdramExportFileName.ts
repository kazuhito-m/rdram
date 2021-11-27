import RdramDownloadFileName from "./RdramDownloadFileName";

export default class RdramExportFileName extends RdramDownloadFileName {
    constructor(name: string) {
        super(name, "json");
    }

    public contentType(): string {
        return "text/json";
    }
}
