import ResourceType from "./ResourceType";
import HasContentResource from "./HasContentResource";

/**
 * 「要求」リソース。
 */
export default class Request extends HasContentResource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        content: string,
    ) { super(resourceId, ResourceType.要求.id, name, description, content); }
}