import NameOfColided from "./NameOfColided";

export default class UserArrangeOfImportDiagram {
    constructor(
        public readonly sourceDiagramName: string,
        public readonly diagramNamesOfColided: NameOfColided | null,
        public readonly resourceNamesOfColided: NameOfColided[]
    ) { }

    public withDiagramName(diagramNamesOfColided: NameOfColided): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.sourceDiagramName,
            diagramNamesOfColided,
            this.resourceNamesOfColided
        );
    }

    public withResourceNames(resourceNamesOfColided: NameOfColided[]): UserArrangeOfImportDiagram {
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