import Status from "@/domain/storage/Status";
import Products from "@/domain/product/Products";
import Product from "@/domain/product/Product";

export default class LocalStorage {
    public readonly updateAt: Date;
    public readonly status: Status;
    public readonly products: Products;

    constructor(updateAt: Date, status: Status, products: Products) {
        this.updateAt = updateAt;
        this.status = status;
        this.products = products;
    }

    public static prototypeOf(): LocalStorage {
        return new LocalStorage(
            new Date(),
            Status.prototypeOf(),
            Products.prototypeOf(),
        );
    }

    public renewTimeStamp(): LocalStorage {
        return new LocalStorage(
            new Date(),
            this.status,
            this.products
        );
    }

    public currentProduct(): Product | undefined {
        return this.products.of(this.status.currentProductId);
    }

    public isCurrentProduct(product: Product): boolean {
        return this.status.currentProductId === product.id;
    }

    public merge(product: Product): LocalStorage {
        const newProducts = this.products.merge(product);
        return this.with(newProducts);
    }

    public mergeByProductName(product: Product) {
        const newProducts = this.products.mergeByProductName(product);
        return this.with(newProducts);
    }

    public removeOf(product: Product): LocalStorage {
        const newProducts = this.products.removeOf(product);
        return this.with(newProducts);
    }

    public changeCurrent(product: Product): LocalStorage {
        return new LocalStorage(
            this.updateAt,
            new Status(product.id),
            this.products.merge(product),
        );
    }

    public with(mearged: Products): LocalStorage {
        return new LocalStorage(
            this.updateAt,
            this.status,
            mearged,
        );
    }

    public existsProductNameOf(name: string): boolean {
        return this.products
            .existsSameNameOf(name);
    }

    public isSelectedProduct() {
        const currentProductId = this.status.currentProductId;
        if (!currentProductId) return false;
        return this.products.list()
            .map(product => product.id)
            .includes(currentProductId);
    }
}