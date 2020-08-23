import Product from "./Product";

export default class Products {
    private readonly values: Product[];

    constructor(values: Product[]) {
        this.values = values;
    }

    public static prototypeOf(): Products {
        return new Products([]);
    }

    public existsSomeName(name: string): boolean {
        return this.values
            .some(product => product.name === name);
    }

    public of(productId: string): Product | null {
        const found = this.values.find(product => product.id === productId);
        return found ? found : null;
    }

    public merge(product: Product): Products {
        const newValues = Array.from(this.values);
        const index = newValues.findIndex(p => p.id === product.id);
        if (index > 0) {
            newValues[index] = product;
        } else {
            newValues.push(product);
        }
        return new Products(newValues);
    }

    public forEach(func: (product: Product) => void) {
        this.values.forEach(func);
    }

    public list(): Product[] {
        const result = Array.from(this.values);
        return result;
    }
}