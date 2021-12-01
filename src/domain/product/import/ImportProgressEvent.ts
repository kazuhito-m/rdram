export default class ImportProgressEvent {
    constructor(
        public readonly percentage: number,
        public readonly message: string
    ) {}
}