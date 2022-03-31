import StrageRepository from "@/domain/strage/StrageRepository";
import TangoRdraExportFile from "@/domain/tangordra/export/TangoRdraExportFile";

export default class TangoRdraFileService {
    constructor(
        private readonly strageRepository: StrageRepository,
    ) { }

    public generateExportFile(): TangoRdraExportFile {
        // TODO 本実装。
        return new TangoRdraExportFile("key: 1", "プロダクト名は仮");
    }
}
