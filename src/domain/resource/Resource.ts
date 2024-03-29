import ResourceType from "./ResourceType";

export default class Resource {
    constructor(
        public readonly resourceId: number,
        private readonly resourceTypeId: number,
        public readonly name: string,
        public readonly description: string,
    ) { }

    public static readonly YET_NUMBERING_ID = 0;
    public static readonly NAME_MAX_LENGTH = 128;
    public static readonly DESCRIPTION_MAX_LENGTH = 512;

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

    public isNotRegister(): boolean {
        return this.resourceId <= 0;
    }

    public isEmpty(): boolean {
        return this.name.length === 0
            && this.description.length === 0;
    }

    public static empty(): Resource {
        return new Resource(0, ResourceType.アクター.id, "", "");
    }

    protected clone(): Resource {
        return new Resource(
            this.resourceId,
            this.resourceTypeId,
            this.name,
            this.description,
        );
    }
}
