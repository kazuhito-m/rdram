import Serializer from '@/domain/Serializer';
import Product from '@/domain/product/Product';
import Products from '@/domain/product/Products';
import LocalStrage from '@/domain/strage/LocalStrage';
import StrageRepository from '@/domain/strage/StrageRepository';

export default class StrageDatasource implements StrageRepository {
    private static readonly STRAGE_ID = 'rdram-strage';

    private readonly serializer = new Serializer();

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

    public destroy(): void {
        localStorage.removeItem(StrageDatasource.STRAGE_ID);
    }

    private defaultStructure(): LocalStrage {
        return LocalStrage.prototypeOf();
    }

    public getJsonText(): string | null {
        return localStorage.getItem(StrageDatasource.STRAGE_ID);
    }

    public get(): LocalStrage | null {
        const startTime = performance.now();

        const textData = this.getJsonText();
        if (!textData) return null;
        const strage = this.serializer.deserialize(textData) as LocalStrage;

        // console.log('get :    ' + textData);
        console.log(strage);
        const ms = performance.now() - startTime;
        console.log(`StrageDatasource.get(),      ${(new Blob([textData])).size} byte取得。${ms.toFixed(3)} ms`);
        // alert('get: ' + textData);
        return strage;
    }

    public getProductJsonTextOf(productId: string): string | null {
        const strage = this.get();
        const product = strage?.products.of(productId);
        if (!product) return null;
        return this.serializer.serialize(product);
    }

    public register(strage: LocalStrage): void {
        const startTime = performance.now();

        const target = strage.renewTimeStamp();
        const jsonText = this.serializer.serialize(target);
        localStorage.setItem(StrageDatasource.STRAGE_ID, jsonText);

        const ms = performance.now() - startTime;
        console.log('register: ' + jsonText)
        console.log(target);
        console.log(`StrageDatasource.register(), ${(new Blob([jsonText])).size} byte保存。${ms.toFixed(3)} ms`);
        // alert('reg: ' + jsonText);
    }

    public getCurrentProduct(): Product | null {
        const strage = this.get();
        if (!strage) return null;
        return strage.currentProduct();
    }

    public registerCurrentProduct(product: Product): void {
        const strage = this.get();
        if (!strage) return;

        const renewProduct: Product = product.renewTimeStamp();
        let changed = strage.changeCurrent(renewProduct);
        const mearged: Products = strage.products.merge(renewProduct);
        changed = changed.with(mearged);
        this.register(changed);
    }

    public clear() {
        localStorage.removeItem(StrageDatasource.STRAGE_ID);
    }

    public generateResourceId(): number {
        const product = this.getCurrentProduct();
        if (!product) return 1;
        const updated = product.moveNextResourceIdSequence();
        this.registerCurrentProduct(updated);
        return updated.resourceIdSequence;
    }

    public createProductByJsonOf(jsonText: string): Product {
        return this.serializer
            .deserialize(jsonText) as Product;
    }
}