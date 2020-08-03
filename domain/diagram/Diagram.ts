import Relation from "./relation/Relation";

export default interface Diagram {
    id: number;
    typeId: number;
    name: string;
    relations: Relation[];
}