import moment from "moment/moment";
import DownloadFileName from "./DownloadFileName";

export default class WithTimestampFileName implements DownloadFileName {
    constructor(
        private readonly name: string,
        private readonly extension: string,
    ) { }

    public toString(): string {
        const namePart = this.name.replace(" ", "-").replace("　", "＿");
        const ymdhms = moment().format("YYYYMMDDHHmmss");
        return `${namePart}-${ymdhms}.${this.extension}`;
    }
}
