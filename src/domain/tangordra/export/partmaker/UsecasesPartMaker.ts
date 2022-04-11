import { Usecase } from "../structure/TangoRdra";
import Product from "~/domain/product/Product";
import DiagramType from "~/domain/diagram/DiagramType";
import Diagram from "~/domain/diagram/Diagram";

export default class UsecasesPartMaker {
    public make(product: Product): Usecase[] {
        return product.diagrams
            .typeOf(DiagramType.ユースケース複合図)
            .map(diagram => this.makeUsecase(diagram, product));
    }

    private makeUsecase(diagram: Diagram, product: Product): Usecase {
        const result = {
            name: diagram.name
        } as Usecase;

        // TODO パーツ実装

        return result;
    }
}