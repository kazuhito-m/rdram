import ResourceType from "./ResourceType";
import Resource from "./Resource";
import Purpose from "./Purpose";
import Resources from "./Resources";

export default class ResourceFactory {
    public create(name: string, resourceType: ResourceType, newResourceId: number, nowResouces: Resources): Resource {
        if (ResourceType.目的.equals(resourceType)) {
            const defaultName = this.makePurposeDefaultName(name, nowResouces);
            return new Purpose(newResourceId, defaultName, "", "");
        }
        return new Resource(newResourceId, resourceType.id, name, "");
    }

    private makePurposeDefaultName(baseName: string, nowResouces: Resources): string {
        if (baseName.length > 0) return baseName;
        let name;
        let i = 1;
        do { name = Purpose.makeDefaultName(i++); } while (nowResouces.existsSomeName(name, ResourceType.目的))
        return name;
    }
}