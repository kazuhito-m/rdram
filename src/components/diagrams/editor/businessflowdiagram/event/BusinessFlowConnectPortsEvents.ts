import GenericConnectPortsEvents from "@/components/diagrams/editor/template/event/events/GenericConnectPortsEvents";
import Product from "@/domain/product/Product";
import Relation from "@/domain/relation/Relation";
import RouterType from "@/domain/relation/RouterType";

export default class BusinessFlowConnectPortsEvents extends GenericConnectPortsEvents {
    /**
     * 「業務フロー図」だけは「フローとして関連線の方向が在る」ので、判定を上書き。
     */
    protected customizeRelation(original: Relation, product: Product): Relation {
        if (!product.isFlowRelation(original)) return original;

        return original
            .changeRouter(RouterType.MANHATTAN)
            .changeTipAllow(true);
    }
}