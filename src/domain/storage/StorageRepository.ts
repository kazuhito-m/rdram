import LocalStorage from "@/domain/storage/LocalStorage";
import Product from "@/domain/product/Product";
import ImportedProduct from "@/domain/product/import/ImportedProduct";
import ImportedLocalStorage from "@/domain/storage/import/ImportedLocalStorage";
import ExportedDiagram from "../diagram/export/ExportedDiagram";

export default interface StorageRepository {
    isInitialized(): boolean;
    initialize(): void;
    destroy(): void;
    getJsonText(): string | null;
    get(): LocalStorage | null;
    getProductJsonTextOf(productId: string): string | null;
    getDiagramJsonTextOf(exportedDiagram: ExportedDiagram): string;
    register(storage: LocalStorage): void;
    getCurrentProduct(): Product | undefined;
    registerCurrentProduct(product: Product): void;
    clear(): void;
    generateResourceId(): number;
    createProductByJsonOf(jsonText: string): ImportedProduct;
    createLocalStorageByJsonOf(jsonText: string): ImportedLocalStorage; 
}