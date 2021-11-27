import DownloadFile from "./DownloadFile";
import DownloadFileName from "./DownloadFileName";

export default interface ClientDownloadRepository {
    register(file: DownloadFile): boolean;
    registerBase64PngImage(encoded64PngText: string, clientFileName: DownloadFileName): boolean;
}