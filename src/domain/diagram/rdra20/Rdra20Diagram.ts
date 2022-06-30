import Rdra20DiagramType from "./Rdra20DiagramType";
import Diagram from "@/domain/diagram/Diagram";

export default abstract class Rdra20Diagram extends Diagram {
    public get type(): Rdra20DiagramType {
        return super.type as Rdra20DiagramType;
    }
}
