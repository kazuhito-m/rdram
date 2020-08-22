import Relation from "./relation/Relation";
import { Type } from "class-transformer";
import DiagramType from "./DiagramType";

export default class Diagram {
    public readonly id: number;
    private readonly typeId: number;
    public readonly name: string;
    @Type(() => Relation)
    private readonly relations: Relation[];

    constructor(
        id: number,
        typeId: number,
        name: string,
        relations: Relation[]
    ) {
        this.id = id;
        this.typeId = typeId
        this.name = name;
        this.relations = relations;
    }

    public get type(): DiagramType {
        return DiagramType.ofId(this.id) as DiagramType;
    }
}