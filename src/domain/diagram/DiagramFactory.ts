import Diagram from "./Diagram";
import BusinessContextDiagram from "./rdra20/businesscontext/BusinessContextDiagram";
import BusinessUseCaseDiagram from "./rdra20/businessusecase/BusinessUseCaseDiagram";
import InformationModelDiagram from "./informationmodel/InformationModelDiagram";
import StateModelDiagram from "./rdra20/statemodel/StateModelDiagram";
import SystemContextDiagram from "./rdra20/systemcontext/SystemContextDiagram";
import UsageSceneDiagram from "./rdra20/usagescene/UsageSceneDiagram";
import BusinessFlowDiagram from "./rdra20/businessflow/BusinessFlowDiagram";
import UseCaseCompositeDiagram from "./rdra20/usecasecomposite/UseCaseCompositeDiagram";
import VariationAndConditionDiagram from "./variationandcondition/VariationAndConditionDiagram";
import RequestModelDiagram from "@/domain/diagram/rdra20/requrestmodel/RequestModelDiagram";
import Rdra20DiagramType from "@/domain/diagram/rdra20/Rdra20DiagramType";
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
