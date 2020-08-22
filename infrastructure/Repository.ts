import "reflect-metadata";
import { plainToClass, classToPlain } from "class-transformer";
import LocalStrage from "@/domain/strage/LocalStrage";
import Product from "@/domain/product/Product";
import Products from "@/domain/product/Products";

export default class Repository {
    private static readonly STRAGE_ID = 'rdram-strage';

    public isInitialized(): boolean {
        const data = this.get();
        if (data) return true;
        return false;
    }

    public initialize(): void {
        const initialData = this.defaultStructure();
        this.register(initialData);
    }

    public destroy(): void {
        localStorage.removeItem(Repository.STRAGE_ID);
    }

    private defaultStructure(): LocalStrage {
        return LocalStrage.prototypeOf();
    }

    public getJsonText(): string | null {
        return localStorage.getItem(Repository.STRAGE_ID);
    }

    public get(): LocalStrage | null {
        const startTime = performance.now();

        const textData = this.getJsonText();
        if (!textData) return null;
        const strage = plainToClass(LocalStrage, textData);

        // console.log(textData);
        const ms = performance.now() - startTime;
        console.log(`repository.get(),      ${(new Blob([textData])).size} byte取得。${ms.toFixed(3)} ms`);
        return strage;
    }

    public register(strage: LocalStrage): void {
        const target = strage.renewTimeStamp();

        const startTime = performance.now();

        const jsonText = classToPlain(strage) as unknown as string;
        alert(jsonText);
        localStorage.setItem(Repository.STRAGE_ID, jsonText);

        const ms = performance.now() - startTime;
        console.log(`repository.register(), ${(new Blob([jsonText])).size} byte保存。${ms.toFixed(3)} ms`);
        // console.log('register: ' + jsonText)
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
        const mearged: Products = strage.products.meage(renewProduct);
        changed = changed.with(mearged);
        this.register(changed);
    }

    public clear() {
        localStorage.removeItem(Repository.STRAGE_ID);
    }

    public generateResourceId(): number {
        const product = this.getCurrentProduct();
        if (!product) return 1;
        const updated = product.moveNextResourceIdSequence();
        this.registerCurrentProduct(updated);
        return updated.resourceIdSequence;
    }
}