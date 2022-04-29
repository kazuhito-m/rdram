import { LocalStorageImportProgressStep } from "./LocalStorageImportProgressStep";
import { LocalStorageImportError } from "./LocalStorageImportError";
import EnumAnalyzer from "@/domain/basic/enum/EnumAnalyzer";

export default class LocalStorageImportProgressEvent {
    constructor(
        public readonly step: LocalStorageImportProgressStep,
        public readonly error: LocalStorageImportError,
        public readonly optionalMessage: string
    ) { }

    public stepNumber(): number {
        return this.step as number;
    } 

    public percentage(): number {
        const stepNubmer = this.stepNumber();
        if (stepNubmer <= 0) return 0;
        const endStep = EnumAnalyzer.muxNumberValueOf(LocalStorageImportProgressStep);
        return stepNubmer / endStep * 100;
    }
}