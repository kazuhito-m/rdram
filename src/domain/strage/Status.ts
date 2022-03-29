export default class Status {
    constructor(public readonly currentProductId: string) { }

    public static prototypeOf(): Status {
        return new Status("");
    }
}