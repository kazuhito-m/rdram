import DownloadFileName from "./DownloadFileName";

export default interface DownloadFile {
    get clientFileName(): DownloadFileName;
    get contentType(): string;
    get contents(): string;
}