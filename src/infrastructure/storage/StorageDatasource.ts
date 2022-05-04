import Serializer from '@/domain/Serializer';
import Product from '@/domain/product/Product';
import Products from '@/domain/product/Products';
import LocalStorage from '@/domain/storage/LocalStorage';
import StorageRepository from '@/domain/storage/StorageRepository';

export default class StorageDatasource implements StorageRepository {
    private static readonly STRAGE_ID = 'rdram-storage';

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
        localStorage.removeItem(StorageDatasource.STRAGE_ID);
    }

    private defaultStructure(): LocalStorage {
        return LocalStorage.prototypeOf();
    }

    public getJsonText(): string | null {
        return localStorage.getItem(StorageDatasource.STRAGE_ID);
    }

    public get(): LocalStorage | null {
        const startTime = performance.now();

        const textData = this.getJsonText();
        if (!textData) return null;
        const storage = this.serializer.deserialize(textData) as LocalStorage;

        // console.log('get :    ' + textData);
        console.log(storage);
        const ms = performance.now() - startTime;
        console.log(`StorageDatasource.get(),      ${(new Blob([textData])).size} byte取得。${ms.toFixed(3)} ms`);
        // alert('get: ' + textData);
        return storage;
    }

    public getProductJsonTextOf(productId: string): string | null {
        const storage = this.get();
        const product = storage?.products.of(productId);
        if (!product) return null;
        return this.serializer.serialize(product);
    }

    public register(storage: LocalStorage): void {
        const startTime = performance.now();

        const target = storage.renewTimeStamp();
        const jsonText = this.serializer.serialize(target);
        localStorage.setItem(StorageDatasource.STRAGE_ID, jsonText);

        const ms = performance.now() - startTime;
        console.log('register: ' + jsonText)
        console.log(target);
        console.log(`StorageDatasource.register(), ${(new Blob([jsonText])).size} byte保存。${ms.toFixed(3)} ms`);
        // alert('reg: ' + jsonText);
    }

    public getCurrentProduct(): Product | undefined {
        const storage = this.get();
        if (!storage) return undefined;
        return storage.currentProduct();
    }

    public registerCurrentProduct(product: Product): void {
        const storage = this.get();
        if (!storage) return;

        const renewProduct: Product = product.renewTimeStamp();
        let changed = storage.changeCurrent(renewProduct);
        const mearged: Products = storage.products.merge(renewProduct);
        changed = changed.with(mearged);
        this.register(changed);
    }

    public clear() {
        localStorage.removeItem(StorageDatasource.STRAGE_ID);
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

    public createLocalStorageByJsonOf(jsonText: string): LocalStorage | null {
        return this.serializer
            .deserialize(jsonText) as LocalStorage;
    }
}