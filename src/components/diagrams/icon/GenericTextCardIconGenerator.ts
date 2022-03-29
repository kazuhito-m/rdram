import draw2d, { Figure } from 'draw2d';
import TopLeftLocator from '@/draw2d/custom/TopLeftLocator';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Purpose from '@/domain/resource/Purpose';
import Placement from '@/domain/diagram/placement/Placement';

export default abstract class GenericTextCardIconGenerator implements IconGenerator<Resource> {
    public abstract resourceType(): ResourceType;

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);
        const purpose = resource as Purpose;

        const text = new draw2d.shape.node.Hub({
            x: placement.x,
            y: placement.y,
            color: "#888888",
            bgColor: "#FFFFFF",
            alpha: 1,
            radius: 17,
            stroke: 2,
            lineStroke: 2,
            resizable: true,
            padding: 0,
            bold: true,
            text: purpose.content,
            id
        });
        text.setWidth(placement.width);
        text.setHeight(placement.height);

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 30,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
            alpha: 1
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            stroke: 0,
            padding: 0,
            resizable: false,
            selectable: false
        });

        icon.add(name, new draw2d.layout.locator.XYRelPortLocator({ x: 105, y: 27 }));
        text.add(icon, new TopLeftLocator());

        text.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = text.getPorts().last();
        const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(text);
        port.setConnectionAnchor(anchor);

        text.setUserData(new IconStatus(false));

        return text;
    }
}