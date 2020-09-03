import UserSettings from '@/domain//setting/UserSettings';
import Resources from '@/domain/resource/Resources';
import ProductIdentifier from '@/domain/product/ProductIdentifier';
import Diagrams from '@/domain/diagram/Diagrams';
import Diagram from '@/domain/diagram/Diagram';
import Resource from '@/domain/resource/Resource';
import ResourceType from '../resource/ResourceType';
import ResourceFactory from '../resource/ResourceFactory';
import DiagramType from '../diagram/DiagramType';
import DiagramFactory from '../diagram/DiagramFactory';

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

    public static prototypeOf(newName: string) {
        const product = new Product(
            new Date(),
            ProductIdentifier.ganerate().toString(),
            newName,
            UserSettings.create(),
            Diagrams.empty(),
            Resources.empty(),
            1
        );

        // 特殊処理。唯一の『システム」をここで作ってしまう。
        const modified = product.createAndAddResource(newName, ResourceType.システム);
        return modified;
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

    public createAndAddResource(name: string, resourceType: ResourceType): Product {
        const factory = new ResourceFactory();
        const newResouceId = this.resourceIdSequence;
        const updated = this.moveNextResourceIdSequence();
        const resource = factory.create(name, resourceType, newResouceId);
        const addedResources = updated.resources.add(resource);
        return updated.withResources(addedResources);
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
}