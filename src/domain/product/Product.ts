import UserSettings from '@/domain//setting/UserSettings';
import Resources from '@/domain/resource/Resources';
import ProductIdentifier from '@/domain/product/ProductIdentifier';
import Diagrams from '@/domain/diagram/Diagrams';
import Diagram from '@/domain/diagram/Diagram';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import ResourceFactory from '@/domain/resource/ResourceFactory';
import DiagramType from '@/domain/diagram/DiagramType';
import StartOrEndPoint from '@/domain/resource/StartOrEndPoint';
import Relation from '@/domain/relation/Relation';

export default class Product {
    constructor(
        public readonly updateAt: Date,
        public readonly id: string,
        public readonly name: string,
        public readonly userSettings: UserSettings,
        public readonly diagrams: Diagrams,
        public readonly resources: Resources,
        public readonly resourceIdSequence: number,
    ) { }

    public relationable(relation: Relation, diagramId: number): string {
        const diagram = this.diagrams.of(diagramId);
        if (!diagram) return "指定されたダイアグラムがありません。";

        const relationPlus = this.resources.relationWithResourcesOf(relation);
        if (!relationPlus) return "対応するリソースがありません。";

        const relations = diagram.allRelations(); // TODO Diagram側にこれをつけたい。
        if (relations.exists(relation)) return "すでに関連が存在します。";

        if (relationPlus.fromType.equals(ResourceType.始点終点)) {
            const startPoint = relationPlus.fromResource as StartOrEndPoint;
            if (startPoint.startPoint) {
                if (relations.existsFromResource(startPoint)) {
                    return "始点からは一つの関連しか引けません。"
                }
            }
        }

        if (relationPlus.existsType(ResourceType.始点終点)) {
            if (!relationPlus.existsType(ResourceType.アクティビティ)
                && !relationPlus.existsType(ResourceType.状態)
                && !relationPlus.existsType(ResourceType.状態グループ)) {
                return "そのアイコン種類の間に関連は引けません。"
            }
        }

        if (relationPlus.betweenBothFromTo(ResourceType.アクティビティ)) {
            if (relations.existsBothReversivle(relation)) return "すでに関連が存在します。";
            return "";
        }

        if (relationPlus.existsType(ResourceType.状態) || relationPlus.existsType(ResourceType.状態グループ)) {
            if (!relationPlus.existsType(ResourceType.ユースケース)
                && !relationPlus.existsType(ResourceType.始点終点)) {
                return "そのアイコン種類の間に関連は引けません。";
            }
            return "";
        }

        if (relations.existsOrReversivle(relation)) return "すでに関連が存在します。";

        return "";
    }

    public meageDiagramByIdOf(newDiagram: Diagram): Product {
        const newDiagrams = this.diagrams.mergeByIdOf(newDiagram);
        return this.withDiagrams(newDiagrams);
    }

    public meageResourceOf(newResource: Resource): Product {
        const newResources = this.resources.mergeByIdOf(newResource);
        return this.withResources(newResources);
    }

    public removeOf(resource: Resource): Product {
        return new Product(
            this.updateAt,
            this.id,
            this.name,
            this.userSettings,
            this.diagrams.removeResouceOf(resource),
            this.resources.remove(resource),
            this.resourceIdSequence,
        );
    }

    public withDiagrams(newDiagrams: Diagrams) {
        return new Product(
            this.updateAt,
            this.id,
            this.name,
            this.userSettings,
            newDiagrams,
            this.resources,
            this.resourceIdSequence,
        );
    }

    public withResources(newResources: Resources) {
        return new Product(
            this.updateAt,
            this.id,
            this.name,
            this.userSettings,
            this.diagrams,
            newResources,
            this.resourceIdSequence,
        );
    }

    public renewTimeStamp(): Product {
        return new Product(
            new Date(),
            this.id,
            this.name,
            this.userSettings,
            this.diagrams,
            this.resources,
            this.resourceIdSequence,
        );
    }

    public moveNextResourceIdSequence(): Product {
        return new Product(
            this.updateAt,
            this.id,
            this.name,
            this.userSettings,
            this.diagrams,
            this.resources,
            this.resourceIdSequence + 1,
        );
    }

    public replaceId(newProductId: string): Product {
        return new Product(
            this.updateAt,
            newProductId,
            this.name,
            this.userSettings,
            this.diagrams,
            this.resources,
            this.resourceIdSequence,
        );
    }

    public renewId(): Product {
        const newId = ProductIdentifier.ganerate().toString();
        return this.replaceId(newId);
    }

    public renameOf(newName: string): Product {
        return new Product(
            new Date(),
            this.id,
            newName,
            this.userSettings,
            this.diagrams,
            this.resources,
            this.resourceIdSequence,
        );
    }

    public mergeDiagramWhenSameOf(diagram: Diagram): Product {
        const diagrams = this.diagrams.mergeWhenSameOf(diagram);
        return this.withDiagrams(diagrams);
    }

    public createAndAddResource(): Product {
        const factory = new ResourceFactory();
        const addedResources = this.resources
            .add(factory.create(this.name, ResourceType.システム, 1, this.resources))
            .add(new StartOrEndPoint(2, "始点", "", true))
            .add(new StartOrEndPoint(3, "終点", "", false));
        return this.withResources(addedResources);
    }

    public createAndAddDiagram(name: string, diagramType: DiagramType): Product {
        const diagrams = this.diagrams;
        const diagram = diagrams.createNewDiagram(name, diagramType, this.resources);
        const addedDiagrams = diagrams.add(diagram);
        return this.withDiagrams(addedDiagrams);
    }

    public lastCreatdResource(): Resource {
        return this.resources.last();
    }

    public isFlowRelation(relation: Relation): boolean {
        const relationPlus = this.resources.relationWithResourcesOf(relation);
        if (!relationPlus) return false;
        return relationPlus.isFlowRelation();
    }

    // get or filter methods

    public useResourcesOf(diagram: Diagram): Resources {
        const useRecourceIds = diagram.placements
            .map(placement => placement.resourceId);
        return this.resources.findOf(useRecourceIds);
    }

    // factory methods

    public static prototypeOf(newName: string): Product {
        // 特殊処理。プロダクトに最初からあるリソースは、ここで作る。
        const factory = new ResourceFactory();
        const resources: Resource[] = [
            factory.create(newName, ResourceType.システム, 1, Resources.empty()),
            new StartOrEndPoint(2, "始点", "", false, true),
            new StartOrEndPoint(3, "終点", "", false, false),
        ]

        return new Product(
            new Date(),
            ProductIdentifier.ganerate().toString(),
            newName,
            UserSettings.create(),
            Diagrams.empty(),
            new Resources(resources),
            4
        );
    }
}