import DownloadFile from "@/domain/client/DownloadFile";
import TangoRdraExportFileName from "./TangoRdraExportFileName";

export default class TangoRdraExportFile implements DownloadFile {
    constructor(
        public readonly yaml: string,
        public readonly productName: string,
    ) { }

    public isEmpty(): boolean {
        return this.yaml === "";
    }

    public static empty(): TangoRdraExportFile {
        return new TangoRdraExportFile("", "");
    }

    public get clientFileName(): TangoRdraExportFileName {
        return new TangoRdraExportFileName(this.productName);
    }

    public get contentType(): string {
        return "application/x-yaml";
    }

    public get contents(): string {
        return this.yaml;
    }
}
