import LocalStrage from "@/domain/strage/LocalStrage";
import Product from "@/domain/product/Product";
import ProductIdentifier from "@/domain/product/ProductIdentifier";
import DiagramType from "@/domain/diagram/DiagramType";
import Diagram from "@/domain/diagram/Diagram";

export default class Repository {
    private static readonly STRAGE_ID = 'rdram-strage';

    public isInitialized(): boolean {
        // this.clear();
        const data = this.get();
        console.log(data);
        if (data) return true;
        return false;
    }

    public initialize(): void {
        const initialData = this.defaultStructure();
        this.register(initialData);
    }

    private defaultStructure(): LocalStrage {
        return {
            status: {
                currentProductId: ''
            },
            products: []
        };
    }

    public get(): LocalStrage | undefined {
        const textData = localStorage.getItem(Repository.STRAGE_ID);
        if (!textData) return undefined;
        console.log(textData);
        return JSON.parse(textData);
    }

    public register(strage: LocalStrage): void {
        const jsonText = JSON.stringify(strage);
        console.log('register: ' + jsonText)
        localStorage.setItem(Repository.STRAGE_ID, jsonText);
    }

    public getCurrentProduct(): Product | null {
        const strage = this.get();
        const currentProductId = strage?.status.currentProductId;
        const currentProduct = strage?.products
            .find(product => product.id === currentProductId);
        if (currentProduct) return currentProduct;
        return null;
    }

    public registerCurrentProduct(product: Product): void {
        const strage = this.get();
        if (!strage) return;

        strage.status.currentProductId = product.id;

        const products = strage.products;
        for (let i = 0; i < products.length; i++) {
            const p = products[i];
            if (p.id === strage.status.currentProductId) {
                products.splice(i, 1);
                break;
            }
        }
        products.push(product);

        this.register(strage);
    }

    public clear() {
        localStorage.removeItem(Repository.STRAGE_ID);
    }
}