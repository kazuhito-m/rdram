import Diagram from "@/domain/diagram/Diagram";
import Rdra20DiagramType from "./Rdra20DiagramType";

export default abstract class Rdra20Diagram extends Diagram {
    public get type(): Rdra20DiagramType {
        return super.type as Rdra20DiagramType;
    }
}
