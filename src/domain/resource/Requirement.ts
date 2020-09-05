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

    public withName(name: string): Requirement {
        return new Requirement(
            this.resourceId,
            name,
            this.description,
            this.content,
        );
    }

    public withContent(content: string): Requirement {
        return new Requirement(
            this.resourceId,
            this.name,
            this.description,
            content,
        );
    }
}