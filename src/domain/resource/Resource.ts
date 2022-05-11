import ResourceType from "./ResourceType";

export default class Resource {
    public static readonly YET_NUMBERING_ID = 0;
    public static readonly NAME_MAX_LENGTH = 128;
    public static DESCRIPTION_MAX_LENGTH = 512;

    constructor(
        public readonly resourceId: number,
        private readonly resourceTypeId: number,
        public readonly name: string,
        public readonly description: string,
    ) { }

    public readonly deletable: boolean = true;

    public sameOf(other: Resource) {
        return this.type.equals(other.type)
            && this.name === other.name;
    }

    public with(name: string, description: string): Resource {
        const clone = this.clone() as any;
        clone.name = name;
        clone.description = description;
        return clone;
    }

    public withName(name: string): Resource {
        const clone = this.clone() as any;
        clone.name = name;
        return clone;
    }

    public renewId(newResourceId: number): Resource {
        const clone = this.clone() as any;
        clone.resourceId = newResourceId;
        return clone;
    }

    public get type(): ResourceType {
        return ResourceType.ofId(this.resourceTypeId) as ResourceType;
    }

    protected clone(): Resource {
        // const serializer = new Serializer();
        // return serializer.cloningOf(this);
        return new Resource(
            this.resourceId,
            this.resourceTypeId,
            this.name,
            this.description,
        );
    }
}
