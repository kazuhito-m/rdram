import LocalStrage from "@/domain/strage/LocalStrage";
import Product from "@/domain/product/Product";

export default class Repository {
    private static readonly STRAGE_ID = 'rdram-strage';

    public isInitialized(): boolean {
        // this.clear();
        const data = this.get();
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

    public get(): LocalStrage | null {
        const startTime = performance.now();

        const textData = localStorage.getItem(Repository.STRAGE_ID);
        if (!textData) return null;
        const strage = JSON.parse(textData);

        // console.log(textData);
        const ms = performance.now() - startTime;
        console.log(`repository.get(),      ${(new Blob([textData])).size} byte取得。${ms.toFixed(3)} ms`);
        return strage;
    }

    public register(strage: LocalStrage): void {
        const startTime = performance.now();

        const jsonText = JSON.stringify(strage);
        localStorage.setItem(Repository.STRAGE_ID, jsonText);

        const ms = performance.now() - startTime;
        console.log(`repository.register(), ${(new Blob([jsonText])).size} byte保存。${ms.toFixed(3)} ms`);
        // console.log('register: ' + jsonText)
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