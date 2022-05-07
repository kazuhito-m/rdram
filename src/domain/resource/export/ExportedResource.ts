import Resource from "../Resource";

export default class ExportedResource {
    public constructor(
        public readonly resource: Resource
    ) { }

    public checkOfLogicalStructure(): boolean {
        // TODO ちゃんとしたチェックを実装。
        return true;
    }
}