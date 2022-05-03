import LocalStorage from "@/domain/storage/LocalStorage";
import Product from "@/domain/product/Product";

export default interface StorageRepository {
    isInitialized(): boolean;
    initialize(): void;
    destroy(): void;
    getJsonText(): string | null;
    get(): LocalStorage | null;
    getProductJsonTextOf(productId: string): string | null;
    register(storage: LocalStorage): void;
    getCurrentProduct(): Product | undefined;
    registerCurrentProduct(product: Product): void;
    clear(): void;
    generateResourceId(): number;
    createProductByJsonOf(jsonText: string): Product;
    createLocalStorageByJsonOf(jsonText: string): LocalStorage | null; 
}