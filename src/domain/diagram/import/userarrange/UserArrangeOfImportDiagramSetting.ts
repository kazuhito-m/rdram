import NameOfColided from "./NameOfColided";

export default class UserArrangeOfImportDiagramSetting {
    constructor(
        public readonly sourceDiagramName: string,
        public readonly diagramNamesOfColided: NameOfColided | null,
        public readonly resourceNamesOfColided: NameOfColided[]
    ) { }

    public withDiagramName(diagramNamesOfColided: NameOfColided): UserArrangeOfImportDiagramSetting {
        return new UserArrangeOfImportDiagramSetting(
            this.sourceDiagramName,
            diagramNamesOfColided,
            this.resourceNamesOfColided
        );
    }

    public withResourceNames(resourceNamesOfColided: NameOfColided[]): UserArrangeOfImportDiagramSetting {
        return new UserArrangeOfImportDiagramSetting(
            this.sourceDiagramName,
            this.diagramNamesOfColided,
            resourceNamesOfColided
        );
    }

    public isColidedDiagramName(): boolean {
        return this.diagramNamesOfColided === null;
    }
}