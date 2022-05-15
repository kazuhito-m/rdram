import Resource from "@/domain/resource/Resource";
import Diagram from "@/domain/diagram/Diagram";
import Product from "@/domain/product/Product";

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