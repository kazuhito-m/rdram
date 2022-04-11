import { Usecase } from "../structure/TangoRdra";
import Product from "~/domain/product/Product";
import DiagramType from "~/domain/diagram/DiagramType";
import Diagram from "~/domain/diagram/Diagram";
import ResourceType from "~/domain/resource/ResourceType";
import Resources from "~/domain/resource/Resources";
import Resource from "~/domain/resource/Resource";

export default class UsecasesPartMaker {
    public make(product: Product): Usecase[] {
        const usecases = product.resources
            .typeOf(ResourceType.ユースケース);
        const maybeRelatedResources = product.resources
            .typesOf(ResourceType.タイマー
                , ResourceType.画面
                , ResourceType.情報
                , ResourceType.条件, ResourceType.表形式の条件
                , ResourceType.イベント
            );

        return usecases
            .map(usecase => this.makeUsecase(usecase, maybeRelatedResources, product));
    }

    private makeUsecase(usecase: Resource, maybeRelatedResources: Resources, product: Product): Usecase {
        const result = {
            name: usecase.name           
        } as Usecase;

        // TODO Usecase一つ作る実装。

        return result;
    }
}