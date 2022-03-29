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
}