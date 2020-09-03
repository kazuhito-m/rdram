import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import Resource from '~/domain/resource/Resource';
import IconGenerator from './IconGenerator';
import ResourceType from '~/domain/resource/ResourceType';
import IconFontAndChar from './IconFontAndChar';

export default abstract class GenericSingleIconGenerator implements IconGenerator {
    public abstract resourceType(): ResourceType;

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const padding = 0;
        const id = String(placement.resourceId);

        const icon = new draw2d.shape.basic.Label({
            x: placement.x,
            y: placement.y,
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 40,
            stroke: 0,
            padding: padding,
            bgColor: "#FFFFFF",
            resizable: false,
            alpha: 1, // opacityと一緒
            id: id,
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            stroke: 0,
            padding: padding,
            resizable: false,
            selectable: false
        });

        icon.createPort(
            "hybrid",
            new draw2d.layout.locator.CenterLocator()
        );
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = icon.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(icon);
        port.setConnectionAnchor(anchor);

        icon.add(name, new draw2d.layout.locator.BottomLocator());
        return icon;
    }
}