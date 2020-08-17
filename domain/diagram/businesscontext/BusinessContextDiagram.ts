import Diagram from "@/domain/diagram/Diagram";
import Placement from "@/domain/diagram/placement/Placement";

export default interface BusinessContextDiagram extends Diagram {
    placements: Placement[];
    availableResourceTypeIds: number[];
}