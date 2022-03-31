import DownloadFile from "./DownloadFile";
import DownloadFileName from "./DownloadFileName";

export default class DownloadCustomFile implements DownloadFile {
    constructor(
        public readonly clientFileName: DownloadFileName,
        public readonly contentType: string,
        public readonly contents: string,
    ) { }
}