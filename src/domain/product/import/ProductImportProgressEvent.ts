import { ProductImportProgressStep } from "./ProductImportProgressStep";
import { ProductImportError } from "./ProductImportError";
import EnumAnalyzer from "@/domain/basic/enum/EnumAnalyzer";

export default class ProductImportProgressEvent {
    constructor(
        public readonly step: ProductImportProgressStep,
        public readonly error: ProductImportError,
        public readonly optionalMessage: string
    ) { }

    public isError(): boolean {
        return this.error !== ProductImportError.なし;
    }

    public stepNumber(): number {
        return this.step as number;
    }

    public percentage(): number {
        const stepNubmer = this.stepNumber();
        if (stepNubmer <= 0) return 0;
        const endStep = EnumAnalyzer.muxNumberValueOf(ProductImportProgressStep);
        return stepNubmer / endStep * 100;
    }
}