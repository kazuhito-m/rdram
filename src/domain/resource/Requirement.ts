import ResourceType from "./ResourceType";
import HasContentResource from "./HasContentResource";

/**
 * 「要件」リソース。
 */
export default class Requirement extends HasContentResource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        content: string,
    ) { super(resourceId, ResourceType.要件.id, name, description, content); }
}