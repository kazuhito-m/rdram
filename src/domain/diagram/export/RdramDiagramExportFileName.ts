import RdramExportFileName from "@/domain/client/export/RdramExportFileName";
import Diagram from "../Diagram";

export default class RdramDiagramExportFileName extends RdramExportFileName {
    public static readonly TYPE_DESCRIPTION = "RDRAM product exported file (json)";

    constructor(diagramName: string) {
        super(`diagram-${diagramName}`);
    }

    public static isApplicableOf(fileName: string): boolean {
        const pattern = new RdramDiagramExportFileName(".*").toString()
            .replace(/-/g, '\\-')
            .replace(/-[0-9]+\./, '-[0-9]+\\.');
        const hitTest = new RegExp(pattern);
        return hitTest.test(fileName);
    }

    public static of(diagram: Diagram): RdramDiagramExportFileName {
        return new RdramDiagramExportFileName(diagram.name);
    }
} 