import RdramDownloadFileName from "@/domain/client/WithTimestampFileName";

export default class TangoRdraExportFileName extends RdramDownloadFileName {
    constructor(productName: string) {
        super(`tangordra-${productName}`, "yml");
    }
}
