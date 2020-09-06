import DownloadFile from "./DownloadFile";

export default interface ClientDownloadRepository {
    register(file: DownloadFile): boolean;
    registerBase64PngImage(encoded64PngText: string, clientFileName: string): boolean;
}