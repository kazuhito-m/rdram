import UserArrangeOfImportDiagramSetting from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagramSetting";
import NameOfColided from "@/domain/diagram/import/userarrange/NameOfColided";
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

    public analyzeColideNameOf(product: Product): UserArrangeOfImportDiagramSetting {
        const diagram = this.diagram;

        const existsDiagram = product.diagrams
            .existsSameOf(diagram);
        const colidedName = existsDiagram
            ? NameOfColided.prototypeDiagramOf(diagram)
            : null;

        const allResources = product.resources;
        const sameResources = this.useResources
            .filter(r => allResources.existsSameOf(r))
            .map(r => NameOfColided.prototypeResourceOf(r));

        return new UserArrangeOfImportDiagramSetting(diagram.name, colidedName, sameResources);
    }
}