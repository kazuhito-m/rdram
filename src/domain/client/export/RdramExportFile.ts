import DownloadFile from "~/domain/client/DownloadFile";
import RdramExportFileName from "./RdramExportFileName";

export default class RdramExportFile implements DownloadFile {
    constructor(
        public readonly json: string,
        public readonly clientFileName: RdramExportFileName
    ) { }

    public get contentType(): string {
        return "text/json";
    }

    public get contents(): string {
        return this.json;
    }
}
