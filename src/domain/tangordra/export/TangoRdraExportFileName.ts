import RdramDownloadFileName from "@/domain/client/RdramDownloadFileName";

export default class TangoRdraExportFileName extends RdramDownloadFileName {
    constructor(productName: string) {
        super(`tangordra-${productName}`, "yml");
    }

    public contentType(): string {
        return "text/json";
    }
}
