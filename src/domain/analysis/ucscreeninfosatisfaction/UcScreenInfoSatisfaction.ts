import RelatedResource from "./RelatedResource";
import Diagrams from "~/domain/diagram/Diagrams";
import Resource from "~/domain/resource/Resource";

/**
 * 「UCと画面/情報の充足」分析表の一行を表すクラス。
 */
export default class UcScreenInfoSatisfaction {
    constructor(
        public readonly usecase: Resource,
        public readonly usedInDiagrams: Diagrams,
        public readonly relatedScreens: RelatedResource[],
        public readonly relatedInfomations: RelatedResource[],
    ) { }

    public isNotRelatedScreen(): boolean {
        return this.relatedScreens.length === 0;
    }

    public isNotRelatedInfomation(): boolean {
        return this.relatedInfomations.length === 0;
    }

    public isNotUsedInDiagrams(): boolean {
        return this.usedInDiagrams.length === 0;
    }
}
