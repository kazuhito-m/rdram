import LocalStrage from "./strage/LocalStrage";

export default class Repository {
    private static readonly STRAGE_ID = 'rdram-strage';

    public isInitialized(): boolean {
        this.clearStarge();
        const data = this.get();
        console.log(data);
        if (data) return true;
        return false;
    }

    public initialize(): void {
        const initialData = this.defaultStructure();
        localStorage.setItem(Repository.STRAGE_ID, JSON.stringify(initialData));
    }

    private defaultStructure(): LocalStrage {
        return {
            status: {
                currentReportId: ''
            },
            reports: []
        };
    }

    public get(): LocalStrage | undefined {
        const textData = localStorage.getItem(Repository.STRAGE_ID);
        if (!textData) return undefined;
        return JSON.parse(textData);
    }

    public clearStarge() {
        localStorage.removeItem(Repository.STRAGE_ID);
    }
}