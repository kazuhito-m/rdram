import moment from "moment/moment";
import DownloadFileName from "./DownloadFileName";

export default class RdramDownloadFileName implements DownloadFileName {
    constructor(
        private readonly name: string,
        private readonly extension: string,
    ) { }

    public toString(): string {
        const namePart = this.name.replace(" ", "-").replace("　", "＿");
        const ymdhms = moment().format("YYYYMMDDHHmmss");
        return `rdram-${namePart}-${ymdhms}.${this.extension}`;
    }
}
