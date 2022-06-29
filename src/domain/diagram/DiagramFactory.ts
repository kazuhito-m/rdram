import Diagram from "./Diagram";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
import BusinessContextDiagram from "./businesscontext/BusinessContextDiagram";
import BusinessUseCaseDiagram from "./businessusecase/BusinessUseCaseDiagram";
import InformationModelDiagram from "./informationmodel/InformationModelDiagram";
import StateModelDiagram from "./statemodel/StateModelDiagram";
import SystemContextDiagram from "./systemcontext/SystemContextDiagram";
import RequestModelDiagram from "./requrestmodel/RequestModelDiagram";
import UsageSceneDiagram from "./usagescene/UsageSceneDiagram";
import BusinessFlowDiagram from "./businessflow/BusinessFlowDiagram";
import UseCaseCompositeDiagram from "./usecasecomposite/UseCaseCompositeDiagram";
import VariationAndConditionDiagram from "./variationandcondition/VariationAndConditionDiagram";
import Resources from "@/domain/resource/Resources";

export default class DiagramFactory {
    constructor(private readonly resources: Resources) { }

    public create(newDiagramId: number, name: string, diagramType: Rdra20DiagramType): Diagram {
        if (Rdra20DiagramType.システムコンテキスト図.equals(diagramType))
            return SystemContextDiagram.prototypeOf(newDiagramId, name, this.resources);
        if (Rdra20DiagramType.要求モデル図.equals(diagramType))
            return RequestModelDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.ビジネスコンテキスト図.equals(diagramType))
            return BusinessContextDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.ビジネスユースケース図.equals(diagramType))
            return BusinessUseCaseDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.業務フロー図.equals(diagramType))
            return BusinessFlowDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.利用シーン図.equals(diagramType))
            return UsageSceneDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.情報モデル図.equals(diagramType))
            return InformationModelDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.状態モデル図.equals(diagramType))
            return StateModelDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.ユースケース複合図.equals(diagramType))
            return UseCaseCompositeDiagram.prototypeOf(newDiagramId, name);
        if (Rdra20DiagramType.バリエーション条件.equals(diagramType))
            return VariationAndConditionDiagram.prototypeOf(newDiagramId, name);
        // それ以外(未定義なものが来た時)
        throw new Error("タイプに対応する図が見つからなかった。")
    }
}