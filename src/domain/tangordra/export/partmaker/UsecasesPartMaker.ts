import { Usecase } from "../structure/TangoRdra";
import Product from "~/domain/product/Product";
import DiagramType from "~/domain/diagram/DiagramType";
import Diagram from "~/domain/diagram/Diagram";
import ResourceType from "~/domain/resource/ResourceType";
import Resources from "~/domain/resource/Resources";

export default class UsecasesPartMaker {
    public make(product: Product): Usecase[] {
       return [];
    }
}