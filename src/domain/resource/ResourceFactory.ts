import ResourceType from "./ResourceType";
import Resource from "./Resource";
import HasContentResource from "./HasContentResource";
import Resources from "./Resources";
import Purpose from "./Purpose";
import Requirement from "./Requirement";
import Request from "./Request";
import Scenario from "./Scenario";
import StartOrEndPoint from "./StartOrEndPoint";
import Variation from "./Variation";
import Condition from "./Condition";
import TableTypeCondition from "./TableTypeCondition";

export default class ResourceFactory {
    public create(name: string, resourceType: ResourceType, newResourceId: number, nowResouces: Resources): Resource {
        const resource = this.createEmptyResoruce(name, resourceType, newResourceId);
        if (resource instanceof HasContentResource)
            return this.setDefaultName(resource, nowResouces);
        if (ResourceType.始点終点.equals(resourceType))
            return this.setDefaultNameForEndPoint(resource as StartOrEndPoint, nowResouces);
        return resource;
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
        if (ResourceType.バリエーション.equals(resourceType))
            return new Variation(newResourceId, name, "", ["", ""]);
        if (ResourceType.条件.equals(resourceType))
            return new Condition(newResourceId, "", "", "");
        if (ResourceType.表形式の条件.equals(resourceType)) {
            return new TableTypeCondition(
                newResourceId, "", "",
                TableTypeCondition.NOTHING_VARIATION_ID,
                TableTypeCondition.NOTHING_VARIATION_ID,
                [["", "上バリエ1", "上バリエ2"], ["左バリエ1", "", ""], ["左バリエ2", "", ""]]
            );
        }

        return new Resource(newResourceId, resourceType.id, name, "");
    }

    private setDefaultName(resource: HasContentResource, nowResouces: Resources): HasContentResource {
        let r = resource;
        if (r.name.length > 0) return r;
        let i = 1;
        do { r = r.renewDefaultName(i++); }
        while (nowResouces.existsSomeName(r.name, r.type))
        return r;
    }

    private setDefaultNameForEndPoint(resource: StartOrEndPoint, nowResouces: Resources): StartOrEndPoint {
        let r = resource;
        if (r.name.length > 0) return r;
        let i = 2;
        do { r = r.renewDefaultName(i++); }
        while (nowResouces.existsSomeName(r.name, r.type))
        return r;
    }
}