import UcScreenInfoSatisfaction from "./UcScreenInfoSatisfaction";

/**
 * 「UCと画面/情報の充足」分析表を表すクラス。
 */
export default class UcScreenInfoSatisfactions {
    constructor(private readonly values: UcScreenInfoSatisfaction[]) { }

    public find(
        onlyNotRelatedScreen = false,
        onlyNotRelatedInfomation = false,
        onlyNotUsedInDiagram = false
    ): UcScreenInfoSatisfaction[] {
        return this.values
            .filter(s => !onlyNotRelatedScreen || s.isNotRelatedScreen())
            .filter(s => !onlyNotRelatedInfomation || s.isNotRelatedInfomation())
            .filter(s => !onlyNotUsedInDiagram || s.isNotUsedInDiagram())
    }
}
