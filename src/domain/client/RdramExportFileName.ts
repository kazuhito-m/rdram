import moment from "moment/moment";
import DownloadFileName from "./DownloadFileName";

export default class RdramExportFileName implements DownloadFileName {
    constructor(public readonly name: string) { }

    public toString(): string {
        const ymdhms = moment().format("YYYYMMDDHHmmss");
        return `rdram_${this.name}_${ymdhms}.json`;
    }

    public contentType(): string {
        return "text/json";
    }
}
