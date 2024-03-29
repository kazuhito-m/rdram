import Product from "../Product";
import RdramExportFileName from "@/domain/client/export/RdramExportFileName";

export default class RdramProductExportFileName extends RdramExportFileName {
    public static readonly TYPE_DESCRIPTION = "RDRAM product exported file (json)";

    private constructor(productName: string) {
        super(`product-${productName}`);
    }

    public static isApplicableOf(fileName: string): boolean {
        const pattern = new RdramProductExportFileName(".*").toString()
            .replace(/-/g, '\\-')
            .replace(/-[0-9]+\./, '-[0-9]+\\.');
        const hitTest = new RegExp(pattern);
        return hitTest.test(fileName);
    }

    public static of(product: Product): RdramProductExportFileName {
        return new RdramProductExportFileName(product.name);
    }
}
