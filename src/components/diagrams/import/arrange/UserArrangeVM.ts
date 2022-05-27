import IconNameArrangeVM from "./IconNameArrangeVM";
import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import UserArrangeOfImportDiagram from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";
import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";
import DiagramType from "@/domain/diagram/DiagramType";
import Product from "@/domain/product/Product";

export default class UserArrangeVM {
    constructor(
        public readonly srcDiagramName: string,
        public destDiagramName: string,
        private _behavior: BehaviorWhenNameConflict,
        public readonly isConfrictDiagramName: boolean,
        private readonly sourceId: number,
        public readonly diagramType: DiagramType,
        public readonly iconNames: IconNameArrangeVM[],
        private readonly product: Product
    ) { }

    public validated = false;

    public readonly diagramNameMaxLength = 128;

    public isNotAriasNameOfBehavior(): boolean {
        return this._behavior !== BehaviorWhenNameConflict.別名;
    }

    public toDomain(): UserArrangeOfImportDiagram {
        return new UserArrangeOfImportDiagram(
            this.srcDiagramName,
            new ConflictNameBehavior(
                this._behavior,
                this.srcDiagramName,
                this.destDiagramName,
                this.sourceId,
                this.diagramType.id
            ),
            this.iconNames
                .map(i => i.toDomain())
        );
    }

    // validation methods

    public validate() {
        return this.validateDialogName(this.destDiagramName) === true
            && this.iconNames
                .every(i => i.validateIconName(i.destName) === true);
    }

    public validateDialogName(value: string): boolean | string {
        if (this.isNotAriasNameOfBehavior()) return true;
        if (value.trim().length === 0)
            return "図の別名を入力してください。";
        if (value.length > this.diagramNameMaxLength)
            return `図の別名は${this.diagramNameMaxLength}文字以内で入力してください。`;
        if (value.trim() === this.srcDiagramName)
            return `図の別名に「インポートした元の名前」は指定できません。`;
        return true;
    }

    // properties

    public get behavior(): BehaviorWhenNameConflict {
        return this._behavior;
    }

    public set behavior(value: BehaviorWhenNameConflict) {
        if (value !== BehaviorWhenNameConflict.別名) this.destDiagramName = "";
        this._behavior = value;
    }

    // factory methods

    public static of(userArrange: UserArrangeOfImportDiagram, product: Product): UserArrangeVM {
        const result = new UserArrangeVM(
            userArrange.sourceDiagramName,
            userArrange.conflictDiagramName.destinationName,
            userArrange.conflictDiagramName.behavior,
            userArrange.isColidedDiagramName(),
            userArrange.conflictDiagramName.sourceId,
            DiagramType.ofId(userArrange.conflictDiagramName.sourceType) as DiagramType,
            [],
            product
        );

        const iconNames = userArrange.conflictResourceNames
            .map(r => IconNameArrangeVM.of(r, result));

        return result.with(iconNames);
    }

    protected with(newIconNames: IconNameArrangeVM[]): UserArrangeVM {
        return new UserArrangeVM(
            this.srcDiagramName,
            this.destDiagramName,
            this.behavior,
            this.isConfrictDiagramName,
            this.sourceId,
            this.diagramType,
            newIconNames,
            this.product
        );
    }

    public static empty(): UserArrangeVM {
        return UserArrangeVM.of(UserArrangeOfImportDiagram.empty(), Product.prototypeOf(""));
    }
}
