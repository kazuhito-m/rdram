import DownloadFile from "~/domain/client/DownloadFile";
import TangoRdraExportFileName from "./TangoRdraExportFileName";

export default class TangoRdraExportFile implements DownloadFile {
    constructor(
        public readonly yaml: string,
        public readonly name: TangoRdraExportFileName
    ) { }

    public isEmpty(): boolean {
        return this.yaml === "";
    }

    public static empty(): TangoRdraExportFile {
        return new TangoRdraExportFile("", new TangoRdraExportFileName(""));
    }

    public get clientFileName(): TangoRdraExportFileName {
        return this.name;
    }

    public get contentType(): string {
        return "application/x-yaml";
    }

    public get contents(): string {
        return this.yaml;
    }
}
