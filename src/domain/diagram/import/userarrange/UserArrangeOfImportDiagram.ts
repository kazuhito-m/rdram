import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";
import Rdra20DiagramType from "../../rdra20/Rdra20DiagramType";
import DiagramType from "../../type/DiagramType";

export default class UserArrangeOfImportDiagram {
    constructor(
        public readonly sourceDiagramName: string,
        public readonly conflictDiagramName: ConflictNameBehavior,
        public readonly conflictResourceNames: ConflictNameBehavior[],
        public readonly diagramType: DiagramType
    ) { }

    public withDiagramName(diagramNamesOfColided: ConflictNameBehavior): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            diagramNamesOfColided,
            this.conflictResourceNames,
            this.diagramType
        );
    }

    public withResourceNames(resourceNamesOfColided: ConflictNameBehavior[]): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            this.conflictDiagramName,
            resourceNamesOfColided,
            this.diagramType
        );
    }

    public isColidedDiagramName(): boolean {
        return !this.conflictDiagramName.isEmpty();
    }

    public isEmpty(): boolean {
        return !this.isColidedDiagramName()
            && this.conflictResourceNames.length === 0;
    }

    public static empty(): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram("", ConflictNameBehavior.empty(), [], Rdra20DiagramType.システムコンテキスト図);
    }
}
