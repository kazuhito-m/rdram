import TangoRdraExportFileName from "./TangoRdraExportFileName";

export default class TangoRdraExportFile {
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
}
