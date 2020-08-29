import ResourceType from "./ResourceType";

export default class Resource {
    public static readonly NAME_MAX_LENGTH = 128;

    constructor(
        public readonly resourceId: number,
        private readonly resourceTypeId: number,
        public readonly name: string,
        private readonly description: string,
    ) { }

    public get type(): ResourceType {
        return ResourceType.ofId(this.resourceTypeId) as ResourceType;
    }

}