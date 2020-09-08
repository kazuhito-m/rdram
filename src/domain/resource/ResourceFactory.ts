import ResourceType from "./ResourceType";
import Resource from "./Resource";
import HasContentResource from "./HasContentResource";
import Resources from "./Resources";
import Purpose from "./Purpose";
import Requirement from "./Requirement";
import Request from "./Request";
import Scenario from "./Scenario";
import StartOrEndPoint from "./StartOrEndPoint";

export default class ResourceFactory {
    public create(name: string, resourceType: ResourceType, newResourceId: number, nowResouces: Resources): Resource {
        let resource = this.createEmptyResoruce(name, resourceType, newResourceId);
        if (resource instanceof HasContentResource)
            resource = this.setDefaultName(resource, nowResouces);
        if (ResourceType.始点終点.equals(resourceType))
            resource = this.setDefaultNameForEndPoint(resource as StartOrEndPoint, nowResouces);

        return new Resource(newResourceId, resourceType.id, name, "");
    }

    private createEmptyResoruce(name: string, resourceType: ResourceType, newResourceId: number): Resource {
        if (ResourceType.目的.equals(resourceType))
            return new Purpose(newResourceId, name, "", "");
        if (ResourceType.要求.equals(resourceType))
            return new Request(newResourceId, name, "", "");
        if (ResourceType.要件.equals(resourceType))
            return new Requirement(newResourceId, name, "", "");
        if (ResourceType.シナリオ.equals(resourceType))
            return new Scenario(newResourceId, name, "", "");
        if (ResourceType.始点終点.equals(resourceType))
            return new StartOrEndPoint(newResourceId, name, "", true);

        return new Resource(newResourceId, resourceType.id, name, "");
    }

    private setDefaultName(resource: HasContentResource, nowResouces: Resources): HasContentResource {
        if (resource.name.length > 0) return resource;
        let i = 1;
        do { resource = resource.renewDefaultName(i++); }
        while (nowResouces.existsSomeName(resource.name, resource.type))
        return resource;
    }

    private setDefaultNameForEndPoint(resource: StartOrEndPoint, nowResouces: Resources): StartOrEndPoint {
        if (resource.name.length > 0) return resource;
        let i = 2;
        do { resource = resource.renewDefaultName(i++); }
        while (nowResouces.existsSomeName(resource.name, resource.type))
        return resource;
    }
}