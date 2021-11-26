import UserSettings from '@/domain//setting/UserSettings';
import Resources from '@/domain/resource/Resources';
import ProductIdentifier from '@/domain/product/ProductIdentifier';
import Diagrams from '@/domain/diagram/Diagrams';
import Diagram from '@/domain/diagram/Diagram';
import Resource from '@/domain/resource/Resource';
import ResourceType from '../resource/ResourceType';
import ResourceFactory from '../resource/ResourceFactory';
import DiagramType from '../diagram/DiagramType';
import StartOrEndPoint from '../resource/StartOrEndPoint';
import Relation from '../relation/Relation';
import Relations from '../relation/Relations';

export default class Product {
    constructor(
        private readonly updateAt: Date,
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

        const relations = new Relations(diagram.relations); // TODO Diagram側にこれをつけたい。
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

    public replaceOf(newDiagram: Diagram): Product {
        return this.with(this.diagrams.meage(newDiagram));
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

    public with(newDiagrams: Diagrams) {
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
        return this.with(addedDiagrams);
    }

    public lastCreatdResource(): Resource {
        return this.resources.last();
    }

    public isFlowRelation(relation: Relation): boolean {
        const relationPlus = this.resources.relationWithResourcesOf(relation);
        if (!relationPlus) return false;
        return relationPlus.isFlowRelation();
    }
}