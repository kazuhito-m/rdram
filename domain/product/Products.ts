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

    public add(product: Product): Products {
        const newValues = Array.from(this.values);
        newValues.push(product);
        return new Products(newValues);
    }

    public meage(product: Product): Products {
        const newValues = Array.from(this.values);
        for (let i = 0; i < newValues.length; i++) {
            const p = newValues[i];
            if (p.id !== product.id) continue;
            newValues[i] = product;
            break;
        }
        if (this.values.length === newValues.length) newValues.push(product);
        return new Products(newValues);
    }

    public forEach(func: (product: Product) => void) {
        this.values.forEach(func);
    }
}