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
            .map(product => product.name)
            .includes(name);
    }

    public of(productId: string): Product | undefined {
        return this.values
            .find(product => product.id === productId);
    }

    public merge(product: Product): Products {
        const newValues = Array.from(this.values);
        const index = newValues
            .findIndex(p => p.id === product.id);
        if (index < 0)
            newValues.push(product);
        else
            newValues[index] = product;

        return new Products(newValues);
    }

    public mergeByProductName(product: Product): Products {
        const sameNameProduct = this.values
            .find(p => p.name === product.name);

        let mergeProduct = product;
        if (sameNameProduct)
            mergeProduct = product.replaceId(sameNameProduct.id);
        else if (this.of(product.id))
            mergeProduct = product.renewId();

        return this.merge(mergeProduct);
    }

    public removeOf(product: Product): Products {
        const newValues = this.values
            .filter(p => p.id !== product.id);
        return new Products(newValues);
    }

    public forEach(func: (product: Product) => void) {
        this.values.forEach(func);
    }

    public list(): Product[] {
        const result = Array.from(this.values);
        return result;
    }

    public isEmpty(): boolean {
        return this.values.length <= 0;
    }
}