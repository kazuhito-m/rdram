import Diagram from '@/domain/diagram/Diagram';
import UserSettings from '@/domain//setting/UserSettings';
import Resource from '@/domain/resource/Resource';
import ProductIdentifier from './ProductIdentifier';
import { Type } from 'class-transformer';

export default class Product {
    private readonly updateAt: Date;
    public readonly id: string;
    public readonly name: string;
    @Type(() => UserSettings)
    private readonly userSettings: UserSettings;
    @Type(() => Diagram)
    private readonly diagrams: Diagram[];
    @Type(() => Resource)
    private readonly resources: Resource[];
    public readonly resourceIdSequence: number;

    constructor(
        updateAt: Date,
        id: string,
        name: string,
        userSettings: UserSettings,
        diagrams: Diagram[],
        resouces: Resource[],
        resourceIdSequence: number,
    ) {
        this.updateAt = updateAt;
        this.id = id;
        this.name = name;
        this.userSettings = userSettings;
        this.diagrams = diagrams;
        this.resources = resouces;
        this.resourceIdSequence = resourceIdSequence;
    }

    public static prototypeOf(newName: string) {
        return new Product(
            new Date(),
            ProductIdentifier.ganerate().toString(),
            newName,
            UserSettings.create(),
            [],
            [],
            0
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
}