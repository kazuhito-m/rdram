import StrageRepository from "@/domain/strage/StrageRepository";

export default class TangoRdraFileService {
    constructor(
        private readonly strageRepository: StrageRepository,
    ) { }

    public exportOf(): string {
        // TODO 本実装。
        return "key: 1";
    }
}