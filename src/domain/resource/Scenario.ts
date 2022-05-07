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
    ) { super(resourceId, ResourceType.シナリオ.id, name, description, content); }

    protected override clone(): Scenario {
        return new Scenario(
            this.resourceId,
            this.name,
            this.description,
            this.content,
        );
    }
}