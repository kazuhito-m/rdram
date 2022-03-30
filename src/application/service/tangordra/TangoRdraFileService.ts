import StrageRepository from "@/domain/strage/StrageRepository";

export default class TangoRdraFileService {
    constructor(
        private readonly strageRepository: StrageRepository,
    ) { }

    public exportOf(): boolean {
        alert('test');
        return true;
    }
}