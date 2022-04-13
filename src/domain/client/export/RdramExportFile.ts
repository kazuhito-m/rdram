import RdramExportFileName from "./RdramExportFileName";
import DownloadFile from "@/domain/client/DownloadFile";

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
