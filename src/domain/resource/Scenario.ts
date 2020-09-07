import ResourceType from "./ResourceType";
import HasContentResource from "./HasContentResource";

/**
 * 「シナリオ」リソース。
 */
export default class Scenario extends HasContentResource {
    constructor(
        resourceId: number,
        name: string,
        description: string,
        content: string,
    ) { super(resourceId, ResourceType.要求.id, name, description, content); }

    public withName(name: string): Scenario {
        return new Scenario(
            this.resourceId,
            name,
            this.description,
            this.content,
        );
    }

    public withContent(content: string): Scenario {
        return new Scenario(
            this.resourceId,
            this.name,
            this.description,
            content,
        );
    }
}