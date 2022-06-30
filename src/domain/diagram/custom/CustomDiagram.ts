import CustomDiagramType from "./CustomDiagramType";
import Diagram from "@/domain/diagram/Diagram";

export default abstract class CustomDiagram extends Diagram {
    public get type(): CustomDiagramType {
        return super.type as CustomDiagramType;
    }
}
