import RdramExportFileName from "@/domain/client/export/RdramExportFileName";

export default class RdramProductExportFileName extends RdramExportFileName {
    constructor(productName: string) {
        super(`product-${productName}`);
    }
}
