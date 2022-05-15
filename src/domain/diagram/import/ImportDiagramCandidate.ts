import UserArrangeOfImportDiagram from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";
import ConflictNameBehavior from "~/domain/diagram/import/conflictname/ConflictNameBehavior";
import Resource from "@/domain/resource/Resource";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";
import { BehaviorWhenNameConflict } from "~/domain/diagram/import/userarrange/BehaviorWhenNameConflict";

export default class ImportDiagramCandidate {
    constructor(
        public readonly diagram: Diagram,
        public readonly useResources: Resource[]
    ) { }

    /**
     * 一度「自身のシステムに無いResourceId群」にするため、すべてのResorceIdを正負反転する。
     */
    public replaceUniqueResourceIds(): ImportDiagramCandidate {
        const diagram = this.diagram;
        const placements = diagram.placements
            .map(p => p.withResourceIdOf(-p.resourceId));
        const relations = diagram.allRelations()
            .map(r => r.withFrom(-r.fromResourceId).withTo(-r.toResourceId));
        const newDiaglam = diagram
            .replacePlacement(placements)
            .replaceRelations(relations);
        const newResources = this.useResources
            .map(r => r.renewId(-r.resourceId))
        return new ImportDiagramCandidate(newDiaglam, newResources);
    }

    public analyzeColideNameOf(product: Product): UserArrangeOfImportDiagram {
        const diagram = this.diagram;

        const existsDiagram = product.diagrams
            .existsSameOf(diagram);
        const colidedName = existsDiagram
            ? ConflictNameBehavior.prototypeDiagramOf(diagram)
            : null;

        const allResources = product.resources;
        const sameResources = this.useResources
            .filter(r => allResources.existsSameOf(r))
            .map(r => ConflictNameBehavior.prototypeResourceOf(r));

        return new UserArrangeOfImportDiagram(diagram.name, colidedName, sameResources);
    }

    public arrangeOf(
        userArrange: UserArrangeOfImportDiagram,
        product: Product
    ): ImportDiagramCandidate | null {
        let modifiedDiagram = this.diagram;
        let modifiedResources = this.useResources;

        for (const colidedResourceName of userArrange.resourceNamesOfColided) {
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
            const colidedDiagramName = userArrange.diagramNamesOfColided as ConflictNameBehavior;
            if (colidedDiagramName.behavior === BehaviorWhenNameConflict.既存) return null; // 入力からは入ってこない前提。「既存」というなら「Importしない」と同義。
            if (colidedDiagramName.behavior === BehaviorWhenNameConflict.別名) {
                modifiedDiagram = modifiedDiagram
                    .renameOf(colidedDiagramName.destinationName);
            }
        }

        return new ImportDiagramCandidate(modifiedDiagram, modifiedResources);
    }

    public mergeOf(product: Product): Product {
        let modifiedProduct = product;
        let fixedDiagram = this.diagram;
        // TODO めちゃくちゃ煩雑なので「Resoucesへマージする」ロジックは整理する。

        const fixedResources = this.useResources
            .map(r => {
                if (r.resourceId > 0) return r;
                const reIdResource = r.renewId(modifiedProduct.resourceIdSequence);
                modifiedProduct = modifiedProduct.moveNextResourceIdSequence();

                fixedDiagram = fixedDiagram.replaceOf(r, reIdResource);

                return reIdResource;
            })
            .reduce(
                (resources, resouce) => resources.mergeByIdOf(resouce),
                modifiedProduct.resources
            );

        return modifiedProduct
            .withResources(fixedResources)
            .mergeDiagramWhenSameOf(fixedDiagram);
    }
}