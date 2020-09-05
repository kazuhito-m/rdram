import ResourceType from "./ResourceType";
import Resource from "./Resource";
import HasContentResource from "./HasContentResource";
import Resources from "./Resources";
import Purpose from "./Purpose";
import Requirement from "./Requirement";
import Request from "./Request";

export default class ResourceFactory {
    public create(name: string, resourceType: ResourceType, newResourceId: number, nowResouces: Resources): Resource {
        let resource = new Resource(newResourceId, resourceType.id, name, "");

        if (ResourceType.目的.equals(resourceType))
            resource = new Purpose(newResourceId, name, "", "");
        if (ResourceType.要求.equals(resourceType))
            resource = new Request(newResourceId, name, "", "");
        if (ResourceType.要件.equals(resourceType))
            resource = new Requirement(newResourceId, name, "", "");

        if (resource instanceof HasContentResource)
            resource = this.setDefaultName(resource, nowResouces);

        return resource;
    }

    private setDefaultName(resource: HasContentResource, nowResouces: Resources): HasContentResource {
        if (resource.name.length > 0) return resource;
        let i = 1;
        do { resource = resource.renewDefaultName(i++); }
        while (nowResouces.existsSomeName(resource.name, resource.type))
        return resource;
    }
}