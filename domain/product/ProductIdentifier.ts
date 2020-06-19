import Product from "./Product";

export default class ProductIdentifier {
    constructor(private readonly value: string) { }

    public static ganerate(): ProductIdentifier {
        const uuid = ProductIdentifier.generateUuid();
        return new ProductIdentifier(uuid);
    }

    private static generateUuid(): string {
        // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js  
        // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";  
        let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
        for (let i = 0, len = chars.length; i < len; i++) {
            switch (chars[i]) {
                case "x":
                    chars[i] = Math.floor(Math.random() * 16).toString(16);
                    break;
                case "y":
                    chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                    break;
            }
        }
        return chars.join("");
    }

    public toString(): string {
        return this.value;
    }

    public prototypeProductOf(newName: string): Product {
        return {
            id: ProductIdentifier.ganerate().toString(),
            name: newName,
            diagrams: []
        };
    }
}