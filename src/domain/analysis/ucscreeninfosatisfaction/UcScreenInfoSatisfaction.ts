import Diagrams from "~/domain/diagram/Diagrams";
import Resource from "~/domain/resource/Resource";
import RelatedResource from "./RelatedResource";

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
}
