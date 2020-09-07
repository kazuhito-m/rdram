import Diagram from "./Diagram";
import DiagramType from "./DiagramType";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";
import BusinessUseCaseDiagram from "./businessusecase/BusinessUseCaseDiagram";
import InformationModelDiagram from "./informationmodel/InformationModelDiagram";
import StateModelDiagram from "./statemodel/StateModelDiagram";
import SystemContextDiagram from "./systemcontext/SystemContextDiagram";
import RequestModelDiagram from "./requrestmodel/RequestModelDiagram";
import Resources from "@/domain/resource/Resources";
import UsageSceneDiagram from "./usagescene/UsageSceneDiagram";

export default class DiagramFactory {
    constructor(private readonly resources: Resources) { }

    public create(newDiagramId: number, name: string, diagramType: DiagramType): Diagram {
        if (DiagramType.システムコンテキスト図.equals(diagramType))
            return SystemContextDiagram.prototypeOf(newDiagramId, name, this.resources);
        if (DiagramType.要求モデル図.equals(diagramType))
            return RequestModelDiagram.prototypeOf(newDiagramId, name);
        if (DiagramType.ビジネスコンテキスト図.equals(diagramType))
            return BusinessContextDiagram.prototypeOf(newDiagramId, name);
        if (DiagramType.ビジネスユースケース図.equals(diagramType))
            return BusinessUseCaseDiagram.prototypeOf(newDiagramId, name);
        if (DiagramType.利用シーン.equals(diagramType))
            return UsageSceneDiagram.prototypeOf(newDiagramId, name);
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