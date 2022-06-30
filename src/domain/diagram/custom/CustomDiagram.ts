import Diagram from "@/domain/diagram/Diagram";
import CustomDiagramType from "./CustomDiagramType";

export default abstract class CustomDiagram extends Diagram {
    public get type(): CustomDiagramType {
        return super.type as CustomDiagramType;
    }
}
