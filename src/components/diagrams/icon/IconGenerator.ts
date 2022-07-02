import draw2d, { Figure } from "draw2d";
import IconFontAndChar from "@/components/diagrams/icon/IconFontAndChar";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Placement from "@/domain/diagram/placement/Placement";

export default abstract class IconGenerator<T extends Resource> {
    public abstract resourceType(): ResourceType;

    public abstract generate(placement: Placement, resource: T, iconChar: IconFontAndChar): Figure;

    protected makeDoubleVectorPorts(icon: any): void {
        icon.createPort("input", new draw2d.layout.locator.TopLocator());
        icon.createPort("output", new draw2d.layout.locator.BottomLocator());

        const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(icon);
        const port = icon.getOutputPorts().last() as any;
        port.setConnectionAnchor(anchor);
    }

    protected makeSingleHybridPort(icon: any): void {
        icon.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = icon.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(icon);
        port.setConnectionAnchor(anchor);
    }
}
