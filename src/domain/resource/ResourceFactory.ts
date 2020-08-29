import ResourceType from "./ResourceType";
import Resource from "./Resource";

export default class ResourceFactory {
    public create(name: string, resourceType: ResourceType, newResourceId: number): Resource {
        return new Resource(newResourceId, resourceType.id, name, "");
    }

}