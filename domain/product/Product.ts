import UserSettings from '@/domain//setting/UserSettings';
import Resources from '@/domain/resource/Resources';
import ProductIdentifier from './ProductIdentifier';
import { Type } from 'class-transformer';
import Diagrams from '../diagram/Diagrams';

export default class Product {
    private readonly updateAt: Date;
    public readonly id: string;
    public readonly name: string;
    @Type(() => UserSettings)
    private readonly userSettings: UserSettings;
    @Type(() => Diagrams)
    public readonly diagrams: Diagrams;
    @Type(() => Resources)
    public readonly resources: Resources;
    public readonly resourceIdSequence: number;

    constructor(
        updateAt: Date,
        id: string,
        name: string,
        userSettings: UserSettings,
        diagrams: Diagrams,
        resouces: Resources,
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
            Diagrams.empty(),
            Resources.empty(),
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