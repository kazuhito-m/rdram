import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";

export default class UserArrangeOfImportDiagram {
    constructor(
        public readonly sourceDiagramName: string,
        public readonly diagramNamesOfColided: ConflictNameBehavior | null,
        public readonly resourceNamesOfColided: ConflictNameBehavior[]
    ) { }

    public withDiagramName(diagramNamesOfColided: ConflictNameBehavior): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            diagramNamesOfColided,
            this.resourceNamesOfColided
        );
    }

    public withResourceNames(resourceNamesOfColided: ConflictNameBehavior[]): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            this.diagramNamesOfColided,
            resourceNamesOfColided
        );
    }

    public isColidedDiagramName(): boolean {
        return this.diagramNamesOfColided !== null;
    }

    public isEmpty(): boolean {
        return !this.isColidedDiagramName()
            && this.resourceNamesOfColided.length === 0;
    }

    public static empty(): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram("", null, []);
    }
}