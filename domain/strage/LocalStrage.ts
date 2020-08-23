import Status from "@/domain/strage/Status";
import Products from "@/domain/product/Products";
import Product from "@/domain/product/Product";

export default class LocalStrage {
    private readonly updateAt: Date;
    public readonly status: Status;
    public readonly products: Products;

    constructor(updateAt: Date, status: Status, products: Products) {
        this.updateAt = updateAt;
        this.status = status;
        this.products = products;
    }

    public static prototypeOf(): LocalStrage {
        return new LocalStrage(
            new Date(),
            Status.prototypeOf(),
            Products.prototypeOf(),
        );
    }

    public renewTimeStamp(): LocalStrage {
        return new LocalStrage(
            new Date(),
            this.status,
            this.products
        );
    }

    public currentProduct(): Product | null {
        return this.products.of(this.status.currentProductId);
    }

    public isCurrentProduct(product: Product): boolean {
        return this.status.currentProductId === product.id;
    }

    public add(product: Product): LocalStrage {
        return new LocalStrage(
            this.updateAt,
            this.status,
            this.products.add(product),
        );
    }

    public changeCurrent(product: Product): LocalStrage {
        return new LocalStrage(
            this.updateAt,
            new Status(product.id),
            this.products.add(product),
        );
    }

    public with(mearged: Products): LocalStrage {
        return new LocalStrage(
            this.updateAt,
            this.status,
            mearged,
        );
    }
}