import DownloadFileName from "./DownloadFileName";

export default class DownloadFile {
    constructor(
        public readonly clientFileName: DownloadFileName,
        public readonly contentType: string,
        public readonly contents: string,
    ) { }
}