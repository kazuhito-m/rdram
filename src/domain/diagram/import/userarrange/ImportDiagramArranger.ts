import UserArrangeOfImportDiagram from "./UserArrangeOfImportDiagram";
import { BehaviorWhenNameConflict } from "./BehaviorWhenNameConflict";
import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";
import ImportDiagramCandidate from "@/domain/diagram/import/ImportDiagramCandidate";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";
import Product from "@/domain/product/Product";

/**
 * 名前が重複した場合「ユーザーの指定」を受けて、
 * インポートの中間状態(候補)をアレンジする責務を持つクラス。
 */
export default class ImportDiagramArranger {
    public arrangeOf(
        userArrange: UserArrangeOfImportDiagram,
        candidate: ImportDiagramCandidate,
        product: Product
    ): ImportDiagramCandidate | null {
        let diagram = candidate.diagram;
        let resources = new Resources(candidate.useResources);

        for (const colidedResourceName of userArrange.conflictResourceNames) {
            const targetResouce = resources.of(colidedResourceName.sourceId) as Resource;
            const sameResource = product.resources.getSameOf(targetResouce) as Resource;

            const behavior = colidedResourceName.behavior;
            if (behavior === BehaviorWhenNameConflict.既存) {
                resources = resources.remove(targetResouce);
                diagram = diagram.replaceOf(targetResouce, sameResource);
            }
            if (behavior === BehaviorWhenNameConflict.置換) {
                const replacedIdResource = targetResouce.renewId(sameResource.resourceId);
                resources = resources.mergeBySameOf(replacedIdResource);
                diagram = diagram.replaceOf(targetResouce, replacedIdResource);
            }
            if (behavior === BehaviorWhenNameConflict.別名) {
                const renamedResource = targetResouce
                    .withName(colidedResourceName.destinationName);
                resources = resources.mergeByIdOf(renamedResource);
            }
        }

        if (userArrange.isColidedDiagramName()) {
            const conflictDiagramName = userArrange.conflictDiagramName as ConflictNameBehavior;
            if (conflictDiagramName.behavior === BehaviorWhenNameConflict.既存) return null; // 入力からは入ってこない前提。「既存」というなら「Importしない」と同義。
            if (conflictDiagramName.behavior === BehaviorWhenNameConflict.別名)
                diagram = diagram.renameOf(conflictDiagramName.destinationName);
        }

        return new ImportDiagramCandidate(diagram, resources.map(r => r));
    }
}
