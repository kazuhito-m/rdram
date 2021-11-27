import LocalStrage from "@/domain/strage/LocalStrage";
import Product from "@/domain/product/Product";

export default interface StrageRepository {
    isInitialized(): boolean;
    initialize(): void;
    destroy(): void;
    getJsonText(): string | null;
    get(): LocalStrage | null;
    getProductJsonTextOf(productId: string): string | null;
    register(strage: LocalStrage): void;
    getCurrentProduct(): Product | null;
    registerCurrentProduct(product: Product): void;
    clear(): void;
    generateResourceId(): number;
}