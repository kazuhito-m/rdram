import Diagram from "@/domain/diagram/Diagram";
import Relation from "~/domain/relation/Relation";
import Resource from "~/domain/resource/Resource";
import ResourceType from "~/domain/resource/ResourceType";
import Placement from "../placement/Placement";

export default class Rdra20Diagram extends Diagram {
    public availableResourceTypes(): ResourceType[] {
        throw new Error("Method not implemented.");
    }
    protected renew(id: number, typeId: number, name: string, relations: Relation[], placements: Placement[], width: number, height: number, canvasGuideTypeId: number): Diagram {
        throw new Error("Method not implemented.");
    }
    public createPlacement(resource: Resource, left: number, top: number): Placement | null {
        throw new Error("Method not implemented.");
    }
}
