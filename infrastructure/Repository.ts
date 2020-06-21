import LocalStrage from "@/domain/strage/LocalStrage";

export default class Repository {
    private static readonly STRAGE_ID = 'rdram-strage';

    public isInitialized(): boolean {
        this.clear();
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
        localStorage.setItem(Repository.STRAGE_ID, JSON.stringify(strage));
    }

    public clear() {
        localStorage.removeItem(Repository.STRAGE_ID);
    }
}