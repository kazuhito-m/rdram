import { deserialize } from "class-transformer";
import ResourceType from "./ResourceType";

export default class Resource {
    public readonly resourceId: number;
    private readonly resourceTypeId: number;
    public readonly name: string;
    private readonly description: string;

    constructor(
        resourceId: number,
        resourceTypeId: number,
        name: string,
        description: string,
    ) {
        this.resourceId = resourceId;
        this.resourceTypeId = resourceTypeId;
        this.name = name;
        this.description = description;
    }

    public type() : ResourceType {
        return ResourceType.ofId(this.resourceTypeId) as ResourceType;
    }

}