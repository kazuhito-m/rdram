import draw2d, { Figure } from 'draw2d';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from "@/domain/diagram/placement/Placement";
import { extend } from 'jquery';

export default abstract class GenericSingleIconGenerator extends IconGenerator<Resource> {
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
            padding,
            bgColor: "#FFFFFF",
            resizable: false,
            alpha: 1, // opacityと一緒
            id
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            stroke: 0,
            padding,
            resizable: false,
            selectable: false
        });

        icon.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = icon.getPorts().last();
        const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(icon);
        port.setConnectionAnchor(anchor);

        icon.add(name, new draw2d.layout.locator.BottomLocator());

        icon.setUserData(new IconStatus());

        return icon;
    }
}