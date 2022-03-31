import WithTimestampFileName from "../WithTimestampFileName";

export default class RdramExportFileName extends WithTimestampFileName {
    constructor(name: string) {
        super(`rdram-${name}`, "json");
    }
}
