export default class DownloadFile {
    constructor(
        public readonly clientFileName: string,
        public readonly contentType: string,
        public readonly contents: string,
    ) { }
}