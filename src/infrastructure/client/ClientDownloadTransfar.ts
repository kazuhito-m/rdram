import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import DownloadFile from "@/domain/client/DownloadFile";

export default class ClientDownloadTransfar implements ClientDownloadRepository {
    public register(file: DownloadFile): boolean {
        let blob = new Blob([file.contents], { type: file.contentType});
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = file.clientFileName;
        link.click();
        return true;
    }
}