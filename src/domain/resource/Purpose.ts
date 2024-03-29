import ResourceType from "./ResourceType";
import HasContentResource from "./HasContentResource";

/**
 * 「目的」リソース。
 */
export default class Purpose extends HasContentResource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        content: string,
    ) { super(resourceId, ResourceType.目的.id, name, description, content); }

    protected override clone(): Purpose {
        return new Purpose(
            this.resourceId,
            this.name,
            this.description,
            this.content,
        );
    }
}