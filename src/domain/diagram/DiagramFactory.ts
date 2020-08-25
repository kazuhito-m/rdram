import Diagram from "./Diagram";
import DiagramType from "./DiagramType";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";

export default class DiagramFactory {
    public create(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        if (DiagramType.ビジネスコンテキスト図.equals(diagramType)) {
            return BusinessContextDiagram.prototypeOf(
                newDiagramId,
                name,
            ); 
        }

        // それ以外(未定義なものが来た時)
        return Diagram.prototypeOf(
            newDiagramId,
            name,
            diagramType,
        );
    }
}