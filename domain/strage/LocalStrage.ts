import Status from "./Status";
import Product from "@/domain/product/Product";

export default interface LocalStrage {
    status: Status;
    products: Product[];
}