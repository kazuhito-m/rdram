import DownloadFile from "./DownloadFile";

export default interface ClientDownloadRepository {
    register(file: DownloadFile): boolean;
}