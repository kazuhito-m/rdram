import Resource from "../Resource";

export default class ExportedResource {
    public constructor(
        public readonly resource: Resource
    ) { }

    public checkOfLogicalStructure(): boolean {
        try {
            if (!this.validate()) return false;

            // TODO リソース種ごとの処理

            return true;
        } catch (e) {
            return false;
        }
    }

    private validate(): boolean {
        const r = this.resource;
        return r.resourceId > 0
            && r.type.name.length > 0
            && r.name.length > 0
            && r.description.length >= 0
    }

    public resourceId(): number {
        return this.resource.resourceId;
    }
}