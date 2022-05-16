import { DiagramImportProgressStep } from "./DiagramImportProgressStep";
import { DiagramImportError } from "./DiagramImportError";
import EnumAnalyzer from "@/domain/basic/enum/EnumAnalyzer";

export default class DiagramImportProgressEvent {
    constructor(
        public readonly step: DiagramImportProgressStep,
        public readonly error: DiagramImportError,
        public readonly optionalMessage: string
    ) { }

    public isError(): boolean {
        return this.error !== DiagramImportError.なし;
    }

    public stepNumber(): number {
        return this.step as number;
    }

    public percentage(): number {
        const stepNubmer = this.stepNumber();
        if (stepNubmer <= 0) return 0;
        const endStep = EnumAnalyzer.muxNumberValueOf(DiagramImportProgressStep);
        return stepNubmer / endStep * 100;
    }
}