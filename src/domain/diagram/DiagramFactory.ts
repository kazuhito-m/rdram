import Diagram from "./Diagram";
import DiagramType from "./DiagramType";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";
import InformationModelDiagram from "./informationmodel/InformationModelDiagram";
import StateModelDiagram from "./statemodel/StateModelDiagram";
import SystemContextDiagram from "./systemcontext/SystemContextDiagram";
import Resources from "@/domain/resource/Resources";

export default class DiagramFactory {
    constructor(private readonly resources: Resources) { }

    public create(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        if (DiagramType.システムコンテキスト図.equals(diagramType))
            return SystemContextDiagram.prototypeOf(newDiagramId, name, this.resources);
        if (DiagramType.ビジネスコンテキスト図.equals(diagramType))
            return BusinessContextDiagram.prototypeOf(newDiagramId, name);
        if (DiagramType.情報モデル図.equals(diagramType))
            return InformationModelDiagram.prototypeOf(newDiagramId, name);
        if (DiagramType.状態モデル.equals(diagramType))
            return StateModelDiagram.prototypeOf(newDiagramId, name);
        // それ以外(未定義なものが来た時)
        return Diagram.genericPrototypeOf(
            newDiagramId,
            name,
            diagramType,
            this.resources,
        );
    }
}