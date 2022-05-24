import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";

export default class UserArrangeOfImportDiagram {
    constructor(
        public readonly sourceDiagramName: string,
        public readonly conflictDiagramName: ConflictNameBehavior,
        public readonly conflictResourceNames: ConflictNameBehavior[]
    ) { }

    public withDiagramName(diagramNamesOfColided: ConflictNameBehavior): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            diagramNamesOfColided,
            this.conflictResourceNames
        );
    }

    public withResourceNames(resourceNamesOfColided: ConflictNameBehavior[]): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            this.conflictDiagramName,
            resourceNamesOfColided
        );
    }

    public isColidedDiagramName(): boolean {
        return !this.conflictDiagramName.isEmpty();
    }

    public isEmpty(): boolean {
        return !this.isColidedDiagramName()
            && this.conflictResourceNames.length === 0;
    }

    public clone(): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            this.conflictDiagramName.clone(),
            this.conflictResourceNames.map(n => n.clone())
        );
    }

    public static empty(): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram("", ConflictNameBehavior.empty(), []);
    }
}
