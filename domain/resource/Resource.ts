import { deserialize } from "class-transformer";

export default class Resource {
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
    private readonly resourceId: number;
    private readonly resourceTypeId: number;
    private readonly name: string;
    private readonly description: string;
}