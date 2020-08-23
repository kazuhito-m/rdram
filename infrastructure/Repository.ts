import Serializer from '@/infrastructure/Serializer';
import LocalStrage from "@/domain/strage/LocalStrage";
import UserSettings from '@/domain//setting/UserSettings';
import Product from "@/domain/product/Product";
import Products from "@/domain/product/Products";
import Status from '@/domain/strage/Status';
import Resources from '@/domain/resource/Resources';
import Diagrams from '@/domain/diagram/Diagrams';
import Diagram from '@/domain/diagram/Diagram';
import Resource from '~/domain/resource/Resource';
import Placement from '~/domain/diagram/placement/Placement';
import Midpoint from '~/domain/diagram/relation/Midpoint';
import Relation from '~/domain/diagram/relation/Relation';
import BusinessContextDiagram from '@/domain/diagram/businesscontext/BusinessContextDiagram'

export default class Repository {
    private static readonly STRAGE_ID = 'rdram-strage';

    private readonly serializer = new Serializer(
        LocalStrage,
        UserSettings,
        Products,
        Product,
        Date,
        Status,
        Resources,
        Resource,
        Diagrams,
        Diagram,
        Placement,
        Midpoint,
        Relation,
        BusinessContextDiagram,
    );

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
        const strage = this.serializer.deserialize(textData) as LocalStrage;

        console.log('get :    ' + textData);
        console.log(strage);
        const ms = performance.now() - startTime;
        console.log(`repository.get(),      ${(new Blob([textData])).size} byte取得。${ms.toFixed(3)} ms`);
        // alert('get: ' + textData);
        return strage;
    }

    public register(strage: LocalStrage): void {
        const target = strage.renewTimeStamp();

        const startTime = performance.now();

        const jsonText = this.serializer.serialize(strage);
        localStorage.setItem(Repository.STRAGE_ID, jsonText);

        const ms = performance.now() - startTime;
        // console.log('register: ' + jsonText)
        console.log(strage);
        console.log(`repository.register(), ${(new Blob([jsonText])).size} byte保存。${ms.toFixed(3)} ms`);
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