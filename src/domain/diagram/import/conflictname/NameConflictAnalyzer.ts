import ConflictNameBehavior from "./ConflictNameBehavior";
import Product from "@/domain/product/Product";
import ImportDiagramCandidate from "@/domain/diagram/import/ImportDiagramCandidate";
import UserArrangeOfImportDiagram from "@/domain/diagram/import/userarrange/UserArrangeOfImportDiagram";

/**
 * 既存のプロダクトとインポートしようとしている図・リソースで
 * 「名前の衝突」の解析責務を持つクラス。
 */
export default class NameConflictAnalyzer {
    public analyzeOf(candidate: ImportDiagramCandidate, product: Product): UserArrangeOfImportDiagram {
        const diagram = candidate.diagram;

        const existsDiagram = product.diagrams
            .existsSameOf(diagram);
        const colidedName = existsDiagram
            ? ConflictNameBehavior.prototypeDiagramOf(diagram)
            : ConflictNameBehavior.empty();

        const allResources = product.resources;
        const sameResources = candidate.useResources
            .filter(r => allResources.existsSameOf(r))
            .map(r => ConflictNameBehavior.prototypeResourceOf(r));

        return new UserArrangeOfImportDiagram(diagram.name, colidedName, sameResources);
    }
}
