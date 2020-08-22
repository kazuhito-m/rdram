import Product from "./Product";
import Uuid from "@/domain/world/Uuid"

export default class ProductIdentifier {
    constructor(private readonly value: string) { }

    public static ganerate(): ProductIdentifier {
        const uuid = Uuid.generate();
        return new ProductIdentifier(uuid);
    }

    public toString(): string {
        return this.value;
    }

    public static prototypeProductOf(newName: string): Product {
        return {
            id: ProductIdentifier.ganerate().toString(),
            name: newName,
            userSettings: { autoSave: true, darkMode: true},
            diagrams: [],
            resources: [],
            resourceIdSequence: 0
        };
    }
}