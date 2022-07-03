import GenericConnectPortsEvents from "@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents";
import Product from "@/domain/product/Product";
import Relation from "@/domain/relation/Relation";

export default class StateModelConnectPortsEvents extends GenericConnectPortsEvents {
    public prototype(): StateModelConnectPortsEvents {
        return new StateModelConnectPortsEvents();
    }

    /**
     * 「状態モデル図」は「関連線の方向が在る」ので、判定を上書き。
     */
    protected customizeRelation(original: Relation, product: Product): Relation {
        if (!product.isFlowRelation(original)) return original;
        return original.changeTipAllow(true);
    }
}