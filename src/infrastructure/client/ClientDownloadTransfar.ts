import ClientDownloadRepository from "@/domain/client/ClientDownloadRepository";
import DownloadFile from "@/domain/client/DownloadFile";

export default class ClientDownloadTransfar implements ClientDownloadRepository {
    public register(file: DownloadFile): boolean {
        const blob = new Blob([file.contents], { type: file.contentType });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = file.clientFileName;
        link.click();
        return true;
    }

    public registerBase64PngImage(encoded64PngText: string, clientFileName: string): boolean {
        const link = document.createElement("a"); 
        link.href = encoded64PngText;
        link.download = clientFileName;
        link.click();
        return true;
    }
}