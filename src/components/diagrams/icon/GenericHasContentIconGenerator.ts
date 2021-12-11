import draw2d from 'draw2d';
import TopLeftLocator from '@/draw2d/custom/TopLeftLocator';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import HasContentResource from '@/domain/resource/HasContentResource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default abstract class GenericHasContentIconGenerator implements IconGenerator<HasContentResource> {
    public abstract resourceType(): ResourceType;

    generate(placement: Placement, resource: HasContentResource, iconChar: IconFontAndChar): draw2d.Figure {
        const id = String(placement.resourceId);

        const text = new draw2d.shape.basic.Text({
            x: placement.x,
            y: placement.y,
            bgColor: "#FFFFFF",
            color: "#888888",
            alpha: 1,
            radius: 3,
            stroke: 2,
            resizable: true,
            padding: 5,
            bold: true,
            text: resource.content,
            id
        });
        text.setWidth(placement.width);

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
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(text);
        port.setConnectionAnchor(anchor);

        text.setUserData(new IconStatus(false));

        return text;
    }
}