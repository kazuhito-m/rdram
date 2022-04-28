import { LocalStrageImportProgressStep } from "./LocalStrageImportProgressStep";
import { LocalStrageImportError } from "./LocalStrageImportError";
import EnumAnalyzer from "@/domain/basic/enum/EnumAnalyzer";

export default class LocalStrageImportProgressEvent {
    constructor(
        public readonly step: LocalStrageImportProgressStep,
        public readonly error: LocalStrageImportError,
        public readonly optionalMessage: string
    ) { }

    public stepNumber(): number {
        return this.step as number;
    } 

    public percentage(): number {
        const stepNubmer = this.stepNumber();
        if (stepNubmer <= 0) return 0;
        const endStep = EnumAnalyzer.muxNumberValueOf(LocalStrageImportProgressStep);
        return stepNubmer / endStep * 100;
    }
}