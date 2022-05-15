import UserArrangeOfImportDiagram from "./UserArrangeOfImportDiagram";
import { BehaviorWhenNameConflict } from "./BehaviorWhenNameConflict";
import Product from "@/domain/product/Product";
import ImportDiagramCandidate from "@/domain/diagram/import/ImportDiagramCandidate";
import Resource from "@/domain/resource/Resource";
import ConflictNameBehavior from "@/domain/diagram/import/conflictname/ConflictNameBehavior";

export default class ImportDiagramArranger {
    public arrangeOf(
        userArrange: UserArrangeOfImportDiagram,
        candidate: ImportDiagramCandidate,
        product: Product
    ): ImportDiagramCandidate | null {
        let modifiedDiagram = candidate.diagram;
        let modifiedResources = candidate.useResources;

        for (const colidedResourceName of userArrange.conflictResourceNames) {
            const targetResouce = modifiedResources
                .find(r => r.resourceId === colidedResourceName.sourceId) as Resource;
            const sameResource = product.resources.getSameOf(targetResouce) as Resource;

            const behavior = colidedResourceName.behavior;
            if (behavior === BehaviorWhenNameConflict.既存) {
                modifiedDiagram = modifiedDiagram.replaceOf(targetResouce, sameResource);
                modifiedResources = modifiedResources
                    .filter(r => r.resourceId !== targetResouce.resourceId);
            }
            if (behavior === BehaviorWhenNameConflict.置換) {
                const replacedIdResource = targetResouce.renewId(sameResource.resourceId);
                modifiedResources = modifiedResources
                    .filter(r => r.resourceId !== targetResouce.resourceId);
                modifiedResources.push(replacedIdResource);
                modifiedDiagram = modifiedDiagram
                    .replaceOf(targetResouce, replacedIdResource);
            }
            if (behavior === BehaviorWhenNameConflict.別名) {
                const renamedResource = targetResouce
                    .withName(colidedResourceName.destinationName);
                modifiedResources = modifiedResources
                    .filter(r => r.resourceId !== targetResouce.resourceId);
                modifiedResources.push(renamedResource);
            }
        }

        if (userArrange.isColidedDiagramName()) {
            const colidedDiagramName = userArrange.conflictDiagramName as ConflictNameBehavior;
            if (colidedDiagramName.behavior === BehaviorWhenNameConflict.既存) return null; // 入力からは入ってこない前提。「既存」というなら「Importしない」と同義。
            if (colidedDiagramName.behavior === BehaviorWhenNameConflict.別名) {
                modifiedDiagram = modifiedDiagram
                    .renameOf(colidedDiagramName.destinationName);
            }
        }

        return new ImportDiagramCandidate(modifiedDiagram, modifiedResources);
    }
}
