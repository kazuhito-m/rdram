import IconNameArrangeVM from "./IconNameArrangeVM";
import { BehaviorWhenNameConflict } from "@/domain/diagram/import/userarrange/BehaviorWhenNameConflict";
import UserArrangeOfImportDiagram from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";
import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";
import DiagramType from "@/domain/diagram/type/DiagramType";
import Product from "@/domain/product/Product";
import DiagramTypes from "@/domain/diagram/type/DiagramTypes";

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
                .every(i => i.validateIconName() === true);
    }

    public validateDialogName(value: string): boolean | string {
        if (this.isNotAriasNameOfBehavior()) return true;
        if (value.trim().length === 0)
            return "別名を入力してください。";
        if (value.length > this.diagramNameMaxLength)
            return `${this.diagramNameMaxLength}文字以内で入力してください。`;
        if (value.trim() === this.srcDiagramName)
            return `「元の名前」は指定できません。`;
        const diagrams = this.product.diagrams;
        if (diagrams.existsSameTypeAndName(this.destDiagramName, this.diagramType))
            return "同種同名が既に存在します。";
        return true;
    }

    public validateoConfrictResourceOf(iconName: IconNameArrangeVM): boolean | string {
        if (this.confrictResourceDestName(iconName))
            return "他の別名と重複しています。";
        const resources = this.product.resources;
        if (resources.existsSameTypeAndName(iconName.destName, iconName.resourceType))
            return "同種同名が既にに存在します。";
        return true;
    }

    public confrictResourceDestName(iconName: IconNameArrangeVM): boolean {
        return this.iconNames
            .filter(n => n.equals(iconName))
            .length > 1;
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
            DiagramTypes.byId(userArrange.conflictDiagramName.sourceType) as DiagramType,
            [],
            product
        );

        userArrange.conflictResourceNames
            .map(r => IconNameArrangeVM.of(r, result))
            .forEach(iconName => result.iconNames.push(iconName));

        return result;
    }

    public static empty(): UserArrangeVM {
        return UserArrangeVM.of(UserArrangeOfImportDiagram.empty(), Product.prototypeOf(""));
    }
}
