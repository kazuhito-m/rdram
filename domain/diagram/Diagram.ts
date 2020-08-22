import Relation from "./relation/Relation";
import { Type } from "class-transformer";
import DiagramType from "./DiagramType";
import Placement from "./placement/Placement";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";

export default class Diagram {
    public readonly id: number;
    private readonly typeId: number;
    public readonly name: string;
    @Type(() => Relation)
    private readonly relations: Relation[];
    @Type(() => Placement)
    private readonly placements: Placement[];

    private constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[],
        placements: Placement[],
    ) {
        this.id = id;
        this.typeId = typeId
        this.name = name;
        this.relations = relations;
        this.placements = placements;
    }

    public resavailableResourceTypeIds(): number[] {
        return [];
    }

    public get type(): DiagramType {
        return DiagramType.ofId(this.id) as DiagramType;
    }

    public static prototypeOf(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        if (DiagramType.ビジネスコンテキスト図.equals(diagramType)) {
            return  BusinessContextDiagram.prototypeOf(newDiagramId, name);
        }

        // それ以外(未定義なものが来た時)
        return new Diagram(
            newDiagramId,
            diagramType.id,
            name,
            [],
            [],
        );
    }
}